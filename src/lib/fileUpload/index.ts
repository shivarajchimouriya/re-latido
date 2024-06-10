import { logger } from "@/utils/logger";
import { uploadData } from "aws-amplify/storage";

class FileUpload {
  async uploadImage(imageOf: string, filename: string, file: File) {
    let imageUrl = "";
    try {
      const result = await uploadData({
        path: `public/profile/${imageOf}/${filename}`,
        data: file,
        options: {
          contentType: file.type,
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
