import json
import re

from http.server import BaseHTTPRequestHandler, HTTPServer

from src.constants import (
    METHOD_COMMAND_MAP,
    INTERNAL_SERVER_ERROR,
    NOT_FOUND,
    OK,
)
from src.translateAPI.translate import TranslatorAPI

class HTTPRequestHandler(BaseHTTPRequestHandler):

    def __init__(self, request, client_address, http_server):
        BaseHTTPRequestHandler.__init__(self, request, client_address, http_server)
        self.api_version = None
        self.uri_cmd = None
        self.translator = None

    def do_GET(self):
        """Handle GET request"""
        self.handle_request("GET")

    def do_POST(self):
        """Handle GET request"""
        self.handle_request("POST")

    def handle_request(self, http_method):
        """Recognizes requests and triggers the appropriate actions."""

        try:
            if not self._match_uri():
                error_msg = "Invalid URI used."
                self.respond(NOT_FOUND, error_msg)
                return

            method_name = self.uri_cmd.replace("/", "_").replace("-", "_")


            if http_method == "POST" and method_name == "terminate":
                self.terminate()
                return

            if method_name not in METHOD_COMMAND_MAP.keys():
                error_msg = "Unsupported command used."
                self.respond(NOT_FOUND, error_msg)
                return
            if METHOD_COMMAND_MAP[method_name] != http_method:
                error_msg = "Invalid combination of command and http method used."
                self.respond(NOT_FOUND, error_msg)
                return

            self.translator = TranslatorAPI()
            (http_status, response_data, headers) = getattr(self, method_name)()

            self.respond(http_status, response_data, headers)

        except Exception as exc:
            error_msg = str(exc)
            print(error_msg)
            self.respond(INTERNAL_SERVER_ERROR, "Internal server error!")

    def _match_uri(self):
        match = re.match("/(\\d+\\.\\d+)/translator/(.*)", self.path)
        if not match:
            return False

        self.api_version = match.group(1)
        self.uri_cmd = match.group(2)

        return True

    def respond(self, http_status, msg, headers=None):
        if not isinstance(msg, str):
            msg = json.dumps(msg)

        msg = msg + "\n"

        if headers is None:
            headers = {
                "Content-Type" : "text/html",
                "Content-Length" : len(msg)
            }

        self.send_response(http_status)
        for key in headers:
            self.send_header(key, headers[key])
        self.end_headers()
        self.wfile.write(msg.encode("utf-8"))

    def terminate(self):
        self.respond(OK, "Terminating server...", None)
        self.server.shutdown()

    @staticmethod
    def _terminate(server):
        server.shutdown()

    def translate_text(self):
        content_length = int(self.headers['Content-Length'])
        rawData = (self.rfile.read1(content_length * 8)).decode("utf-8")
        # print(rawData, type(rawData))
        text = json.loads(rawData)["text"]

        translated_text = self.translator.translate_text(text)
        # print(translated_text)

        response_data = {
            "translated_text" : translated_text
        }
        return (OK, response_data, None)

    def translate_split_text(self):
        words_list = []
        (_, data, _) = self.translate_text()

        for word in data["translated_text"].split(" "):
            word = word.lower().replace(".", "").replace(",", "")
            singular_word = self.translator.to_singular(word)

            words_list.append(singular_word if singular_word else word)

        response_data = {
            "translated_words" : words_list
        }
        return (OK, response_data, None)
