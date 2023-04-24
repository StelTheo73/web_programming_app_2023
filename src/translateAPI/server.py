from http.server import ThreadingHTTPServer
from socketserver import ThreadingMixIn
from src.translateAPI.HTTPRequestHandler import HTTPRequestHandler

HOST = "127.0.0.1"
PORT = 5000

class Server(ThreadingHTTPServer, ThreadingMixIn):
    thread_count = 1000

    def __init__(self, host, port):
        server_address = (host, port)
        super(ThreadingMixIn, self).__init__(server_address, HTTPRequestHandler)
