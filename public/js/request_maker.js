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
  { '_id': '642d12fd9f0c2c52ba5b8649',
  'person_id': '642d12fd9f0c2c52ba5b81f6',       
  'shop_id': '642d12fd9f0c2c52ba5b85e9',
  'datetime': '2022-10-17 11:45:29',
  'status': 'DELIVERED',
  'order_contains': [{'name': 'Μπριζόλα', 'price': 8.68}],  
  'payment_mean': 'GOOGLE PAY',
  'address': { 'city': 'Θεσσαλονίκη',
               'street': 'Recteque Consul',
               'number': '17',
               'postcode': '68098',
               'country': 'Greece',
               'floor': '7',
               'bell': 'Δίας Παππάς',
               'note': null},
  'rating': 5,
  'shop_name': 'Officiis Nam',
  'shop_address': { 'city': 'Θεσσαλονίκη',
                    'street': 'Erroribus Erat',
                    'number': '53',
                    'postcode': '25734',
                    'country': 'Greece'},
  'shop_phone': '6974346622',
  'shop_email': 'Officiis_Nam@gmail.com'}
,
{ '_id': '642d12fd9f0c2c52ba5b8644',
  'person_id': '642d12fd9f0c2c52ba5b81f6',       
  'shop_id': '642d12fd9f0c2c52ba5b85eb',
  'datetime': '2022-03-7 06:19:45',
  'status': 'DELIVERED',
  'order_contains': [ {'name': 'Κεμπάπ', 'price': 7.58},    
                      {'name': 'Νερό 0.5L', 'price': 0.5},  
                      {'name': 'Λεμονάδα', 'price': 2.09},  
                      {'name': 'Τσιπούρα', 'price': 12.67}],
  'payment_mean': 'CASH',
  'address': { 'city': 'Θεσσαλονίκη',
               'street': 'Recteque Consul',
               'number': '17',
               'postcode': '68098',
               'country': 'Greece',
               'floor': '7',
               'bell': 'Δίας Παππάς',
               'note': null},
  'rating': 4,
  'shop_name': 'Melius Definitionem',
  'shop_address': { 'city': 'Πάτρα',
                    'street': 'Oporteat Quo',
                    'number': '8',
                    'postcode': '63034',
                    'country': 'Greece'},
  'shop_phone': '6991374922',
  'shop_email': 'Melius_Definitionem@gmail.com'}
,
{ '_id': '642d12fd9f0c2c52ba5b8647',
  'person_id': '642d12fd9f0c2c52ba5b81f6',
  'shop_id': '642d12fd9f0c2c52ba5b85e4',
  'datetime': '2022-02-31 22:52:45',
  'status': 'DELIVERED',
  'order_contains': [{'name': 'Pizza Special', 'price': 15.59}],
  'payment_mean': 'CASH',
  'address': { 'city': 'Θεσσαλονίκη',
               'street': 'Recteque Consul',
               'number': '17',
               'postcode': '68098',
               'country': 'Greece',
               'floor': '7',
               'bell': 'Δίας Παππάς',
               'note': null},
  'rating': 2,
  'shop_name': 'Pericula Vel',
  'shop_address': { 'city': 'Θεσσαλονίκη',
                    'street': 'Ea Te',
                    'number': '144',
                    'postcode': '95537',
                    'country': 'Greece'},
  'shop_phone': '6967349577',
  'shop_email': 'Pericula_Vel@yahoo.com'}
,
{ '_id': '642d12fd9f0c2c52ba5b864b',
  'person_id': '642d12fd9f0c2c52ba5b81f6',
  'shop_id': '642d12fd9f0c2c52ba5b8629',
  'datetime': '2021-07-13 02:26:48',
  'status': 'DELIVERED',
  'order_contains': [{'name': 'Λαβράκι', 'price': 12.64}],
  'payment_mean': 'GOOGLE PAY',
  'address': { 'city': 'Θεσσαλονίκη',
               'street': 'Recteque Consul',
               'number': '17',
               'postcode': '68098',
               'country': 'Greece',
               'floor': '7',
               'bell': 'Δίας Παππάς',
               'note': null},
  'rating': 1,
  'shop_name': 'Suavitate Ubique',
  'shop_address': { 'city': 'Θεσσαλονίκη',
                    'street': 'Sint Saperet',
                    'number': '57',
                    'postcode': '30572',
                    'country': 'Greece'},
  'shop_phone': '6925385275',
  'shop_email': 'Suavitate_Ubique@yahoo.com'}
