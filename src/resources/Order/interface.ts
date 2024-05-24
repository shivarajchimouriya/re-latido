import { IProduct } from "../Product/interface";
import { IShippingDetails } from "../Shipping/interface";
interface Sizing {
    height: number;
    weight: number;
}
interface Price {
    currency: string;
    value: number;
}

interface LeatherDetails {
    _id: string;
    item_name: string;
    description: string;
    icon: string;
}

interface ProductSpecification {
    price: Price;
    status: boolean;
    secondary_image: string[];
    product_specification_id: string;
    size_range_id: string;
    leather_id: LeatherDetails;
    size: number;
    pattern_package: string;
}
interface Assignee {
    pattern_selection: any[];
    leather_cutting: any[];
    stitching: any[];
    checking_verification: any[];
    cleaning: any[];
}

export interface IOrderData {
    _id: string;
    product_specification: ProductSpecification;
    assignee: Assignee;
    client_order_status: string;
    pollyfill: boolean;
    rib: boolean;
    tools_selection_completed: boolean;
    assignee_completed: boolean;
    payment_mode: string;
    order_manage_process: string;
    delivery_date: string;
    completion_process: string;
    payment_status: string;
    for_store: boolean;
    from_store: boolean;
    gift: boolean;
    from_suite: boolean;
    user_id: string;
    product: IProduct;
    sizing: Sizing;
    hardware: string;
    lining: string;
    total_amount: number;
    origin: string;
    checkout_id: string;
    inventory_item: any[];
    leather_item: any[];
    createdAt: string;
    updatedAt: string;
    order_no: number;
    __v: number;
    shipping_details?: IShippingDetails;
    id: string;
}

export interface IOrderResponseData {
    message: string;
    data: {
        data: IOrderData[];
        page_no: number;
        limit: number;
        total_data: number;
        total_pages: number;
    };
}