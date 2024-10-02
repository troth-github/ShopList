import { takeLatest, call, put } from 'redux-saga/effects';
import * as Actions from '../actions/shop-list-actions';
import { fetchShoplistItems, updateShoplistItem, addShoplistItem, deleteShoplistItem } from '../../services/shop-list-service'
import {IShopListItem} from "../types";

function* getShoppingListSaga(action: {payload:{}}): IterableIterator<any> {
    try {
        console.log('IN SAGA:  about to call out to fetchShoppingList');
        const shoplistData = yield call(fetchShoplistItems);

        // @ts-ignore
        yield put(Actions.getShoppingList.done(shoplistData));
    } catch (e) {
        console.error(e);
        //  @ts-ignore
        yield put(Actions.getShoppingList.failed(null, {error: e}))
    }
}

function* updateShoplistItemSaga(action: {payload:{shoplistItem: IShopListItem}}): IterableIterator<any> {
    const shoplistItem = action.payload.shoplistItem;

    try {
        const updatedShoplistItem = yield call(updateShoplistItem, shoplistItem);

        // @ts-ignore
        yield put(Actions.updateShoplistItem.done(updatedShoplistItem));
    } catch (e) {
        console.error(e);
        // @ts-ignore
        yield put(Actions.updateShoplistItem.failed(null, {error: e}))
    }
}

function* createShoplistItemSaga(action: {payload:{shoplistItem: IShopListItem}}): IterableIterator<any> {
    const shoplistItem = action.payload.shoplistItem;

    try {
        const createdShoplistItem = yield call(addShoplistItem, shoplistItem);

        // @ts-ignore
        yield put(Actions.createShoplistItem.done(createdShoplistItem));
    } catch (e) {
        console.error(e);
        // @ts-ignore
        yield put(Actions.createShoplistItem.failed(null, {error: e}))
    }
}

function* deleteShoplistItemSaga(action: {payload:{shoplistItem: IShopListItem}}): IterableIterator<any> {
    const shoplistItem = action.payload.shoplistItem;

    try {
        const deletedShoplistItem = yield call(deleteShoplistItem, shoplistItem);

        // @ts-ignore
        yield put(Actions.deleteShoplistItem.done(deletedShoplistItem));
    } catch (e) {
        console.error(e);
        // @ts-ignore
        yield put(Actions.deleteShoplistItem.failed(null, {error: e}))
    }
}

export default [
    takeLatest(Actions.getShoppingList.started, getShoppingListSaga),
    takeLatest(Actions.updateShoplistItem.started, updateShoplistItemSaga),
    takeLatest(Actions.createShoplistItem.started, createShoplistItemSaga),
    takeLatest(Actions.deleteShoplistItem.started, deleteShoplistItemSaga),
]
