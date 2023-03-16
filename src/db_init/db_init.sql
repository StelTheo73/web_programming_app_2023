-- FLUSH DATABASE
DROP TABLE IF EXISTS Person;
DROP TABLE IF EXISTS Address;
DROP TABLE IF EXISTS Card;
DROP TABLE IF EXISTS Order_;
DROP TABLE IF EXISTS Contains;
DROP TABLE IF EXISTS Item;
DROP TABLE IF EXISTS Option;
DROP TABLE IF EXISTS Option_Value;
DROP TABLE IF EXISTS Category;
DROP TABLE IF EXISTS Has_Category;
DROP TABLE IF EXISTS Shop;
DROP TABLE IF EXISTS Shop_Address;
DROP TABLE IF EXISTS Operating_Hours;
DROP TABLE IF EXISTS Review;

-- ENABLE FOREIGN KEYS
PRAGMA foreign_keys = ON;

-- CREATE TABLES

-- Person
CREATE TABLE Person (
    email TEXT NOT NULL PRIMARY KEY,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    phone CHAR(10) NOT NULL,
    birthdate DATE NOT NULL,
    password TEXT NOT NULL
);

-- Address
CREATE TABLE Address (
    address_id CHAR(32) NOT NULL PRIMARY KEY,
    email TEXT NOT NULL,
    city TEXT NOT NULL,
    street TEXT NOT NULL,
    number TEXT NOT NULL,
    postcode CHAR(5) NOT NULL,
    country TEXT NOT NULL,
    floor TEXT NOT NULL,
    name_on_bell TEXT NOT NULL,
    note TEXT,
    CONSTRAINT fk_email
        FOREIGN KEY (email)
        REFERENCES Person (email)
        ON DELETE CASCADE 
);

-- Card
CREATE TABLE Card (
    email TEXT NOT NULL,
    card_number TEXT NOT NULL,
    cvv CHAR(3) NOT NULL,
    expiration_date DATE NOT NULL,
    cardholder TEXT NOT NULL,
    PRIMARY KEY (email, card_number)
    CONSTRAINT fk_email
        FOREIGN KEY (email)
        REFERENCES Person(email)
        ON DELETE CASCADE
);

-- Shop
CREATE TABLE Shop (
    shop_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone CHAR(10) NOT NULL,
    type TEXT NOT NULL
);

-- Shop Address 
CREATE TABLE Shop_Address (
    shop_id INTEGER NOT NULL PRIMARY KEY,
    city TEXT NOT NULL,
    street TEXT NOT NULL,
    number TEXT NOT NULL,
    postcode char(5) NOT NULL,
    country TEXT NOT NULL,
    CONSTRAINT fk_shop_id
        FOREIGN KEY (shop_id)
        REFERENCES Shop (shop_id)
        ON DELETE CASCADE
);

-- Operating_Hours
CREATE TABLE Operating_Hours (
    shop_id INTEGER NOT NULL PRIMARY KEY,
    sunday TEXT,
    monday TEXT,
    tuesday TEXT,
    wednesday TEXT,
    thursday TEXT,
    friday TEXT,
    saturday TEXT,
    CONSTRAINT fk_shop_id
        FOREIGN KEY (shop_id)
        REFERENCES Shop (shop_id)
        ON DELETE CASCADE
);

-- Category
CREATE TABLE Category (
    category_name TEXT NOT NULL PRIMARY KEY
);

-- Has_Category
CREATE TABLE Has_Category (
    shop_id INTEGER NOT NULL,
    category_name TEXT NOT NULL,
    PRIMARY KEY (shop_id, category_name),
    CONSTRAINT fk_shop_id
        FOREIGN KEY (shop_id)
        REFERENCES Shop (shop_id)
        ON DELETE CASCADE
);


-- Order
CREATE TABLE Order_ (
    order_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL,
    status TEXT NOT NULL,
    total_price REAL NOT NULL,
    datetime DATETIME NOT NULL,
    payment_mean TEXT NOT NULL,
    CONSTRAINT fk_email
        FOREIGN KEY (email)
        REFERENCES Person (email)
        ON DELETE NO ACTION
);


-- Item
CREATE TABLE Item (
    item_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    shop_id INTEGER NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    category_name TEXT NOT NULL,
    CONSTRAINT fk_shop_id
        FOREIGN KEY (shop_id)
        REFERENCES Shop (shop_id)
        ON DELETE CASCADE,
    CONSTRAINT fk_category_name
        FOREIGN KEY (category_name)
        REFERENCES Category (category_name)
        ON DELETE SET NULL
);



-- Contains
CREATE TABLE Contains (
    contains_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    order_id INTEGER NOT NULL,
    item_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    note TEXT NOT NULL,
    CONSTRAINT fk_order_id
        FOREIGN KEY (order_id)
        REFERENCES Order_ (order_id)
        ON DELETE CASCADE,
    CONSTRAINT fk_item_id
        FOREIGN KEY (item_id)
        REFERENCES Item (item_id)
        ON DELETE CASCADE
);


-- Options
CREATE TABLE Option (
    option_id INTEGER PRIMARY KEY AUTOINCREMENT,
    item_id INTEGER NOT NULL,
    required INTEGER NOT NULL, -- BOOLEAN TRUE/FALSE
    name TEXT NOT NULL,
    type TEXT NOT NULL, -- MULTI-VALUE OR SINGLE-VALUE
    CONSTRAINT fk_item_id
        FOREIGN KEY (item_id)
        REFERENCES Item (item_id)
        ON DELETE CASCADE
);

-- Option Values
CREATE TABLE Option_Value (
    value_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    option_id INTEGER NOT NULL,
    name TEXT NOT NULL,
    CONSTRAINT fk_option_id
        FOREIGN KEY (option_id)
        REFERENCES Option (option_id)
        ON DELETE CASCADE
);

CREATE TABLE Review (
    review_id INTEGER NOT NULL PRIMARY KEY,
    shop_id INTEGER NOT NULL,
    email TEXT NOT NULL,
    stars INTEGER NOT NULL,
    note TEXT,
    CONSTRAINT fk_shop_id
        FOREIGN KEY (shop_id)
        REFERENCES Shop (shop_id)
        ON DELETE CASCADE,
    CONSTRAINT fk_email
        FOREIGN KEY (email)
        REFERENCES Person (email)
        ON DELETE SET NULL
);
