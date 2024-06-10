import { env } from "@/config/environment";

export default (imageKey: string) => {
  return env.S3_BASE_URL + imageKey;
};
