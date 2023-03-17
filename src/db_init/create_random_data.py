import os
import os.path
import json
import random

from src.db_init.constants import (
    CUSTOMERS_ADDRESSES_FILE_PATH,
    SHOP_ADDRESSES_FILE_PATH,
    SHOPS_FILE_PATH,
    PERSONS_FILE_PATH,
    ITEMS_FILE_PATH,
    HAS_CATEGORY_FILE_PATH,
    ORDERS_FILE_PATH,
    CONTAINS_FILE_PATH,
    OPERATING_HOURS_FILE_PATH,
    CATEGORIES_FILE_PATH,
    CARDS_FILE_PATH,
    FOOD_CATEGORIES
)
from src.db_init.addresses_generator import (
    generate_addresses_and_assign_to_person,
    generate_shop_address,
)
from src.db_init.cards_generator import (
    generate_cards
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
from src.db_init.shops_generator import generate_shops
from src.utils import write_text_to_file

PWD = os.getcwd()
PERSONS_FILE = os.path.join(PWD, PERSONS_FILE_PATH)

def create_persons(persons):
    persons_list = []

    persons_list = generate_persons(persons)

    persons_stream = json.dumps(persons_list, indent = 2, ensure_ascii = False)
    write_text_to_file(persons_stream, PERSONS_FILE)

    return persons_list

def create_persons_addresses(persons):
    addresses_list = []

    for person in persons:
        person_email = person["email"]
        num_of_addresses = random.randint(1, 3)
        addresses = generate_addresses_and_assign_to_person(num_of_addresses, person_email)
        for address in addresses:
            addresses_list.append(address)

    addresses_stream = json.dumps(addresses_list, indent = 2, ensure_ascii = False)
    write_text_to_file(addresses_stream, CUSTOMERS_ADDRESSES_FILE_PATH)

def create_persons_cards(persons):
    cards_list = []

    for person in persons:
        cards = generate_cards(person)
        for card in cards:
            cards_list.append(card)

    cards_stream = json.dumps(cards_list, indent = 2, ensure_ascii = False)
    write_text_to_file(cards_stream, CARDS_FILE_PATH)

def create_shops(shops):
    shops_list = []

    shops_list, operating_hours_list = generate_shops(shops)

    shops_stream = json.dumps(shops_list, indent = 2, ensure_ascii = False)
    write_text_to_file(shops_stream, SHOPS_FILE_PATH)
    operating_hours_stream = json.dumps(operating_hours_list, indent = 2, ensure_ascii = False)
    write_text_to_file(operating_hours_stream, OPERATING_HOURS_FILE_PATH)

    return shops_list

def create_shops_addresses(shops):
    addresses_list = []

    for shop in shops:
        shop_id = shop["shop_id"]
        address = generate_shop_address(shop_id)
        addresses_list.append(address)

    addresses_stream = json.dumps(addresses_list, indent = 2, ensure_ascii = False)
    write_text_to_file(addresses_stream, SHOP_ADDRESSES_FILE_PATH)

def create_items_for_shops(shops):
    _items_list = []
    _categories_list = []

    item_id = 1
    for shop in shops:
        items, categories, item_id = generate_items(shop, item_id)

        for item in items:
            _items_list.append(item)
        for category in categories:
            _categories_list.append(category)

    items_stream = json.dumps(_items_list, indent = 2, ensure_ascii = False)
    write_text_to_file(items_stream, ITEMS_FILE_PATH)
    categories_stream = json.dumps(_categories_list, indent = 2, ensure_ascii = False)
    write_text_to_file(categories_stream, HAS_CATEGORY_FILE_PATH)

    return _items_list

def order_items_by_shop(items):
    items_by_shop = {}
    for item in items:
        shop_id = item["shop_id"]
        if shop_id not in items_by_shop.keys():
            items_by_shop[shop_id] = []
        items_by_shop[shop_id].append(item)

    return items_by_shop

def make_orders(persons, shops, items):
    orders_list = []
    contains_list = []

    items_by_shop = order_items_by_shop(items)

    order_id = 1
    for person in persons:
        person_id = person["email"]
        orders = random.randint(0, 20)
        for _ in range(orders):
            shop = random.choice(shops)
            shop_id = shop["shop_id"]
            items = items_by_shop[shop_id]
            order, contains = make_random_order(person_id, order_id, items)
            orders_list.append(order)

            for contain in contains:
                contains_list.append(contain)

            order_id += 1

    orders_stream = json.dumps(orders_list, indent = 2, ensure_ascii = False)
    write_text_to_file(orders_stream, ORDERS_FILE_PATH)
    contains_stream = json.dumps(contains_list, indent = 2, ensure_ascii = False)
    write_text_to_file(contains_stream, CONTAINS_FILE_PATH)

def create_categories():
    _list = []

    for category in FOOD_CATEGORIES:
        _list.append({
            "category_name" : category
        })

    _list = json.dumps(_list, indent = 2, ensure_ascii = False)
    write_text_to_file(_list, CATEGORIES_FILE_PATH)

def create_random_data(persons, shops):
    tmp_path = os.path.join(os.getcwd(), "tmp")
    if not os.path.exists(tmp_path) :
        os.mkdir(tmp_path)

    persons = create_persons(persons)
    create_persons_addresses(persons)
    create_persons_cards(persons)
    shops = create_shops(shops)
    create_shops_addresses(shops)

    create_categories()

    items = create_items_for_shops(shops)

    make_orders(persons, shops, items)

if __name__ == "__main__":
    create_random_data(persons=100, shops = 3)
