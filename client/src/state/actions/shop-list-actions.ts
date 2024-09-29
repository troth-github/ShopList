import actionCreatorFactory from 'typescript-fsa';
import { IShopListItem } from "../types";

const actionCreator = actionCreatorFactory('SHOP_LIST');

export const getShoppingList =  actionCreator.async<{},
    {shoppinglist: object},
    {error: string}>('GET_SHOPPING_LIST');

export const markShoplistItemPurchased =  actionCreator.async<{shoplistItem: IShopListItem},
    {shoppingList: object},
    {error: string}>('MARK_SHOP_LIST_ITEM_PURCHASED');
