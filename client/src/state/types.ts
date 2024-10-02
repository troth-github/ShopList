export interface IShopListItem {
    id?: number;
    itemname: string;
    description: string;
    quantity: number;
    purchased: boolean;
}

export interface IShopListState {
    fetchingShopList: boolean;
    fetchingShopListError: boolean;
    shopListItems: any;
    creatingShoplistItem: boolean;
    createShoplistItemError: boolean;
}