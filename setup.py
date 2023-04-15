import getopt
import os
import os.path
import sys
import threading

from src.db_init.db_init_2 import main as initialize_db
from src.constants import (
    DB_FOLDER,
    DATABASE_PATH
)
from src.translateAPI.server import Server as TranslateAPIServer

PWD = os.getcwd()
TMP = os.path.join(PWD, "tmp")
DATABASE_FOLDER = os.path.join(PWD, DB_FOLDER)
DATABASE_FILE = os.path.join(PWD, DATABASE_PATH)

def print_help(argv):
    arg_help = "{0} -i <initialize database>".format(argv[0])
    print(arg_help)

def parse_arguments(argv):
    """Parses the provided arguments."""
    arg_init_db = False

    try:
        opts, _ = getopt.getopt(argv[1:], "h:i:", ["help", "init="])
    except Exception:
        print_help(argv)
        sys.exit(1)

    for opt, arg in opts:
        if opt in ("-h", "--help"):
            print_help(argv)
            sys.exit(0)
        elif opt in ["-i", "--init-db"]:
            if (not isinstance(arg, str)) or (arg.capitalize() not in ("True", "False", "1", "0")):
                print_help(argv)
                sys.exit(1)
            if arg.capitalize() in ("True", "1"):
                arg_init_db = True
                # default is False

    return arg_init_db

def create_folders():
    if not os.path.exists(TMP):
        os.mkdir(TMP)

    if not os.path.exists(DATABASE_FOLDER):
        os.mkdir(DATABASE_FOLDER)

def clear_tmp_after_db_initialization():
    for element in os.listdir(TMP):
        _element = os.path.join(TMP, element)
        if os.path.isfile(_element):
            (_, extension) = os.path.splitext(_element)
            if extension == ".json":
                os.remove(_element)

def create_translate_API_server():
    server = TranslateAPIServer("127.0.0.1", 5000)
    print("Starting translateAPI server...")
    server_thread = threading.Thread(target=server.serve_forever)
    server_thread.start()

    # time.sleep(5)

    # import requests
    # response = requests.get('http://127.0.0.1:5000/shutdown', verify=False, timeout=10)
    # print(response.text)

def setup(init_db):
    create_folders()
    if init_db:
        initialize_db(1000, 100)
        clear_tmp_after_db_initialization()
    
    create_translate_API_server()

if __name__ == "__main__":
    init_db = parse_arguments(sys.argv)
    setup(init_db)

# python -m setup
