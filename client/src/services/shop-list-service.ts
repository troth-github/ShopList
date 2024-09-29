// Used to make CRUD calls to the back-end for data.  Namely shopping list CRUD calls
import axios from "axios";
import {IShopListItem} from "../state/types";

const fetchShoplistItems = async () => {
    const url = 'http://localhost:3001/api/shoplistitems';

    console.log('before axios call');
    const response = await axios.get(url);

    console.log('In service...response.data is: ', response.data);

    return response.data;
}

const markShoppingListItemPurchased = async (shoplistItem: IShopListItem) => {
    const url = `http://localhost:3001/api/shoplistitem/${shoplistItem.id}`;

    console.log('before axios call mark purchased');
    const itemDataBody = {
        itemname: shoplistItem.itemname,
        description: shoplistItem.description,
        quantity: shoplistItem.quantity,
        purchased: shoplistItem.purchased,
    }
    const response = await axios.put(url, itemDataBody);

    console.log('In service mark purchased...response.data is: ', response.data);

    return response.data;
}

export {
    fetchShoplistItems,
    markShoppingListItemPurchased,
}