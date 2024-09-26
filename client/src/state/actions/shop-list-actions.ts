import actionCreatorFactory from 'typescript-fsa';
import { IShopListItem } from "../types";

const actionCreator = actionCreatorFactory('SHOP_LIST');

export const getShoppingList =  actionCreator.async<{},
    {shoppinglist: object},
    {error: string}>('GET_SHOPPING_LIST');
