import { all } from 'redux-saga/effects';
import shopListSagas from "./shop-list-sagas";

export default function* rootSaga() {
    yield all([
        ...shopListSagas,
    ]);
}
