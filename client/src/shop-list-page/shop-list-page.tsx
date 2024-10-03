import React, {useEffect, useState} from 'react';
import {getShoppingList} from '../state/actions/shop-list-actions';
import {IShopListItem, IShopListState} from "../state/types";
import {connect} from "react-redux";
import * as shoplistSelectors from '../state/selectors/shoplist-selectors';
import {IApplicationState} from "../store/store";
import ShopListTableItem from './shop-list-item/shop-list-table-item'
import './shop-list-page.scss'
import NewEditModal from "../modals/new-edit-modal/new-edit-modal";
import NoItemsPage from "./no-items-page/no-items-page";

export interface IShoplistPageProps {
    shopListData: IShopListState;
    fetchShoppingList: () => void;
}

function ShopListPage({
    shopListData,
    fetchShoppingList,
}: IShoplistPageProps) {

    const [newCreateDialogOpen, setNewCreateDialogOpen] = useState(false);

    useEffect(() => {
        fetchShoppingList();
    }, []);

    console.log('shopListData is: ', shopListData);
    return (
        <div className='shop-list-page'>
            {shopListData.fetchingShopList &&
                <div className='waiting-for-data' />
            }
            {shopListData.shopListItems.length === 0 &&
                <NoItemsPage />
            }
            {shopListData.shopListItems.length > 0 &&
                <>
                    <div className='shop-list-add-section'>
                        <div className='your-items-text'>Your Items</div>
                        <button className='add-item-button' onClick={() => setNewCreateDialogOpen(!newCreateDialogOpen)}>Add Item</button>
                    </div>
                    <div className='shop-list-page-table'>
                        {shopListData.shopListItems.map((item: IShopListItem, idx: number) => {
                            return(<ShopListTableItem key={idx} shopListItem={item} />)
                        })}
                    </div>
                </>
            }
            {newCreateDialogOpen && <NewEditModal setNewCreateDialogOpen={setNewCreateDialogOpen} isCreate={true} shoplistItem={{itemname: '', description: '', quantity: 1, purchased: false}}/>}
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