,
{ '_id': '642d12fd9f0c2c52ba5b8645',
  'person_id': '642d12fd9f0c2c52ba5b81f6',
  'shop_id': '642d12fd9f0c2c52ba5b85f0',
  'datetime': '2020-12-22 23:14:44',
  'status': 'DELIVERED',
  'order_contains': [ {'name': 'Λεμονάδα', 'price': 3.51},
                      {'name': 'Χωριάτικη', 'price': 9.58}],
  'payment_mean': 'CARD',
  'address': { 'city': 'Θεσσαλονίκη',
               'street': 'Recteque Consul',
               'number': '17',
               'postcode': '68098',
               'country': 'Greece',
               'floor': '7',
               'bell': 'Δίας Παππάς',
               'note': null},
  'rating': 3,
  'card': { 'card_number': '2164002006127014',
            'cvv': '079',
            'expiration_date': '2025-04',
            'cardholder': 'ΔΊΑΣ ΠΑΠΠΆΣ'},
  'shop_name': 'Erroribus Sed',
  'shop_address': { 'city': 'Πάτρα',
                    'street': 'Duis Latine',
                    'number': '171',
                    'postcode': '30922',
                    'country': 'Greece'},
  'shop_phone': '6996375109',
  'shop_email': 'Erroribus_Sed@hotmail.com'}
,
{ '_id': '642d12fd9f0c2c52ba5b864c',
  'person_id': '642d12fd9f0c2c52ba5b81f6',
  'shop_id': '642d12fd9f0c2c52ba5b85f6',
  'datetime': '2020-10-10 20:45:05',
  'status': 'DELIVERED',
  'order_contains': [ {'name': 'Λουκανικόπιτα', 'price': 2.4},
                      {'name': 'Λουκανικόπιτα', 'price': 2.4},
                      {'name': 'Freddo Espresso', 'price': 2.12}],
  'payment_mean': 'CARD',
  'address': { 'city': 'Αθήνα',
               'street': 'Sit Has',
               'number': '106',
               'postcode': '24032',
               'country': 'Greece',
               'floor': '5',
               'bell': 'Δίας Παππάς',
               'note': null},
  'rating': 4,
  'card': { 'card_number': '2164002006127014',
            'cvv': '079',
            'expiration_date': '2025-04',
            'cardholder': 'ΔΊΑΣ ΠΑΠΠΆΣ'},
  'shop_name': 'Quaestio Ut',
  'shop_address': { 'city': 'Αθήνα',
                    'street': 'Nam Purto',
                    'number': '123',
                    'postcode': '10552',
                    'country': 'Greece'},
  'shop_phone': '6940178830',
  'shop_email': 'Quaestio_Ut@yahoo.com'}
,
{ '_id': '642d12fd9f0c2c52ba5b864a',
  'person_id': '642d12fd9f0c2c52ba5b81f6',
  'shop_id': '642d12fd9f0c2c52ba5b863a',
  'datetime': '2020-09-9 00:50:34',
  'status': 'DELIVERED',
  'order_contains': [{'name': 'Παγωτό', 'price': 2.03}],
  'payment_mean': 'GOOGLE PAY',
  'address': { 'city': 'Θεσσαλονίκη',
               'street': 'Recteque Consul',
               'number': '17',
               'postcode': '68098',
               'country': 'Greece',
               'floor': '7',
               'bell': 'Δίας Παππάς',
               'note': null},
  'rating': 3,
  'shop_name': 'Ne Cu',
  'shop_address': { 'city': 'Θεσσαλονίκη',
                    'street': 'Hendrerit Dolor',
                    'number': '177',
                    'postcode': '27191',
                    'country': 'Greece'},
  'shop_phone': '6959160092',
  'shop_email': 'Ne_Cu@hotmail.com'}
