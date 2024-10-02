import actionCreatorFactory from 'typescript-fsa';
import { IShopListItem } from "../types";

const actionCreator = actionCreatorFactory('SHOP_LIST');

export const getShoppingList =  actionCreator.async<{},
    {shoppinglist: object},
    {error: string}>('GET_SHOPPING_LIST');

export const updateShoplistItem = actionCreator.async<{shoplistItem: IShopListItem},
    {shoppingList: object},
    {error: string}>('UPDATE_SHOP_LIST_ITEM');

export const createShoplistItem = actionCreator.async<{shoplistItem: IShopListItem},
    {shoppingList: object},
    {error: string}>('CREATE_SHOP_LIST_ITEM');
