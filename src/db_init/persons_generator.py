import random

from src.db_init.random_generator import (
    DOMAINS,
    FIRST_NAMES,
    LAST_NAMES,
    NUMBERS,
    random_choice,
    random_date,
    random_id
)

EMAILS_LIST = []
EMAIL_FORMAT = "{firstname}_{lastname}_{number}@{domain}.com"

def generate_person():
    """Generates a random person."""
    firstname = random.choice(FIRST_NAMES)
    lastname = random.choice(LAST_NAMES)
    birthdate = random_date()
    phone = "69" + random_choice(NUMBERS, 9)
    password = "Aa123$00"
    
    email_number = random_choice(NUMBERS, 3)
    email = EMAIL_FORMAT.format(
        firstname = firstname, 
        lastname = lastname, 
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

    return persons_list
