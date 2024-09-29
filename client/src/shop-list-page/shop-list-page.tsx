import React, {useEffect} from 'react';
import { getShoppingList } from '../state/actions/shop-list-actions';
import {IShopListItem, IShopListState} from "../state/types";
import {connect} from "react-redux";
import * as shoplistSelectors from '../state/selectors/shoplist-selectors';
import {IApplicationState} from "../store/store";
import ShopListTableItem from './shop-list-item/shop-list-table-item'
import './shop-list-page.scss'

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
        <div className='shop-list-page'>
            {
                <div className='shop-list-page-table'>
                    {shopListData.shopListItems.map((item: IShopListItem, idx: number) => {
                        return(<ShopListTableItem key={idx} shopListItem={item} />)
                    })}
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
