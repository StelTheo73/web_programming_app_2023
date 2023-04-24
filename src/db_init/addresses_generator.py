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

def generate_address(person, address_id):
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
        "address_id" : str(address_id),
        "city" : city,
        "street" : street,
        "number" : number,
        "postcode" : postcode,
        "country" : country,
        "floor" : floor,
        "bell" : person["firstname"] + " " + person["lastname"],
        "note" : None
    }

    return address

def generate_shop_address():
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
        "city" : city,
        "street" : street,
        "number" : number,
        "postcode" : postcode,
        "country" : country,
    }

    return address
