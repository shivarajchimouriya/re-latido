export interface PatternPackage {
  [key: number]: string;
}

export interface FindMyJacket {
  answer: string[];
  tags: string[];
  _id: string;
  question: string
}
interface SizePrice {
  _id: string;
  currency: string;
  value: number;
}

interface SizeRange {
  in_stock: boolean;
  _id: string;
  size: number;
  price: SizePrice[];
}

interface LeatherId {
  _id: string;
  item_name: string;
  latido_code: string;
  brand: string;
  color: string;
  icon: string;
  ball_image: string;
}

interface ProductSpecification {
  status: boolean;
  secondary_image: string[];
  _id: string;
  leather_id: LeatherId;
  default_hardware: string;
  default_lining: string;
  size_range: SizeRange[];
}
interface BlogContentItem {
  id: number;
  isRow: boolean;
  parentId?: number;
  contentId?: number;
  size?: number;
  contentType?: string;
  url?: string;
}

interface AssociatedBlog {
  _id: string;
  content: (BlogContentItem[] | string)[];
  title: string;
  shortCode: string;
  author: string;
  updatedAt: string;
  primaryMedia: string;
}
export interface IProductResponse {
  productDetail: {
    _id: string;
    secondary_image: string[] | null;
    gender: string;
    level: number;
    hardware: string[];
    lining: string[];
    pollyfill: boolean;
    rib: boolean;
    status: string;
    availability_status: string | null;
    tags: string[];
    notes: string[];
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
    pattern_package: PatternPackage;
    find_my_jacket: FindMyJacket[];
    added_by: string;
    createdAt: string;
    updatedAt: string;
    __v: number,
    associated_blog: AssociatedBlog;
    main_tag: string | null;
    sub_category: string | null;
    pricing: string;
  };
}
