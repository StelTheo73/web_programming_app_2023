import random
from string import ascii_uppercase, ascii_lowercase

LOREM_IPSUM_TEXT = "Lorem ipsum dolor sit amet, fugit habemus vel id. Te vix sonet regione, quo cu tollit pertinacia, efficiendi deterruisset ne cum. Alii appetere eum ut, id simul laudem maiestatis eum, ius habeo recteque definitionem an. Legere fuisset delicata id usu, eu aperiam alterum cum, cu mel eros falli.\
    Vivendum concludaturque vix ut. Legimus luptatum mei ex, oblique nominavi noluisse vix ei. Ei option eleifend posidonium per, facer latine ponderum in vis. Eu mei verear perfecto, qui id delectus percipitur interpretaris. Nostro luptatum recusabo ea sea, in mel erat audire. Vel impedit denique te.\
    Eu verear oblique vituperata mei, est ei vidisse dolores, eam alienum postulant splendide at. Vim ne tritani praesent, ceteros oporteat ut vis. Ad putant verterem expetendis nam, ad vel viris appareat. Nec ne audire vulputate, id has erat clita, sea nulla erroribus id. Ea vix mundi scriptorem, timeam deserunt volutpat ne eos. Eu tritani dolores sed, munere nemore utroque no vix, veri instructior eos no. No legimus sadipscing nam.\
    Has duis ullum munere in. In sint oblique consequat has, ponderum salutandi mei ne, eu pro dicit officiis placerat. Ea purto case has. Mentitum prodesset philosophia mea id. Admodum accumsan ex vis.\
    Mea et elit suscipit dissentias, et debet choro iudicabit vis. Debet maiorum vituperata mel ne, mel omnes mucius labitur te. Utinam homero et nam. Duo albucius adipisci cotidieque an, nam libris reprehendunt ne. Quis equidem mel no.\
    Vim eu quot suavitate complectitur. Ut nam harum aliquid, quo ea dolorem hendrerit, forensibus adversarium mea in. Per quando nemore no, mea ex efficiendi suscipiantur. Cum ea discere reformidans, te sit enim prodesset. Usu ut modus delenit, purto deserunt prodesset eum ne, unum luptatum vim et. Mel invenire periculis comprehensam ad, eos id omnesque percipitur, cu qui probo detracto deleniti.\
    Movet solet quaerendum his ex. Ei libris adipisci nam. Ex mollis ancillae recteque vix. Vix detracto delectus intellegam cu, eius fuisset interesset duo ei. At bonorum suavitate qui. Eam dictas percipitur dissentias id, dissentiunt intellegebat ut per.\
    Cum et quem alia dicam, at duo ferri nullam dolorem, pri cibo torquatos ne. Sit at intellegat consectetuer, mel decore ceteros et. Sit an laudem omnium volumus. Consul saperet pro ne. Dicit everti interpretaris no mea. His no vocent timeam eleifend, te vim accusam appareat, elit inani ridens te sit.\
    Id pri libris similique. Enim omnis errem cum an, id scripta reformidans eum. Cum duis labores eu, duo falli iusto accusata te, audire appareat corrumpit ad vis. Eum cetero nusquam cu, probo ubique te nam. Tritani prompta vim ex.\
    At vel nostro cetero oporteat. Discere democritum eum cu. Stet denique scaevola in has, laoreet deterruisset consequuntur no usu, in putent nostro delectus per. Platonem suavitate definiebas cum no, cum at atqui dicta periculis. An eros accusam noluisse sed, te sea harum tincidunt moderatius, ut viris tritani pri. Ne eum albucius mnesarchum, sonet sensibus perpetua te quo.\
    Ex latine laoreet vim, eum odio mucius nusquam no. Dicam erroribus tincidunt per ei. An vim integre postulant intellegam, erat reque fuisset at nam. Iriure scaevola luptatum qui ad, molestiae consequuntur nam at. Fastidii laboramus nam ei, te has dolore ancillae, ut ubique gloriatur forensibus vim. Vidisse argumentum necessitatibus ei sed, te sed laudem debitis fuisset, eu noster laboramus pri.\
    Diam menandri forensibus nam ea. Cum consetetur intellegam cu, ea populo reformidans per. Eum cu vocibus habemus deleniti, ei nam natum qualisque conceptam, eu mel ponderum repudiare. Eu usu omnes facilisis, mutat etiam ei vim. Mel placerat phaedrum petentium id, diam invenire voluptatibus ei eum, ea iusto delectus appellantur vix. Et duis impedit quaestio vim, commune officiis repudiandae at eam, nam et fugit habemus petentium. Et sed sumo movet virtute.\
    Deseruisse sadipscing in cum, pri id postea fuisset. Sed et debet viris definitionem, mucius mediocrem cum et, te mel essent scripserit intellegebat. An per quaestio vulputate, ne vis oporteat pericula prodesset. Has malorum erroribus id, an nec harum perpetua accommodare.\
    Ut aeque debitis est, ne sit iudico scripserit. Esse numquam ut vim, has sint mundi splendide at. Ne mel cetero consetetur, an qui discere ancillae. Cu nemore volumus repudiandae quo. No regione quaerendum est, vis et integre placerat repudiandae.\
    Ei vel posse legere indoctum, nam wisi ocurreret conceptam et. Melius commune assentior est eu, cu dico atqui pro. Minimum complectitur no qui. Nonumes accumsan cum at, qui idque persecuti definitionem an, pro in libris quaeque eloquentiam. Ei dolores sensibus vim, admodum invidunt his ex."

