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

# CITIES
GREECE_CITIES = ["ATHENS", "THESSALONIKI", "PATRAS"]

# FOOD CATEGORIES
FOOD_CATEGORIES = [ "Burgers", "Pizza",
    "Αναψυκτικά", "Γλυκά", "Ζυμαρικά", "Θαλασσινά",
    "Καφέδες", "Κρέπες", "Μαγειρευτά", "Ορεκτικά",
    "Σφολιάτες"
    ]

# SHOP TYPES
SHOP_TYPES = ["Σουβλατζίδικο", "Ιταλικό", "Ταβέρνα", "Μαγειρίο", 
              "Καφετέρεια", "Ψαροταβέρνα", "Πιτσαρία"
              ]