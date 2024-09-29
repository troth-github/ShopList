import { takeLatest, call, put } from 'redux-saga/effects';
import * as Actions from '../actions/shop-list-actions';
import { fetchShoplistItems, markShoppingListItemPurchased } from '../../services/shop-list-service'
import {IShopListItem} from "../types";

function* getShoppingListSaga(action: {payload:{}}): IterableIterator<any> {
    try {
        console.log('IN SAGA:  about to call out to fetchShoppingList');
        const shoplistData = yield call(fetchShoplistItems);

        // @ts-ignore
        yield put(Actions.getShoppingList.done(shoplistData));
    } catch (e) {
        console.error(e);
        // @ts-ignore
        yield put(Actions.getShoppingList.failed(null, {error: e}))
    }
}

function* markShoplistItemPurchasedSaga(action: {payload:{shoplistItem: IShopListItem}}): IterableIterator<any> {
    const shoplistItem = action.payload.shoplistItem;

    try {
        const updatedShoplistItem = yield call(markShoppingListItemPurchased, shoplistItem);

        // @ts-ignore
        yield put(Actions.markShoplistItemPurchased.done(updatedShoplistItem));
    } catch (e) {
        console.error(e);
        // @ts-ignore
        yield put(Actions.markShoplistItemPurchased.failed(null, {error: e}))
    }
}

export default [
    takeLatest(Actions.getShoppingList.started, getShoppingListSaga),
    takeLatest(Actions.markShoplistItemPurchased.started, markShoplistItemPurchasedSaga),
]
