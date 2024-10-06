/*  A modal dialog that we'll use for both create and edit of tasks */
import React, {useEffect, useState} from "react";
import {IShopListItem} from "../../state/types";
import {connect} from "react-redux";
import {IApplicationState} from "../../store/store";
import {createShoplistItem, updateShoplistItem} from "../../state/actions/shop-list-actions";
import './new-edit-modal.scss';
import Select from 'react-select';
import customSelectStyles from "./select-custom-styles";

interface INewCreateModalProps {
    isCreate: boolean;
    shoplistItem: IShopListItem;
    createTheShoplistItem: (shoplistItem: IShopListItem) => void;
    updateTheShoplistItem: (shoplistItem: IShopListItem) => void;
    setNewCreateDialogOpen: (isOpen: boolean) => void;
}

interface Option {
    value: number;
    label: string;
}

const qtySelectOptions: Option[] = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
];

function NewEditModal({
  isCreate,
  shoplistItem,
  createTheShoplistItem,
  updateTheShoplistItem,
  setNewCreateDialogOpen,
}: INewCreateModalProps) {
    const [itemname, setItemname] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [purchased, setPurchased] = useState(false);
    const [canCreateOrUpdate, setCanCreateOrUpdate] = useState(false);


    useEffect(() => {
        if (!isCreate && shoplistItem.id) {
            //  We're updating
            setItemname(shoplistItem.itemname);
            setDescription(shoplistItem.description);
            setQuantity(shoplistItem.quantity);
            setPurchased(shoplistItem.purchased);
        }
    }, []);

    useEffect(() => {
        itemname.length > 0 ? setCanCreateOrUpdate(true) : setCanCreateOrUpdate(false);
    }, [itemname]);

    return (
        <>
            <div className='dark-back-ground' onClick={() => setNewCreateDialogOpen(false)} />
            <div className='modal-centered'>
                <div className='modal modal__new-create-modal'>
                    <div className='create-edit-banner'>
                        <div className='banner-text'>SHOPPING LIST</div>
                        <div className='material-icons banner-icon' onClick={() => setNewCreateDialogOpen(false)}>last_page</div>
                    </div>
                    <div className='modal-content'>
                        <div className='modal-heading modal-heading__new-create-dlg'>{isCreate ? 'Add an Item' : 'Edit an Item'}</div>
                        <div className='explain-text explain-text__new-create-dlg'>{isCreate ? 'Add your new item below' : 'Edit your item below'}</div>
                        <input className='input-control'
                               placeholder='Item Name'
                               value={itemname}
                               onChange={(event) => {
                                   setItemname(event.target.value);
                               }}
                        />
                        <div className='text-area-section'>
                            <textarea className='text-area-control'
                                      maxLength={100}
                                      placeholder='Description'
                                      value={description}
                                      onChange={(event) => {
                                          setDescription(event.target.value);
                                      }}
                            />
                            <span className='char-count'>{description.length ? `${description.length}/100` : `0/100`}</span>
                        </div>
                        <Select
                            // defaultValue={{value: 1, label: '1'}}
                            placeholder='How many?'
                            onChange={(newValue: any) => {setQuantity(newValue ? newValue.value : 1)}}
                            options={qtySelectOptions}
                            components={{
                                IndicatorSeparator: () => null,
                            }}
                            value={{value: quantity, label: `${quantity}`}}
                            styles={customSelectStyles}
                        />
                        {!isCreate &&
                            <div className='purchased-checkbox-section'>
                                <input type='checkbox'
                                       id='purchased-check'
                                       className='purchased-checkbox'
                                       checked={purchased}
                                       onChange={() => {setPurchased(!purchased)}} />
                                <label className='purchsed-label' htmlFor='purchased-check'>Purchased</label>
                            </div>
                        }
                    </div>
                    <div className='modal-actions'>
                        <div className='actions-container'>
                            <button className='cancel-modal-button' onClick={() => setNewCreateDialogOpen(false)}>
                                Cancel
                            </button>
                            <button className='main-modal-button'
                                    disabled={!canCreateOrUpdate}
                                    onClick={() => {
                                        // Create a shoplistItem from our state
                                        const newOrEditShoplistItem = {
                                            id: shoplistItem ? shoplistItem.id : -1,
                                            itemname: itemname,
                                            description: description,
                                            quantity: quantity,
                                            purchased: purchased,
                                        }
                                        isCreate ? createTheShoplistItem(newOrEditShoplistItem) : updateTheShoplistItem(newOrEditShoplistItem);
                                        setNewCreateDialogOpen(false)
                                    }}>
                                {isCreate ? 'Add Task' : 'Save Item'}
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
        updateTheShoplistItem: (shoplistItem: IShopListItem) => {dispatch(updateShoplistItem.started({shoplistItem}))},
        createTheShoplistItem: (shoplistItem: IShopListItem) => {dispatch(createShoplistItem.started({shoplistItem}))},
    })
)(NewEditModal);