# Getting Started with Shoplist

Shoplist is an interactive website that allows you to keep track of your current grocery list.  It allows
you to add grocery items with a detailed description.  You can mark items off as you have purchased them, and
delete items as needed.

##  Required to run the Shoplist website:

You will need to have `docker`, `docker-compose`, and `git` installed to build and run the Shoplist
website.

## To run Shoplist follow these instructions:

Run `git clone` to clone the project from GitHub:

### `git clone git@github.com:troth-github/ShopList.git`

This will create a `ShopList` project directory.  `cd` into that directory:

### `cd ShopList`

Simpy build and run the project using the following command:

### `docker-compose up --build`

Open [http://localhost:3000](http://localhost:3000) to view ShopList in your browser.

## Stopping the application

To stop the application, from the same directory you ran `docker-compose`, just use the `control-c` 
key combination.

