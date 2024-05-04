export const apiURLs = {

    product: {
        all: "/client_product_by_category/?gender=male&limit=10&page=1",
        byId: (id: string) => `/client_product_by_category/${id}/`
    },
    category: {
        all: "/categories"
    },
    homepage: "/mobile_home?page=1&limit=1&gender=male&priceLowerLimit=0&priceUpperLimit=10000",
    filter: "/client_product"


}