import React, {useState} from 'react';
import {IShopListItem} from "../../state/types";
import './shop-list-table-item.scss';
import {connect} from "react-redux";
import {IApplicationState} from "../../store/store";
import {
    updateShoplistItem,
} from "../../state/actions/shop-list-actions";
import DeleteModal from "../../modals/delete-modal";
import NewEditModal from "../../modals/new-edit-modal/new-edit-modal";


interface IShopListItemProps {
    shopListItem: IShopListItem,
    sendShoplistItemPurchased: (shoplistItem: IShopListItem) => void;
}

function ShoplistTableItem(
{
    shopListItem,
    sendShoplistItemPurchased,
}: IShopListItemProps) {
    const [newCreateDialogOpen, setNewCreateDialogOpen] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

    const itemNameStyle = shopListItem.purchased ? 'purchased-strike-thru' : '';
    const secondTextStyle = shopListItem.purchased ?
        'second-column second-column__second-text purchased-strike-thru' :
        'second-column second-column__second-text'

    return (
        <div className='table-item table-item__white-border-box'>
            <div className='row_container'>
                {/*First column - checkbox*/}
                <div className='first-column' title='Mark purchased'>
                    <input
                        type='checkbox'
                        checked={shopListItem.purchased}
                        onChange={() => {
                            const theItem = {...shopListItem};
                            theItem.purchased = !(theItem.purchased);
                            sendShoplistItemPurchased(theItem);
                        }}
                    />
                </div>
                {/* Second column - item name and description */}
                <div className='second-column'>
                    <div className={itemNameStyle}>
                        {shopListItem.itemname}
                    </div>
                    {shopListItem.description.length > 0 &&
                        // Its possible there is no description.
                        <div className={secondTextStyle}>
                            {shopListItem.description}
                        </div>
                    }
                </div>
                {/* Edit */}
                <div key={`${shopListItem.id}-key`} className='edit-column'>
                    <div className="material-icons-outlined material-icon-hover"
                         onClick={() => {
                             setNewCreateDialogOpen(true);
                         }}>edit</div>
                </div>
                {/* Delete */}
                <div className='delete-column'>
                    <div className="material-icons-outlined material-icon-hover"
                         onClick={() => {
                            setDeleteDialogOpen(!deleteDialogOpen)
                         }}>delete</div>
                </div>
            </div>
            {deleteDialogOpen && <DeleteModal setDeleteDialogOpen={setDeleteDialogOpen} shoplistItem={shopListItem}/>}
            {newCreateDialogOpen && <NewEditModal setNewCreateDialogOpen={setNewCreateDialogOpen} isCreate={false} shoplistItem={shopListItem} />}
        </div>
    )
}

export default connect(
    (state: IApplicationState) => ({
    }),
    (dispatch) => ({
        sendShoplistItemPurchased: (shoplistItem: IShopListItem) => {
            dispatch(updateShoplistItem.started({shoplistItem}));
        },
    })
)(ShoplistTableItem);