// Used to make CRUD calls to the back-end for data.  Namely shopping list CRUD calls
import axios from "axios";

const fetchShoplistItems = async () => {
    const url = 'http://localhost:3001/api/shoplistitems';

    console.log('before axios call');
    const response = await axios.get(url);

    console.log('In service...response.data is: ', response.data);

    return response.data;
}

export {
    fetchShoplistItems,
}