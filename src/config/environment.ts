export const env = {
  GOOGLE_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  API_URL: process.env.API_URL || process.env.NEXT_PUBLIC_API_URL,
  S3_BASE_URL: process.env.S3_BASE_URL || process.env.NEXT_PUBLIC_S3_BASE_URL,
  IDENTITY_POOL_ID: process.env.IDENTITY_POOL_ID || process.env.NEXT_PUBLIC_IDENTITY_POOL_ID,
  CLIENT_ID: process.env.CLIENT_ID || process.env.NEXT_PUBLIC_CLIENT_ID,
  POOL_ID: process.env.POOL_ID || process.env.NEXT_PUBLIC_POOL_ID,
  GRAPHQL_API: process.env.NEXT_PUBLIC_GRAPHQL_API
}
