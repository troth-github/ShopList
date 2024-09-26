import { createSelector } from 'reselect';
import {IShopListState} from "../types";
import {IApplicationState} from "../../store/store";

export const getData = (state: IApplicationState): IShopListState => state.shopList;

export const getShoplistData = createSelector(
    [getData],
    (data: IShopListState) => {
        return data;
    }
);