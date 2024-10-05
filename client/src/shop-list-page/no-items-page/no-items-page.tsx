import React, {useState} from 'react';
import NewEditModal from "../../modals/new-edit-modal/new-edit-modal";
import './no-items-page.scss';

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

export default (NoItemsPage);