"use strict";

let SHOPS = [
    {
        "_id": {
          "$oid": "642722e4f571449b429d616c"
        },
        "type": "Ταβέρνα",
        "name": "Putant Admodum",
        "email": "Putant_Admodum@hotmail.com",
        "phone": "6907120673",
        "categories": [
          "Αναψυκτικά",
          "Θαλασσινά",
          "Σαλάτες",
          "Ορεκτικά",
          "Ψητά"
        ],
        "operating_hours": {
          "sunday": "12:00 - 23:59",
          "monday": "12:00 - 23:59",
          "tuesday": "12:00 - 23:59",
          "wednesday": "12:00 - 23:59",
          "thursday": "12:00 - 23:59",
          "friday": "12:00 - 23:59",
          "saturday": "12:00 - 23:59"
        },
        "address": {
          "city": "Θεσσαλονίκη",
          "street": "Periculis Laoreet",
          "number": "154",
          "postcode": "37260",
          "country": "Greece"
        },
        "items": [
          {
            "name": "Νερό 0.5L",
            "tags": [
              "water"
            ],
            "price": 0.5,
            "category_name": "Αναψυκτικά"
          },
          {
            "name": "Νερό 1.5L",
            "tags": [
              "water"
            ],
            "price": 2.95,
            "category_name": "Αναψυκτικά"
          },
          {
            "name": "Coca Cola",
            "tags": [
              "coca",
              "cola"
            ],
            "price": 2.17,
            "category_name": "Αναψυκτικά"
          },
          {
            "name": "Coca Cola Light",
            "tags": [
              "coca",
              "cola",
              "light"
            ],
            "price": 2.1,
            "category_name": "Αναψυκτικά"
          },
          {
            "name": "Coca Cola Zero",
            "tags": [
              "coca",
              "cola",
              "zero"
            ],
            "price": 2.79,
            "category_name": "Αναψυκτικά"
          },
          {
            "name": "Πορτοκαλάδα",
            "tags": [
              "orange",
              "juice"
            ],
            "price": 3.85,
            "category_name": "Αναψυκτικά"
          },
          {
            "name": "Λεμονάδα",
            "tags": [
              "lemon",
              "juice"
            ],
            "price": 2.76,
            "category_name": "Αναψυκτικά"
          },
          {
            "name": "Τσιπούρα",
            "tags": [
              "bream",
              "fish"
            ],
            "price": 12.99,
            "category_name": "Θαλασσινά"
          },
          {
            "name": "Λαβράκι",
            "tags": [
              "bass",
              "fish"
            ],
            "price": 11.8,
            "category_name": "Θαλασσινά"
          },
          {
            "name": "Σαρδέλα",
            "tags": [
              "sardine",
              "fish"
            ],
            "price": 9.06,
            "category_name": "Θαλασσινά"
          },
          {
            "name": "Καλαμαράκια",
            "tags": [
              "squid",
              "fish"
            ],
            "price": 9.9,
            "category_name": "Θαλασσινά"
          },
          {
            "name": "Χωριάτικη",
            "tags": [
              "greek",
              "salad"
            ],
            "price": 8.83,
            "category_name": "Σαλάτες"
          },
          {
            "name": "Caesar's",
            "tags": [
              "caesar",
              "salad"
            ],
            "price": 6.61,
            "category_name": "Σαλάτες"
          },
          {
            "name": "Chef",
            "tags": [
              "chef",
              "salad"
            ],
            "price": 6.83,
            "category_name": "Σαλάτες"
          },
          {
            "name": "Τηγανητές Πατάτες",
            "tags": [
              "fried",
              "potato"
            ],
            "price": 4.61,
            "category_name": "Ορεκτικά"
          },
          {
            "name": "Ψωμί",
            "tags": [
              "bread"
            ],
            "price": 2.5,
            "category_name": "Ορεκτικά"
          },
          {
            "name": "Τυροπιτάκια",
            "tags": [
              "cheese pie"
            ],
            "price": 5.78,
            "category_name": "Ορεκτικά"
          },
          {
            "name": "Σαγανάκι",
            "tags": [
              "saganaki"
            ],
            "price": 6.95,
            "category_name": "Ορεκτικά"
          },
          {
            "name": "Φέτα Ψητή",
            "tags": [
              "feta"
            ],
            "price": 5.01,
            "category_name": "Ορεκτικά"
          },
          {
            "name": "Μπριζόλα",
            "tags": [
              "steack"
            ],
            "price": 8.22,
            "category_name": "Ψητά"
          },
          {
            "name": "Μπιφτέκι",
            "tags": [
              "burger"
            ],
            "price": 10.44,
            "category_name": "Ψητά"
          },
          {
            "name": "Κεμπάπ",
            "tags": [
              "kebab"
            ],
            "price": 7.61,
            "category_name": "Ψητά"
          },
          {
            "name": "Λουκάνικο",
            "tags": [
              "sausage"
            ],
            "price": 7.51,
            "category_name": "Ψητά"
          },
          {
            "name": "Κοτόπουλο",
            "tags": [
              "chicken"
            ],
            "price": 9.89,
            "category_name": "Ψητά"
          },
          {
            "name": "Σνίτσελ",
            "tags": [
              "schnitzel"
            ],
            "price": 9.85,
            "category_name": "Ψητά"
          }
        ]
    },
    {
    "_id": {
        "$oid": "642722e4f571449b429d6188"
    },
    "type": "Ιταλικό",
    "name": "Eos Delectus",
    "email": "Eos_Delectus@yahoo.com",
    "phone": "6953298631",
    "categories": [
        "Αναψυκτικά",
        "Ζυμαρικά",
        "Κρέπες",
        "Σαλάτες",
        "Pizza"
    ],
    "operating_hours": {
        "sunday": "12:00 - 23:59",
        "monday": "12:00 - 23:59",
        "tuesday": "12:00 - 23:59",
        "wednesday": "12:00 - 23:59",
        "thursday": "12:00 - 23:59",
        "friday": "12:00 - 23:59",
        "saturday": "12:00 - 23:59"
    },
    "address": {
        "city": "Πάτρα",
        "street": "Invenire Denique",
        "number": "67",
        "postcode": "46021",
        "country": "Greece"
    },
    "items": [
        {
        "name": "Νερό 0.5L",
        "tags": [
            "water"
        ],
        "price": 0.5,
        "category_name": "Αναψυκτικά"
        },
        {
        "name": "Νερό 1.5L",
        "tags": [
            "water"
        ],
        "price": 1.03,
        "category_name": "Αναψυκτικά"
        },
        {
        "name": "Coca Cola",
        "tags": [
            "coca",
            "cola"
        ],
        "price": 2.52,
        "category_name": "Αναψυκτικά"
        },
        {
        "name": "Coca Cola Light",
        "tags": [
            "coca",
            "cola",
            "light"
        ],
        "price": 2.09,
        "category_name": "Αναψυκτικά"
        },
        {
        "name": "Coca Cola Zero",
        "tags": [
            "coca",
            "cola",
            "zero"
        ],
        "price": 3.77,
        "category_name": "Αναψυκτικά"
        },
        {
        "name": "Πορτοκαλάδα",
        "tags": [
            "orange",
            "juice"
        ],
        "price": 2.5,
        "category_name": "Αναψυκτικά"
        },
        {
        "name": "Λεμονάδα",
        "tags": [
            "lemon",
            "juice"
        ],
        "price": 2.04,
        "category_name": "Αναψυκτικά"
        },
        {
        "name": "Καρμπονάρα",
        "tags": [
            "carbonara",
            "pasta"
        ],
        "price": 8.54,
        "category_name": "Ζυμαρικά"
        },
        {
        "name": "Πέννες",
        "tags": [
            "pennes",
            "pasta"
        ],
        "price": 9.11,
        "category_name": "Ζυμαρικά"
        },
        {
        "name": "Σπαγγέτι",
        "tags": [
            "spaghetti",
            "pasta"
        ],
        "price": 9.76,
        "category_name": "Ζυμαρικά"
        },
        {
        "name": "Κρέπα ζαμπόν τυρί",
        "tags": [
            "ham",
            "cheese",
            "crepe"
        ],
        "price": 6.5600000000000005,
        "category_name": "Κρέπες"
        },
        {
        "name": "Κρέπα special",
        "tags": [
            "special",
            "crepe"
        ],
        "price": 6.9399999999999995,
        "category_name": "Κρέπες"
        },
        {
        "name": "Κρέπα 4 τυριά",
        "tags": [
            "four",
            "cheese",
            "pizza"
        ],
        "price": 5.86,
        "category_name": "Κρέπες"
        },
        {
        "name": "Κρέπα σοκολάτα",
        "tags": [
            "chocolate",
            "crepe"
        ],
        "price": 6.53,
        "category_name": "Κρέπες"
        },
        {
        "name": "κρέπα oreo",
        "tags": [
            "oreo",
            "crepe"
        ],
        "price": 6.5600000000000005,
        "category_name": "Κρέπες"
        },
        {
        "name": "Κρέπα λευκή σοκολάτα",
        "tags": [
            "white",
            "chocolate",
            "crepe"
        ],
        "price": 4.1,
        "category_name": "Κρέπες"
        },
        {
        "name": "Χωριάτικη",
        "tags": [
            "greek",
            "salad"
        ],
        "price": 8.96,
        "category_name": "Σαλάτες"
        },
        {
        "name": "Caesar's",
        "tags": [
            "caesar",
            "salad"
        ],
        "price": 6.26,
        "category_name": "Σαλάτες"
        },
        {
        "name": "Chef",
        "tags": [
            "chef",
            "salad"
        ],
        "price": 7.61,
        "category_name": "Σαλάτες"
        },
        {
        "name": "Pizza Margherita",
        "tags": [
            "margherita",
            "pizza"
        ],
        "price": 9.06,
        "category_name": "Pizza"
        },
        {
        "name": "Pizza 4 τυριά",
        "tags": [
            "four",
            "cheese",
            "pizza"
        ],
        "price": 13.53,
        "category_name": "Pizza"
        },
        {
        "name": "Pizza Capricciosa",
        "tags": [
            "capricciosa",
            "pizza"
        ],
        "price": 15.18,
        "category_name": "Pizza"
        },
        {
        "name": "Pizza Diavola",
        "tags": [
            "diavola",
            "pizza"
        ],
        "price": 15.05,
        "category_name": "Pizza"
        },
        {
        "name": "Pizza Pepperoni",
        "tags": [
            "pepperoni",
            "pizza"
        ],
        "price": 11.53,
        "category_name": "Pizza"
        },
        {
        "name": "Pizza Special",
        "tags": [
            "special",
            "pizza"
        ],
        "price": 12.6,
        "category_name": "Pizza"
        }
    ]
    },
    {
        "_id": {
          "$oid": "642722e4f571449b429d618f"
        },
        "type": "Ταβέρνα",
        "name": "Erat Luptatum",
        "email": "Erat_Luptatum@hotmail.com",
        "phone": "6932777572",
        "categories": [
          "Αναψυκτικά",
          "Θαλασσινά",
          "Σαλάτες",
          "Ορεκτικά",
          "Ψητά"
        ],
        "operating_hours": {
          "sunday": "12:00 - 23:59",
          "monday": "12:00 - 23:59",
          "tuesday": "12:00 - 23:59",
          "wednesday": "12:00 - 23:59",
          "thursday": "12:00 - 23:59",
          "friday": "12:00 - 23:59",
          "saturday": "12:00 - 23:59"
        },
        "address": {
          "city": "Αθήνα",
          "street": "Impedit Mea",
          "number": "26",
          "postcode": "92261",
          "country": "Greece"
        },
        "items": [
          {
            "name": "Νερό 0.5L",
            "tags": [
              "water"
            ],
            "price": 0.5,
            "category_name": "Αναψυκτικά"
          },
          {
            "name": "Νερό 1.5L",
            "tags": [
              "water"
            ],
            "price": 1.5699999999999998,
            "category_name": "Αναψυκτικά"
          },
          {
            "name": "Coca Cola",
            "tags": [
              "coca",
              "cola"
            ],
            "price": 2.48,
            "category_name": "Αναψυκτικά"
          },
          {
            "name": "Coca Cola Light",
            "tags": [
              "coca",
              "cola",
              "light"
            ],
            "price": 2.22,
            "category_name": "Αναψυκτικά"
          },
          {
            "name": "Coca Cola Zero",
            "tags": [
              "coca",
              "cola",
              "zero"
            ],
            "price": 2.44,
            "category_name": "Αναψυκτικά"
          },
          {
            "name": "Πορτοκαλάδα",
            "tags": [
              "orange",
              "juice"
            ],
            "price": 2.08,
            "category_name": "Αναψυκτικά"
          },
          {
            "name": "Λεμονάδα",
            "tags": [
              "lemon",
              "juice"
            ],
            "price": 2,
            "category_name": "Αναψυκτικά"
          },
          {
            "name": "Τσιπούρα",
            "tags": [
              "bream",
              "fish"
            ],
            "price": 13.95,
            "category_name": "Θαλασσινά"
          },
          {
            "name": "Λαβράκι",
            "tags": [
              "bass",
              "fish"
            ],
            "price": 11.02,
            "category_name": "Θαλασσινά"
          },
          {
            "name": "Σαρδέλα",
            "tags": [
              "sardine",
              "fish"
            ],
            "price": 8.32,
            "category_name": "Θαλασσινά"
          },
          {
            "name": "Καλαμαράκια",
            "tags": [
              "squid",
              "fish"
            ],
            "price": 8.95,
            "category_name": "Θαλασσινά"
          },
          {
            "name": "Χωριάτικη",
            "tags": [
              "greek",
              "salad"
            ],
            "price": 6.55,
            "category_name": "Σαλάτες"
          },
          {
            "name": "Caesar's",
            "tags": [
              "caesar",
              "salad"
            ],
            "price": 7.74,
            "category_name": "Σαλάτες"
          },
          {
            "name": "Chef",
            "tags": [
              "chef",
              "salad"
            ],
            "price": 7.04,
            "category_name": "Σαλάτες"
          },
          {
            "name": "Τηγανητές Πατάτες",
            "tags": [
              "fried",
              "potato"
            ],
            "price": 4.53,
            "category_name": "Ορεκτικά"
          },
          {
            "name": "Ψωμί",
            "tags": [
              "bread"
            ],
            "price": 2.77,
            "category_name": "Ορεκτικά"
          },
          {
            "name": "Τυροπιτάκια",
            "tags": [
              "cheese pie"
            ],
            "price": 3.86,
            "category_name": "Ορεκτικά"
          },
          {
            "name": "Σαγανάκι",
            "tags": [
              "saganaki"
            ],
            "price": 6.23,
            "category_name": "Ορεκτικά"
          },
          {
            "name": "Φέτα Ψητή",
            "tags": [
              "feta"
            ],
            "price": 5.05,
            "category_name": "Ορεκτικά"
          },
          {
            "name": "Μπριζόλα",
            "tags": [
              "steack"
            ],
            "price": 10.01,
            "category_name": "Ψητά"
          },
          {
            "name": "Μπιφτέκι",
            "tags": [
              "burger"
            ],
            "price": 10.52,
            "category_name": "Ψητά"
          },
          {
            "name": "Κεμπάπ",
            "tags": [
              "kebab"
            ],
            "price": 7.28,
            "category_name": "Ψητά"
          },
          {
            "name": "Λουκάνικο",
            "tags": [
              "sausage"
            ],
            "price": 7.3,
            "category_name": "Ψητά"
          },
          {
            "name": "Κοτόπουλο",
            "tags": [
              "chicken"
            ],
            "price": 10.16,
            "category_name": "Ψητά"
          },
          {
            "name": "Σνίτσελ",
            "tags": [
              "schnitzel"
            ],
            "price": 7.63,
            "category_name": "Ψητά"
          }
        ]
    },
    {
        "_id": {
          "$oid": "642722e4f571449b429d61a1"
        },
        "type": "Ταβέρνα",
        "name": "Dictas Elit",
        "email": "Dictas_Elit@gmail.com",
        "phone": "6980471679",
        "categories": [
          "Αναψυκτικά",
          "Θαλασσινά",
          "Σαλάτες",
          "Ορεκτικά",
          "Ψητά"
        ],
        "operating_hours": {
          "sunday": "12:00 - 23:59",
          "monday": "12:00 - 23:59",
          "tuesday": "12:00 - 23:59",
          "wednesday": "12:00 - 23:59",
          "thursday": "12:00 - 23:59",
          "friday": "12:00 - 23:59",
          "saturday": "12:00 - 23:59"
        },
        "address": {
          "city": "Πάτρα",
          "street": "Harum Amet",
          "number": "140",
          "postcode": "10779",
          "country": "Greece"
        },
        "items": [
          {
            "name": "Νερό 0.5L",
            "tags": [
              "water"
            ],
            "price": 0.5,
            "category_name": "Αναψυκτικά"
          },
          {
            "name": "Νερό 1.5L",
            "tags": [
              "water"
            ],
            "price": 2.04,
            "category_name": "Αναψυκτικά"
          },
          {
            "name": "Coca Cola",
            "tags": [
              "coca",
              "cola"
            ],
            "price": 2,
            "category_name": "Αναψυκτικά"
          },
          {
            "name": "Coca Cola Light",
            "tags": [
              "coca",
              "cola",
              "light"
            ],
            "price": 2.4,
            "category_name": "Αναψυκτικά"
          },
          {
            "name": "Coca Cola Zero",
            "tags": [
              "coca",
              "cola",
              "zero"
            ],
            "price": 4,
            "category_name": "Αναψυκτικά"
          },
          {
            "name": "Πορτοκαλάδα",
            "tags": [
              "orange",
              "juice"
            ],
            "price": 2.17,
            "category_name": "Αναψυκτικά"
          },
          {
            "name": "Λεμονάδα",
            "tags": [
              "lemon",
              "juice"
            ],
            "price": 2.73,
            "category_name": "Αναψυκτικά"
          },
          {
            "name": "Τσιπούρα",
            "tags": [
              "bream",
              "fish"
            ],
            "price": 11.24,
            "category_name": "Θαλασσινά"
          },
          {
            "name": "Λαβράκι",
            "tags": [
              "bass",
              "fish"
            ],
            "price": 12.52,
            "category_name": "Θαλασσινά"
          },
          {
            "name": "Σαρδέλα",
            "tags": [
              "sardine",
              "fish"
            ],
            "price": 7.92,
            "category_name": "Θαλασσινά"
          },
          {
            "name": "Καλαμαράκια",
            "tags": [
              "squid",
              "fish"
            ],
            "price": 10.39,
            "category_name": "Θαλασσινά"
          },
          {
            "name": "Χωριάτικη",
            "tags": [
              "greek",
              "salad"
            ],
            "price": 6.8100000000000005,
            "category_name": "Σαλάτες"
          },
          {
            "name": "Caesar's",
            "tags": [
              "caesar",
              "salad"
            ],
            "price": 9.99,
            "category_name": "Σαλάτες"
          },
          {
            "name": "Chef",
            "tags": [
              "chef",
              "salad"
            ],
            "price": 9.26,
            "category_name": "Σαλάτες"
          },
          {
            "name": "Τηγανητές Πατάτες",
            "tags": [
              "fried",
              "potato"
            ],
            "price": 3.46,
            "category_name": "Ορεκτικά"
          },
          {
            "name": "Ψωμί",
            "tags": [
              "bread"
            ],
            "price": 1.71,
            "category_name": "Ορεκτικά"
          },
          {
            "name": "Τυροπιτάκια",
            "tags": [
              "cheese pie"
            ],
            "price": 5.86,
            "category_name": "Ορεκτικά"
          },
          {
            "name": "Σαγανάκι",
            "tags": [
              "saganaki"
            ],
            "price": 6.57,
            "category_name": "Ορεκτικά"
          },
          {
            "name": "Φέτα Ψητή",
            "tags": [
              "feta"
            ],
            "price": 5.35,
            "category_name": "Ορεκτικά"
          },
          {
            "name": "Μπριζόλα",
            "tags": [
              "steack"
            ],
            "price": 10.69,
            "category_name": "Ψητά"
          },
          {
            "name": "Μπιφτέκι",
            "tags": [
              "burger"
            ],
            "price": 8.34,
            "category_name": "Ψητά"
          },
          {
            "name": "Κεμπάπ",
            "tags": [
              "kebab"
            ],
            "price": 6.03,
            "category_name": "Ψητά"
          },
          {
            "name": "Λουκάνικο",
            "tags": [
              "sausage"
            ],
            "price": 8.72,
            "category_name": "Ψητά"
          },
          {
            "name": "Κοτόπουλο",
            "tags": [
              "chicken"
            ],
            "price": 10.21,
            "category_name": "Ψητά"
          },
          {
            "name": "Σνίτσελ",
            "tags": [
              "schnitzel"
            ],
            "price": 8.21,
            "category_name": "Ψητά"
          }
        ]
    },
    {
        "_id": {
          "$oid": "642722e4f571449b429d61ad"
        },
        "type": "Ιταλικό",
        "name": "Deleniti Omnes",
        "email": "Deleniti_Omnes@yahoo.com",
        "phone": "6917901275",
        "categories": [
          "Αναψυκτικά",
          "Ζυμαρικά",
          "Κρέπες",
          "Σαλάτες",
          "Pizza"
        ],
        "operating_hours": {
          "sunday": "12:00 - 23:59",
          "monday": "12:00 - 23:59",
          "tuesday": "12:00 - 23:59",
          "wednesday": "12:00 - 23:59",
          "thursday": "12:00 - 23:59",
          "friday": "12:00 - 23:59",
          "saturday": "12:00 - 23:59"
        },
        "address": {
          "city": "Αθήνα",
          "street": "Cu Vim",
          "number": "136",
          "postcode": "39953",
          "country": "Greece"
        },
        "items": [
          {
            "name": "Νερό 0.5L",
            "tags": [
              "water"
            ],
            "price": 0.5,
            "category_name": "Αναψυκτικά"
          },
          {
            "name": "Νερό 1.5L",
            "tags": [
              "water"
            ],
            "price": 2.81,
            "category_name": "Αναψυκτικά"
          },
          {
            "name": "Coca Cola",
            "tags": [
              "coca",
              "cola"
            ],
            "price": 2.75,
            "category_name": "Αναψυκτικά"
          },
          {
            "name": "Coca Cola Light",
            "tags": [
              "coca",
              "cola",
              "light"
            ],
            "price": 2.26,
            "category_name": "Αναψυκτικά"
          },
          {
            "name": "Coca Cola Zero",
            "tags": [
              "coca",
              "cola",
              "zero"
            ],
            "price": 3.85,
            "category_name": "Αναψυκτικά"
          },
          {
            "name": "Πορτοκαλάδα",
            "tags": [
              "orange",
              "juice"
            ],
            "price": 3.14,
            "category_name": "Αναψυκτικά"
          },
          {
            "name": "Λεμονάδα",
            "tags": [
              "lemon",
              "juice"
            ],
            "price": 2.92,
            "category_name": "Αναψυκτικά"
          },
          {
            "name": "Καρμπονάρα",
            "tags": [
              "carbonara",
              "pasta"
            ],
            "price": 10.93,
            "category_name": "Ζυμαρικά"
          },
          {
            "name": "Πέννες",
            "tags": [
              "pennes",
              "pasta"
            ],
            "price": 8.3,
            "category_name": "Ζυμαρικά"
          },
          {
            "name": "Σπαγγέτι",
            "tags": [
              "spaghetti",
              "pasta"
            ],
            "price": 8.38,
            "category_name": "Ζυμαρικά"
          },
          {
            "name": "Κρέπα ζαμπόν τυρί",
            "tags": [
              "ham",
              "cheese",
              "crepe"
            ],
            "price": 4.48,
            "category_name": "Κρέπες"
          },
          {
            "name": "Κρέπα special",
            "tags": [
              "special",
              "crepe"
            ],
            "price": 4.99,
            "category_name": "Κρέπες"
          },
          {
            "name": "Κρέπα 4 τυριά",
            "tags": [
              "four",
              "cheese",
              "pizza"
            ],
            "price": 4.71,
            "category_name": "Κρέπες"
          },
          {
            "name": "Κρέπα σοκολάτα",
            "tags": [
              "chocolate",
              "crepe"
            ],
            "price": 4.92,
            "category_name": "Κρέπες"
          },
          {
            "name": "κρέπα oreo",
            "tags": [
              "oreo",
              "crepe"
            ],
            "price": 5.7,
            "category_name": "Κρέπες"
          },
          {
            "name": "Κρέπα λευκή σοκολάτα",
            "tags": [
              "white",
              "chocolate",
              "crepe"
            ],
            "price": 4.97,
            "category_name": "Κρέπες"
          },
          {
            "name": "Χωριάτικη",
            "tags": [
              "greek",
              "salad"
            ],
            "price": 8.53,
            "category_name": "Σαλάτες"
          },
          {
            "name": "Caesar's",
            "tags": [
              "caesar",
              "salad"
            ],
            "price": 6.93,
            "category_name": "Σαλάτες"
          },
          {
            "name": "Chef",
            "tags": [
              "chef",
              "salad"
            ],
            "price": 8.08,
            "category_name": "Σαλάτες"
          },
          {
            "name": "Pizza Margherita",
            "tags": [
              "margherita",
              "pizza"
            ],
            "price": 13.8,
            "category_name": "Pizza"
          },
          {
            "name": "Pizza 4 τυριά",
            "tags": [
              "four",
              "cheese",
              "pizza"
            ],
            "price": 12.43,
            "category_name": "Pizza"
          },
          {
            "name": "Pizza Capricciosa",
            "tags": [
              "capricciosa",
              "pizza"
            ],
            "price": 15.35,
            "category_name": "Pizza"
          },
          {
            "name": "Pizza Diavola",
            "tags": [
              "diavola",
              "pizza"
            ],
            "price": 13.85,
            "category_name": "Pizza"
          },
          {
            "name": "Pizza Pepperoni",
            "tags": [
              "pepperoni",
              "pizza"
            ],
            "price": 10.74,
            "category_name": "Pizza"
          },
          {
            "name": "Pizza Special",
            "tags": [
              "special",
              "pizza"
            ],
            "price": 14.73,
            "category_name": "Pizza"
          }
        ]
    }
]

