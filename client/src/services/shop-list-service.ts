// Used to make CRUD calls to the back-end for data.  Namely shopping list CRUD calls
import axios from "axios";
import {IShopListItem} from "../state/types";

const fetchShoplistItems = async () => {
    const url = 'http://localhost:3001/api/shoplistitems';

    const response = await axios.get(url);

    return response.data;
}

const updateShoplistItem = async (shoplistItem: IShopListItem) => {
    const url = `http://localhost:3001/api/shoplistitem/${shoplistItem.id}`;

    const itemDataBody = {
        itemname: shoplistItem.itemname,
        description: shoplistItem.description,
        quantity: shoplistItem.quantity,
        purchased: shoplistItem.purchased,
    }
    const response = await axios.put(url, itemDataBody);

    console.log('In service update...response.data is: ', response.data);

    return response.data;
}

const addShoplistItem = async (shoplistItem: IShopListItem) => {
    const url = `http://localhost:3001/api/shoplistitem`;

    console.log('before axios call create item');
    const itemDataBody = {
        itemname: shoplistItem.itemname,
        description: shoplistItem.description,
        quantity: shoplistItem.quantity,
        purchased: shoplistItem.purchased,
    }
    const response = await axios.post(url, itemDataBody);

    console.log('In service create...response.data is: ', response.data);

    return response.data;
}

const deleteShoplistItem = async (shoplistItem: IShopListItem) => {
    const url = `http://localhost:3001/api/shoplistitem/${shoplistItem.id}`;

    console.log('before axios call delete item');
    const response = await axios.delete(url);

    console.log('In service create...response.data is: ', response.data);

    return response.data;
}

export {
    fetchShoplistItems,
    updateShoplistItem,
    addShoplistItem,
    deleteShoplistItem
}