,
{ '_id': '642d12fd9f0c2c52ba5b8646',
  'person_id': '642d12fd9f0c2c52ba5b81f6',
  'shop_id': '642d12fd9f0c2c52ba5b861d',
  'datetime': '2020-08-11 00:22:52',
  'status': 'DELIVERED',
  'order_contains': [ {'name': 'Πέννες', 'price': 8.43},
                      {'name': 'Pizza Capricciosa', 'price': 10.21},
                      {'name': 'Pizza Diavola', 'price': 13.78},
                      {'name': 'Κρέπα σοκολάτα', 'price': 4.13}],
  'payment_mean': 'CASH',
  'address': { 'city': 'Θεσσαλονίκη',
               'street': 'Recteque Consul',
               'number': '17',
               'postcode': '68098',
               'country': 'Greece',
               'floor': '7',
               'bell': 'Δίας Παππάς',
               'note': null},
  'rating': 1,
  'shop_name': 'Pro His',
  'shop_address': { 'city': 'Θεσσαλονίκη',
                    'street': 'An Moderatius',
                    'number': '24',
                    'postcode': '95394',
                    'country': 'Greece'},
  'shop_phone': '6948237183',
  'shop_email': 'Pro_His@hotmail.com'}
,
{ '_id': '642d12fd9f0c2c52ba5b8648',
  'person_id': '642d12fd9f0c2c52ba5b81f6',
  'shop_id': '642d12fd9f0c2c52ba5b8618',
  'datetime': '2020-05-31 19:22:12',
  'status': 'DELIVERED',
  'order_contains': [ {'name': 'Σουβλάκι Χοιρινό σε πίτα', 'price': 4.58},
                      {'name': 'Μπιφτέκι', 'price': 7.22},
                      {'name': 'Πορτοκαλάδα', 'price': 3.89},
                      {'name': 'Chef', 'price': 8.34},
                      {'name': 'Coca Cola Light', 'price': 2.7}],
  'payment_mean': 'CARD',
  'address': { 'city': 'Αθήνα',
               'street': 'Sit Has',
               'number': '106',
               'postcode': '24032',
               'country': 'Greece',
               'floor': '5',
               'bell': 'Δίας Παππάς',
               'note': null},
  'rating': 1,
  'card': { 'card_number': '6177775241138187',
            'cvv': '793',
            'expiration_date': '2024-02',
            'cardholder': 'ΔΊΑΣ ΠΑΠΠΆΣ'},
  'shop_name': 'Nam Te',
  'shop_address': { 'city': 'Αθήνα',
                    'street': 'Eum Legere',
                    'number': '49',
                    'postcode': '42925',
                    'country': 'Greece'},
  'shop_phone': '6942158345',
  'shop_email': 'Nam_Te@yahoo.com'}
,
{ '_id': '642d12fd9f0c2c52ba5b8643',
  'person_id': '642d12fd9f0c2c52ba5b81f6',
  'shop_id': '642d12fd9f0c2c52ba5b85f9',
  'datetime': '2020-03-16 09:59:12',
  'status': 'DELIVERED',
  'order_contains': [ {'name': 'Φέτα Ψητή', 'price': 5.5600000000000005},
                      {'name': 'Σαγανάκι', 'price': 6.71},
                      {'name': 'Σαγανάκι', 'price': 6.71},
                      {'name': 'Τυροπιτάκια', 'price': 3.84}],
  'payment_mean': 'CARD',
  'address': { 'city': 'Θεσσαλονίκη',
               'street': 'Recteque Consul',
               'number': '17',
               'postcode': '68098',
               'country': 'Greece',
               'floor': '7',
               'bell': 'Δίας Παππάς',
               'note': null},
  'rating': 1,
  'card': { 'card_number': '2164002006127014',
            'cvv': '079',
            'expiration_date': '2025-04',
            'cardholder': 'ΔΊΑΣ ΠΑΠΠΆΣ'},
  'shop_name': 'Habemus Ancillae',
  'shop_address': { 'city': 'Θεσσαλονίκη',
                    'street': 'Suavitate Vis',
                    'number': '121',
                    'postcode': '26164',
                    'country': 'Greece'},
  'shop_phone': '6931882498',
  'shop_email': 'Habemus_Ancillae@gmail.com'}
]

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