let ORDERS = [
    {
        "_id": {
          "$oid": "642722e4f571449b429d61b5"
        },
        "person_id": {
          "$oid": "642722e4f571449b429d5d68"
        },
        "shop_id": {
          "$oid": "642722e4f571449b429d616c"
        },
        "datetime": "2020-04-18 21:32:01",
        "status": "DELIVERED",
        "order_contains": [
          {
            "name": "Κοτόπουλο",
            "price": 9.89
          },
          {
            "name": "Σαρδέλα",
            "price": 9.06
          },
          {
            "name": "Λαβράκι",
            "price": 11.8
          }
        ],
        "payment_mean": "CARD",
        "address": {
          "city": "Αθήνα",
          "street": "Integre Cum",
          "number": "89",
          "postcode": "71283",
          "country": "Greece",
          "floor": "7",
          "bell": "Κλέων Λόντος",
          "note": null
        },
        "card": {
          "card_number": "8528357772436118",
          "cvv": "272",
          "expiration_date": "1981-01-01",
          "cardholder": "ΚΛΈΩΝ ΛΌΝΤΟΣ"
        }
    },
    {
        "_id": {
          "$oid": "642722e4f571449b429d61b6"
        },
        "person_id": {
          "$oid": "642722e4f571449b429d5d68"
        },
        "shop_id": {
          "$oid": "642722e4f571449b429d6188"
        },
        "datetime": "2022-04-18 13:51:41",
        "status": "DELIVERED",
        "order_contains": [
          {
            "name": "Κρέπα σοκολάτα",
            "price": 6.53
          },
          {
            "name": "Chef",
            "price": 7.61
          },
          {
            "name": "Καρμπονάρα",
            "price": 8.54
          },
          {
            "name": "Coca Cola Zero",
            "price": 3.77
          }
        ],
        "payment_mean": "CARD",
        "address": {
          "city": "Αθήνα",
          "street": "Stet Consetetur",
          "number": "59",
          "postcode": "76857",
          "country": "Greece",
          "floor": "5",
          "bell": "Κλέων Λόντος",
          "note": null
        },
        "card": {
          "card_number": "8528357772436118",
          "cvv": "272",
          "expiration_date": "1981-01-01",
          "cardholder": "ΚΛΈΩΝ ΛΌΝΤΟΣ"
        }
    },
    {
        "_id": {
          "$oid": "642722e4f571449b429d61b7"
        },
        "person_id": {
          "$oid": "642722e4f571449b429d5d68"
        },
        "shop_id": {
          "$oid": "642722e4f571449b429d618f"
        },
        "datetime": "2020-05-15 19:42:58",
        "status": "DELIVERED",
        "order_contains": [
          {
            "name": "Μπιφτέκι",
            "price": 10.52
          },
          {
            "name": "Σαρδέλα",
            "price": 8.32
          },
          {
            "name": "Σαρδέλα",
            "price": 8.32
          },
          {
            "name": "Chef",
            "price": 7.04
          },
          {
            "name": "Καλαμαράκια",
            "price": 8.95
          }
        ],
        "payment_mean": "CARD",
        "address": {
          "city": "Αθήνα",
          "street": "Stet Consetetur",
          "number": "59",
          "postcode": "76857",
          "country": "Greece",
          "floor": "5",
          "bell": "Κλέων Λόντος",
          "note": null
        },
        "card": {
          "card_number": "8528357772436118",
          "cvv": "272",
          "expiration_date": "1981-01-01",
          "cardholder": "ΚΛΈΩΝ ΛΌΝΤΟΣ"
        }
    },
    {
        "_id": {
          "$oid": "642722e4f571449b429d61b8"
        },
        "person_id": {
          "$oid": "642722e4f571449b429d5d68"
        },
        "shop_id": {
          "$oid": "642722e4f571449b429d61a1"
        },
        "datetime": "2021-02-19 20:57:51",
        "status": "DELIVERED",
        "order_contains": [
          {
            "name": "Καλαμαράκια",
            "price": 10.39
          },
          {
            "name": "Σαγανάκι",
            "price": 6.57
          },
          {
            "name": "Chef",
            "price": 9.26
          },
          {
            "name": "Chef",
            "price": 9.26
          }
        ],
        "payment_mean": "CARD",
        "address": {
          "city": "Αθήνα",
          "street": "Stet Consetetur",
          "number": "59",
          "postcode": "76857",
          "country": "Greece",
          "floor": "5",
          "bell": "Κλέων Λόντος",
          "note": null
        },
        "card": {
          "card_number": "8528357772436118",
          "cvv": "272",
          "expiration_date": "1981-01-01",
          "cardholder": "ΚΛΈΩΝ ΛΌΝΤΟΣ"
        }
    },
    {
        "_id": {
          "$oid": "642722e4f571449b429d61b9"
        },
        "person_id": {
          "$oid": "642722e4f571449b429d5d68"
        },
        "shop_id": {
          "$oid": "642722e4f571449b429d61ad"
        },
        "datetime": "2022-02-19 16:40:13",
        "status": "DELIVERED",
        "order_contains": [
          {
            "name": "Caesar's",
            "price": 6.93
          },
          {
            "name": "κρέπα oreo",
            "price": 5.7
          },
          {
            "name": "Pizza Pepperoni",
            "price": 10.74
          },
          {
            "name": "Λεμονάδα",
            "price": 2.92
          }
        ],
        "payment_mean": "CASH",
        "address": {
          "city": "Αθήνα",
          "street": "Integre Cum",
          "number": "89",
          "postcode": "71283",
          "country": "Greece",
          "floor": "7",
          "bell": "Κλέων Λόντος",
          "note": null
        }
    }
];

// TODO : FETCH FROM DB
class RequestMaker {
    constructor() {}

    fetchCategories() {
        return ["Burgers", "Pizza", "Αναψυκτικά", "Γλυκά",
                "Ζυμαρικά", "Θαλασσινά", "Καφέδες", "Κρέπες",
                "Μαγειρευτά", "Ορεκτικά", "Σαλάτες", "Σουβλάκια",
                "Σφολιάτες", "Ψητά"
        ];
    }

    fetchShopsPerAddress(address) {
        city = address["city"];
        shopsList = []

        for (shop of SHOPS) {
            if (shop["address"]["city"] == city) {
                shopsList.push(shop);
            }
        }
        return shopsList;
    }

    fetchOrders(person) {
        return ORDERS
    }

}

export {RequestMaker};
