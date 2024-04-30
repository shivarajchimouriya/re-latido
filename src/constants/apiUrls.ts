export const apiURLs = {

    product: {
        all: "/client_product_by_category/?gender=male&limit=10&page=1",
        byId: (id: string) => `/product/${id}`
    },
    category: {
        all: "/categories"
    }

}