import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { shopList } from '../state/reducers/shoplist';
import sagas from '../state/sagas';

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        shopList,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);

export default store;

export interface IApplicationState {
    shopList?: any;
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch