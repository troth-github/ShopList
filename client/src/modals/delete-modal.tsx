import React from "react";
import {IShopListItem} from "../state/types";
import '../styles/modal.scss'
import {connect} from "react-redux";
import {IApplicationState} from "../store/store";
import {setIsDeleteDialogOpen} from "../state/actions/shop-list-actions";

interface IDeleteModalProps {
    shoplistItem: IShopListItem,
    setDeleteDialogIsOpen: (isOpen: boolean) => void;
}

function DeleteModal({shoplistItem, setDeleteDialogIsOpen}: IDeleteModalProps) {
    return (
        <>
            <div className='dark-back-ground' onClick={() => setDeleteDialogIsOpen(false)} />
            <div className='modal-centered'>
                <div className='modal'>=
                    <h5 className='modal-heading'>Delete item?</h5>
                    <div className='explain-text'>Are you sure you want to delete the item?  This cannot be undone.</div>
                    <div className='modal-actions'>
                        <div className='actions-container'>
                            <button className='cancel-modal-button' onClick={() => setDeleteDialogIsOpen(false)}>
                                Cancel
                            </button>
                            <button className='main-modal-button' onClick={() => setDeleteDialogIsOpen(false)}>
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
        setDeleteDialogIsOpen: (isOpen: boolean) => {dispatch(setIsDeleteDialogOpen({isOpen})); },
    })
)(DeleteModal);