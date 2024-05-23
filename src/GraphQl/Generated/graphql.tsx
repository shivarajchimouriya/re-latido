import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  PersonDetailsDynamicZoneInput: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type Activity = {
  __typename?: 'Activity';
  Winner?: Maybe<Scalars['String']['output']>;
  activityType?: Maybe<Enum_Activity_Activitytype>;
  childrens?: Maybe<ActivityRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  media?: Maybe<UploadFileRelationResponseCollection>;
  organization?: Maybe<OrganizationEntityResponse>;
  parent?: Maybe<ActivityEntityResponse>;
  person?: Maybe<PersonEntityResponse>;
  posts?: Maybe<PostRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  sport?: Maybe<SportEntityResponse>;
  status?: Maybe<Enum_Activity_Status>;
  tags?: Maybe<TagRelationResponseCollection>;
  title?: Maybe<Scalars['String']['output']>;
  tournament?: Maybe<TournamentEntityResponse>;
  type?: Maybe<Enum_Activity_Type>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ActivityChildrensArgs = {
  filters?: InputMaybe<ActivityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ActivityMediaArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ActivityPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ActivityTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ActivityEntity = {
  __typename?: 'ActivityEntity';
  attributes?: Maybe<Activity>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ActivityEntityResponse = {
  __typename?: 'ActivityEntityResponse';
  data?: Maybe<ActivityEntity>;
};

export type ActivityEntityResponseCollection = {
  __typename?: 'ActivityEntityResponseCollection';
  data: Array<ActivityEntity>;
  meta: ResponseCollectionMeta;
};

export type ActivityFiltersInput = {
  Winner?: InputMaybe<StringFilterInput>;
  activityType?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ActivityFiltersInput>>>;
  childrens?: InputMaybe<ActivityFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  details?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ActivityFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ActivityFiltersInput>>>;
  organization?: InputMaybe<OrganizationFiltersInput>;
  parent?: InputMaybe<ActivityFiltersInput>;
  person?: InputMaybe<PersonFiltersInput>;
  posts?: InputMaybe<PostFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  sport?: InputMaybe<SportFiltersInput>;
  status?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<TagFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  tournament?: InputMaybe<TournamentFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ActivityInput = {
  Winner?: InputMaybe<Scalars['String']['input']>;
  activityType?: InputMaybe<Enum_Activity_Activitytype>;
  childrens?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  details?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  organization?: InputMaybe<Scalars['ID']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  person?: InputMaybe<Scalars['ID']['input']>;
  posts?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sport?: InputMaybe<Scalars['ID']['input']>;
  status?: InputMaybe<Enum_Activity_Status>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  tournament?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Enum_Activity_Type>;
};

export type ActivityRelationResponseCollection = {
  __typename?: 'ActivityRelationResponseCollection';
  data: Array<ActivityEntity>;
};

export type Attribute = {
  __typename?: 'Attribute';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Enum_Attribute_Type>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AttributeEntity = {
  __typename?: 'AttributeEntity';
  attributes?: Maybe<Attribute>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type AttributeEntityResponse = {
  __typename?: 'AttributeEntityResponse';
  data?: Maybe<AttributeEntity>;
};

export type AttributeEntityResponseCollection = {
  __typename?: 'AttributeEntityResponseCollection';
  data: Array<AttributeEntity>;
  meta: ResponseCollectionMeta;
};

export type AttributeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AttributeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<AttributeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AttributeFiltersInput>>>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AttributeInput = {
  label?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Enum_Attribute_Type>;
};

export type AttributeValue = {
  __typename?: 'AttributeValue';
  attribute?: Maybe<AttributeEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  nodes?: Maybe<NodeRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  valueOne?: Maybe<Scalars['String']['output']>;
  valueTwo?: Maybe<Scalars['String']['output']>;
};


export type AttributeValueNodesArgs = {
  filters?: InputMaybe<NodeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AttributeValueEntity = {
  __typename?: 'AttributeValueEntity';
  attributes?: Maybe<AttributeValue>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type AttributeValueEntityResponse = {
  __typename?: 'AttributeValueEntityResponse';
  data?: Maybe<AttributeValueEntity>;
};

export type AttributeValueEntityResponseCollection = {
  __typename?: 'AttributeValueEntityResponseCollection';
  data: Array<AttributeValueEntity>;
  meta: ResponseCollectionMeta;
};

export type AttributeValueFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AttributeValueFiltersInput>>>;
  attribute?: InputMaybe<AttributeFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  nodes?: InputMaybe<NodeFiltersInput>;
  not?: InputMaybe<AttributeValueFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AttributeValueFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  valueOne?: InputMaybe<StringFilterInput>;
  valueTwo?: InputMaybe<StringFilterInput>;
};

export type AttributeValueInput = {
  attribute?: InputMaybe<Scalars['ID']['input']>;
  nodes?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  valueOne?: InputMaybe<Scalars['String']['input']>;
  valueTwo?: InputMaybe<Scalars['String']['input']>;
};

export type AttributeValueRelationResponseCollection = {
  __typename?: 'AttributeValueRelationResponseCollection';
  data: Array<AttributeValueEntity>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ChartbrewChartbrew = {
  __typename?: 'ChartbrewChartbrew';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  host: Scalars['String']['output'];
  token: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ChartbrewChartbrewEntity = {
  __typename?: 'ChartbrewChartbrewEntity';
  attributes?: Maybe<ChartbrewChartbrew>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ChartbrewChartbrewEntityResponse = {
  __typename?: 'ChartbrewChartbrewEntityResponse';
  data?: Maybe<ChartbrewChartbrewEntity>;
};

export type ChartbrewChartbrewInput = {
  host?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentInformationAddress = {
  __typename?: 'ComponentInformationAddress';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  district?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  state?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type ComponentInformationAddressFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentInformationAddressFiltersInput>>>;
  city?: InputMaybe<StringFilterInput>;
  country?: InputMaybe<StringFilterInput>;
  district?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentInformationAddressFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentInformationAddressFiltersInput>>>;
  state?: InputMaybe<StringFilterInput>;
  street?: InputMaybe<StringFilterInput>;
  zipCode?: InputMaybe<StringFilterInput>;
};

export type ComponentInformationAddressInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  district?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentInformationContactDetails = {
  __typename?: 'ComponentInformationContactDetails';
  alternativeEmail?: Maybe<Scalars['String']['output']>;
  alternativePhone?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  mobile?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
};

export type ComponentInformationContactDetailsFiltersInput = {
  alternativeEmail?: InputMaybe<StringFilterInput>;
  alternativePhone?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentInformationContactDetailsFiltersInput>>>;
  email?: InputMaybe<StringFilterInput>;
  mobile?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentInformationContactDetailsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentInformationContactDetailsFiltersInput>>>;
  phone?: InputMaybe<StringFilterInput>;
};

export type ComponentInformationContactDetailsInput = {
  alternativeEmail?: InputMaybe<Scalars['String']['input']>;
  alternativePhone?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentInformationProduct = {
  __typename?: 'ComponentInformationProduct';
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentInformationProductFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentInformationProductFiltersInput>>>;
  not?: InputMaybe<ComponentInformationProductFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentInformationProductFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentInformationProductInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentInformationReferences = {
  __typename?: 'ComponentInformationReferences';
  id: Scalars['ID']['output'];
  link?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentInformationReferencesFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentInformationReferencesFiltersInput>>>;
  link?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentInformationReferencesFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentInformationReferencesFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentInformationReferencesInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentInformationRole = {
  __typename?: 'ComponentInformationRole';
  description?: Maybe<Scalars['String']['output']>;
  designation?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  organization?: Maybe<OrganizationEntityResponse>;
  startDate?: Maybe<Scalars['Date']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentInformationSocialProfile = {
  __typename?: 'ComponentInformationSocialProfile';
  facebook?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  instagram?: Maybe<Scalars['String']['output']>;
  linkedin?: Maybe<Scalars['String']['output']>;
  tiktok?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  youtube?: Maybe<Scalars['String']['output']>;
};

export type ComponentInformationSocialProfileFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentInformationSocialProfileFiltersInput>>>;
  facebook?: InputMaybe<StringFilterInput>;
  instagram?: InputMaybe<StringFilterInput>;
  linkedin?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentInformationSocialProfileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentInformationSocialProfileFiltersInput>>>;
  tiktok?: InputMaybe<StringFilterInput>;
  twitter?: InputMaybe<StringFilterInput>;
  youtube?: InputMaybe<StringFilterInput>;
};

export type ComponentInformationSocialProfileInput = {
  facebook?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  tiktok?: InputMaybe<Scalars['String']['input']>;
  twitter?: InputMaybe<Scalars['String']['input']>;
  youtube?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentMediaGallery = {
  __typename?: 'ComponentMediaGallery';
  cover?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID']['output'];
  images?: Maybe<UploadFileRelationResponseCollection>;
  title?: Maybe<Scalars['String']['output']>;
  tournament?: Maybe<TournamentEntityResponse>;
};


export type ComponentMediaGalleryImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentMediaGalleryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentMediaGalleryFiltersInput>>>;
  not?: InputMaybe<ComponentMediaGalleryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentMediaGalleryFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  tournament?: InputMaybe<TournamentFiltersInput>;
};

export type ComponentMediaGalleryInput = {
  cover?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  tournament?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentSharedMetaSocial = {
  __typename?: 'ComponentSharedMetaSocial';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork;
  title: Scalars['String']['output'];
};

export type ComponentSharedMetaSocialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  socialNetwork?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo';
  canonicalURL?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  keywords?: Maybe<Scalars['String']['output']>;
  metaDescription: Scalars['String']['output'];
  metaImage: UploadFileEntityResponse;
  metaRobots?: Maybe<Scalars['String']['output']>;
  metaSocial?: Maybe<Array<Maybe<ComponentSharedMetaSocial>>>;
  metaTitle: Scalars['String']['output'];
  metaViewport?: Maybe<Scalars['String']['output']>;
  structuredData?: Maybe<Scalars['JSON']['output']>;
};


export type ComponentSharedSeoMetaSocialArgs = {
  filters?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  contains?: InputMaybe<Scalars['Date']['input']>;
  containsi?: InputMaybe<Scalars['Date']['input']>;
  endsWith?: InputMaybe<Scalars['Date']['input']>;
  eq?: InputMaybe<Scalars['Date']['input']>;
  eqi?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']['input']>;
  notContainsi?: InputMaybe<Scalars['Date']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  startsWith?: InputMaybe<Scalars['Date']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_Activity_Activitytype {
  Event = 'Event',
  News = 'News',
  Notice = 'Notice',
  Post = 'Post'
}

export enum Enum_Activity_Status {
  Closed = 'CLOSED',
  Completed = 'COMPLETED',
  Draft = 'DRAFT',
  FollowUp = 'FOLLOW_UP',
  InProgress = 'IN_PROGRESS'
}

export enum Enum_Activity_Type {
  Awarded = 'AWARDED',
  MatchLost = 'MATCH_LOST',
  MatchWin = 'MATCH_WIN',
  MedalWinner = 'MEDAL_WINNER',
  Participated = 'PARTICIPATED',
  Returned = 'RETURNED',
  Travelled = 'TRAVELLED'
}

export enum Enum_Attribute_Type {
  MinMax = 'MIN_MAX',
  Single = 'SINGLE'
}

export enum Enum_Componentsharedmetasocial_Socialnetwork {
  Facebook = 'Facebook',
  Twitter = 'Twitter'
}

export enum Enum_Graphsbuildergraph_Type {
  Bar = 'bar',
  DateLine = 'dateLine',
  Line = 'line',
  Pie = 'pie'
}

export enum Enum_Menusmenuitem_Target {
  Blank = 'blank',
  Parent = 'parent',
  Self = 'self',
  Top = 'top'
}

export enum Enum_Person_Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER'
}

export enum Enum_Sportsevent_Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Mix = 'MIX'
}

export enum Enum_Tournamenttype_Level {
  Asian = 'ASIAN',
  District = 'DISTRICT',
  International = 'INTERNATIONAL',
  Local = 'LOCAL',
  National = 'NATIONAL',
  Province = 'PROVINCE',
  Regional = 'REGIONAL',
  SouthAsian = 'SOUTH_ASIAN',
  World = 'WORLD'
}

export type Error = {
  __typename?: 'Error';
  code: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = Activity | Attribute | AttributeValue | ChartbrewChartbrew | ComponentInformationAddress | ComponentInformationContactDetails | ComponentInformationProduct | ComponentInformationReferences | ComponentInformationRole | ComponentInformationSocialProfile | ComponentMediaGallery | ComponentSharedMetaSocial | ComponentSharedSeo | GraphsBuilderGraph | I18NLocale | MenusMenu | MenusMenuItem | Node | Organization | Person | Post | ProductList | Result | Sport | SportsEvent | Tag | Tournament | TournamentType | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type GraphsBuilderGraph = {
  __typename?: 'GraphsBuilderGraph';
  collectionX: Scalars['String']['output'];
  collectionXAttribute?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  title: Scalars['String']['output'];
  type: Enum_Graphsbuildergraph_Type;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GraphsBuilderGraphEntity = {
  __typename?: 'GraphsBuilderGraphEntity';
  attributes?: Maybe<GraphsBuilderGraph>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type GraphsBuilderGraphEntityResponse = {
  __typename?: 'GraphsBuilderGraphEntityResponse';
  data?: Maybe<GraphsBuilderGraphEntity>;
};

export type GraphsBuilderGraphEntityResponseCollection = {
  __typename?: 'GraphsBuilderGraphEntityResponseCollection';
  data: Array<GraphsBuilderGraphEntity>;
  meta: ResponseCollectionMeta;
};

export type GraphsBuilderGraphFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<GraphsBuilderGraphFiltersInput>>>;
  collectionX?: InputMaybe<StringFilterInput>;
  collectionXAttribute?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<GraphsBuilderGraphFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GraphsBuilderGraphFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type GraphsBuilderGraphInput = {
  collectionX?: InputMaybe<Scalars['String']['input']>;
  collectionXAttribute?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Enum_Graphsbuildergraph_Type>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type MenusMenu = {
  __typename?: 'MenusMenu';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  items?: Maybe<MenusMenuItemRelationResponseCollection>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type MenusMenuItemsArgs = {
  filters?: InputMaybe<MenusMenuItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MenusMenuEntity = {
  __typename?: 'MenusMenuEntity';
  attributes?: Maybe<MenusMenu>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type MenusMenuEntityResponse = {
  __typename?: 'MenusMenuEntityResponse';
  data?: Maybe<MenusMenuEntity>;
};

export type MenusMenuEntityResponseCollection = {
  __typename?: 'MenusMenuEntityResponseCollection';
  data: Array<MenusMenuEntity>;
  meta: ResponseCollectionMeta;
};

export type MenusMenuFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MenusMenuFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  items?: InputMaybe<MenusMenuItemFiltersInput>;
  not?: InputMaybe<MenusMenuFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MenusMenuFiltersInput>>>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type MenusMenuInput = {
  items?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MenusMenuItem = {
  __typename?: 'MenusMenuItem';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<MenusMenuItemEntityResponse>;
  root_menu: MenusMenuEntityResponse;
  target?: Maybe<Enum_Menusmenuitem_Target>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type MenusMenuItemEntity = {
  __typename?: 'MenusMenuItemEntity';
  attributes?: Maybe<MenusMenuItem>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type MenusMenuItemEntityResponse = {
  __typename?: 'MenusMenuItemEntityResponse';
  data?: Maybe<MenusMenuItemEntity>;
};

export type MenusMenuItemEntityResponseCollection = {
  __typename?: 'MenusMenuItemEntityResponseCollection';
  data: Array<MenusMenuItemEntity>;
  meta: ResponseCollectionMeta;
};

export type MenusMenuItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MenusMenuItemFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<MenusMenuItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MenusMenuItemFiltersInput>>>;
  order?: InputMaybe<IntFilterInput>;
  parent?: InputMaybe<MenusMenuItemFiltersInput>;
  root_menu?: InputMaybe<MenusMenuFiltersInput>;
  target?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type MenusMenuItemInput = {
  order?: InputMaybe<Scalars['Int']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  root_menu?: InputMaybe<Scalars['ID']['input']>;
  target?: InputMaybe<Enum_Menusmenuitem_Target>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type MenusMenuItemRelationResponseCollection = {
  __typename?: 'MenusMenuItemRelationResponseCollection';
  data: Array<MenusMenuItemEntity>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createActivity?: Maybe<ActivityEntityResponse>;
  createAttribute?: Maybe<AttributeEntityResponse>;
  createAttributeValue?: Maybe<AttributeValueEntityResponse>;
  createGraphsBuilderGraph?: Maybe<GraphsBuilderGraphEntityResponse>;
  createMenusMenu?: Maybe<MenusMenuEntityResponse>;
  createMenusMenuItem?: Maybe<MenusMenuItemEntityResponse>;
  createNode?: Maybe<NodeEntityResponse>;
  createOrganization?: Maybe<OrganizationEntityResponse>;
  createPerson?: Maybe<PersonEntityResponse>;
  createPost?: Maybe<PostEntityResponse>;
  createProductList?: Maybe<ProductListEntityResponse>;
  createResult?: Maybe<ResultEntityResponse>;
  createSport?: Maybe<SportEntityResponse>;
  createSportsEvent?: Maybe<SportsEventEntityResponse>;
  createTag?: Maybe<TagEntityResponse>;
  createTournament?: Maybe<TournamentEntityResponse>;
  createTournamentType?: Maybe<TournamentTypeEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteActivity?: Maybe<ActivityEntityResponse>;
  deleteAttribute?: Maybe<AttributeEntityResponse>;
  deleteAttributeValue?: Maybe<AttributeValueEntityResponse>;
  deleteChartbrewChartbrew?: Maybe<ChartbrewChartbrewEntityResponse>;
  deleteGraphsBuilderGraph?: Maybe<GraphsBuilderGraphEntityResponse>;
  deleteMenusMenu?: Maybe<MenusMenuEntityResponse>;
  deleteMenusMenuItem?: Maybe<MenusMenuItemEntityResponse>;
  deleteNode?: Maybe<NodeEntityResponse>;
  deleteOrganization?: Maybe<OrganizationEntityResponse>;
  deletePerson?: Maybe<PersonEntityResponse>;
  deletePost?: Maybe<PostEntityResponse>;
  deleteProductList?: Maybe<ProductListEntityResponse>;
  deleteResult?: Maybe<ResultEntityResponse>;
  deleteSport?: Maybe<SportEntityResponse>;
  deleteSportsEvent?: Maybe<SportsEventEntityResponse>;
  deleteTag?: Maybe<TagEntityResponse>;
  deleteTournament?: Maybe<TournamentEntityResponse>;
  deleteTournamentType?: Maybe<TournamentTypeEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateActivity?: Maybe<ActivityEntityResponse>;
  updateAttribute?: Maybe<AttributeEntityResponse>;
  updateAttributeValue?: Maybe<AttributeValueEntityResponse>;
  updateChartbrewChartbrew?: Maybe<ChartbrewChartbrewEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateGraphsBuilderGraph?: Maybe<GraphsBuilderGraphEntityResponse>;
  updateMenusMenu?: Maybe<MenusMenuEntityResponse>;
  updateMenusMenuItem?: Maybe<MenusMenuItemEntityResponse>;
  updateNode?: Maybe<NodeEntityResponse>;
  updateOrganization?: Maybe<OrganizationEntityResponse>;
  updatePerson?: Maybe<PersonEntityResponse>;
  updatePost?: Maybe<PostEntityResponse>;
  updateProductList?: Maybe<ProductListEntityResponse>;
  updateResult?: Maybe<ResultEntityResponse>;
  updateSport?: Maybe<SportEntityResponse>;
  updateSportsEvent?: Maybe<SportsEventEntityResponse>;
  updateTag?: Maybe<TagEntityResponse>;
  updateTournament?: Maybe<TournamentEntityResponse>;
  updateTournamentType?: Maybe<TournamentTypeEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateActivityArgs = {
  data: ActivityInput;
};


export type MutationCreateAttributeArgs = {
  data: AttributeInput;
};


export type MutationCreateAttributeValueArgs = {
  data: AttributeValueInput;
};


export type MutationCreateGraphsBuilderGraphArgs = {
  data: GraphsBuilderGraphInput;
};


export type MutationCreateMenusMenuArgs = {
  data: MenusMenuInput;
};


export type MutationCreateMenusMenuItemArgs = {
  data: MenusMenuItemInput;
};


export type MutationCreateNodeArgs = {
  data: NodeInput;
};


export type MutationCreateOrganizationArgs = {
  data: OrganizationInput;
};


export type MutationCreatePersonArgs = {
  data: PersonInput;
};


export type MutationCreatePostArgs = {
  data: PostInput;
};


export type MutationCreateProductListArgs = {
  data: ProductListInput;
};


export type MutationCreateResultArgs = {
  data: ResultInput;
};


export type MutationCreateSportArgs = {
  data: SportInput;
};


export type MutationCreateSportsEventArgs = {
  data: SportsEventInput;
};


export type MutationCreateTagArgs = {
  data: TagInput;
};


export type MutationCreateTournamentArgs = {
  data: TournamentInput;
};


export type MutationCreateTournamentTypeArgs = {
  data: TournamentTypeInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteActivityArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteAttributeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteAttributeValueArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteGraphsBuilderGraphArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMenusMenuArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMenusMenuItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteNodeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteOrganizationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePersonArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePostArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProductListArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteResultArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSportArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSportsEventArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTagArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTournamentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTournamentTypeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateActivityArgs = {
  data: ActivityInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateAttributeArgs = {
  data: AttributeInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateAttributeValueArgs = {
  data: AttributeValueInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateChartbrewChartbrewArgs = {
  data: ChartbrewChartbrewInput;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateGraphsBuilderGraphArgs = {
  data: GraphsBuilderGraphInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateMenusMenuArgs = {
  data: MenusMenuInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateMenusMenuItemArgs = {
  data: MenusMenuItemInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateNodeArgs = {
  data: NodeInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateOrganizationArgs = {
  data: OrganizationInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePersonArgs = {
  data: PersonInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePostArgs = {
  data: PostInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateProductListArgs = {
  data: ProductListInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateResultArgs = {
  data: ResultInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSportArgs = {
  data: SportInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSportsEventArgs = {
  data: SportsEventInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateTagArgs = {
  data: TagInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateTournamentArgs = {
  data: TournamentInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateTournamentTypeArgs = {
  data: TournamentTypeInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Node = {
  __typename?: 'Node';
  attribute_values?: Maybe<AttributeValueRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  nodes?: Maybe<NodeRelationResponseCollection>;
  output?: Maybe<Scalars['Int']['output']>;
  outputLevel?: Maybe<Scalars['String']['output']>;
  products?: Maybe<Array<Maybe<ComponentInformationProduct>>>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type NodeAttribute_ValuesArgs = {
  filters?: InputMaybe<AttributeValueFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type NodeNodesArgs = {
  filters?: InputMaybe<NodeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type NodeProductsArgs = {
  filters?: InputMaybe<ComponentInformationProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type NodeEntity = {
  __typename?: 'NodeEntity';
  attributes?: Maybe<Node>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type NodeEntityResponse = {
  __typename?: 'NodeEntityResponse';
  data?: Maybe<NodeEntity>;
};

export type NodeEntityResponseCollection = {
  __typename?: 'NodeEntityResponseCollection';
  data: Array<NodeEntity>;
  meta: ResponseCollectionMeta;
};

export type NodeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<NodeFiltersInput>>>;
  attribute_values?: InputMaybe<AttributeValueFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  nodes?: InputMaybe<NodeFiltersInput>;
  not?: InputMaybe<NodeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NodeFiltersInput>>>;
  output?: InputMaybe<IntFilterInput>;
  outputLevel?: InputMaybe<StringFilterInput>;
  products?: InputMaybe<ComponentInformationProductFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type NodeInput = {
  attribute_values?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  nodes?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  output?: InputMaybe<Scalars['Int']['input']>;
  outputLevel?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Array<InputMaybe<ComponentInformationProductInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type NodeRelationResponseCollection = {
  __typename?: 'NodeRelationResponseCollection';
  data: Array<NodeEntity>;
};

export type Organization = {
  __typename?: 'Organization';
  contact?: Maybe<Array<Maybe<ComponentInformationContactDetails>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  isAssociation?: Maybe<Scalars['Boolean']['output']>;
  logo?: Maybe<UploadFileEntityResponse>;
  posts?: Maybe<PostRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  socialProfile?: Maybe<Array<Maybe<ComponentInformationSocialProfile>>>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};


export type OrganizationContactArgs = {
  filters?: InputMaybe<ComponentInformationContactDetailsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type OrganizationPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type OrganizationSocialProfileArgs = {
  filters?: InputMaybe<ComponentInformationSocialProfileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type OrganizationEntity = {
  __typename?: 'OrganizationEntity';
  attributes?: Maybe<Organization>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type OrganizationEntityResponse = {
  __typename?: 'OrganizationEntityResponse';
  data?: Maybe<OrganizationEntity>;
};

export type OrganizationEntityResponseCollection = {
  __typename?: 'OrganizationEntityResponseCollection';
  data: Array<OrganizationEntity>;
  meta: ResponseCollectionMeta;
};

export type OrganizationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<OrganizationFiltersInput>>>;
  contact?: InputMaybe<ComponentInformationContactDetailsFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isAssociation?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<OrganizationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<OrganizationFiltersInput>>>;
  posts?: InputMaybe<PostFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  socialProfile?: InputMaybe<ComponentInformationSocialProfileFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  website?: InputMaybe<StringFilterInput>;
};

export type OrganizationInput = {
  contact?: InputMaybe<Array<InputMaybe<ComponentInformationContactDetailsInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  isAssociation?: InputMaybe<Scalars['Boolean']['input']>;
  logo?: InputMaybe<Scalars['ID']['input']>;
  posts?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  socialProfile?: InputMaybe<Array<InputMaybe<ComponentInformationSocialProfileInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type OrganizationRelationResponseCollection = {
  __typename?: 'OrganizationRelationResponseCollection';
  data: Array<OrganizationEntity>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type Person = {
  __typename?: 'Person';
  Details?: Maybe<Array<Maybe<PersonDetailsDynamicZone>>>;
  contact?: Maybe<ComponentInformationContactDetails>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  galleries?: Maybe<Array<Maybe<ComponentMediaGallery>>>;
  gender?: Maybe<Enum_Person_Gender>;
  image?: Maybe<UploadFileEntityResponse>;
  isCoach?: Maybe<Scalars['Boolean']['output']>;
  isJudge?: Maybe<Scalars['Boolean']['output']>;
  isOfficial?: Maybe<Scalars['Boolean']['output']>;
  isPlayer?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  posts?: Maybe<PostRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  results?: Maybe<ResultRelationResponseCollection>;
  socialMedia?: Maybe<ComponentInformationSocialProfile>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PersonGalleriesArgs = {
  filters?: InputMaybe<ComponentMediaGalleryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PersonPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PersonResultsArgs = {
  filters?: InputMaybe<ResultFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PersonDetailsDynamicZone = ComponentInformationRole | ComponentMediaGallery | Error;

export type PersonEntity = {
  __typename?: 'PersonEntity';
  attributes?: Maybe<Person>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PersonEntityResponse = {
  __typename?: 'PersonEntityResponse';
  data?: Maybe<PersonEntity>;
};

export type PersonEntityResponseCollection = {
  __typename?: 'PersonEntityResponseCollection';
  data: Array<PersonEntity>;
  meta: ResponseCollectionMeta;
};

export type PersonFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PersonFiltersInput>>>;
  contact?: InputMaybe<ComponentInformationContactDetailsFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  galleries?: InputMaybe<ComponentMediaGalleryFiltersInput>;
  gender?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isCoach?: InputMaybe<BooleanFilterInput>;
  isJudge?: InputMaybe<BooleanFilterInput>;
  isOfficial?: InputMaybe<BooleanFilterInput>;
  isPlayer?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<PersonFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PersonFiltersInput>>>;
  posts?: InputMaybe<PostFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  results?: InputMaybe<ResultFiltersInput>;
  socialMedia?: InputMaybe<ComponentInformationSocialProfileFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PersonInput = {
  Details?: InputMaybe<Array<Scalars['PersonDetailsDynamicZoneInput']['input']>>;
  contact?: InputMaybe<ComponentInformationContactDetailsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  galleries?: InputMaybe<Array<InputMaybe<ComponentMediaGalleryInput>>>;
  gender?: InputMaybe<Enum_Person_Gender>;
  image?: InputMaybe<Scalars['ID']['input']>;
  isCoach?: InputMaybe<Scalars['Boolean']['input']>;
  isJudge?: InputMaybe<Scalars['Boolean']['input']>;
  isOfficial?: InputMaybe<Scalars['Boolean']['input']>;
  isPlayer?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  results?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  socialMedia?: InputMaybe<ComponentInformationSocialProfileInput>;
};

export type PersonRelationResponseCollection = {
  __typename?: 'PersonRelationResponseCollection';
  data: Array<PersonEntity>;
};

export type Post = {
  __typename?: 'Post';
  activities?: Maybe<ActivityRelationResponseCollection>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  facebook?: Maybe<Scalars['Boolean']['output']>;
  instagram?: Maybe<Scalars['Boolean']['output']>;
  linkedin?: Maybe<Scalars['Boolean']['output']>;
  media?: Maybe<UploadFileRelationResponseCollection>;
  organizations?: Maybe<OrganizationRelationResponseCollection>;
  people?: Maybe<PersonRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  tiktok?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  tournaments?: Maybe<TournamentRelationResponseCollection>;
  twitter?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PostActivitiesArgs = {
  filters?: InputMaybe<ActivityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PostMediaArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PostOrganizationsArgs = {
  filters?: InputMaybe<OrganizationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PostPeopleArgs = {
  filters?: InputMaybe<PersonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PostTournamentsArgs = {
  filters?: InputMaybe<TournamentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostEntity = {
  __typename?: 'PostEntity';
  attributes?: Maybe<Post>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PostEntityResponse = {
  __typename?: 'PostEntityResponse';
  data?: Maybe<PostEntity>;
};

export type PostEntityResponseCollection = {
  __typename?: 'PostEntityResponseCollection';
  data: Array<PostEntity>;
  meta: ResponseCollectionMeta;
};

export type PostFiltersInput = {
  activities?: InputMaybe<ActivityFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  facebook?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  instagram?: InputMaybe<BooleanFilterInput>;
  linkedin?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<PostFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>;
  organizations?: InputMaybe<OrganizationFiltersInput>;
  people?: InputMaybe<PersonFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  tiktok?: InputMaybe<BooleanFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  tournaments?: InputMaybe<TournamentFiltersInput>;
  twitter?: InputMaybe<BooleanFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PostInput = {
  activities?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  content?: InputMaybe<Scalars['String']['input']>;
  facebook?: InputMaybe<Scalars['Boolean']['input']>;
  instagram?: InputMaybe<Scalars['Boolean']['input']>;
  linkedin?: InputMaybe<Scalars['Boolean']['input']>;
  media?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  organizations?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  people?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  tiktok?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  tournaments?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  twitter?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostRelationResponseCollection = {
  __typename?: 'PostRelationResponseCollection';
  data: Array<PostEntity>;
};

export type ProductList = {
  __typename?: 'ProductList';
  BackImage?: Maybe<Scalars['String']['output']>;
  Fit?: Maybe<Scalars['String']['output']>;
  FrontImage?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
  product_name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductListEntity = {
  __typename?: 'ProductListEntity';
  attributes?: Maybe<ProductList>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ProductListEntityResponse = {
  __typename?: 'ProductListEntityResponse';
  data?: Maybe<ProductListEntity>;
};

export type ProductListEntityResponseCollection = {
  __typename?: 'ProductListEntityResponseCollection';
  data: Array<ProductListEntity>;
  meta: ResponseCollectionMeta;
};

export type ProductListFiltersInput = {
  BackImage?: InputMaybe<StringFilterInput>;
  Fit?: InputMaybe<StringFilterInput>;
  FrontImage?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ProductListFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ProductListFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProductListFiltersInput>>>;
  productId?: InputMaybe<StringFilterInput>;
  product_name?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProductListInput = {
  BackImage?: InputMaybe<Scalars['String']['input']>;
  Fit?: InputMaybe<Scalars['String']['input']>;
  FrontImage?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
  product_name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  activities?: Maybe<ActivityEntityResponseCollection>;
  activity?: Maybe<ActivityEntityResponse>;
  attribute?: Maybe<AttributeEntityResponse>;
  attributeValue?: Maybe<AttributeValueEntityResponse>;
  attributeValues?: Maybe<AttributeValueEntityResponseCollection>;
  attributes?: Maybe<AttributeEntityResponseCollection>;
  chartbrewChartbrew?: Maybe<ChartbrewChartbrewEntityResponse>;
  graphsBuilderGraph?: Maybe<GraphsBuilderGraphEntityResponse>;
  graphsBuilderGraphs?: Maybe<GraphsBuilderGraphEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  menusMenu?: Maybe<MenusMenuEntityResponse>;
  menusMenuItem?: Maybe<MenusMenuItemEntityResponse>;
  menusMenuItems?: Maybe<MenusMenuItemEntityResponseCollection>;
  menusMenus?: Maybe<MenusMenuEntityResponseCollection>;
  node?: Maybe<NodeEntityResponse>;
  nodes?: Maybe<NodeEntityResponseCollection>;
  organization?: Maybe<OrganizationEntityResponse>;
  organizations?: Maybe<OrganizationEntityResponseCollection>;
  people?: Maybe<PersonEntityResponseCollection>;
  person?: Maybe<PersonEntityResponse>;
  post?: Maybe<PostEntityResponse>;
  posts?: Maybe<PostEntityResponseCollection>;
  productList?: Maybe<ProductListEntityResponse>;
  productLists?: Maybe<ProductListEntityResponseCollection>;
  result?: Maybe<ResultEntityResponse>;
  results?: Maybe<ResultEntityResponseCollection>;
  sport?: Maybe<SportEntityResponse>;
  sports?: Maybe<SportEntityResponseCollection>;
  sportsEvent?: Maybe<SportsEventEntityResponse>;
  sportsEvents?: Maybe<SportsEventEntityResponseCollection>;
  tag?: Maybe<TagEntityResponse>;
  tags?: Maybe<TagEntityResponseCollection>;
  tournament?: Maybe<TournamentEntityResponse>;
  tournamentType?: Maybe<TournamentTypeEntityResponse>;
  tournamentTypes?: Maybe<TournamentTypeEntityResponseCollection>;
  tournaments?: Maybe<TournamentEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryActivitiesArgs = {
  filters?: InputMaybe<ActivityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryActivityArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAttributeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAttributeValueArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAttributeValuesArgs = {
  filters?: InputMaybe<AttributeValueFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAttributesArgs = {
  filters?: InputMaybe<AttributeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryGraphsBuilderGraphArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGraphsBuilderGraphsArgs = {
  filters?: InputMaybe<GraphsBuilderGraphFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMenusMenuArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryMenusMenuItemArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryMenusMenuItemsArgs = {
  filters?: InputMaybe<MenusMenuItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMenusMenusArgs = {
  filters?: InputMaybe<MenusMenuFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryNodesArgs = {
  filters?: InputMaybe<NodeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOrganizationArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryOrganizationsArgs = {
  filters?: InputMaybe<OrganizationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPeopleArgs = {
  filters?: InputMaybe<PersonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPersonArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPostArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProductListArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProductListsArgs = {
  filters?: InputMaybe<ProductListFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryResultArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryResultsArgs = {
  filters?: InputMaybe<ResultFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySportArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySportsArgs = {
  filters?: InputMaybe<SportFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySportsEventArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySportsEventsArgs = {
  filters?: InputMaybe<SportsEventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTagArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTournamentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTournamentTypeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTournamentTypesArgs = {
  filters?: InputMaybe<TournamentTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTournamentsArgs = {
  filters?: InputMaybe<TournamentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Result = {
  __typename?: 'Result';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  international?: Maybe<Scalars['Boolean']['output']>;
  medal?: Maybe<Scalars['Boolean']['output']>;
  people?: Maybe<PersonRelationResponseCollection>;
  position?: Maybe<Scalars['Int']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  references?: Maybe<Array<Maybe<ComponentInformationReferences>>>;
  sport?: Maybe<SportEntityResponse>;
  sports_event?: Maybe<SportsEventEntityResponse>;
  team?: Maybe<Scalars['Boolean']['output']>;
  tournament?: Maybe<TournamentEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ResultPeopleArgs = {
  filters?: InputMaybe<PersonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ResultReferencesArgs = {
  filters?: InputMaybe<ComponentInformationReferencesFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ResultEntity = {
  __typename?: 'ResultEntity';
  attributes?: Maybe<Result>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ResultEntityResponse = {
  __typename?: 'ResultEntityResponse';
  data?: Maybe<ResultEntity>;
};

export type ResultEntityResponseCollection = {
  __typename?: 'ResultEntityResponseCollection';
  data: Array<ResultEntity>;
  meta: ResponseCollectionMeta;
};

export type ResultFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ResultFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  international?: InputMaybe<BooleanFilterInput>;
  medal?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ResultFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ResultFiltersInput>>>;
  people?: InputMaybe<PersonFiltersInput>;
  position?: InputMaybe<IntFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  references?: InputMaybe<ComponentInformationReferencesFiltersInput>;
  sport?: InputMaybe<SportFiltersInput>;
  sports_event?: InputMaybe<SportsEventFiltersInput>;
  team?: InputMaybe<BooleanFilterInput>;
  tournament?: InputMaybe<TournamentFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ResultInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  international?: InputMaybe<Scalars['Boolean']['input']>;
  medal?: InputMaybe<Scalars['Boolean']['input']>;
  people?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  position?: InputMaybe<Scalars['Int']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  references?: InputMaybe<Array<InputMaybe<ComponentInformationReferencesInput>>>;
  sport?: InputMaybe<Scalars['ID']['input']>;
  sports_event?: InputMaybe<Scalars['ID']['input']>;
  team?: InputMaybe<Scalars['Boolean']['input']>;
  tournament?: InputMaybe<Scalars['ID']['input']>;
};

export type ResultRelationResponseCollection = {
  __typename?: 'ResultRelationResponseCollection';
  data: Array<ResultEntity>;
};

export type Sport = {
  __typename?: 'Sport';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<UploadFileEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  results?: Maybe<ResultRelationResponseCollection>;
  sports_events?: Maybe<SportsEventRelationResponseCollection>;
  title?: Maybe<Scalars['String']['output']>;
  tournaments?: Maybe<TournamentRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type SportResultsArgs = {
  filters?: InputMaybe<ResultFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SportSports_EventsArgs = {
  filters?: InputMaybe<SportsEventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SportTournamentsArgs = {
  filters?: InputMaybe<TournamentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SportEntity = {
  __typename?: 'SportEntity';
  attributes?: Maybe<Sport>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SportEntityResponse = {
  __typename?: 'SportEntityResponse';
  data?: Maybe<SportEntity>;
};

export type SportEntityResponseCollection = {
  __typename?: 'SportEntityResponseCollection';
  data: Array<SportEntity>;
  meta: ResponseCollectionMeta;
};

export type SportFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SportFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<SportFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SportFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  results?: InputMaybe<ResultFiltersInput>;
  sports_events?: InputMaybe<SportsEventFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  tournaments?: InputMaybe<TournamentFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SportInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  results?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sports_events?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  tournaments?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type SportRelationResponseCollection = {
  __typename?: 'SportRelationResponseCollection';
  data: Array<SportEntity>;
};

export type SportsEvent = {
  __typename?: 'SportsEvent';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  gender?: Maybe<Enum_Sportsevent_Gender>;
  label?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  results?: Maybe<ResultRelationResponseCollection>;
  sport?: Maybe<SportEntityResponse>;
  title?: Maybe<Scalars['String']['output']>;
  tournaments?: Maybe<TournamentRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type SportsEventResultsArgs = {
  filters?: InputMaybe<ResultFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SportsEventTournamentsArgs = {
  filters?: InputMaybe<TournamentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SportsEventEntity = {
  __typename?: 'SportsEventEntity';
  attributes?: Maybe<SportsEvent>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SportsEventEntityResponse = {
  __typename?: 'SportsEventEntityResponse';
  data?: Maybe<SportsEventEntity>;
};

export type SportsEventEntityResponseCollection = {
  __typename?: 'SportsEventEntityResponseCollection';
  data: Array<SportsEventEntity>;
  meta: ResponseCollectionMeta;
};

export type SportsEventFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SportsEventFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  gender?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SportsEventFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SportsEventFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  results?: InputMaybe<ResultFiltersInput>;
  sport?: InputMaybe<SportFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  tournaments?: InputMaybe<TournamentFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SportsEventInput = {
  gender?: InputMaybe<Enum_Sportsevent_Gender>;
  label?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  results?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sport?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  tournaments?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type SportsEventRelationResponseCollection = {
  __typename?: 'SportsEventRelationResponseCollection';
  data: Array<SportsEventEntity>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Tag = {
  __typename?: 'Tag';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  reported?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type TagEntity = {
  __typename?: 'TagEntity';
  attributes?: Maybe<Tag>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type TagEntityResponse = {
  __typename?: 'TagEntityResponse';
  data?: Maybe<TagEntity>;
};

export type TagEntityResponseCollection = {
  __typename?: 'TagEntityResponseCollection';
  data: Array<TagEntity>;
  meta: ResponseCollectionMeta;
};

export type TagFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TagFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  reported?: InputMaybe<BooleanFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  value?: InputMaybe<StringFilterInput>;
};

export type TagInput = {
  label?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  reported?: InputMaybe<Scalars['Boolean']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TagRelationResponseCollection = {
  __typename?: 'TagRelationResponseCollection';
  data: Array<TagEntity>;
};

export type Tournament = {
  __typename?: 'Tournament';
  activity?: Maybe<ActivityEntityResponse>;
  address?: Maybe<ComponentInformationAddress>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  edition?: Maybe<Scalars['Int']['output']>;
  endDate?: Maybe<Scalars['Date']['output']>;
  happening?: Maybe<Scalars['Boolean']['output']>;
  logo?: Maybe<UploadFileEntityResponse>;
  posts?: Maybe<PostRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  results?: Maybe<ResultRelationResponseCollection>;
  socialProfile?: Maybe<ComponentInformationSocialProfile>;
  sports?: Maybe<SportRelationResponseCollection>;
  sports_events?: Maybe<SportsEventRelationResponseCollection>;
  startDate?: Maybe<Scalars['Date']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  tournament_type?: Maybe<TournamentTypeEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type TournamentPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TournamentResultsArgs = {
  filters?: InputMaybe<ResultFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TournamentSportsArgs = {
  filters?: InputMaybe<SportFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TournamentSports_EventsArgs = {
  filters?: InputMaybe<SportsEventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TournamentEntity = {
  __typename?: 'TournamentEntity';
  attributes?: Maybe<Tournament>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type TournamentEntityResponse = {
  __typename?: 'TournamentEntityResponse';
  data?: Maybe<TournamentEntity>;
};

export type TournamentEntityResponseCollection = {
  __typename?: 'TournamentEntityResponseCollection';
  data: Array<TournamentEntity>;
  meta: ResponseCollectionMeta;
};

export type TournamentFiltersInput = {
  activity?: InputMaybe<ActivityFiltersInput>;
  address?: InputMaybe<ComponentInformationAddressFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<TournamentFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  edition?: InputMaybe<IntFilterInput>;
  endDate?: InputMaybe<DateFilterInput>;
  happening?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<TournamentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TournamentFiltersInput>>>;
  posts?: InputMaybe<PostFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  results?: InputMaybe<ResultFiltersInput>;
  socialProfile?: InputMaybe<ComponentInformationSocialProfileFiltersInput>;
  sports?: InputMaybe<SportFiltersInput>;
  sports_events?: InputMaybe<SportsEventFiltersInput>;
  startDate?: InputMaybe<DateFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  tournament_type?: InputMaybe<TournamentTypeFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TournamentInput = {
  activity?: InputMaybe<Scalars['ID']['input']>;
  address?: InputMaybe<ComponentInformationAddressInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  edition?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  happening?: InputMaybe<Scalars['Boolean']['input']>;
  logo?: InputMaybe<Scalars['ID']['input']>;
  posts?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  results?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  socialProfile?: InputMaybe<ComponentInformationSocialProfileInput>;
  sports?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sports_events?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  tournament_type?: InputMaybe<Scalars['ID']['input']>;
};

export type TournamentRelationResponseCollection = {
  __typename?: 'TournamentRelationResponseCollection';
  data: Array<TournamentEntity>;
};

export type TournamentType = {
  __typename?: 'TournamentType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  level?: Maybe<Enum_Tournamenttype_Level>;
  owner?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  tournaments?: Maybe<TournamentRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type TournamentTypeTournamentsArgs = {
  filters?: InputMaybe<TournamentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TournamentTypeEntity = {
  __typename?: 'TournamentTypeEntity';
  attributes?: Maybe<TournamentType>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type TournamentTypeEntityResponse = {
  __typename?: 'TournamentTypeEntityResponse';
  data?: Maybe<TournamentTypeEntity>;
};

export type TournamentTypeEntityResponseCollection = {
  __typename?: 'TournamentTypeEntityResponseCollection';
  data: Array<TournamentTypeEntity>;
  meta: ResponseCollectionMeta;
};

export type TournamentTypeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TournamentTypeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  level?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TournamentTypeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TournamentTypeFiltersInput>>>;
  owner?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  tournaments?: InputMaybe<TournamentFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TournamentTypeInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Enum_Tournamenttype_Level>;
  owner?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  tournaments?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  blurhash?: InputMaybe<StringFilterInput>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  blurhash?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type ActivitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type ActivitiesQuery = { __typename?: 'Query', activities?: { __typename?: 'ActivityEntityResponseCollection', data: Array<{ __typename?: 'ActivityEntity', attributes?: { __typename?: 'Activity', title?: string | null, details?: string | null, status?: Enum_Activity_Status | null, sport?: { __typename?: 'SportEntityResponse', data?: { __typename?: 'SportEntity', attributes?: { __typename?: 'Sport', title?: string | null } | null } | null } | null, posts?: { __typename?: 'PostRelationResponseCollection', data: Array<{ __typename?: 'PostEntity', id?: string | null, attributes?: { __typename?: 'Post', title?: string | null } | null }> } | null, tournament?: { __typename?: 'TournamentEntityResponse', data?: { __typename?: 'TournamentEntity', attributes?: { __typename?: 'Tournament', title?: string | null } | null } | null } | null, media?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null }> } | null, childrens?: { __typename?: 'ActivityRelationResponseCollection', data: Array<{ __typename?: 'ActivityEntity', attributes?: { __typename?: 'Activity', title?: string | null, status?: Enum_Activity_Status | null, type?: Enum_Activity_Type | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', label?: string | null } | null }> } | null } | null }> } | null } | null }> } | null };

export type GetAttributesQueryVariables = Exact<{
  filters?: InputMaybe<AttributeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type GetAttributesQuery = { __typename?: 'Query', attributes?: { __typename?: 'AttributeEntityResponseCollection', data: Array<{ __typename?: 'AttributeEntity', id?: string | null, attributes?: { __typename?: 'Attribute', name?: string | null, label?: string | null, type?: Enum_Attribute_Type | null } | null }> } | null };

export type GetAttributeValuesQueryVariables = Exact<{
  filters?: InputMaybe<AttributeValueFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type GetAttributeValuesQuery = { __typename?: 'Query', attributeValues?: { __typename?: 'AttributeValueEntityResponseCollection', data: Array<{ __typename?: 'AttributeValueEntity', id?: string | null, attributes?: { __typename?: 'AttributeValue', valueOne?: string | null, valueTwo?: string | null, attribute?: { __typename?: 'AttributeEntityResponse', data?: { __typename?: 'AttributeEntity', id?: string | null, attributes?: { __typename?: 'Attribute', name?: string | null } | null } | null } | null } | null }> } | null };

export type ProductListQueryVariables = Exact<{
  filters?: InputMaybe<ProductListFiltersInput>;
}>;


export type ProductListQuery = { __typename?: 'Query', productLists?: { __typename?: 'ProductListEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number } }, data: Array<{ __typename?: 'ProductListEntity', id?: string | null, attributes?: { __typename?: 'ProductList', product_name?: string | null, productId?: string | null, FrontImage?: string | null, Fit?: string | null, BackImage?: string | null } | null }> } | null };

export type GetNodesQueryVariables = Exact<{
  filters?: InputMaybe<NodeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type GetNodesQuery = { __typename?: 'Query', nodes?: { __typename?: 'NodeEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number } }, data: Array<{ __typename?: 'NodeEntity', id?: string | null, attributes?: { __typename?: 'Node', outputLevel?: string | null, output?: number | null, title?: string | null, products?: Array<{ __typename?: 'ComponentInformationProduct', title?: string | null } | null> | null, nodes?: { __typename?: 'NodeRelationResponseCollection', data: Array<{ __typename?: 'NodeEntity', id?: string | null, attributes?: { __typename?: 'Node', title?: string | null, attribute_values?: { __typename?: 'AttributeValueRelationResponseCollection', data: Array<{ __typename?: 'AttributeValueEntity', id?: string | null, attributes?: { __typename?: 'AttributeValue', valueOne?: string | null, valueTwo?: string | null, attribute?: { __typename?: 'AttributeEntityResponse', data?: { __typename?: 'AttributeEntity', attributes?: { __typename?: 'Attribute', name?: string | null } | null } | null } | null } | null }> } | null } | null }> } | null, attribute_values?: { __typename?: 'AttributeValueRelationResponseCollection', data: Array<{ __typename?: 'AttributeValueEntity', id?: string | null, attributes?: { __typename?: 'AttributeValue', valueOne?: string | null, valueTwo?: string | null, attribute?: { __typename?: 'AttributeEntityResponse', data?: { __typename?: 'AttributeEntity', attributes?: { __typename?: 'Attribute', name?: string | null } | null } | null } | null } | null }> } | null } | null }> } | null };


export const ActivitiesDocument = gql`
    query activities {
  activities {
    data {
      attributes {
        title
        details
        sport {
          data {
            attributes {
              title
            }
          }
        }
        posts {
          data {
            id
            attributes {
              title
            }
          }
        }
        status
        tournament {
          data {
            attributes {
              title
            }
          }
        }
        media {
          data {
            attributes {
              url
            }
          }
        }
        childrens {
          data {
            attributes {
              title
              status
              type
              tags {
                data {
                  attributes {
                    label
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useActivitiesQuery__
 *
 * To run a query within a React component, call `useActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActivitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useActivitiesQuery(baseOptions?: Apollo.QueryHookOptions<ActivitiesQuery, ActivitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ActivitiesQuery, ActivitiesQueryVariables>(ActivitiesDocument, options);
      }
export function useActivitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActivitiesQuery, ActivitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ActivitiesQuery, ActivitiesQueryVariables>(ActivitiesDocument, options);
        }
export function useActivitiesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ActivitiesQuery, ActivitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ActivitiesQuery, ActivitiesQueryVariables>(ActivitiesDocument, options);
        }
export type ActivitiesQueryHookResult = ReturnType<typeof useActivitiesQuery>;
export type ActivitiesLazyQueryHookResult = ReturnType<typeof useActivitiesLazyQuery>;
export type ActivitiesSuspenseQueryHookResult = ReturnType<typeof useActivitiesSuspenseQuery>;
export type ActivitiesQueryResult = Apollo.QueryResult<ActivitiesQuery, ActivitiesQueryVariables>;
export const GetAttributesDocument = gql`
    query getAttributes($filters: AttributeFiltersInput, $pagination: PaginationArg = {}, $sort: [String] = []) {
  attributes(filters: $filters, pagination: $pagination, sort: $sort) {
    data {
      id
      attributes {
        name
        label
        type
      }
    }
  }
}
    `;

/**
 * __useGetAttributesQuery__
 *
 * To run a query within a React component, call `useGetAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAttributesQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetAttributesQuery(baseOptions?: Apollo.QueryHookOptions<GetAttributesQuery, GetAttributesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAttributesQuery, GetAttributesQueryVariables>(GetAttributesDocument, options);
      }
export function useGetAttributesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAttributesQuery, GetAttributesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAttributesQuery, GetAttributesQueryVariables>(GetAttributesDocument, options);
        }
export function useGetAttributesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAttributesQuery, GetAttributesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAttributesQuery, GetAttributesQueryVariables>(GetAttributesDocument, options);
        }
export type GetAttributesQueryHookResult = ReturnType<typeof useGetAttributesQuery>;
export type GetAttributesLazyQueryHookResult = ReturnType<typeof useGetAttributesLazyQuery>;
export type GetAttributesSuspenseQueryHookResult = ReturnType<typeof useGetAttributesSuspenseQuery>;
export type GetAttributesQueryResult = Apollo.QueryResult<GetAttributesQuery, GetAttributesQueryVariables>;
export const GetAttributeValuesDocument = gql`
    query getAttributeValues($filters: AttributeValueFiltersInput, $pagination: PaginationArg = {}, $sort: [String] = []) {
  attributeValues(filters: $filters, pagination: $pagination, sort: $sort) {
    data {
      id
      attributes {
        valueOne
        valueTwo
        attribute {
          data {
            id
            attributes {
              name
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetAttributeValuesQuery__
 *
 * To run a query within a React component, call `useGetAttributeValuesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAttributeValuesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAttributeValuesQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetAttributeValuesQuery(baseOptions?: Apollo.QueryHookOptions<GetAttributeValuesQuery, GetAttributeValuesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAttributeValuesQuery, GetAttributeValuesQueryVariables>(GetAttributeValuesDocument, options);
      }
export function useGetAttributeValuesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAttributeValuesQuery, GetAttributeValuesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAttributeValuesQuery, GetAttributeValuesQueryVariables>(GetAttributeValuesDocument, options);
        }
export function useGetAttributeValuesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAttributeValuesQuery, GetAttributeValuesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAttributeValuesQuery, GetAttributeValuesQueryVariables>(GetAttributeValuesDocument, options);
        }
export type GetAttributeValuesQueryHookResult = ReturnType<typeof useGetAttributeValuesQuery>;
export type GetAttributeValuesLazyQueryHookResult = ReturnType<typeof useGetAttributeValuesLazyQuery>;
export type GetAttributeValuesSuspenseQueryHookResult = ReturnType<typeof useGetAttributeValuesSuspenseQuery>;
export type GetAttributeValuesQueryResult = Apollo.QueryResult<GetAttributeValuesQuery, GetAttributeValuesQueryVariables>;
export const ProductListDocument = gql`
    query ProductList($filters: ProductListFiltersInput = {}) {
  productLists(filters: $filters) {
    meta {
      pagination {
        total
        page
        pageSize
      }
    }
    data {
      id
      attributes {
        product_name
        productId
        FrontImage
        Fit
        BackImage
      }
    }
  }
}
    `;

/**
 * __useProductListQuery__
 *
 * To run a query within a React component, call `useProductListQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductListQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useProductListQuery(baseOptions?: Apollo.QueryHookOptions<ProductListQuery, ProductListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductListQuery, ProductListQueryVariables>(ProductListDocument, options);
      }
export function useProductListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductListQuery, ProductListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductListQuery, ProductListQueryVariables>(ProductListDocument, options);
        }
export function useProductListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProductListQuery, ProductListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductListQuery, ProductListQueryVariables>(ProductListDocument, options);
        }
export type ProductListQueryHookResult = ReturnType<typeof useProductListQuery>;
export type ProductListLazyQueryHookResult = ReturnType<typeof useProductListLazyQuery>;
export type ProductListSuspenseQueryHookResult = ReturnType<typeof useProductListSuspenseQuery>;
export type ProductListQueryResult = Apollo.QueryResult<ProductListQuery, ProductListQueryVariables>;
export const GetNodesDocument = gql`
    query getNodes($filters: NodeFiltersInput, $pagination: PaginationArg = {}, $sort: [String] = []) {
  nodes(filters: $filters, pagination: $pagination, sort: $sort) {
    meta {
      pagination {
        total
        page
        pageSize
      }
    }
    data {
      id
      attributes {
        outputLevel
        output
        title
        products {
          title
        }
        nodes {
          data {
            id
            attributes {
              title
              attribute_values {
                data {
                  id
                  attributes {
                    attribute {
                      data {
                        attributes {
                          name
                        }
                      }
                    }
                    valueOne
                    valueTwo
                  }
                }
              }
            }
          }
        }
        attribute_values {
          data {
            id
            attributes {
              attribute {
                data {
                  attributes {
                    name
                  }
                }
              }
              valueOne
              valueTwo
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetNodesQuery__
 *
 * To run a query within a React component, call `useGetNodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNodesQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetNodesQuery(baseOptions?: Apollo.QueryHookOptions<GetNodesQuery, GetNodesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNodesQuery, GetNodesQueryVariables>(GetNodesDocument, options);
      }
export function useGetNodesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNodesQuery, GetNodesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNodesQuery, GetNodesQueryVariables>(GetNodesDocument, options);
        }
export function useGetNodesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetNodesQuery, GetNodesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetNodesQuery, GetNodesQueryVariables>(GetNodesDocument, options);
        }
export type GetNodesQueryHookResult = ReturnType<typeof useGetNodesQuery>;
export type GetNodesLazyQueryHookResult = ReturnType<typeof useGetNodesLazyQuery>;
export type GetNodesSuspenseQueryHookResult = ReturnType<typeof useGetNodesSuspenseQuery>;
export type GetNodesQueryResult = Apollo.QueryResult<GetNodesQuery, GetNodesQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "GenericMorph": [
      "Activity",
      "Attribute",
      "AttributeValue",
      "ChartbrewChartbrew",
      "ComponentInformationAddress",
      "ComponentInformationContactDetails",
      "ComponentInformationProduct",
      "ComponentInformationReferences",
      "ComponentInformationRole",
      "ComponentInformationSocialProfile",
      "ComponentMediaGallery",
      "ComponentSharedMetaSocial",
      "ComponentSharedSeo",
      "GraphsBuilderGraph",
      "I18NLocale",
      "MenusMenu",
      "MenusMenuItem",
      "Node",
      "Organization",
      "Person",
      "Post",
      "ProductList",
      "Result",
      "Sport",
      "SportsEvent",
      "Tag",
      "Tournament",
      "TournamentType",
      "UploadFile",
      "UploadFolder",
      "UsersPermissionsPermission",
      "UsersPermissionsRole",
      "UsersPermissionsUser"
    ],
    "PersonDetailsDynamicZone": [
      "ComponentInformationRole",
      "ComponentMediaGallery",
      "Error"
    ]
  }
};
      export default result;
    