import random

from src.db_init.random_generator import (
    NUMBERS,
    random_date,
    random_choice
)

def generate_card(person, card_id):
    """Generates a card and assigns it to a person."""
    firstname = person["firstname"]
    lastname = person["lastname"]

    expiration_date = random_date(2022, 2027)
    expiration_date_list = expiration_date.split("-")
    expiration_date = f"{expiration_date_list[0]}-{expiration_date_list[1]}" 

    cardholder = f"{firstname} {lastname}".upper()
    card_number = random_choice(NUMBERS, 16)
    cvv = random_choice(NUMBERS, 3)

    return {
        "card_id" : str(card_id),
        "card_number" : card_number,
        "cvv" : cvv,
        "expiration_date" : expiration_date,
        "cardholder" : cardholder
    }
