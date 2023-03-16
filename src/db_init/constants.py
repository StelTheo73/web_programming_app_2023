import os.path

# FILES AND PATHS
TMP = "tmp"

# INITIALIZATION JSON PATHS
PERSONS_FILE_PATH = os.path.join(TMP, "persons.json")
CUSTOMERS_FILE_PATH = os.path.join(TMP, "customers.json")
OWNERS_FILE_PATH = os.path.join(TMP, "owners.json")
CUSTOMERS_ADDRESSES_FILE_PATH = os.path.join(TMP, "customers_addresses.json")
SHOP_ADDRESSES_FILE_PATH = os.path.join(TMP, "shops_addresses.json")
SHOPS_FILE_PATH = os.path.join(TMP, "shops.json")
ITEMS_FILE_PATH = os.path.join(TMP, "items.json")
HAS_CATEGORY_FILE_PATH = os.path.join(TMP, "has_category.json")
CITIES_FILE_PATH = os.path.join(TMP, "cities.json")
ORDERS_FILE_PATH = os.path.join(TMP, "orders.json")
CONTAINS_FILE_PATH = os.path.join(TMP, "contains.json")
OPERATING_HOURS_FILE_PATH = os.path.join(TMP, "operating_hours.json")
CATEGORIES_FILE_PATH = os.path.join(TMP, "categories.json")

# CITIES
GREECE_CITIES = ["Αθήνα", "Πάτρα", "Θεσσαλονίκη"]

# FOOD CATEGORIES
FOOD_CATEGORIES = [ "Burgers", "Pizza",
    "Αναψυκτικά", "Γλυκά", "Ζυμαρικά", "Θαλασσινά",
    "Καφέδες", "Κρέπες", "Μαγειρευτά", "Ορεκτικά",
    "Σαλάτες", "Σουβλάκια", "Σφολιάτες", "Ψητά"
    ]

# SHOP TYPES
SHOP_TYPES = ["Σουβλατζίδικο", "Ιταλικό", "Ταβέρνα", 
              "Καφετέρεια", "Ψαροταβέρνα", "Πιτσαρία", "Ζαχαροπλαστείο"
              ]

# OPERATING HOURS
OPERATING_HOURS_PLANS = {
    "TYPE 1" : {
        "sunday" : "00:00 - 07:00, 12:00 - 23:59",
        "monday" : "00:00 - 07:00, 12:00 - 23.59",
        "tuesday" : "00:00 - 01:00, 12:00 - 23.59",
        "wednesday" : "00:00 - 01:00, 12:00 - 23.59",
        "thursday" : "00:00,  12:00 - 23:59",
        "friday" : "00:00 - 01:00, 12:00 - 23:59",
        "saturday" : "00:00 - 07:00,  12:00 - 23:59"
    },
    "TYPE 2" : {
        "sunday" : "05:00 - 21:00",
        "monday" : "05:00 - 21:00",
        "tuesday" : "05:00 - 21:00",
        "wednesday" : "05:00 - 21:00",
        "thursday" : "05:00 - 21:00",
        "friday" : "05:00 - 21:00",
        "saturday" : "05:00 - 21:00"
    },
    "TYPE 3" : {
        "sunday" : "08:00 - 23:00",
        "monday" : "08:00 - 23:00",
        "tuesday" : "08:00 - 23:00",
        "wednesday" : "08:00 - 23:00",
        "thursday" : "08:00 - 23:00",
        "friday" : "08:00 - 23:00",
        "saturday" : "08:00 - 23:00"  
    },
    "TYPE 4" : {
        "sunday" : "12:00 - 23:59",
        "monday" : "12:00 - 23:59",
        "tuesday" : "12:00 - 23:59",
        "wednesday" : "12:00 - 23:59",
        "thursday" : "12:00 - 23:59",
        "friday" : "12:00 - 23:59",
        "saturday" : "12:00 - 23:59"
    }
}

SHOP_TYPE_OPERATING_HOURS = {
    "Σουβλατζίδικο" : "TYPE 1", "Ιταλικό" : "TYPE 4", "Ταβέρνα" : "TYPE 4",
    "Καφετέρεια" : "TYPE 2", "Ψαροταβέρνα" : "TYPE 4", "Πιτσαρία" : "TYPE 4",
    "Ζαχαροπλαστείο" : "TYPE 3"
}