NAMES_JSON = {
    "repo": {
        "world": "https://github.com/thm/uinames/blob/master/names.json",
        "full info": "https://gist.github.com/kyodgorbek/4610d2ae66574c93fc96a97af4cfdb3b"
    },
    "region":"Greece",
    "male":[
        "Αλέξανδρος","Ανδρέας","Αριστοτέλης","Αρτέμης","Γεώργιος","Γεράσιμος","Γρηγόριος",
        "Δάρδανος","Δήμος","Δίας","Δαμιανός","Δημήτριος","Διόνυσος","Διαγόρας","Διομήδης","Διονύσιος",
        "Ερμής","Ερμής","Ευκλείδης","Ηλίας","Ηρακλής","Θεμιστοκλής","Θεοφάνης","Θεοχάρης","Ιάκωβος",
        "Ιάσονας","Ιπποκράτης","Ισίδωρος","Ιωάννης","Κλέων","Κλεομένης","Κλεομήδης","Κωνσταντίνος","Λεωνίδας",
        "Μανουήλ","Μενέλαος","Παναγιώτης","Σταμάτης","Στυλιανός","Σωτήριος"
    ],
    "female":[
        "Δεσποινα","Σοφία","Άννα","Στέλλα","Εύα","Έλενα","Ελένη","Ιωάννα","Ελίνα","Λουΐζα","Μαρία"
    ],
    "male_surnames": [
        "Αβραμίδης","Αγγελίδης","Αγγελόπουλος","Αγγελόπουλος","Αθανασιάδης","Αθανασίου",
        "Ακρίδας","Αλαβάνος","Αλαφούζος","Αλεβιζόπουλος","Αλεβίζος","Αλεξάκης","Αλεξίου","Αλεξόπουλος",
        "Αλεξανδρίδης","Αλεξάνδρου","Αλεξιάδης","Αλιβιζάτος","Αναγνώστου","Αναγνωστάκης","Αναστασιάδης",
        "Ανδρεάδης","Ανδρέου","Αντωνιάδης","Αντωνόπουλος","Αξιώτης","Αποστόλου","Αποστολίδης","Αρβανίτης",
        "Αργυριάδης","Ασπάσιος","Αυγερινός","Βάμβας","Βαμβακάς","Βαρνακιώτης","Βαρουξής","Βασιλόπουλος",
        "Βασιλειάδης","Βασιλικός","Βενιζέλος","Βέργας","Βικελίδης","Βιλαέτης","Βιτάλη","Βιτάλης","Βλαστός",
        "Βλαχόπουλος","Βούλγαρης","Βονόρτας","Βουγιουκλάκης","Βουρδουμπάς","Γαλάνης","Γαλάνης","Γερμανός",
        "Γεωργίου","Γεωργιάδης","Γιάγκος","Γιαννόπουλος","Γιαννακόπουλος","Γιάνναρης","Γκόφας","Γλυκύς",
        "Γούναρης","Γούσιος","Δαγκλής","Δαμασκηνός","Δασκαλόπουλος","Δεσποτόπουλος","Δημαράς","Δημητρίου",
        "Δημητρακόπουλος","Διαμαντόπουλος","Δοξαράς","Δουμπιώτης","Δουρέντης","Δράκος","Δραγούμης",
        "Δυοβουνιώτης","Ελευθερόπουλος","Ελευθεριάδης","Ελευθερίου","Ζάνος","Ζάππας","Ζάρκος","Ζέρβας","Ζαΐμης",
        "Ζαφειρόπουλος","Ζερβός","Ζερβός","Ζυγομαλάς","Ζωγράφος","Ηλιόπουλος","Θεοδοσίου","Θεοδωρίδης","Ιωαννίδης",
        "Ιωάννου","Καζαντζής","Κακριδής","Καλάρης","Καλύβας","Καλαμογδάρτης","Καλλιγάς","Καλογιάννης","Κανακάρης-Ρούφος",
        "Καραβίας","Καραμήτσος","Καραμανλής","Καρράς","Κασιδιάρης","Καψής","Κεδίκογλου","Κούνδουρος","Κολιάτσος","Κομνηνός",
        "Κοντολέων","Κοντόσταυλος","Κόρακας","Κορνάρος","Κορομηλάς","Κορωναίος","Κοσμόπουλος","Κοτζιάς","Κουβέλης",
        "Κουντουριώτης","Κουρμούλης","Κουταλιανός","Κρεστενίτης","Κυπραίος","Κωνσταντίνου","Κωνσταντόπουλος","Λόντος","Λύκος",
        "Λύτρας","Λαγός","Λαιμός","Λαμέρας","Λαμπρόπουλος","Λειβαδάς","Λιάπης","Λιακόπουλος","Λούλης","Λούπης","Μάγκας",
        "Μήτζου","Μαγγίνας","Μακρής","Μαλαξός","Μανιάκης","Μαρής","Μαρκόπουλος","Μαυρίδης","Μαυρογένης","Μελετόπουλος",
        "Μεσσηνέζης","Μεταξάς","Μητσοτάκης","Μιαούλης","Μιχαηλίδης","Μιχαλολιάκος","Μοσχοβάκης","Μπότσαρης","Μπλέτσας",
        "Νικολαΐδης","Νικολάκος","Οικονόμου","Ουζουνίδης","Ουζουνίδης","Πανταζής","Παπαγεωργίου","Παπάγος","Παπαδάκης",
        "Παπαδόπουλος","Παπάζογλου","Παπακώστας","Παπακωνσταντίνου","Παπανδρέου","Παπανικολάου","Παπαντωνίου","Παπαστεφάνου",
        "Παπαφιλίππου","Παπαϊωάννου","Παππάς","Παυλόπουλος","Παχής","Πολίτης","Πυλαρινός","Ρέντης","Ράγκος","Ρόκας",
        "Σαμαράς","Σκλαβούνος","Σπανός","Σπηλιωτόπουλος","Σπυρόπουλος","Στεφανόπουλος","Ταμτάκος","Τοκατλίδης","Τοκατλίδης",
        "Τρικούπης","Φιλιππίδης","Φλέσσας","Φραγκούδης","Φωτόπουλος","Χατζηιωάννου","Χρηστόπουλος","Χριστόπουλος"
    ],
    "female_surnames" : [
        "Αγγελίδου","Αγγελοπούλου","Αθανασίου","Αλεξίου","Αλεξάνδρου","Αναγνώστου",
        "Ανδρέου","Αντωνοπούλου","Αποστόλου","Βιτάλη","Γαλάνη","Γερμανού",
        "Δασκαλοπούλου","Δελή","Δημητρίου","Διδασκάλου","Ελευθερίου","Ζαχαρίου",
        "Ζωγράφου","Θεοδοσίου","Ιωάννου","Κωνσταντίνου","Μήτζου","Μακρή","Οικονόμου",
        "Παπαγεωργίου","Παπάζογλου","Παπακωνσταντίνου","Παπανδρέου","Παπανικολάου",
        "Παπαντωνίου","Παπαστεφάνου","Παπαφιλίππου","Παπαϊωάννου","Σπανού","Ταρσούλη",
        "Τρικούπη"
    ]
}

