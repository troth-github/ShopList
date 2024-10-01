import React from 'react';
import {IShopListItem} from "../../state/types";
import './shop-list-table-item.scss';
import {connect} from "react-redux";
import {IApplicationState} from "../../store/store";
import * as shoplistSelectors from "../../state/selectors/shoplist-selectors";
import {updateShoplistItem, setIsDeleteDialogOpen} from "../../state/actions/shop-list-actions";
import DeleteModal from "../../modals/delete-modal";


interface IShopListItemProps {
    shopListItem: IShopListItem,
    sendShoplistItemPurchased: (shoplistItem: IShopListItem) => void;
    isDeleteDialogOpen: boolean;
    setTheDeleteDialogOpen: (isOpen: boolean) => void;
}

function ShoplistTableItem(
{
    shopListItem,
    sendShoplistItemPurchased,
    setTheDeleteDialogOpen,
    isDeleteDialogOpen,
}: IShopListItemProps) {
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
                            sendShoplistItemPurchased(theItem);
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
                    <div className="material-icons-outlined material-icon-hover">edit</div>
                </span>
                {/*Delete*/}
                <span className='delete-column'>
                    <div className="material-icons-outlined material-icon-hover" onClick={() => {
                        setTheDeleteDialogOpen(!isDeleteDialogOpen)
                    }}>delete</div>
                </span>
            </div>
            {isDeleteDialogOpen && <DeleteModal shoplistItem={shopListItem}/>}
        </div>
    )
}

export default connect(
    (state: IApplicationState) => ({
        isDeleteDialogOpen: shoplistSelectors.getDeleteDialogIsOpen(state),
    }),
    (dispatch) => ({
        sendShoplistItemPurchased: (shoplistItem: IShopListItem) => {
            dispatch(updateShoplistItem.started({shoplistItem}));
        },
        setTheDeleteDialogOpen: (isOpen: boolean) => {dispatch(setIsDeleteDialogOpen({isOpen})); },
    })
)(ShoplistTableItem);