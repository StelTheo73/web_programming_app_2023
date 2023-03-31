import random

from src.db_init.constants import (
    PAYMENT_MEANS
)
from src.db_init.random_generator import (
    random_datetime
)

def make_random_order(person, shop):
    order_contains = []
    items = shop["items"]
    no_of_items = random.randint(1, 5)

    for _ in range(no_of_items):
        payment_mean = random.choice(PAYMENT_MEANS)

        datetime = random_datetime(2020, 2022)
        address = random.choice(person["addresses"])

        order_item = random.choice(items)
        order_item["note"] = None

        order_contains.append(order_item)

    order = {
        "person_id" : person["_id"],
        "shop_id" : shop["_id"],
        "datetime" : datetime,
        "status" : "DELIVERED",
        "order_contains" : order_contains,
        "payment_mean" : payment_mean,
        "address" : address
    }

    if payment_mean == "CARD":
        order["card"] = random.choice(person["cards"])

    return order
