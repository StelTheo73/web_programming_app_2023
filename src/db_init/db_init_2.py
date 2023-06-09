from bson.objectid import ObjectId
import json
import os
import os.path
import pymongo
import random

from src.constants import (
    CLIENT_URI,
    DATABASE_NAME
)
from src.db_init.addresses_generator import (
    generate_address,
    generate_shop_address
)
from src.db_init.cards_generator import (
    generate_card
)
from src.db_init.item_generator import (
    generate_items
)
from src.db_init.orders_generator import (
    make_random_order
)
from src.db_init.persons_generator import (
    generate_persons
)
from src.db_init.shops_generator import (
    generate_shops
)

CWD = os.getcwd()

def create_person_addresses(person):
    addresses_list = []
    if person["firstname"] == "Foobar":
        num_of_addresses = 5
    else:
        num_of_addresses = random.randint(1, 3)

    for _id in range(num_of_addresses):
        address = generate_address(person, _id)
        addresses_list.append(address)

    return addresses_list

def create_person_cards(person):
    cards_list = []
    if person["firstname"] == "Foobar":
        num_of_cards = 5
    else: 
        num_of_cards = random.randint(1, 3)

    for _id in range(num_of_cards):
        card = generate_card(person, _id)
        cards_list.append(card)

    return cards_list

def create_shop_address():
    return generate_shop_address()

def create_items(shop):
    return generate_items(shop)

def create_orders():
    client = pymongo.MongoClient(CLIENT_URI)
    db = client[DATABASE_NAME]
    persons_doc = db["persons"]
    shops_doc = db["shops"]
    orders_doc = db["orders"]

    # objInstance = ObjectId("6421bca8abb97dc94d68cc41")
    # persons_ids = persons_doc.find({"_id" : objInstance}, {"_id" : 1, "firstname" : 1})

    persons = persons_doc.find({}, {"_id" : 1, "cards" : 1, "addresses" : 1, "firstname" : 1})
    shops = shops_doc.find({}, {"_id" : 1, "items" : 1, "address" : 1})
    shops = list(shops)

    for person in persons:
        if person["firstname"] == "Foobar":
            num_of_orders = 15
        else:
            num_of_orders = random.randint(0, 10)

        for _ in range(num_of_orders):
            shop = random.choice(shops)
            address = None

            for address in person["addresses"]:
                if address["city"] == shop["address"]["city"]:
                    break

            if address is not None:
                order = make_random_order(person, address, shop)
                orders_doc.insert_one(order)

    client.close()

def drop_db():
    client = pymongo.MongoClient(CLIENT_URI)

    print("Dropping previous documents...")

    db = client[DATABASE_NAME]
    persons_doc = db["persons"]
    shops_doc = db["shops"]
    orders_doc = db["orders"]

    persons_doc.drop()
    shops_doc.drop()
    orders_doc.drop()

    print("Done")

    client.close()

def map_shops():
    client = pymongo.MongoClient(CLIENT_URI)
    db = client[DATABASE_NAME]
    shops_doc = db["shops"]
    shops_dict = {}
    pointer = 0

    shops_cursor = shops_doc.find({}, {"_id" : 1})
    for shop in shops_cursor:
        shop_id = str(shop["_id"])
        shops_dict[pointer] = shop_id
        shops_dict[shop_id] = pointer
        pointer+=1

def main(persons_number, shops_number):

    drop_db()

    print("Connecting to database...")
    client = pymongo.MongoClient(CLIENT_URI)
    db = client[DATABASE_NAME]
    persons_doc = db["persons"]
    shops_doc = db["shops"]

    print("Generating persons...")
    persons_list = generate_persons(persons_number)
    print("Generating shops...")
    shops_list = generate_shops(shops_number)

    print("Generating additional info for persons...")
    for person in persons_list:
        _person = person
        _person["addresses"] = create_person_addresses(person)
        _person["cards"] = create_person_cards(person)

        persons_doc.insert_one(_person)

    print("Generating shops items...")
    for shop in shops_list:
        _shop = shop
        _shop["address"] = create_shop_address()
        _shop["items"] = generate_items(shop)

        shops_doc.insert_one(_shop)

    del persons_list
    del shops_list
    client.close()

    print("Generating orders...")
    create_orders()

    print("Mapping shops...")
    map_shops()

    print("Done")

if __name__ == "__main__":
    main(700, 300)
