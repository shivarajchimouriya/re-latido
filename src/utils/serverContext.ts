import { awsConfig } from '@/constants/awsConfig'
import {createServerRunner} from '@aws-amplify/adapter-nextjs'
 
export const {runWithAmplifyServerContext}=createServerRunner({config:awsConfig})