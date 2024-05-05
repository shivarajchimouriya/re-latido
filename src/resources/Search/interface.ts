export interface ISearchResponse {
    message: string;
    data: {
        data: Product[];
        page_no: number;
        limit: number;
        total_data: number;
        total_pages: number;
    };
}

interface Product {
    _id: string;
    level: number;
    gender: string;
    hardware: string[];
    lining: string[];
    pollyfill: boolean;
    rib: boolean;
    status: string;
    availability_status: null;
    tags: string[];
    notes: any[];
    new: boolean;
    primary_image: string;
    name: string;
    category: {
        _id: string;
        title: string;
    };
    description: string;
    product_specification: ProductSpecification[];
    slug: string;
    pattern_package: {
        [key: string]: string;
    };
    find_my_jacket: FindMyJacket[];
    added_by: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    main_tag: null;
    sub_category: null;
    associated_blog: string;
    secondary_image: null;
    pricing: string;
    id: string;
}

interface ProductSpecification {
    status: boolean;
    secondary_image: string[];
    _id: string;
    leather_id: {
        _id: string;
        item_name: string;
        icon: string;
    };
    default_hardware: string;
    default_lining: string;
    size_range: SizeRange[];
}

interface SizeRange {
    in_stock: boolean;
    _id: string;
    size: number;
    price: Price[];
}

interface Price {
    _id: string;
    currency: string;
    value: number;
}

interface FindMyJacket {
    answer: string[];
    tags: any[];
    _id: string;
    question: string;
}