export interface IShippingDetails {
    product_specification: {
        price: {
            currency: string;
            value: number;
        };
        status: boolean;
        secondary_image: any[];
        product_specification_id: string;
        size_range_id: string;
        leather_id: string;
        size: number;
        pattern_package: string;
    };
    assignee: {
        pattern_selection: any[];
        leather_cutting: any[];
        stitching: any[];
        checking_verification: any[];
        cleaning: any[];
    };
    client_order_status: string;
    pollyfill: boolean;
    rib: boolean;
    tools_selection_completed: boolean;
    assignee_completed: boolean;
    payment_mode: string;
    order_manage_process: string;
    delivery_date: string; // Assuming the date is formatted as an ISO string
    is_deleted: boolean;
    completion_process: string;
    payment_status: string;
    for_store: boolean;
    from_store: boolean;
    gift: boolean;
    from_suite: boolean;
    _id: string;
    user_id: string;
    product: string;
    sizing: {
        height: number;
        weight: number;
    };
    hardware: string;
    lining: string;
    total_amount: number;
    origin: string;
    checkout_id: string;
    inventory_item: any[];
    leather_item: any[];
    createdAt: string; // Assuming the date is formatted as an ISO string
    updatedAt: string; // Assuming the date is formatted as an ISO string
    order_no: number;
    __v: number;
}