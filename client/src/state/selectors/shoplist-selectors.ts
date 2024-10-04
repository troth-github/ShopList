import { createSelector } from 'reselect';
import {IShopListState} from "../types";
import {IApplicationState} from "../../store/store";

export const getData = (state: IApplicationState): IShopListState => state.shopList;

export const getShoplist = createSelector(
    [getData],
    (data: IShopListState) => {
        return data.shopListItems;
    }
);

export const isFetchingShoplist = createSelector(
    [getData],
    (data: IShopListState) => {
        return data.fetchingShopList;
    }
);

export const isFetchingShoplistError = createSelector(
    [getData],
    (data: IShopListState) => {
        return data.fetchingShopListError;
    }
);

export const fetchingError = createSelector(
    [getData],
    (data: IShopListState) => {
        return data.error.error;
    }
);

