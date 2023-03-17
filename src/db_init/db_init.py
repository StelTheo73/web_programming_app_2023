import json
import os
import os.path
import sqlite3

from src.constants import (
    DATABASE_PATH
)
from src.db_init.constants import (
    PERSONS_FILE_PATH,
    CUSTOMERS_ADDRESSES_FILE_PATH,
    SHOPS_FILE_PATH,
    SHOP_ADDRESSES_FILE_PATH,
    HAS_CATEGORY_FILE_PATH,
    CONTAINS_FILE_PATH,
    ITEMS_FILE_PATH,
    OPERATING_HOURS_FILE_PATH,
    ORDERS_FILE_PATH,
    CATEGORIES_FILE_PATH,
    CARDS_FILE_PATH
)
from src.db_init.create_random_data import create_random_data

PWD = os.getcwd()
DATABASE_FULL_PATH = os.path.join(PWD, DATABASE_PATH)
DATABASE_INIT_FILE = os.path.join(PWD, "src", "db_init", "db_init.sql")

PERSONS_FILE_FULL_PATH = os.path.join(PWD, PERSONS_FILE_PATH)
CUSTOMERS_ADDRESSES_FILE_FULL_PATH = os.path.join(PWD, CUSTOMERS_ADDRESSES_FILE_PATH)
SHOPS_FILE_FULL_PATH = os.path.join(PWD, SHOPS_FILE_PATH)
SHOP_ADDRESSES_FILE_FULL_PATH = os.path.join(PWD, SHOP_ADDRESSES_FILE_PATH)
HAS_CATEGORY_FILE_FULL_PATH = os.path.join(PWD, HAS_CATEGORY_FILE_PATH)
CONTAINS_FILE_FULL_PATH = os.path.join(PWD, CONTAINS_FILE_PATH)
ITEMS_FILE_FULL_PATH = os.path.join(PWD, ITEMS_FILE_PATH)
OPERATING_HOURS_FILE_FULL_PATH = os.path.join(PWD, OPERATING_HOURS_FILE_PATH)
ORDERS_FILE_FULL_PATH = os.path.join(PWD, ORDERS_FILE_PATH)
CATEGORIES_FILE_FULL_PATH = os.path.join(PWD, CATEGORIES_FILE_PATH)
CARDS_FILE_FULL_PATH = os.path.join(PWD, CARDS_FILE_PATH)

def insert_data():
    insert_persons()
    insert_persons_addresses()
    insert_cards()
    insert_shops()
    insert_shop_addresses()
    insert_categories()
    insert_orders()
    insert_has_category()
    insert_items()
    insert_contains()
    insert_operating_hours()

def insert_persons():    
    with open(PERSONS_FILE_FULL_PATH, "r", encoding="utf-8") as stream:
        persons = json.load(stream)
    db = sqlite3.connect(DATABASE_FULL_PATH)

    for person in persons:
        db.execute("INSERT INTO Person VALUES (?, ?, ?, ?, ?, ?)",[
            person["email"], person["firstname"], person["lastname"],
            person["phone"], person["birthdate"], person["password"]
        ])

    db.commit()
    db.close()

def insert_persons_addresses():
    with open(CUSTOMERS_ADDRESSES_FILE_FULL_PATH, "r", encoding="utf-8") as stream:
        addresses = json.load(stream)
    db = sqlite3.connect(DATABASE_FULL_PATH)

    for address in addresses:
        db.execute("INSERT INTO Address VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [
            None, address["email"], address["city"], address["street"],
            address["number"], address["postcode"], address["country"], address["floor"],
            address["name_on_bell"], address["note"]
        ])

    db.commit()
    db.close()

def insert_cards():
    with open(CARDS_FILE_FULL_PATH, "r", encoding="utf-8") as stream:
        cards = json.load(stream)
    db = sqlite3.connect(DATABASE_FULL_PATH)

    for card in cards:
        db.execute("INSERT INTO Card VALUES (?, ?, ?, ?, ?)", [
            card["email"], card["card_number"], card["cvv"],
            card["expiration_date"], card["cardholder"]
        ])

    db.commit()
    db.close()

