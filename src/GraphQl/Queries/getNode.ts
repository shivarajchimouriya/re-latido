import { gql } from "@apollo/client";
export const getNode = gql`
  query getNodes(
    $filters: NodeFiltersInput
    $pagination: PaginationArg = {}
    $sort: [String] = []
  ) {
    nodes(filters: $filters, pagination: $pagination, sort: $sort) {
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
          outputLevel
          output
          title
          products {
            title
          }
          nodes {
            data {
              id
              attributes {
                title
                attribute_values {
                  data {
                    id
                    attributes {
                      attribute {
                        data {
                          attributes {
                            name
                          }
                        }
                      }
                      valueOne
                      valueTwo
                    }
                  }
                }
              }
            }
          }
          attribute_values {
            data {
              id
              attributes {
                attribute {
                  data {
                    attributes {
                      name
                    }
                  }
                }
                valueOne
                valueTwo
              }
            }
          }
        }
      }
    }
  }
`;
