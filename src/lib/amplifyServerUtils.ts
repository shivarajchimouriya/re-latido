import { createServerRunner } from '@aws-amplify/adapter-nextjs';
import { awsConfig } from '@/constants/awsConfig';

export const { runWithAmplifyServerContext } = createServerRunner({
    config: awsConfig
});