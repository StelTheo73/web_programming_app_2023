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

def generate_has_category(shop_id, categories):
    _list = []

    for category in categories:
        _list.append({
            "shop_id" : shop_id,
            "category_name": category 
        })

    return _list

def generate_item(item_list, shop_id, category_name, item_id):
    name = item_list[0]
    price_low, price_high = item_list[1], item_list[2]

    if isinstance(price_low, int) and isinstance(price_high, int):
        float_part = round(random.random(), 2)
        price = random.randint(price_low, price_high) + float_part
    else:
        price = round(random.uniform(price_low, price_high), 2)

    item = {
        "name" : name,
        "price" : price,
        "shop_id" : shop_id,
        "category_name" : category_name
    }

    # item_id = create_id_for_dictionary(item)

    return {
        "item_id" : item_id,
        "name" : name,
        "price" : price,
        "shop_id" : shop_id,
        "category_name" : category_name
    }

def generate_items(shop, initial_id):
    shop_id = shop["shop_id"]
    shop_type = shop["type"]
    shop_items_list = []
    shop_categories = CATEGORIES_MAP[shop_type]

    item_id = initial_id
    for category in shop_categories:
        items_per_category = FOOD_MAP[category]
        for item in items_per_category:
            _item = generate_item(item, shop_id, category, item_id)
            shop_items_list.append(_item)
            item_id += 1

    final_id = item_id
    shop_categories_list = generate_has_category(shop_id, shop_categories)

    return shop_items_list, shop_categories_list, final_id
