import random

from src.constants import (
    SHOP_TYPES
)
from src.db_init.random_generator import (
    DOMAINS,
    LOREM_IPSUM,
    NUMBERS,
    random_choice
)
from src.utils import (
    create_id_for_dictionary
)

def generate_shop():
    """Generates a shop."""
    word1 = ""
    word2 = ""
    domain = random.choice(DOMAINS)

    while (word1 in ["", " "]) or (word2 in ["", " "]):
        word1 = random.choice(LOREM_IPSUM).capitalize()
        word2 = random.choice(LOREM_IPSUM).capitalize()  
    
    shop_name = word1 + " " + word2
    shop_type = random.choice(SHOP_TYPES)
    shop_phone = "69" + random_choice(NUMBERS, 8)
    shop_email = shop_name.replace(" ", "_") +\
                "@" + domain + ".com"

    shop = {
        "type" : shop_type,
        "name" : shop_name,
        "email" : shop_email,
        "phone" : shop_phone
    }

    _id = create_id_for_dictionary(shop)
    shop["_id"] = _id

    return shop

def generate_shops(number):
    """Generates <number> shops."""
    _list = []

    for _ in range(number):
        shop = generate_shop()
        _list.append(shop)

    return _list
