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

def generate_customer():
    "Generates a person and a customer and correlates them."
    person = generate_person()
    
    person_email = person["email"]
    customer = {
        "person_email" : person_email,
        "customer_id"  : person_email.split("@")[0]
    }
    return person, customer

def generate_owner():
    "Generates a person and an owner and correlates them."
    person = generate_person()

    person_email = person["email"]
    owner = {
        "person_email" : person_email,
        "owner_id"     : person_email.split("@")[0]
    }
    return person, owner

def generate_persons(number):
    """Generates <number> persons."""
    persons_list = []

    for _ in range(number):
        person = generate_person()
        persons_list.append(person)

    return persons_list

def generate_customers(number):
    """Generates <number> persons and customers."""
    _list = []

    for _ in range(number):
        person, customer = generate_customer()
        _list.append((person, customer))

    return _list

def generate_owners(number):
    """Generates <number> persons and owners."""
    _list = []

    for _ in range(number):
        person, owner = generate_customer()
        _list.append((person, owner))

    return _list
