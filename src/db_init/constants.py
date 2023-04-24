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
CARDS_FILE_PATH = os.path.join(TMP, "cards.json")

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
    #       ["Food Name", lowest_value, highest_value, tags], ...
    #   )
    "Burgers" : (
        ["Cheese Burger", 3, 4, ["cheese", "burger", "cheeseburger"]], 
        ["Hamburger", 3, 4, ["burger"]],
        ["Green Burger", 4, 5, ["veggie", "green", "vegan", "burger"]],
        ["Texas Burger", 5, 6, ["texas" ,"burger"]],
        ["Double Burger", 7, 8, ["double", "burger"]],
        ["Chicken Burger", 6, 7, ["chicken", "burger"]]
    ),
    "Pizza" : (
        ["Pizza Margherita", 9, 13, ["margherita", "daisy",
                                     "mozzarella", "tomato", "sauce", "pizza"]],
        ["Pizza 4 τυριά", 10, 15, ["four", "4", "cheese", "chesses", "pizza"]],
        ["Pizza Capricciosa", 10, 15, ["capricciosa", "capricious", "pizza"]],
        ["Pizza Diavola", 12, 16, ["diavola", "devil", "pizza"]],
        ["Pizza Pepperoni", 10, 15, ["pepperoni", "pizza"]],
        ["Pizza Special", 12, 16, ["special", "pizza"]]
    ),
    "Αναψυκτικά" : (
        ["Νερό 0.5L", 0.5, 0.5, ["water"]],
        ["Νερό 1.5L", 1, 2, ["water"]],
        ["Coca Cola", 2, 3, ["coca", "cola"]],
        ["Coca Cola Light", 2, 3, ["coca", "cola", "light"]],
        ["Coca Cola Zero", 2, 3, ["coca", "cola", "zero"]],
        ["Πορτοκαλάδα", 2, 3, ["orange", "juice"]],
        ["Λεμονάδα", 2, 3, ["lemon", "juice", "lemonade"]]
    ),
    "Γλυκά" : (
        ["Γαλακτομπούρεκο", 3, 5, ["sweet", "galaktoboureko"]],
        ["Κανταΐφι", 3, 5, ["sweet", "kandaifi"]],
        ["Μπακλαβάς", 3, 5, ["sweet", "Baklava"]],
        ["Πάστα", 2, 4, ["sweet", "paste"]],
        ["Παγωτό", 2, 3, ["sweet", "ice", "cream"]]
    ),
    "Ζυμαρικά" : (
        ["Καρμπονάρα", 7, 10, ["spaghetti", "carbonara", "pasta", "macaroni"]],
        ["Πέννες", 7, 10, ["spaghetti", "penne", "pasta", "macaroni"]],
        ["Σπαγγέτι", 7, 10, ["spaghetti", "pasta", "macaroni"]]
    ),
    "Θαλασσινά" : (
        ["Τσιπούρα", 11, 13, ["bream", "flock", "fish", "seafood"]],
        ["Λαβράκι", 11, 13, ["bass", "fish", "seafood"]],
        ["Σαρδέλα", 7, 9, ["sardine", "fish", "seafood"]],
        ["Καλαμαράκια", 8, 10, ["squid", "calamari", "fish", "seafood"]]
    ),
    "Καφέδες" : (
        ["Freddo Espresso", 1, 2, ["freddo", "espresso", "coffee"]],
        ["Freddo Cappuccino", 1, 2, ["freddo", "cappuccino", "coffee"]],
        ["Espresso", 1, 2, ["espresso", "coffee"]],
        ["Cappuccino", 1, 2, ["cappuccino", "coffee"]],
        ["Nes", 1, 2, ["nes", "coffee"]],
        ["Frappe", 1, 2, ["frappe", "coffee"]]
    ),
    "Κρέπες" : (
        ["Κρέπα ζαμπόν τυρί", 4, 6, ["ham", "cheese", "crepe"]],
        ["Κρέπα special", 4, 6, ["special", "crepe"]],
        ["Κρέπα 4 τυριά", 4, 6, ["four", "4", "cheese", "crepe"]],
        ["Κρέπα σοκολάτα", 4, 6, ["chocolate", "crepe"]],
        ["κρέπα oreo", 4, 6, ["oreo", "crepe"]],
        ["Κρέπα λευκή σοκολάτα", 4, 6, ["white", "chocolate", "crepe"]]
    ),
    "Ορεκτικά" : (
        ["Τηγανητές Πατάτες", 3, 4, ["fried", "potato"]],
        ["Ψωμί", 1, 2, ["bread"]],
        ["Τυροπιτάκια", 3, 5, ["cheesecakes", "cheese", "pie"]],
        ["Σαγανάκι", 5, 6, ["saganaki", "cheese"]],
        ["Φέτα Ψητή", 4, 5, ["feta"]]
    ),
    "Σαλάτες" : (
        ["Χωριάτικη", 6, 9, ["greek", "salad"]],
        ["Caesar's", 6, 9, ["caesar", "salad"]],
        ["Chef", 6, 9, ["chef", "salad"]],
    ),
    "Σουβλάκια" : (
        ["Γύρος Χοιρινός (μερίδα)", 6, 8, ["gyro", "round"]],
        ["Γύρος κοτόπουλο (μερίδα)", 6, 8, ["gyro", "round"]],
        ["Γύρος Χοιρινός σε πίτα", 2, 4, ["gyro", "round", "wrapped"]],
        ["Γύρος κοτόπουλο σε πίτα", 2, 4, ["gyro", "round", "wrapped"]],
        ["Σουβλάκι Χοιρινό (μερίδα)", 5, 7, ["souvlaki", "skewer"]],
        ["Σουβλάκι Κοτόπουλο (μερίδα)", 5, 7, ["souvlaki", "skewer"]],
        ["Σουβλάκι Χοιρινό σε πίτα", 2, 4, ["souvlaki", "skewer", "wrapped"]],
        ["Σουβλάκι κοτόπουλο σε πίτα", 2, 4, ["souvlaki", "skewer", "wrapped"]]
    ),
    "Σφολιάτες" : (
        ["Τυρόπιτα", 1, 2, ["cheese", "pie"]],
        ["Κασερόπιτα", 1, 2, ["casserole", "pie"]],
        ["Ζαμπονοτυρόπιτα", 1, 2, ["ham", "cheese", "pie"]],
        ["Φλογέρα", 1, 2, ["flogera", "flute"]],
        ["Σπανακόπιτα", 1, 2, ["spinach", "pie"]],
        ["Λουκανικόπιτα", 1, 2, ["sausage", "pie"]]
    ),
    "Ψητά" : (
        ["Μπριζόλα", 7, 10, ["steak", "meat"]],
        ["Μπιφτέκι", 7, 10, ["burger", "meat"]],
        ["Κεμπάπ", 6, 8, ["kebab", "meat"]],
        ["Λουκάνικο", 6, 8, ["sausage", "meat"]],
        ["Κοτόπουλο", 8, 10, ["chicken", "meat"]],
        ["Σνίτσελ", 6, 9, ["schnitzel", "cutlet", "meat"]]
    )
}

# PAYMENT MEANS
PAYMENT_MEANS = ["CARD", "CASH", "GOOGLE PAY"]
