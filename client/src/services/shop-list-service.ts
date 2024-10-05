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

    return response.data;
}

const addShoplistItem = async (shoplistItem: IShopListItem) => {
    const url = `http://localhost:3001/api/shoplistitem`;

    const itemDataBody = {
        itemname: shoplistItem.itemname,
        description: shoplistItem.description,
        quantity: shoplistItem.quantity,
        purchased: shoplistItem.purchased,
    }
    const response = await axios.post(url, itemDataBody);

    return response.data;
}

const deleteShoplistItem = async (shoplistItem: IShopListItem) => {
    const url = `http://localhost:3001/api/shoplistitem/${shoplistItem.id}`;
    const response = await axios.delete(url);

    return response.data;
}

export {
    fetchShoplistItems,
    updateShoplistItem,
    addShoplistItem,
    deleteShoplistItem
}