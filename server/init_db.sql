BEGIN TRANSACTION;

CREATE TABLE "shoplist_items" (
    id SERIAL PRIMARY KEY,
    itemname VARCHAR (255) NOT NULL,
    description VARCHAR (255),
    quantity INTEGER DEFAULT 1 NOT NULL,
    purchased BOOLEAN DEFAULT false NOT NULL
);

-- TODO - delete these on ship
INSERT INTO shoplist_items (itemname, description, quantity) VALUES ('tomato', 'get the really nice ones', 4);
INSERT INTO shoplist_items (itemname, description, quantity) VALUES ('coke minis', 'If they dont have them, get regular.', 1);

COMMIT;