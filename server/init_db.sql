BEGIN TRANSACTION;

CREATE TABLE "shoplist_items" (
    id SERIAL PRIMARY KEY,
    itemname VARCHAR (255) NOT NULL,
    description VARCHAR (255),
    quantity INTEGER DEFAULT 1 NOT NULL,
    purchased BOOLEAN DEFAULT false NOT NULL
);

COMMIT;