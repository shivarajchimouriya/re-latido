import { gql } from "@apollo/client";
export const getFilteredProductList = gql`
query ProductList($filters: ProductListFiltersInput = {}) {
    productLists(filters:$filters) {
      meta{
        pagination{
          total
          page
          pageSize
        }
      }
      data {
        id
        attributes {
          product_name
          productId
          FrontImage
          Fit
          BackImage
        }
      }
    }
  }
`;

