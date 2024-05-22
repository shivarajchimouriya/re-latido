import { awsConfig } from "@/constants/awsConfig";
import { Amplify, ResourcesConfig } from "aws-amplify";



export const configureAmplify = () => {
    Amplify.configure(
        awsConfig,
        { ssr: true }
    );
};