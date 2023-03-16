import random

from src.db_init.constants import (
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
from src.utils import (
    create_id_for_dictionary
)

def generate_shop(shop_id):
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
        "shop_id" : shop_id,
        "type" : shop_type,
        "name" : shop_name,
        "email" : shop_email,
        "phone" : shop_phone
    }

    # shop_id = create_id_for_dictionary(shop)
    # shop["shop_id"] = shop_id

    # Operating hours
    operating_hours_type = SHOP_TYPE_OPERATING_HOURS[shop_type]
    operating_hours = {"shop_id" : shop_id}
    for day in OPERATING_HOURS_PLANS[operating_hours_type].keys():
        hours = OPERATING_HOURS_PLANS[operating_hours_type][day]
        operating_hours[day.lower()] = hours

    return shop, operating_hours

def generate_shops(number):
    """Generates <number> shops."""
    shops_list = []
    operating_hours_list = []
    shop_id = 0

    for _ in range(number):
        shop, operating_hours = generate_shop(shop_id)
        shops_list.append(shop)
        operating_hours_list.append(operating_hours)
        shop_id += 1

    return shops_list, operating_hours_list
