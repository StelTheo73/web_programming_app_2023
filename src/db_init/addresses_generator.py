import random

from src.constants import GREECE_CITIES
from src.db_init.random_generator import (
    LOREM_IPSUM,
)
from src.utils import (
    create_id_for_dictionary
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

    address = {
        "city" : city,
        "street" : street,
        "number" : number,
        "postcode" : postcode,
        "country" : country
    }

    _id = create_id_for_dictionary(address)
    address["_id"] = _id

    return address

def generate_address_and_assign_to_person(person_id):
    """Generates an address and correlates it with a person."""
    address = generate_address()
    address["person_id"] = person_id
    address["shop_id"] = None
    return address

def generate_addresses_and_assign_to_person(number, person_id):
    """Generates <number> addresses and correlates them with a person."""
    _list = []
    for _ in range(number):
        address = generate_address_and_assign_to_person(person_id)
        _list.append(address)
    return _list

def generate_address_and_assign_to_shop(shop_id):
    """Generates an address and correlates it with a person."""
    address = generate_address()
    address["person_id"] = None
    address["shop_id"] = shop_id
    return address
