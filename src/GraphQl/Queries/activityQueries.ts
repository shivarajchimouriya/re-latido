import {gql} from '@apollo/client';
export const GET_ACTIVITIES = gql`
  query activities {
    activities {
      data {
        attributes {
          title
          details
          sport {
            data {
              attributes {
                title
              }
            }
          }
          posts {
            data {
              id
              attributes {
                title
              }
            }
          }
          status
          tournament {
            data {
              attributes {
                title
              }
            }
          }
          media {
            data {
              attributes {
                url
              }
            }
          }

          childrens {
            data {
              attributes {
                title
                status
                type
                tags {
                  data {
                    attributes {
                      label
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
