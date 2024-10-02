import React from "react";
import {IShopListItem} from "../state/types";
import '../styles/modal.scss'
import {connect} from "react-redux";
import {IApplicationState} from "../store/store";

interface IDeleteModalProps {
    shoplistItem: IShopListItem,
    setDeleteDialogOpen: (isOpen: boolean) => void;
}

function DeleteModal({shoplistItem, setDeleteDialogOpen}: IDeleteModalProps) {
    return (
        <>
            <div className='dark-back-ground' onClick={() => setDeleteDialogOpen(false)} />
            <div className='modal-centered'>
                <div className='modal'>
                    <div className='modal-content'>
                        <div className='modal-heading'>Delete item?</div>
                        <div className='explain-text'>Are you sure you want to delete the item?  This cannot be undone.</div>
                    </div>
                    <div className='modal-actions'>
                        <div className='actions-container'>
                            <button className='cancel-modal-button' onClick={() => setDeleteDialogOpen(false)}>
                                Cancel
                            </button>
                            <button className='main-modal-button' onClick={() => setDeleteDialogOpen(false)}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default connect(
    (state: IApplicationState) => ({
    }),
    (dispatch) => ({
    })
)(DeleteModal);