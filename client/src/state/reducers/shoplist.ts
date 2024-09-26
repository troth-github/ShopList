import {IShopListState} from '../types';

import {isType} from 'typescript-fsa';
import * as Actions from '../actions/shop-list-actions';

const shopListState: IShopListState = {
    fetchingShopList: false,
    fetchingShopListError: false,
    shopListItems: [],
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

    return state;
}

