export const apiURLs = {
  product: {
    all: "/client_product_by_category/",
    byId: (id: string) => `/client_product_detail/${id}/`,
  },
  category: {
    all: "/categories",
    byId: (categoryId: string) => `/client_product_by_category/${categoryId}/`,
  },
  homepage:
    "/mobile_home",
  filter: "/mobile_home",
  search: "/client_product",
  topRated: "/client_product",
  auth: {
    checkUser: "/auth/check",
  },
  user: {
    profile: "/client_user",
  },
  order: "/client_order",
  orderById: (id: string) => `/client_order/${id}`,

  payment: {
    log: "/client_order/payment_log",
  },
  invoiceDetails: {
    byId: (id: string) => `/client_order/${id}`,
  },
};