LOREM_IPSUM_TEXT = LOREM_IPSUM_TEXT.replace(".", "")
LOREM_IPSUM_TEXT = LOREM_IPSUM_TEXT.replace(",", "")
LOREM_IPSUM = LOREM_IPSUM_TEXT.split(" ")

MONTHS = ["January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November",
        "December"
    ]

COUNTRIES = [
    ('US', 'United States'),
    ('AF', 'Afghanistan'),
    ('AL', 'Albania'),
    ('DZ', 'Algeria'),
    ('AS', 'American Samoa'),
    ('AD', 'Andorra'),
    ('AO', 'Angola'),
    ('AI', 'Anguilla'),
    ('AG', 'Antigua And Barbuda'),
    ('AR', 'Argentina'),
    ('AM', 'Armenia'),
    ('AW', 'Aruba'),
    ('AU', 'Australia'),
    ('AT', 'Austria'),
    ('AZ', 'Azerbaijan'),
    ('BS', 'Bahamas'),
    ('BH', 'Bahrain'),
    ('BD', 'Bangladesh'),
    ('BB', 'Barbados'),
    ('BY', 'Belarus'),
    ('BE', 'Belgium'),
    ('BZ', 'Belize'),
    ('BJ', 'Benin'),
    ('BM', 'Bermuda'),
    ('BT', 'Bhutan'),
    ('BO', 'Bolivia'),
    ('BA', 'Bosnia And Herzegowina'),
    ('BW', 'Botswana'),
    ('BV', 'Bouvet Island'),
    ('BR', 'Brazil'),
    ('BN', 'Brunei Darussalam'),
    ('BG', 'Bulgaria'),
    ('BF', 'Burkina Faso'),
    ('BI', 'Burundi'),
    ('KH', 'Cambodia'),
    ('CM', 'Cameroon'),
    ('CA', 'Canada'),
    ('CV', 'Cape Verde'),
    ('KY', 'Cayman Islands'),
    ('CF', 'Central African Rep'),
    ('TD', 'Chad'),
    ('CL', 'Chile'),
    ('CN', 'China'),
    ('CX', 'Christmas Island'),
    ('CC', 'Cocos Islands'),
    ('CO', 'Colombia'),
    ('KM', 'Comoros'),
    ('CG', 'Congo'),
    ('CK', 'Cook Islands'),
    ('CR', 'Costa Rica'),
    ('CI', 'Cote D`ivoire'),
    ('HR', 'Croatia'),
    ('CU', 'Cuba'),
    ('CY', 'Cyprus'),
    ('CZ', 'Czech Republic'),
    ('DK', 'Denmark'),
    ('DJ', 'Djibouti'),
    ('DM', 'Dominica'),
    ('DO', 'Dominican Republic'),
    ('TP', 'East Timor'),
    ('EC', 'Ecuador'),
    ('EG', 'Egypt'),
    ('SV', 'El Salvador'),
    ('GQ', 'Equatorial Guinea'),
    ('ER', 'Eritrea'),
    ('EE', 'Estonia'),
    ('ET', 'Ethiopia'),
    ('FK', 'Falkland Islands (Malvinas)'),
    ('FO', 'Faroe Islands'),
    ('FJ', 'Fiji'),
    ('FI', 'Finland'),
    ('FR', 'France'),
    ('GF', 'French Guiana'),
    ('PF', 'French Polynesia'),
    ('TF', 'French S. Territories'),
    ('GA', 'Gabon'),
    ('GM', 'Gambia'),
    ('GE', 'Georgia'),
    ('DE', 'Germany'),
    ('GH', 'Ghana'),
    ('GI', 'Gibraltar'),
    ('GR', 'Greece'),
    ('GL', 'Greenland'),
    ('GD', 'Grenada'),
    ('GP', 'Guadeloupe'),
    ('GU', 'Guam'),
    ('GT', 'Guatemala'),
    ('GN', 'Guinea'),
    ('GW', 'Guinea-bissau'),
    ('GY', 'Guyana'),
    ('HT', 'Haiti'),
    ('HN', 'Honduras'),
    ('HK', 'Hong Kong'),
    ('HU', 'Hungary'),
    ('IS', 'Iceland'),
    ('IN', 'India'),
    ('ID', 'Indonesia'),
    ('IR', 'Iran'),
    ('IQ', 'Iraq'),
    ('IE', 'Ireland'),
    ('IL', 'Israel'),
    ('IT', 'Italy'),
    ('JM', 'Jamaica'),
    ('JP', 'Japan'),
    ('JO', 'Jordan'),
    ('KZ', 'Kazakhstan'),
    ('KE', 'Kenya'),
    ('KI', 'Kiribati'),
    ('KP', 'Korea (North)'),
    ('KR', 'Korea (South)'),
    ('KW', 'Kuwait'),
    ('KG', 'Kyrgyzstan'),
    ('LA', 'Laos'),
    ('LV', 'Latvia'),
    ('LB', 'Lebanon'),
    ('LS', 'Lesotho'),
    ('LR', 'Liberia'),
    ('LY', 'Libya'),
    ('LI', 'Liechtenstein'),
    ('LT', 'Lithuania'),
    ('LU', 'Luxembourg'),
    ('MO', 'Macau'),
    ('MK', 'Macedonia'),
    ('MG', 'Madagascar'),
    ('MW', 'Malawi'),
    ('MY', 'Malaysia'),
    ('MV', 'Maldives'),
    ('ML', 'Mali'),
    ('MT', 'Malta'),
    ('MH', 'Marshall Islands'),
    ('MQ', 'Martinique'),
    ('MR', 'Mauritania'),
    ('MU', 'Mauritius'),
    ('YT', 'Mayotte'),
    ('MX', 'Mexico'),
    ('FM', 'Micronesia'),
    ('MD', 'Moldova'),
    ('MC', 'Monaco'),
    ('MN', 'Mongolia'),
    ('MS', 'Montserrat'),
    ('MA', 'Morocco'),
    ('MZ', 'Mozambique'),
    ('MM', 'Myanmar'),
    ('NA', 'Namibia'),
    ('NR', 'Nauru'),
    ('NP', 'Nepal'),
    ('NL', 'Netherlands'),
    ('AN', 'Netherlands Antilles'),
    ('NC', 'New Caledonia'),
    ('NZ', 'New Zealand'),
    ('NI', 'Nicaragua'),
    ('NE', 'Niger'),
    ('NG', 'Nigeria'),
    ('NU', 'Niue'),
    ('NF', 'Norfolk Island'),
    ('MP', 'Northern Mariana Islands'),
    ('NO', 'Norway'),
    ('OM', 'Oman'),
    ('PK', 'Pakistan'),
    ('PW', 'Palau'),
    ('PA', 'Panama'),
    ('PG', 'Papua New Guinea'),
    ('PY', 'Paraguay'),
    ('PE', 'Peru'),
    ('PH', 'Philippines'),
    ('PN', 'Pitcairn'),
    ('PL', 'Poland'),
    ('PT', 'Portugal'),
    ('PR', 'Puerto Rico'),
    ('QA', 'Qatar'),
    ('RE', 'Reunion'),
    ('RO', 'Romania'),
    ('RU', 'Russian Federation'),
    ('RW', 'Rwanda'),
    ('KN', 'Saint Kitts And Nevis'),
    ('LC', 'Saint Lucia'),
    ('VC', 'St Vincent/Grenadines'),
    ('WS', 'Samoa'),
    ('SM', 'San Marino'),
    ('ST', 'Sao Tome'),
    ('SA', 'Saudi Arabia'),
    ('SN', 'Senegal'),
    ('SC', 'Seychelles'),
    ('SL', 'Sierra Leone'),
    ('SG', 'Singapore'),
    ('SK', 'Slovakia'),
    ('SI', 'Slovenia'),
    ('SB', 'Solomon Islands'),
    ('SO', 'Somalia'),
    ('ZA', 'South Africa'),
    ('ES', 'Spain'),
    ('LK', 'Sri Lanka'),
    ('SH', 'St. Helena'),
    ('PM', 'St.Pierre'),
    ('SD', 'Sudan'),
    ('SR', 'Suriname'),
    ('SZ', 'Swaziland'),
    ('SE', 'Sweden'),
    ('CH', 'Switzerland'),
    ('SY', 'Syrian Arab Republic'),
    ('TW', 'Taiwan'),
    ('TJ', 'Tajikistan'),
    ('TZ', 'Tanzania'),
    ('TH', 'Thailand'),
    ('TG', 'Togo'),
    ('TK', 'Tokelau'),
    ('TO', 'Tonga'),
    ('TT', 'Trinidad And Tobago'),
    ('TN', 'Tunisia'),
    ('TR', 'Turkey'),
    ('TM', 'Turkmenistan'),
    ('TV', 'Tuvalu'),
    ('UG', 'Uganda'),
    ('UA', 'Ukraine'),
    ('AE', 'United Arab Emirates'),
    ('UK', 'United Kingdom'),
    ('UY', 'Uruguay'),
    ('UZ', 'Uzbekistan'),
    ('VU', 'Vanuatu'),
    ('VA', 'Vatican City State'),
    ('VE', 'Venezuela'),
    ('VN', 'Viet Nam'),
    ('VG', 'Virgin Islands (British)'),
    ('VI', 'Virgin Islands (U.S.)'),
    ('YE', 'Yemen'),
    ('YU', 'Yugoslavia'),
    ('ZR', 'Zaire'),
    ('ZM', 'Zambia'),
    ('ZW', 'Zimbabwe')
]

