export interface IInvoiceResponse {
  message: string;
  data: {
    orderDetail: {
      _id: string;
      product_specification: {
        price: {
          currency: string;
          value: number;
        };
        status: boolean;
        secondary_image: any[];
        product_specification_id: string;
        size_range_id: string;
        leather_id: {
          _id: string;
          item_name: string;
          description: string;
          icon: string;
        };
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
      delivery_date: string;
      completion_process: string;
      payment_status: string;
      for_store: boolean;
      from_store: boolean;
      gift: boolean;
      from_suite: boolean;
      user_id: string;
      product: {
        _id: string;
        hardware: string[];
        lining: string[];
        primary_image: string;
        name: string;
        category: {
          _id: string;
          title: string;
          image: string;
        };
        sub_category: null;
      };
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
      createdAt: string;
      updatedAt: string;
      order_no: number;
      __v: number;
      shipping_details: {
        address: string;
        city: string;
        country: string;
        full_name: string;
        landmark: string;
        phone_number: string;
      };
    };
    orderProgress: null | any;
  };
}
