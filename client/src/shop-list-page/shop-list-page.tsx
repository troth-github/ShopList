import React, {useEffect} from 'react';
import {getShoppingList, setIsNewCreateDialogOpen} from '../state/actions/shop-list-actions';
import {IShopListItem, IShopListState} from "../state/types";
import {connect} from "react-redux";
import * as shoplistSelectors from '../state/selectors/shoplist-selectors';
import {IApplicationState} from "../store/store";
import ShopListTableItem from './shop-list-item/shop-list-table-item'
import './shop-list-page.scss'
import NewEditModal from "../modals/new-edit-modal";

export interface IShoplistPageProps {
    shopListData: IShopListState;
    isNewCreateDialogOpen: boolean;
    fetchShoppingList: () => void;
    setNewCreateDialogIsOpen: (isOpen: boolean) => void;
}

function ShopListPage({
    shopListData,
    isNewCreateDialogOpen,
    fetchShoppingList,
    setNewCreateDialogIsOpen,
}: IShoplistPageProps) {
    // const shopListDataTiger = useAppSelector(state => state.shopList);
    // const dispatch: any = useAppDispatch();
    //
    useEffect(() => {
        fetchShoppingList();
    }, []);

    console.log('shopListData is: ', shopListData);
    return (
        <div className='shop-list-page'>
            {shopListData.fetchingShopList &&
                <div className='waiting-for-data' />
            }
            {shopListData.shopListItems.length > 0 &&
                <>
                    <div className='shop-list-add-section'>
                        <div className='your-items-text'>Your Items</div>
                        <button className='add-item-button' onClick={() => setNewCreateDialogIsOpen(!isNewCreateDialogOpen)}>Add Item</button>
                    </div>
                    <div className='shop-list-page-table'>
                        {shopListData.shopListItems.map((item: IShopListItem, idx: number) => {
                            return(<ShopListTableItem key={idx} shopListItem={item} />)
                        })}
                    </div>
                </>
            }
            {isNewCreateDialogOpen && <NewEditModal isCreate={true} shoplistItem={{itemname: '', description: '', quantity: 1, purchased: false}}/>}
        </div>
    );
}

export default connect(
    (state: IApplicationState) => ({
        shopListData: shoplistSelectors.getShoplistData(state),
        isNewCreateDialogOpen: shoplistSelectors.getCreateNewDialogIsOpen(state),
    }),
    (dispatch) => ({
        fetchShoppingList: () => {dispatch(getShoppingList.started({})); },
        setNewCreateDialogIsOpen: (isOpen: boolean) => {dispatch(setIsNewCreateDialogOpen({isOpen})); },
    })
)(ShopListPage);

// export default ShopListPage;
