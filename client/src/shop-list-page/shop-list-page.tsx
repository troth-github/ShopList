import React, {useEffect, useState, useCallback} from 'react';
import {getShoppingList} from '../state/actions/shop-list-actions';
import {IShopListItem} from "../state/types";
import {connect} from "react-redux";
import * as shoplistSelectors from '../state/selectors/shoplist-selectors';
import {IApplicationState} from "../store/store";
import ShopListTableItem from './shop-list-item/shop-list-table-item'
import './shop-list-page.scss'
import NewEditModal from "../modals/new-edit-modal/new-edit-modal";
import NoItemsPage from "./no-items-page/no-items-page";
import ErrorPage from "../error-page/error-page";

export interface IShoplistPageProps {
    shoppingListItems: IShopListItem[];
    isFetchingShoplistError: boolean;
    fetchingError: Record<string, any>;
    fetchingShoplist: boolean;
    fetchShoppingList: () => void;
}

function ShopListPage({
    shoppingListItems,
    fetchingShoplist,
    isFetchingShoplistError,
    fetchingError,
    fetchShoppingList,
}: IShoplistPageProps) {

    const [newCreateDialogOpen, setNewCreateDialogOpen] = useState(false);

    // Fix the recursive nature of useEffect by memoizing the fetchShoppingList method.
    const fetchTheShoppinglist = useCallback(() => {
        fetchShoppingList()
    }, [fetchShoppingList])

    useEffect(() => {
        fetchTheShoppinglist();
    }, [fetchTheShoppinglist]);

    return (
        <div className='shop-list-page'>
            {fetchingShoplist &&
                <div className='waiting-for-data' />
            }
            {isFetchingShoplistError &&
                <ErrorPage errorMessage={fetchingError.message} />
            }
            {shoppingListItems.length === 0 && !isFetchingShoplistError &&
                <NoItemsPage />
            }
            {shoppingListItems.length > 0 &&
                <>
                    <div className='shop-list-add-section'>
                        <div className='your-items-text'>Your Items</div>
                        <button className='add-item-button' onClick={() => setNewCreateDialogOpen(!newCreateDialogOpen)}>Add Item</button>
                    </div>
                    <div className='shop-list-page-table'>
                        {shoppingListItems.map((item: IShopListItem, idx: number) => {
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
        shoppingListItems: shoplistSelectors.getShoplist(state),
        fetchingShoplist: shoplistSelectors.isFetchingShoplist(state),
        isFetchingShoplistError: shoplistSelectors.isFetchingShoplistError(state),
        fetchingError: shoplistSelectors.fetchingError(state),
    }),
    (dispatch) => ({
        fetchShoppingList: () => {dispatch(getShoppingList.started({})); },
    })
)(ShopListPage);

// export default ShopListPage;
