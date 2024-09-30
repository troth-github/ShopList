/*  A modal dialog that we'll use for both create and edit of tasks */
import React from "react";
import {IShopListItem} from "../state/types";

interface INewCreateModalProps {
    shoplistItem: IShopListItem;
    setNewCreateDialogIsOpen: (isOpen: boolean) => void;
    createShoplistItem: (shoplistItem: IShopListItem) => void;
    updateTheShoplistItem: (shoplistItem: IShopListItem) => void;
}

function NewEditModal({
  shoplistItem,
  setNewCreateDialogIsOpen,
  createShoplistItem,
  updateTheShoplistItem,
}: INewCreateModalProps) {
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