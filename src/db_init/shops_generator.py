import random

from src.db_init.constants import (
    CATEGORIES_MAP,
    SHOP_TYPES,
    SHOP_TYPE_OPERATING_HOURS,
    OPERATING_HOURS_PLANS
)
from src.db_init.random_generator import (
    DOMAINS,
    LOREM_IPSUM,
    NUMBERS,
    random_choice
)

def generate_shop():
    """Generates a shop."""
    word1 = ""
    word2 = ""
    domain = random.choice(DOMAINS)
    operating_hours = {}
    categories = []

    while (word1 in ["", " "]) or (word2 in ["", " "]):
        word1 = random.choice(LOREM_IPSUM).capitalize()
        word2 = random.choice(LOREM_IPSUM).capitalize()
    
    shop_name = word1 + " " + word2
    shop_type = random.choice(SHOP_TYPES)
    shop_phone = "69" + random_choice(NUMBERS, 8)
    shop_email = shop_name.replace(" ", "_") +\
                "@" + domain + ".com"


    for category in CATEGORIES_MAP[shop_type]:
        categories.append(category)

    shop = {
        "type" : shop_type,
        "name" : shop_name,
        "email" : shop_email,
        "phone" : shop_phone,
        "categories" : categories
    }

    # Operating hours
    operating_hours_type = SHOP_TYPE_OPERATING_HOURS[shop_type]
    for day in OPERATING_HOURS_PLANS[operating_hours_type].keys():
        hours = OPERATING_HOURS_PLANS[operating_hours_type][day]
        operating_hours[day.lower()] = hours

    shop["operating_hours"] = operating_hours

    return shop

def generate_shops(number):
    """Generates <number> shops."""
    shops_list = []
    shop_id = 1

    for _ in range(number):
        shop = generate_shop()
        shops_list.append(shop)
        shop_id += 1

    return shops_list
