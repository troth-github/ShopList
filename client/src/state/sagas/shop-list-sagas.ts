import { takeLatest, call, put } from 'redux-saga/effects';
import * as Actions from '../actions/shop-list-actions';
import { fetchShoplistItems } from '../../services/shop-list-service'

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

export default [
    takeLatest(Actions.getShoppingList.started, getShoppingListSaga),
]
