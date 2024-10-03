import React, {useState} from 'react'
import {connect} from "react-redux";
import {IApplicationState} from "../../store/store";
import {IShopListItem} from "../../state/types";
import {createShoplistItem} from "../../state/actions/shop-list-actions";
import NewEditModal from "../../modals/new-edit-modal/new-edit-modal";
import './no-items-page.scss'

interface INoItemsPageProps {
    createTheShoplistItem: (shoplistItem: IShopListItem) => void;
}

function NoItemsPage() {

    const [newCreateDialogOpen, setNewCreateDialogOpen] = useState(false);

    return (
        <div className='no-items-centered'>
            <div className='no-items-content'>
                <div>
                    <div className='shop-list-empty-text'>Your shopplist is empty :(</div>
                    <button className='add-first-item-button' onClick={() => setNewCreateDialogOpen(!newCreateDialogOpen)}>Add your first item</button>
                </div>
            </div>
            {newCreateDialogOpen && <NewEditModal setNewCreateDialogOpen={setNewCreateDialogOpen} isCreate={true} shoplistItem={{itemname: '', description: '', quantity: 1, purchased: false}}/>}
        </div>
    );
}

export default connect(
    (state: IApplicationState) => ({
    }),
    (dispatch) => ({
        createTheShoplistItem: (shoplistItem: IShopListItem) => {dispatch(createShoplistItem.started({shoplistItem}))},
    })
)(NoItemsPage);