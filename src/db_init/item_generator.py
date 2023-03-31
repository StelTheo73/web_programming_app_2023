import random

from src.db_init.constants import (
    CATEGORIES_MAP,
    FOOD_MAP,
)

from src.db_init.random_generator import (
    random_choice
)
from src.utils import (
    create_id_for_dictionary
)

def generate_item(item_list, category_name):
    name = item_list[0]
    price_low, price_high = item_list[1], item_list[2]
    tags = item_list[3]

    if isinstance(price_low, int) and isinstance(price_high, int):
        float_part = round(random.random(), 2)
        price = random.randint(price_low, price_high) + float_part
    else:
        price = round(random.uniform(price_low, price_high), 2)

    return {
        "name" : name,
        "tags" : tags,
        "price" : price,
        "category_name" : category_name
    }

def generate_items(shop):
    shop_items_list = []
    shop_categories = shop["categories"]

    for category in shop_categories:
        items_per_category = FOOD_MAP[category]
        for item in items_per_category:
            _item = generate_item(item, category)
            shop_items_list.append(_item)

    return shop_items_list