# CATEGORIES MAP
CATEGORIES_MAP = {
    "Σουβλατζίδικο" : (
        "Αναψυκτικά", "Σαλάτες", "Σουβλάκια", "Ψητά",
        "Ορεκτικά"
    ),
    "Ιταλικό" : (
        "Αναψυκτικά", "Ζυμαρικά", "Κρέπες", "Σαλάτες",
        "Pizza"
    ),
    "Ταβέρνα" : (
        "Αναψυκτικά", "Θαλασσινά", "Σαλάτες",
        "Ορεκτικά", "Ψητά"
    ),
    "Καφετέρεια" : (
        "Αναψυκτικά", "Καφέδες", "Σφολιάτες"
    ),
    "Ψαροταβέρνα" : (
        "Αναψυκτικά", "Θαλασσινά", "Ορεκτικά"
    ),
    "Πιτσαρία" : (
        "Αναψυκτικά", "Ζυμαρικά", "Κρέπες", "Ορεκτικά",
        "Σαλάτες", "Burgers", "Pizza"
    ),
    "Ζαχαροπλαστείο" : (
        "Γλυκά", "Σφολιάτες"
    )
}

# ITEMS MAP
FOOD_MAP = {
    #   "Category Name" : (
    #       ["Food Name", lowest_value, highest_value], ...
    #   )
    "Burgers" : (
        ["Cheese Burger", 3, 4], ["Hamburger", 3, 4], ["Green Burger", 4, 5],
        ["Texas Burger", 5, 6], ["Double Burger", 7, 8], ["Chicken Burger", 6, 7]

    ),
    "Pizza" : (
        ["Pizza Margherita", 9, 13], ["Pizza 4 τυριά", 10, 15], ["Pizza Capricciosa", 10, 15],
        ["Pizza Diavola", 12, 16], ["Pizza Pepperoni", 10, 15], ["Pizza Special", 12, 16]
    ),
    "Αναψυκτικά" : (
        ["Νερό 0.5L", 0.5, 0.5], ["Νερό 1.5L", 1, 2], ["Coca Cola", 2, 3],
        ["Coca Cola Light", 2, 3], ["Coca Cola Zero", 2, 3],
        ["Πορτοκαλάδα", 2, 3], ["Λεμονάδα", 2, 3]
    ),
    "Γλυκά" : (
        ["Γαλακτομπούρεκο", 3, 5], ["Κανταΐφι", 3, 5], ["Μπακλαβάς", 3, 5],
        ["Πάστα", 2, 4], ["Παγωτό", 2, 3]
    ),
    "Ζυμαρικά" : (
        ["Καρμπονάρα", 7, 10], ["Πέννες", 7, 10], ["Σπαγγέτι", 7, 10]
    ),
    "Θαλασσινά" : (
        ["Τσιπούρα", 11, 13], ["Λαβράκι", 11, 13], ["Σαρδέλα", 7, 9], ["Καλαμαράκια", 8, 10]
    ),
    "Καφέδες" : (
        ["Freddo Espresso", 1, 2], ["Freddo Cappuccino", 1, 2], ["Espresso", 1, 2],
        ["Cappuccino", 1, 2], ["Nes", 1, 2], ["Frappe", 1, 2]
    ),
    "Κρέπες" : (
        ["Κρέπα ζαμπόν τυρί", 4, 6], ["Κρέπα special", 4, 6], ["Κρέπα 4 τυριά", 4, 6],
        ["Κρέπα σοκολάτα", 4, 6], ["κρέπα oreo", 4, 6], ["Κρέπα λευκή σοκολάτα", 4, 6]
    ),
    "Ορεκτικά" : (
        ["Τηγανητές Πατάτες", 3, 4], ["Ψωμί", 1, 2], ["Τυροπιτάκια", 3, 5], ["Σαγανάκι", 5, 6],
        ["Φέτα Ψητή", 4, 5]
    ),
    "Σαλάτες" : (
        ["Χωριάτικη", 6, 9], ["Caesar's", 6, 9], ["Chef", 6, 9],
    ),
    "Σουβλάκια" : (
        ["Γύρος Χοιρινός (μερίδα)", 6, 8], ["Γύρος κοτόπουλο (μερίδα)", 6, 8],
        ["Γύρος Χοιρινός σε πίτα", 2, 4], ["Γύρος κοτόπουλο σε πίτα", 2, 4],
        ["Σουβλάκι Χοιρινό (μερίδα)", 5, 7], ["Σουβλάκι Κοτόπουλο (μερίδα)", 5, 7],
        ["Σουβλάκι Χοιρινό σε πίτα", 2, 4], ["Σουβλάκι κοτόπουλο σε πίτα", 2, 4]
    ),
    "Σφολιάτες" : (
        ["Τυρόπιτα", 1, 2], ["Κασερόπιτα", 1, 2], ["Ζαμπονοτυρόπιτα", 1, 2],
        ["Φλογέρα", 1, 2], ["Σπανακόπιτα", 1, 2], ["Λουκανικόπιτα", 1, 2]
    ),
    "Ψητά" : (
        ["Μπριζόλα", 7, 10], ["Μπιφτέκι", 7, 10], ["Κεμπάπ", 6, 8], ["Λουκάνικο", 6, 8],
        ["Κοτόπουλο", 8, 10], ["Σνίτσελ", 6, 9]
    )
}

# PAYMENT MEANS
PAYMENT_MEANS = ["CARD", "CASH", "GOOGLE PAY"]
