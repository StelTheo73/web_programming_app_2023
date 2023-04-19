import random
from unidecode import unidecode

from src.db_init.random_generator import (
    DOMAINS,
    NUMBERS,
    NAMES_JSON,
    random_choice,
    random_date,
    random_id
)

EMAILS_LIST = []
EMAIL_FORMAT = "{firstname}_{lastname}_{number}@{domain}.com"

def generate_test_user():
    """Generates a test user."""
    firstname = "Foobar"
    lastname = "Lorem-Ipsum"
    birthdate = random_date()
    phone = "6912345678"
    password = "Aa123$00"
    email = "test@user.com"
    return {
        "email"     : email,
        "password"  : password,
        "firstname" : firstname,
        "lastname"  : lastname,
        "phone"     : phone,
        "birthdate" : birthdate
    }


def generate_person():
    """Generates a random person."""
    sex = random.choice(["male", "female"])

    firstname = random.choice(NAMES_JSON[sex])
    lastname = random.choice(NAMES_JSON[f"{sex}_surnames"])
    birthdate = random_date()
    phone = "69" + random_choice(NUMBERS, 9)
    password = "Aa123$00"

    latin_firstname = unidecode(firstname)
    latin_lastname = unidecode(lastname)

    email_number = random_choice(NUMBERS, 3)
    email = EMAIL_FORMAT.format(
        firstname = latin_firstname,
        lastname = latin_lastname,
        number = email_number,
        domain = random.choice(DOMAINS)
    )
    while email in EMAILS_LIST:
        email_number = random_choice(NUMBERS, 3)
        email = EMAIL_FORMAT.format(
            firstname, lastname, email_number, random.choice(DOMAINS)
    )
    EMAILS_LIST.append(email)

    return {
        "email"     : email,
        "password"  : password,
        "firstname" : firstname,
        "lastname"  : lastname,
        "phone"     : phone,
        "birthdate" : birthdate
    }

def generate_persons(number):
    """Generates <number> persons."""
    persons_list = []

    for _ in range(number):
        person = generate_person()
        persons_list.append(person)

    persons_list.append(generate_test_user())
    return persons_list
