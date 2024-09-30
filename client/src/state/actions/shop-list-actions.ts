import actionCreatorFactory from 'typescript-fsa';
import { IShopListItem } from "../types";

const actionCreator = actionCreatorFactory('SHOP_LIST');

export const getShoppingList =  actionCreator.async<{},
    {shoppinglist: object},
    {error: string}>('GET_SHOPPING_LIST');

export const updateShoplistItem =  actionCreator.async<{shoplistItem: IShopListItem},
    {shoppingList: object},
    {error: string}>('MARK_SHOP_LIST_ITEM_PURCHASED');

export const setIsDeleteDialogOpen =  actionCreator<{isOpen: boolean}>('SET_IS_DELETE_DIALOG_OPEN');
export const setIsNewCreateDialogOpen =  actionCreator<{isOpen: boolean}>('SET_IS_NEW_CREATE_DIALOG_OPEN');
