import random

from src.db_init.random_generator import (
    NUMBERS,
    random_date,
    random_choice
)

def generate_card(person):
    """Generates a card and assigns it to a person."""
    firstname = person["firstname"]
    lastname = person["lastname"]
    email = person["email"]

    expiration_date = random_date()
    expiration_date_list = expiration_date.split("-")
    expiration_date_list[2] = "01" # day = 01
    expiration_date = "-".join(expiration_date_list)

    cardholder = f"{firstname} {lastname}".upper()
    card_number = random_choice(NUMBERS, 16)
    cvv = random_choice(NUMBERS, 3)

    return {
        "email" : email,
        "card_number" : card_number,
        "cvv" : cvv,
        "expiration_date" : expiration_date,
        "cardholder" : cardholder
    }

def generate_cards(person):
    number_of_cards = random.randint(1, 3)
    cards_list = []
    cards_numbers = []

    while len(cards_list) < number_of_cards:
        card = generate_card(person)
        while card["card_number"] in cards_numbers:
            card = generate_card(person)
        cards_numbers.append(card["card_number"])
        cards_list.append(card)

    return cards_list
