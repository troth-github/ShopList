import React from 'react';
import {IShopListItem} from "../../state/types";
import './shop-list-table-item.scss';
import {connect} from "react-redux";
import {IApplicationState} from "../../store/store";
import * as shoplistSelectors from "../../state/selectors/shoplist-selectors";
import {getShoppingList, markShoplistItemPurchased} from "../../state/actions/shop-list-actions";


interface IShopListItemProps {
    shopListItem: IShopListItem,
    sendShoplistItemPurchased: (shoplistItem: IShopListItem) => void;
}
function ShoplistTableItem(shopListItemProps: IShopListItemProps) {
    const shopListItem = shopListItemProps.shopListItem;
    console.log('the shopListItem is:', shopListItem);

    return (
        <div className='table-item table-item__white-border-box'>
            <div className='row_container'>
                {/*First column - checkbox*/}
                <span className='first-column'>
                    <input
                        type='checkbox'
                        checked={shopListItem.purchased}
                        onChange={() => {
                            const theItem = {...shopListItem};
                            theItem.purchased = !(theItem.purchased);
                            shopListItemProps.sendShoplistItemPurchased(theItem);
                        }}
                    />
                </span>
                {/*Second column*/}
                <span className='second-column'>
                    <div>
                        {shopListItem.itemname}
                    </div>
                    <div className='second-column second-column__second-text'>
                        {shopListItem.description}
                    </div>
                </span>
                {/*Edit*/}
                <span className='edit-column'>
                    <div className="material-icons material-icon-hover">edit</div>
                </span>
                {/*Delete*/}
                <span className='delete-column'>
                    <div className="material-icons material-icon-hover">delete</div>
                </span>
            </div>
        </div>

    )
}

export default connect(
    (state: IApplicationState) => ({
        unUnused: shoplistSelectors.getShoplistData(state),
    }),
    (dispatch) => ({
        sendShoplistItemPurchased: (shoplistItem: IShopListItem) => {
            dispatch(markShoplistItemPurchased.started({shoplistItem}));
        },
    })
)(ShoplistTableItem);