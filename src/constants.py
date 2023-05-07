import os.path

# DATABASE
DB_FOLDER = "db"
DB_FILE = "database.db"
DATABASE_PATH = os.path.join(DB_FOLDER, DB_FILE)

# CLIENT_URI = "mongodb://localhost:27017/"
CLIENT_URI = "mongodb+srv://StelTheo73:Z0Pdy4ipKtGN3bZM@webprogrammingapp2023.jlbvfq6.mongodb.net/"
DATABASE_NAME = "El_Food_db"

# ===== HTTP CONSTANTS =====
# METHODS
POST = "POST"
GET = "GET"

# STATUS CODES
OK = 200
NOT_FOUND = 404
INTERNAL_SERVER_ERROR = 500

# ===== METHOD - COMMAND MAP =====
METHOD_COMMAND_MAP = {
    "translate_text" : POST,
    "translate_split_text" : POST,
    "translate_words_list" : POST,
}
