import getopt
import os
import os.path
import sys

from src.constants import (
    DB_FOLDER,
    DATABASE_PATH
)
from src.db_init.db_init import main as db_init

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
            print_help()
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
    
    if not os.path.exists(DATABASE_PATH):
        with open(DATABASE_PATH, "r", encoding = "utf-8"):
            pass

def clear_tmp_after_initialization():
    pass

def setup(init_db):
    create_folders()
    if init_db:
        db_init()

if __name__ == "__main__":
    init_db = parse_arguments(sys.argv)
    setup(init_db)

# python -m setup
