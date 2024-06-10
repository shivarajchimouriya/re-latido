import { logger } from "@/utils/logger";
import { uploadData } from "aws-amplify/storage";

class FileUpload {
  async uploadImage(imageOf: string, filename: string, file: any) {
    let imageUrl = "";
    try {
      const result = await uploadData({
        path: `public/profile/${imageOf}/${filename}`,
        data: file,
        options: {
          contentType: file.mime,
        },
      }).result;
      imageUrl = result.path;
    } catch (err: any) {
      logger.error("error uploading:", err);
    }
    return imageUrl;
  }
}

export default FileUpload;
