import { gql } from "@apollo/client";
export const getAttributes = gql`
  query getAttributes(
    $filters: AttributeFiltersInput
    $pagination: PaginationArg = {}
    $sort: [String] = []
  ) {
    attributes(filters: $filters, pagination: $pagination, sort: $sort) {
      data {
        id
        attributes {
          name
          label
          type
        }
      }
    }
  }
`;
