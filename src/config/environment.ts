export const env = {
  GOOGLE_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_API_KEY
}
export default {
  generateSourcemap: process.env.GENERATE_SOURCEMAP,
  base_url_dev_staging: process.env.REACT_APP_BASE_URL_DEV_STAGING,
  base_url_dev: process.env.REACT_APP_BASE_URL_DEV,
  base_url_staging: process.env.REACT_APP_BASE_URL_STAGING,
  base_url: process.env.REACT_APP_BASE_URL,
  khalti_public_key: process.env.REACT_APP_KHALTI_PUBLIC_KEY,
  e_client_id: process.env.REACT_APP_E_CLIENT_ID,
  e_secret_key: process.env.REACT_APP_E_SECRET_KEY,
  user_pool_id: process.env.USER_POOL_ID,
  cognito_name: process.env.COGNITO_NAME,
  cognito_web_client_id: process.env.COGNITO_WEB_CLIENT_ID,
  region: process.env.REGION,
  identity_pool_id: process.env.IDENTITY_POOL_ID,
  base_url_admin_staging: process.env.BASE_URL_ADMIN_STAGING,
  base_url_inventory_staging: process.env.BASE_URL_INVENTORY_STAGING,
  auth_flow: process.env.AUTH_FLOW,
  bucket_name: process.env.BUCKET_NAME,
  bucket_region: process.env.BUCKET_REGION,
  bucket_url: process.env.REACT_APP_BUCKET_URL,
  app_url: process.env.REACT_APP_URL,

  client_id: process.env.REACT_APP_APP_CLIENT_ID,
  fonepay_base_url: process.env.REACT_APP_FONEPAY_BASE_URL,

  client_bucket_url: process.env.NEXT_PUBLIC_BUCKET_URL,
  product_mutation_token: process.env.REACT_APP_PRODUCT_MUTATION_TOKEN,
  size_module_base_url: process.env.SIZE_MODULE_BASE_URL || process.env.NEXT_PUBLIC_SIZE_MODULE_BASE_URL,
  google_api_key: process.env.REACT_APP_GOOGLE_API_KEY,
  fonepay_pid: process.env.REACT_APP_FONEPAY_PID,
};
