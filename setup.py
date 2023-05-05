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
    arg_help = "{0} -i <initialize database>, -d <deploy translate API>".format(argv[0])
    print(arg_help)

def parse_arguments(argv):
    """Parses the provided arguments."""
    arg_init_db = False
    arg_deploy_translate_server = False

    try:
        opts, _ = getopt.getopt(argv[1:], "h:i:d:", ["help", "init=", "deploy="])
    except Exception:
        print_help(argv)
        sys.exit(1)

    for opt, arg in opts:
        if opt in ("-h", "--help"):
            print_help(argv)
            sys.exit(0)
        elif opt in ["-i", "--init"]:
            if (not isinstance(arg, str)) or (arg.capitalize() not in ("True", "False", "1", "0")):
                print_help(argv)
                sys.exit(1)
            if arg.capitalize() in ("True", "1"):
                arg_init_db = True
                # default is False
        elif opt in ["-d", "--deploy"]:
            if (not isinstance(arg, str)) or (arg.capitalize() not in ("True", "False", "1", "0")):
                print_help(argv)
                sys.exit(1)
            if arg.capitalize() in ("True", "1"):
                arg_deploy_translate_server = True
                # default is False

    return arg_init_db, arg_deploy_translate_server

def create_folders():
    if not os.path.exists(TMP):
        os.mkdir(TMP)

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

def setup(init_db, deploy_translate_server):
    create_folders()
    if init_db:
        initialize_db(1000, 100)
        clear_tmp_after_db_initialization()
    if deploy_translate_server:
        create_translate_API_server()

if __name__ == "__main__":
    init_db, deploy_translate_server = parse_arguments(sys.argv)
    setup(init_db, deploy_translate_server)

# python -m setup
