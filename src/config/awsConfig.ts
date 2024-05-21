import { Amplify } from "aws-amplify";

export const configureAmplify = () => {
    Amplify.configure(
        {
            Auth: {

                Cognito: {

                    userPoolId: (process.env.POOL_ID || process.env.NEXT_PUBLIC_POOL_ID) as string,
                    userPoolClientId: (process.env.CLIENT_ID || process.env.NEXT_PUBLIC_CLIENT_ID) as string,
                    identityPoolId: process.env.IDENTITY_POOL_ID as string || process.env.NEXT_PUBLIC_IDENTITY_POOL_ID as string,
                    signUpVerificationMethod: "code",

                    loginWith: {
                        oauth: {

                            domain: "test-latido.auth.ap-northeast-2.amazoncognito.com",
                            redirectSignIn: ["https://localhost:3000?signedin=true"],
                            redirectSignOut: ["https://localhost:3000/"],
                            scopes: ["profile", "openid", "email", "phone", "aws.cognito.signin.user.admin", "profile"],
                            responseType: "code"
                        }
                    }
                }
            },

        },

        { ssr: true }
    );
};