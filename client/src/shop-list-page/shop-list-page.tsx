import React, {useEffect} from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { getShoppingList } from '../state/actions/shop-list-actions';
import {IShopListItem, IShopListState} from "../state/types";
import {connect} from "react-redux";
import * as shoplistSelectors from '../state/selectors/shoplist-selectors';
import {IApplicationState} from "../store/store";

export interface IShoplistPageProps {
    shopListData: IShopListState;
    fetchShoppingList: () => void;
}

function ShopListPage({shopListData, fetchShoppingList}: IShoplistPageProps) {
    // const shopListDataTiger = useAppSelector(state => state.shopList);
    // const dispatch: any = useAppDispatch();
    //
    useEffect(() => {
        fetchShoppingList();
    }, []);

    console.log('shopListData is: ', shopListData);
    return (
        <div style={{marginTop: '100px'}}>
            Hey. Here's the page
            {
                <div>
                    {shopListData.shopListItems.map((item: IShopListItem, idx: number) => {
                        return(<li key={idx}>{item.itemname} ({item.description})</li>)
                    })}
                    <button onClick={() => {fetchShoppingList()}}>Hekka</button>
                </div>
            }
            <div>{shopListData.fetchingShopList}</div>
        </div>
    );
}

export default connect(
    (state: IApplicationState) => ({
        shopListData: shoplistSelectors.getShoplistData(state),
    }),
    (dispatch) => ({
        fetchShoppingList: () => {dispatch(getShoppingList.started({})); },
    })
)(ShopListPage);

// export default ShopListPage;
