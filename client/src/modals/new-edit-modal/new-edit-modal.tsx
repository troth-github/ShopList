/*  A modal dialog that we'll use for both create and edit of tasks */
import React, {useEffect, useState} from "react";
import {IShopListItem} from "../../state/types";
import {connect} from "react-redux";
import {IApplicationState} from "../../store/store";
import {setIsNewCreateDialogOpen, updateShoplistItem} from "../../state/actions/shop-list-actions";
import './new-edit-modal.scss';
import Select from 'react-select';
import customSelectStyles from "./select-custom-styles";

interface INewCreateModalProps {
    isCreate: boolean;
    shoplistItem: IShopListItem;
    setNewCreateDialogIsOpen: (isOpen: boolean) => void;
    // createShoplistItem: (shoplistItem: IShopListItem) => void;
    updateTheShoplistItem: (shoplistItem: IShopListItem) => void;
}

// const customStyles = {
//     singleValue: (provided: any, state: any) => ({
//         ...provided,
//         color: '#696969', // Change the text color of the selected value
//         fontSize: 14
//     }),
//     control: (base: any, state: any) => ({
//         ...base,
//         borderColor: 'lightgray',
//         width: '99%'
//     }),
//     option: (provided: any, state: any) => ({
//         ...provided,
//         backgroundColor: state.isSelected ? '#f1f3f5' : 'white',
//         color: '#696969',
//         fontSize: 14,
//         padding: 10,
//         cursor: 'pointer',
//         ':hover': {
//             backgroundColor: 'lightgray'
//         }
//     })
// };

interface Option {
    value: number;
    label: string;
}

const qtySelectOptions: Option[] = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
];

function NewEditModal({
  isCreate,
  shoplistItem,
  setNewCreateDialogIsOpen,
  // createShoplistItem,
  updateTheShoplistItem,
}: INewCreateModalProps) {
    const [itemname, setItemname] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [purchased, setPurchased] = useState(false);


    useEffect(() => {
        if (!isCreate && shoplistItem.id) {
            //  We're updating
            setItemname(shoplistItem.itemname);
            setDescription(shoplistItem.description);
            setQuantity(shoplistItem.quantity);
            setPurchased(shoplistItem.purchased);
        }
    }, []);

    return (
        <>
            <div className='dark-back-ground' onClick={() => setNewCreateDialogIsOpen(false)} />
            <div className='modal-centered'>
                <div className='modal modal__new-create-modal'>
                    <div className='create-edit-banner'>
                        <div className='banner-text'>SHOPPING LIST</div>
                    </div>
                    <div className='modal-content'>
                        <div className='modal-heading modal-heading__new-create-dlg'>{isCreate ? 'Add an Item' : 'Edit an Item'}</div>
                        <div className='explain-text explain-text__new-create-dlg'>{isCreate ? 'Add your new item below' : 'Edit your item below'}</div>
                        <input className='input-control'
                               placeholder='Item Name'
                               onChange={(event) => {
                                   setItemname(event.target.value);
                               }}
                        />
                        <div className='text-area-section'>
                            <textarea className='text-area-control'
                                      maxLength={100}
                                      placeholder='Description'
                                      onChange={(event) => {
                                          setDescription(event.target.value);
                                      }}
                            />
                            <span className='char-count'>{description.length ? `${description.length}/100` : `0/100`}</span>
                        </div>
                        <Select
                            // defaultValue={{value: 1, label: '1'}}
                            placeholder='How many?'
                            onChange={(newValue) => {setQuantity(newValue ? newValue.value : 1)}}
                            options={qtySelectOptions}
                            components={{
                                IndicatorSeparator: () => null,
                            }}
                            styles={customSelectStyles}
                        />
                    </div>
                    <div className='modal-actions'>
                        <div className='actions-container'>
                            <button className='cancel-modal-button' onClick={() => setNewCreateDialogIsOpen(false)}>
                                Cancel
                            </button>
                            <button className='main-modal-button' onClick={() => setNewCreateDialogIsOpen(false)}>
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
        setNewCreateDialogIsOpen: (isOpen: boolean) => {dispatch(setIsNewCreateDialogOpen({isOpen})); },
        updateTheShoplistItem: (shoplistItem: IShopListItem) => {dispatch(updateShoplistItem.started({shoplistItem}))},
    })
)(NewEditModal);