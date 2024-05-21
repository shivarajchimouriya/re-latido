import { Amplify } from "aws-amplify";

export const configureAmplify = () => {
    Amplify.configure(
        {
            Auth: {

                Cognito: {

                    userPoolId: "ap-northeast-2_pzBOzAW5e",
                    userPoolClientId: "2b6ominc6cn0r709tot0tofurj",
                    identityPoolId: "ap-northeast-2:4a38cf31-13eb-48ee-95b7-eab774c659e8",
                    signUpVerificationMethod: "code",

                    loginWith: {
                        oauth: {

                            domain: "test-latido.auth.ap-northeast-2.amazoncognito.com",
                            redirectSignIn: ["https://localhost:3000?signedin=true"],
                            redirectSignOut: ["https://localhost:3000/"],
                            scopes: ["profile", "openid", "email", "phone", "email", "aws.cognito.signin.user.admin", "profile"],
                            responseType: "code"
                        }
                    }
                }
            },

        },

        { ssr: true }
    );
};