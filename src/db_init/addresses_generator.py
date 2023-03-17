import random

from src.db_init.constants import GREECE_CITIES
from src.db_init.random_generator import (
    LOREM_IPSUM,
)

def generate_cities():
    """Generates cities."""
    cities = []

    for city_name in GREECE_CITIES:
        city = {
            "name" : city_name
        }
        cities.append(city)

    return cities

def generate_address():
    """Generate an address."""
    word1 = ""
    word2 = ""

    while (word1 in ["", " "]) or (word2 in ["", " "]):
        word1 = random.choice(LOREM_IPSUM).capitalize()
        word2 = random.choice(LOREM_IPSUM).capitalize()

    street = word1 + " " + word2
    number = str(random.randint(1, 200))
    postcode = str(random.randint(10000, 99999))
    city = random.choice(GREECE_CITIES)
    country = "Greece"
    floor = str(random.randint(1, 7))

    address = {
        "city" : city,
        "street" : street,
        "number" : number,
        "postcode" : postcode,
        "country" : country,
        "floor" : floor,
        "note" : None
    }

    return address

def generate_shop_address(shop_id):
    """Generate an address for a shop."""
    word1 = ""
    word2 = ""

    while (word1 in ["", " "]) or (word2 in ["", " "]):
        word1 = random.choice(LOREM_IPSUM).capitalize()
        word2 = random.choice(LOREM_IPSUM).capitalize()

    street = word1 + " " + word2
    number = str(random.randint(1, 200))
    postcode = str(random.randint(10000, 99999))
    city = random.choice(GREECE_CITIES)
    country = "Greece"

    address = {
        "shop_id" : shop_id,
        "city" : city,
        "street" : street,
        "number" : number,
        "postcode" : postcode,
        "country" : country,
    }

    return address

def generate_address_and_assign_to_person(person_email):
    """Generates an address and correlates it with a person."""
    firstname, lastname, _ = person_email.split("_")

    address = generate_address()
    address["email"] = person_email
    address["name_on_bell"] = lastname + " " + firstname

    return address

def generate_addresses_and_assign_to_person(number, person_id):
    """Generates <number> addresses and correlates them with a person."""
    _list = []
    for _ in range(number):
        address = generate_address_and_assign_to_person(person_id)
        _list.append(address)
    return _list
