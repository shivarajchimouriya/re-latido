import { env } from "@/config/environment";
import { Amplify, ResourcesConfig } from "aws-amplify";

export const awsConfig: ResourcesConfig = {
  Storage: {
    S3: {
      bucket: env.BUCKET_NAME,
      region: env.BUCKET_REGION,
    },
  },

  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_POOL_ID as string,
      userPoolClientId: process.env.NEXT_PUBLIC_CLIENT_ID as string,
      identityPoolId: process.env.NEXT_PUBLIC_IDENTITY_POOL_ID as string,

      signUpVerificationMethod: "code",

      loginWith: {
        oauth: {
          domain: "test-latido.auth.ap-northeast-2.amazoncognito.com",
          redirectSignIn: ["https://localhost:3000?signedin=true"],
          redirectSignOut: ["https://localhost:3000/"],
          scopes: [
            "profile",
            "openid",
            "email",
            "phone",
            "aws.cognito.signin.user.admin",
            "profile",
          ],
          responseType: "code",
        },
      },
    },
  },
};
