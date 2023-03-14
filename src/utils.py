from datetime import datetime
import hashlib
import os
import os.path
from time import time_ns

def get_timestamp():
    """Creates a timestamp."""
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    return str(timestamp)

def create_id_for_dictionary(dictionary):
    _str = ""
    for value in dictionary.values():
        _str += str(value)
    _str += str(time_ns())
    _id = hashlib.md5(_str.encode("ascii", errors="ignore")).hexdigest()
    return _id

def write_text_to_file(text, file_name, mode = "w", encoding = "utf-8"):
    """Writes a text to the specified file.
    If the specified file is EXECUTION_LOG_FILE or ERROR_LOG_FILE,
    a time stamp is added in front of the text.
    Args:
        text(string): The text to be written.
        file_name(string): The name of the file.
        mode(string): The mode in which the file is opened (default is w).
        encoding(string): The encoding of the file (default is utf-8).
    """

    # if (file_name == EXECUTION_LOG_FILE) or (file_name == ERROR_LOG_FILE):
    #     text = add_timestamp_to_text(text)

    path = os.getcwd()
    path_to_file = os.path.join(path, file_name)

    with open(path_to_file, mode, encoding = encoding) as file_stream:
        file_stream.writelines(text)
