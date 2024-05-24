 interface ProductSpecification {
    price: {
        currency: string;
        value: number;
    };
    product_specification_id: string;
    size_range_id: string;
    leather_id: string;
    size: number;
    pattern_package: string;
}

interface Sizing {
    height: number;
    weight: number;
}

export interface OrderRequestDTO {
    product_specification: ProductSpecification;
    sizing: Sizing;
    product: string;
    lining: string;
    hardware: string;
    total_amount: number;
    origin: string;
}
