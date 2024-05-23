import { gql } from "@apollo/client";
export const getAttributeValues = gql`
  query getAttributeValues(
    $filters: AttributeValueFiltersInput
    $pagination: PaginationArg = {}
    $sort: [String] = []
  ) {
    attributeValues(filters: $filters, pagination: $pagination, sort: $sort) {
      data {
        id
        attributes {
          valueOne
          valueTwo
          attribute {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;