DOMAINS = ["gmail", "hotmail", "yahoo"]

UPPER_LETTERS = ascii_uppercase
LOWER_LETTERS = ascii_lowercase
NUMBERS = "0123456789"

def random_choice(string_sequence, length):
    x = ""
    for _ in range(length):
        x += random.choice(string_sequence)
    return x

def random_email():
    return  random_choice(NUMBERS, random.randint(3, 5)) + random_choice(LOWER_LETTERS+UPPER_LETTERS, random.randint(3, 5)) + "@" + random.choice(DOMAINS) + ".com"

def random_date(start_year = 1970, end_year = 2008, start_month = 1, end_month = 12):
    year = random.randint(start_year, end_year)
    month = random.randint(start_month, end_month)

    if(month == 2):
        day = random.randint(1, 28)
    elif(month in [4, 6, 9, 11]):
        day = random.randint(1, 30)
    else:
        day = random.randint(1, 31)

    return f"{year}-{month}-{day}"

def random_time():
    hour = str(random.randint(0, 23))
    minute = str(random.randint(0, 59))
    second = str(random.randint(0, 59))
    if len(hour) == 1:
        hour = "0" + hour
    if len(minute) == 1:
        minute = "0" + minute
    if len(second) == 1:
        second = "0" + second
    return f"{hour}:{minute}:{second}"

def random_datetime(start_year = 1970, end_year = 2008):
    date = random_date(start_year, end_year)
    time = random_time()
    return f"{date} {time}"

def random_id(no_of_characters):
    possible_characters = UPPER_LETTERS + NUMBERS
    return random_choice(possible_characters, no_of_characters)
