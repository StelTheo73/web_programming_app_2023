import random

from src.db_init.constants import (
    PAYMENT_MEANS
)
from src.db_init.random_generator import (
    random_datetime
)

def make_random_order(customer_email, order_id, items):
    order_contains = []
    _previously_added_items = []
    price = 0

    no_of_items = random.randint(1, 5)

    for _ in range(no_of_items):
        payment_mean = random.choice(PAYMENT_MEANS)
        datetime = random_datetime(2020, 2022)

        item = random.choice(items)
        item_id = item["item_id"]
        while item_id in _previously_added_items:
            item = random.choice(items)
            item_id = item["item_id"]
        _previously_added_items.append(item_id)

        item_price = item["price"]
        quantity = random.randint(1, 3)

        price += item_price * quantity
        order_item = {
            "order_id": order_id,
            "item_id" : item_id,
            "quantity" : quantity,
            "note"  : None
        }
        order_contains.append(order_item)

    order = {
        "order_id" : order_id,
        "email" : customer_email,
        "status" : "DELIVERED",
        "total_price" : round(price, 2),
        "payment_mean" : payment_mean,
        "datetime" : datetime
    }

    return order, order_contains