def insert_shops():
    with open(SHOPS_FILE_FULL_PATH, "r", encoding="utf-8") as stream:
        shops = json.load(stream)
    db = sqlite3.connect(DATABASE_FULL_PATH)

    for shop in shops:
        db.execute("INSERT INTO Shop VALUES (?, ?, ?, ?, ?)", [
            shop["shop_id"], shop["name"], shop["email"],
            shop["phone"], shop["type"]
        ])

    db.commit()
    db.close()

def insert_shop_addresses():
    with open(SHOP_ADDRESSES_FILE_FULL_PATH, "r", encoding="utf-8") as stream:
        addresses = json.load(stream)
    db = sqlite3.connect(DATABASE_FULL_PATH)

    for address in addresses:
        db.execute("INSERT INTO Shop_Address VALUES (?, ?, ?, ?, ?, ?)", [
            address["shop_id"], address["city"], address["street"],
            address["number"], address["postcode"], address["country"]
        ])

    db.commit()
    db.close()

def insert_categories():
    with open(CATEGORIES_FILE_FULL_PATH, "r", encoding="utf-8") as stream:
        categories = json.load(stream)
    db = sqlite3.connect(DATABASE_FULL_PATH)

    for catgegory in categories:
        db.execute("INSERT INTO Category VALUES (?)", [
            catgegory["category_name"]
        ])

    db.commit()
    db.close()

def insert_orders():
    with open(ORDERS_FILE_FULL_PATH, "r", encoding="utf-8") as stream:
        orders = json.load(stream)
    db = sqlite3.connect(DATABASE_FULL_PATH)

    for order in orders:
        db.execute("INSERT INTO Order_ VALUES (?, ?, ?, ?, ?, ?)", [
            order["order_id"], order["email"], order["status"], order["total_price"],
            order["datetime"], order["payment_mean"]
        ])

    db.commit()
    db.close()

def insert_has_category():
    with open(HAS_CATEGORY_FILE_FULL_PATH, "r", encoding="utf-8") as stream:
        has_categories = json.load(stream)
    db = sqlite3.connect(DATABASE_FULL_PATH)

    for has_catgegory in has_categories:
        db.execute("INSERT INTO Has_Category VALUES (?, ?)", [
            has_catgegory["shop_id"], has_catgegory["category_name"]
        ])

    db.commit()
    db.close()

def insert_items():
    with open(ITEMS_FILE_FULL_PATH, "r", encoding="utf-8") as stream:
        items = json.load(stream)
    db = sqlite3.connect(DATABASE_FULL_PATH)

    for item in items:
        db.execute("INSERT INTO Item VALUES (?, ?, ?, ?, ?)", [
            item["item_id"], item["shop_id"], item["name"],
            round(item["price"], 2), item["category_name"]
        ])

    db.commit()
    db.close()

def insert_contains():
    with open(CONTAINS_FILE_FULL_PATH, "r", encoding="utf-8") as stream:
        contains = json.load(stream)
    db = sqlite3.connect(DATABASE_FULL_PATH)

    for contain in contains:
        db.execute("INSERT INTO Contains VALUES (?, ?, ?, ?, ?)", [
            None, contain["order_id"], contain["item_id"],
            contain["quantity"], contain["note"]
        ])

    db.commit()
    db.close()

def insert_operating_hours():
    with open(OPERATING_HOURS_FILE_FULL_PATH, "r", encoding="utf-8") as stream:
        operating_hours = json.load(stream)
    db = sqlite3.connect(DATABASE_FULL_PATH)

    for hour in operating_hours:
        db.execute("INSERT INTO Operating_Hours VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [
            hour["shop_id"], hour["sunday"], hour["monday"], hour["tuesday"],
            hour["wednesday"], hour["thursday"], hour["friday"], hour["saturday"]
        ])

    db.commit()
    db.close()

def initialize_database():
    """Creates the tables of the database."""
    db = sqlite3.connect(DATABASE_FULL_PATH)
    with open(DATABASE_INIT_FILE, "r") as db_init_script:
        db.executescript(db_init_script.read())
    db.commit()
    db.close()

def main():
    create_random_data(200, 20)
    initialize_database()
    insert_data()

if __name__ == "__main__":
    main()
