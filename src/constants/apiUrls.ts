export const apiURLs = {

    product: {
        all: "/client_product_by_category/?gender=male&limit=10&page=1",
        byId: (id: string) => `/client_product_detail/${id}/`
    },
    category: {
        all: "/categories",
        byId: (categoryId: string) => `/client_product_by_category/${categoryId}/`
    },
    homepage: "/mobile_home?page=1&limit=1&gender=male&priceLowerLimit=0&priceUpperLimit=10000",
    filter: "/mobile_home",
    search: "/client_product",
    topRated: "/client_product",
    auth: {
        checkUser: "/auth/check"
    },
    user: {
        profile: "/client_user"
    },
    order: "/client_order",
    
    payment: {
        log: "/client_order/payment_log"
    }


}