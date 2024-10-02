import {IShopListItem, IShopListState} from '../types';

import {isType} from 'typescript-fsa';
import * as Actions from '../actions/shop-list-actions';

const shopListState: IShopListState = {
    fetchingShopList: false,
    fetchingShopListError: false,
    shopListItems: [],
    creatingShoplistItem: false,
    createShoplistItemError: false,
};

export function shopList(state: IShopListState = shopListState, action: any): IShopListState {

    if (isType(action, Actions.getShoppingList.started)) {
        return {
            ...state,
            fetchingShopList: true,
            fetchingShopListError: false,
        };
    }

    if (isType(action, Actions.getShoppingList.failed)) {
        return {
            ...state,
            fetchingShopList: false,
            fetchingShopListError: true,
        };
    }

    if (isType(action, Actions.getShoppingList.done)) {
        return {
            ...state,
            fetchingShopList: false,
            fetchingShopListError: false,
            shopListItems: action.payload,
        };
    }

    if (isType(action, Actions.updateShoplistItem.done)) {
        return {
            ...state,
            shopListItems: updateShopListItems(action.payload, state),
        }
    }

    if (isType(action, Actions.createShoplistItem.started)) {
        return {
            ...state,
            creatingShoplistItem: true,
            createShoplistItemError: false,
        };
    }

    if (isType(action, Actions.createShoplistItem.failed)) {
        return {
            ...state,
            creatingShoplistItem: false,
            createShoplistItemError: true,
        };
    }

    if (isType(action, Actions.createShoplistItem.done)) {
        return {
            ...state,
            fetchingShopList: false,
            fetchingShopListError: false,
            shopListItems: addShoplistItem(action.payload, state),
        };
    }

    return state;
}

const updateShopListItems = (shopListItem: any, state: IShopListState) => {
    const ourItems = JSON.parse(JSON.stringify(state.shopListItems));  // deep clone

    const foundIndex = ourItems.findIndex((item: IShopListItem) => item.id === shopListItem.id);
    ourItems[foundIndex] = shopListItem;

    return ourItems;
}

const addShoplistItem = (shopListItem: any, state: IShopListState) => {
    const ourItems = JSON.parse(JSON.stringify(state.shopListItems));  // deep clone
    ourItems.push(shopListItem);

    return ourItems;
}

