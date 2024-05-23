export interface IshippingUpdate {
    checkout_id: string;
    shipping_details: IShippingDetails;
    _id: string;
}
export interface IShippingDetails {
    full_name: string;
    phone_number: string;
    country: string;
    address: string;
    landmark: string;
}

