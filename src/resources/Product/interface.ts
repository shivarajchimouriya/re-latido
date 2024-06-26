import { ICategory } from "../Category/interface";

export interface IProductResponse {
  message: string;
  data: {
    page: number | null;
    limit: number | null;
    data: IProduct[];
  };
}

export interface IProduct {
  _id: string;
  secondary_image: string | null;
  gender: string;
  level: number;
  hardware: string[];
  lining: string[];
  pollyfill: boolean;
  rib: boolean;
  status: string;
  availability_status: string | null;
  tags: string[];
  notes: any[]; // You may want to replace 'any' with a specific type if possible
  new: boolean;
  primary_image: string;
  name: string;
  category: {
    _id: string;
    level: number;
    title: string;
    image: string;
    parent_category: string;
    slug: string;
  };
  description: string;
  product_specification: {
    status: boolean;
    secondary_image: any[]; // You may want to replace 'any' with a specific type if possible
    _id: string;
    leather_id: LeatherId;
    default_hardware: string;
    default_lining: string;
    size_range: {
      in_stock: boolean;
      _id: string;
      size: number;
      price: {
        _id: string;
        currency: string;
        value: number;
      }[];
    }[];
  }[];
  slug: string;
  pattern_package: { [key: string]: string };
  find_my_jacket: {
    answer: string[];
    tags: any[]; // You may want to replace 'any' with a specific type if possible
    _id: string;
    question: string;
  }[];
  added_by: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  associated_blog: string | null;
  main_tag: string | null;
  sub_category: string | null;
  pricing: string;
  isFav: boolean;
}

interface LeatherId {
  _id: string;
  item_name: string;
  latido_code: string;
  ball_image: string;
  brand: string;
  color: string;
  icon: string;
}

interface Category {
  _id: string;
  level: number;
  is_active: boolean;
  is_deleted: boolean;
  title: string;
  image: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface FetchResponse {
  message: string;
  data: {
    product: {
      data: IProduct[];
      success: boolean;
      msg: string;
      page: string;
      size: string;
      totalData: number;
    };
    category: Category[];
  };
}

export interface IResponseProductByCategory extends IProductResponse {}
export interface IResposneFIlteredProduct {
  message: string;
  data: {
    product: {
      data: IProduct[];
      success: boolean;
      msg: string;
      page: string;
      size: string;
      totalData: number;
    };
    category: ICategory[];
  };
}
export interface IProductFilterReq {
  collections: string;
  gender: string;
  priceLowerLimit: string;
  priceUpperLimit: string;
  page: number;
  limit: number;
}

export interface ISearchResponse extends IProductResponse {}

export interface IProductDetailResponse {
  data: {
    productDetail: IProduct;
  };
}
