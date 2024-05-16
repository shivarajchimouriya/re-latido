import React from 'react'
import {Amplify} from 'aws-amplify'
 const configureAmplify = () => {
  Amplify.configure({
auth:{
aws_region
},
    
    Auth: {
        

      region: "ap-northeast-2",
      userPoolId: "ap-northeast-2_pzBOzAW5e",
      userPoolWebClientId: "2b6ominc6cn0r709tot0tofurj",
      mandatorySignIn: true,
      identityPoolRegion: "ap-northeast-2",
      identityPoolId: "ap-northeast-2:4a38cf31-13eb-48ee-95b7-eab774c659e8",

      authenticationFlowType: "USER_PASSWORD_AUTH",

      oauth: {
        domain: "test-latido.auth.ap-northeast-2.amazoncognito.com",
        redirectSignIn: "http://localhost:3000?signedin=true",
        redirectSignOut: "http://localhost:3000/",
        scope: ["profile", "openid", "email", "phone"],
        responseType: "code"
      }
    },
    Storage: {
      S3: {
        bucket: "bottle-latido-artifacts-test", //REQUIRED -  Amazon S3 bucket name
        region: "ap-northeast-2" //OPTIONAL -  Amazon service region
      }
    },
    API: {
      REST: {
        
      }
    },
    
  }),

};

const AuthProvider = () => {
  return (
    <div>AuthProvider</div>
  )
}

export default AuthProvider