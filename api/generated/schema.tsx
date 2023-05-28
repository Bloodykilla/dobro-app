import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
  Upload: any;
};

export type BooleanFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains: InputMaybe<Scalars['Boolean']>;
  containsi: InputMaybe<Scalars['Boolean']>;
  endsWith: InputMaybe<Scalars['Boolean']>;
  eq: InputMaybe<Scalars['Boolean']>;
  eqi: InputMaybe<Scalars['Boolean']>;
  gt: InputMaybe<Scalars['Boolean']>;
  gte: InputMaybe<Scalars['Boolean']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt: InputMaybe<Scalars['Boolean']>;
  lte: InputMaybe<Scalars['Boolean']>;
  ne: InputMaybe<Scalars['Boolean']>;
  not: InputMaybe<BooleanFilterInput>;
  notContains: InputMaybe<Scalars['Boolean']>;
  notContainsi: InputMaybe<Scalars['Boolean']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull: InputMaybe<Scalars['Boolean']>;
  null: InputMaybe<Scalars['Boolean']>;
  or: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith: InputMaybe<Scalars['Boolean']>;
};

export type City = {
  createdAt: Maybe<Scalars['DateTime']>;
  name: Maybe<Scalars['String']>;
  needy_persons: Maybe<NeedyPersonRelationResponseCollection>;
  publishedAt: Maybe<Scalars['DateTime']>;
  thumbnail: Maybe<UploadFileEntityResponse>;
  updatedAt: Maybe<Scalars['DateTime']>;
};


export type CityNeedy_PersonsArgs = {
  filters: InputMaybe<NeedyPersonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CityEntity = {
  attributes: Maybe<City>;
  id: Maybe<Scalars['ID']>;
};

export type CityEntityResponse = {
  data: Maybe<CityEntity>;
};

export type CityEntityResponseCollection = {
  data: Array<CityEntity>;
  meta: ResponseCollectionMeta;
};

export type CityFiltersInput = {
  and: InputMaybe<Array<InputMaybe<CityFiltersInput>>>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  id: InputMaybe<IdFilterInput>;
  name: InputMaybe<StringFilterInput>;
  needy_persons: InputMaybe<NeedyPersonFiltersInput>;
  not: InputMaybe<CityFiltersInput>;
  or: InputMaybe<Array<InputMaybe<CityFiltersInput>>>;
  publishedAt: InputMaybe<DateTimeFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type CityInput = {
  name: InputMaybe<Scalars['String']>;
  needy_persons: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  thumbnail: InputMaybe<Scalars['ID']>;
};

export type ComponentCoordinatesCoordinates = {
  id: Scalars['ID'];
  langitude: Scalars['String'];
  latitude: Scalars['String'];
};

export type ComponentCoordinatesCoordinatesFiltersInput = {
  and: InputMaybe<Array<InputMaybe<ComponentCoordinatesCoordinatesFiltersInput>>>;
  langitude: InputMaybe<StringFilterInput>;
  latitude: InputMaybe<StringFilterInput>;
  not: InputMaybe<ComponentCoordinatesCoordinatesFiltersInput>;
  or: InputMaybe<Array<InputMaybe<ComponentCoordinatesCoordinatesFiltersInput>>>;
};

export type ComponentCoordinatesCoordinatesInput = {
  id: InputMaybe<Scalars['ID']>;
  langitude: InputMaybe<Scalars['String']>;
  latitude: InputMaybe<Scalars['String']>;
};

export type ComponentFooditemFoodItem = {
  id: Scalars['ID'];
  name: Maybe<Scalars['String']>;
  price: Maybe<Scalars['Int']>;
  quantity: Maybe<Scalars['Int']>;
};

export type ComponentFooditemFoodItemFiltersInput = {
  and: InputMaybe<Array<InputMaybe<ComponentFooditemFoodItemFiltersInput>>>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<ComponentFooditemFoodItemFiltersInput>;
  or: InputMaybe<Array<InputMaybe<ComponentFooditemFoodItemFiltersInput>>>;
  price: InputMaybe<IntFilterInput>;
  quantity: InputMaybe<IntFilterInput>;
};

export type ComponentFooditemFoodItemInput = {
  id: InputMaybe<Scalars['ID']>;
  name: InputMaybe<Scalars['String']>;
  price: InputMaybe<Scalars['Int']>;
  quantity: InputMaybe<Scalars['Int']>;
};

export type ComponentNeedNeed = {
  currentSum: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  requestedSum: Scalars['Int'];
  title: Scalars['String'];
};

export type DateTimeFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains: InputMaybe<Scalars['DateTime']>;
  containsi: InputMaybe<Scalars['DateTime']>;
  endsWith: InputMaybe<Scalars['DateTime']>;
  eq: InputMaybe<Scalars['DateTime']>;
  eqi: InputMaybe<Scalars['DateTime']>;
  gt: InputMaybe<Scalars['DateTime']>;
  gte: InputMaybe<Scalars['DateTime']>;
  in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt: InputMaybe<Scalars['DateTime']>;
  lte: InputMaybe<Scalars['DateTime']>;
  ne: InputMaybe<Scalars['DateTime']>;
  not: InputMaybe<DateTimeFilterInput>;
  notContains: InputMaybe<Scalars['DateTime']>;
  notContainsi: InputMaybe<Scalars['DateTime']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull: InputMaybe<Scalars['Boolean']>;
  null: InputMaybe<Scalars['Boolean']>;
  or: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith: InputMaybe<Scalars['DateTime']>;
};

export type FileInfoInput = {
  alternativeText: InputMaybe<Scalars['String']>;
  caption: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains: InputMaybe<Scalars['Float']>;
  containsi: InputMaybe<Scalars['Float']>;
  endsWith: InputMaybe<Scalars['Float']>;
  eq: InputMaybe<Scalars['Float']>;
  eqi: InputMaybe<Scalars['Float']>;
  gt: InputMaybe<Scalars['Float']>;
  gte: InputMaybe<Scalars['Float']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt: InputMaybe<Scalars['Float']>;
  lte: InputMaybe<Scalars['Float']>;
  ne: InputMaybe<Scalars['Float']>;
  not: InputMaybe<FloatFilterInput>;
  notContains: InputMaybe<Scalars['Float']>;
  notContainsi: InputMaybe<Scalars['Float']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull: InputMaybe<Scalars['Boolean']>;
  null: InputMaybe<Scalars['Boolean']>;
  or: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith: InputMaybe<Scalars['Float']>;
};

export type FoodBasket = {
  createdAt: Maybe<Scalars['DateTime']>;
  items: Maybe<Array<Maybe<ComponentFooditemFoodItem>>>;
  publishedAt: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
};


export type FoodBasketItemsArgs = {
  filters: InputMaybe<ComponentFooditemFoodItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FoodBasketEntity = {
  attributes: Maybe<FoodBasket>;
  id: Maybe<Scalars['ID']>;
};

export type FoodBasketEntityResponse = {
  data: Maybe<FoodBasketEntity>;
};

export type FoodBasketInput = {
  items: InputMaybe<Array<InputMaybe<ComponentFooditemFoodItemInput>>>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
};

export type GenericMorph = City | ComponentCoordinatesCoordinates | ComponentFooditemFoodItem | ComponentNeedNeed | FoodBasket | I18NLocale | NeedyCategory | NeedyPerson | New | PersonsNeed | UploadFile | UploadFolder | UserPayment | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  code: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['DateTime']>;
  name: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  attributes: Maybe<I18NLocale>;
  id: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  data: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code: InputMaybe<StringFilterInput>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  id: InputMaybe<IdFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<I18NLocaleFiltersInput>;
  or: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains: InputMaybe<Scalars['ID']>;
  containsi: InputMaybe<Scalars['ID']>;
  endsWith: InputMaybe<Scalars['ID']>;
  eq: InputMaybe<Scalars['ID']>;
  eqi: InputMaybe<Scalars['ID']>;
  gt: InputMaybe<Scalars['ID']>;
  gte: InputMaybe<Scalars['ID']>;
  in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt: InputMaybe<Scalars['ID']>;
  lte: InputMaybe<Scalars['ID']>;
  ne: InputMaybe<Scalars['ID']>;
  not: InputMaybe<IdFilterInput>;
  notContains: InputMaybe<Scalars['ID']>;
  notContainsi: InputMaybe<Scalars['ID']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull: InputMaybe<Scalars['Boolean']>;
  null: InputMaybe<Scalars['Boolean']>;
  or: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains: InputMaybe<Scalars['Int']>;
  containsi: InputMaybe<Scalars['Int']>;
  endsWith: InputMaybe<Scalars['Int']>;
  eq: InputMaybe<Scalars['Int']>;
  eqi: InputMaybe<Scalars['Int']>;
  gt: InputMaybe<Scalars['Int']>;
  gte: InputMaybe<Scalars['Int']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt: InputMaybe<Scalars['Int']>;
  lte: InputMaybe<Scalars['Int']>;
  ne: InputMaybe<Scalars['Int']>;
  not: InputMaybe<IntFilterInput>;
  notContains: InputMaybe<Scalars['Int']>;
  notContainsi: InputMaybe<Scalars['Int']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull: InputMaybe<Scalars['Boolean']>;
  null: InputMaybe<Scalars['Boolean']>;
  or: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains: InputMaybe<Scalars['JSON']>;
  containsi: InputMaybe<Scalars['JSON']>;
  endsWith: InputMaybe<Scalars['JSON']>;
  eq: InputMaybe<Scalars['JSON']>;
  eqi: InputMaybe<Scalars['JSON']>;
  gt: InputMaybe<Scalars['JSON']>;
  gte: InputMaybe<Scalars['JSON']>;
  in: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt: InputMaybe<Scalars['JSON']>;
  lte: InputMaybe<Scalars['JSON']>;
  ne: InputMaybe<Scalars['JSON']>;
  not: InputMaybe<JsonFilterInput>;
  notContains: InputMaybe<Scalars['JSON']>;
  notContainsi: InputMaybe<Scalars['JSON']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull: InputMaybe<Scalars['Boolean']>;
  null: InputMaybe<Scalars['Boolean']>;
  or: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
  /** Change user password. Confirm with the current password. */
  changePassword: Maybe<UsersPermissionsLoginPayload>;
  createCity: Maybe<CityEntityResponse>;
  createNeedyCategory: Maybe<NeedyCategoryEntityResponse>;
  createNeedyPerson: Maybe<NeedyPersonEntityResponse>;
  createNew: Maybe<NewEntityResponse>;
  createPersonsNeed: Maybe<PersonsNeedEntityResponse>;
  createUploadFile: Maybe<UploadFileEntityResponse>;
  createUploadFolder: Maybe<UploadFolderEntityResponse>;
  createUserPayment: Maybe<UserPaymentEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteCity: Maybe<CityEntityResponse>;
  deleteFoodBasket: Maybe<FoodBasketEntityResponse>;
  deleteNeedyCategory: Maybe<NeedyCategoryEntityResponse>;
  deleteNeedyPerson: Maybe<NeedyPersonEntityResponse>;
  deleteNew: Maybe<NewEntityResponse>;
  deletePersonsNeed: Maybe<PersonsNeedEntityResponse>;
  deleteUploadFile: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder: Maybe<UploadFolderEntityResponse>;
  deleteUserPayment: Maybe<UserPaymentEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword: Maybe<UsersPermissionsLoginPayload>;
  updateCity: Maybe<CityEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateFoodBasket: Maybe<FoodBasketEntityResponse>;
  updateNeedyCategory: Maybe<NeedyCategoryEntityResponse>;
  updateNeedyPerson: Maybe<NeedyPersonEntityResponse>;
  updateNew: Maybe<NewEntityResponse>;
  updatePersonsNeed: Maybe<PersonsNeedEntityResponse>;
  updateUploadFile: Maybe<UploadFileEntityResponse>;
  updateUploadFolder: Maybe<UploadFolderEntityResponse>;
  updateUserPayment: Maybe<UserPaymentEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationCreateCityArgs = {
  data: CityInput;
};


export type MutationCreateNeedyCategoryArgs = {
  data: NeedyCategoryInput;
};


export type MutationCreateNeedyPersonArgs = {
  data: NeedyPersonInput;
};


export type MutationCreateNewArgs = {
  data: NewInput;
};


export type MutationCreatePersonsNeedArgs = {
  data: PersonsNeedInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUserPaymentArgs = {
  data: UserPaymentInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteCityArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteNeedyCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteNeedyPersonArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteNewArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePersonsNeedArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserPaymentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref: InputMaybe<Scalars['String']>;
  refId: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateCityArgs = {
  data: CityInput;
  id: Scalars['ID'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: InputMaybe<FileInfoInput>;
};


export type MutationUpdateFoodBasketArgs = {
  data: FoodBasketInput;
};


export type MutationUpdateNeedyCategoryArgs = {
  data: NeedyCategoryInput;
  id: Scalars['ID'];
};


export type MutationUpdateNeedyPersonArgs = {
  data: NeedyPersonInput;
  id: Scalars['ID'];
};


export type MutationUpdateNewArgs = {
  data: NewInput;
  id: Scalars['ID'];
};


export type MutationUpdatePersonsNeedArgs = {
  data: PersonsNeedInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID'];
};


export type MutationUpdateUserPaymentArgs = {
  data: UserPaymentInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info: InputMaybe<FileInfoInput>;
  ref: InputMaybe<Scalars['String']>;
  refId: InputMaybe<Scalars['ID']>;
};

export type NeedyCategory = {
  createdAt: Maybe<Scalars['DateTime']>;
  name: Maybe<Scalars['String']>;
  needy_people: Maybe<NeedyPersonRelationResponseCollection>;
  publishedAt: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
};


export type NeedyCategoryNeedy_PeopleArgs = {
  filters: InputMaybe<NeedyPersonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NeedyCategoryEntity = {
  attributes: Maybe<NeedyCategory>;
  id: Maybe<Scalars['ID']>;
};

export type NeedyCategoryEntityResponse = {
  data: Maybe<NeedyCategoryEntity>;
};

export type NeedyCategoryEntityResponseCollection = {
  data: Array<NeedyCategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type NeedyCategoryFiltersInput = {
  and: InputMaybe<Array<InputMaybe<NeedyCategoryFiltersInput>>>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  id: InputMaybe<IdFilterInput>;
  name: InputMaybe<StringFilterInput>;
  needy_people: InputMaybe<NeedyPersonFiltersInput>;
  not: InputMaybe<NeedyCategoryFiltersInput>;
  or: InputMaybe<Array<InputMaybe<NeedyCategoryFiltersInput>>>;
  publishedAt: InputMaybe<DateTimeFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type NeedyCategoryInput = {
  name: InputMaybe<Scalars['String']>;
  needy_people: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
};

export type NeedyPerson = {
  city: Maybe<CityEntityResponse>;
  createdAt: Maybe<Scalars['DateTime']>;
  description: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  geolocation: ComponentCoordinatesCoordinates;
  lastName: Scalars['String'];
  needy_category: Maybe<NeedyCategoryEntityResponse>;
  patronymic: Maybe<Scalars['String']>;
  persons_needs: Maybe<PersonsNeedRelationResponseCollection>;
  publishedAt: Maybe<Scalars['DateTime']>;
  thumbnail: Maybe<UploadFileEntityResponse>;
  updatedAt: Maybe<Scalars['DateTime']>;
  years: Maybe<Scalars['Int']>;
};


export type NeedyPersonPersons_NeedsArgs = {
  filters: InputMaybe<PersonsNeedFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NeedyPersonEntity = {
  attributes: Maybe<NeedyPerson>;
  id: Maybe<Scalars['ID']>;
};

export type NeedyPersonEntityResponse = {
  data: Maybe<NeedyPersonEntity>;
};

export type NeedyPersonEntityResponseCollection = {
  data: Array<NeedyPersonEntity>;
  meta: ResponseCollectionMeta;
};

export type NeedyPersonFiltersInput = {
  and: InputMaybe<Array<InputMaybe<NeedyPersonFiltersInput>>>;
  city: InputMaybe<CityFiltersInput>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  description: InputMaybe<StringFilterInput>;
  firstName: InputMaybe<StringFilterInput>;
  geolocation: InputMaybe<ComponentCoordinatesCoordinatesFiltersInput>;
  id: InputMaybe<IdFilterInput>;
  lastName: InputMaybe<StringFilterInput>;
  needy_category: InputMaybe<NeedyCategoryFiltersInput>;
  not: InputMaybe<NeedyPersonFiltersInput>;
  or: InputMaybe<Array<InputMaybe<NeedyPersonFiltersInput>>>;
  patronymic: InputMaybe<StringFilterInput>;
  persons_needs: InputMaybe<PersonsNeedFiltersInput>;
  publishedAt: InputMaybe<DateTimeFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
  years: InputMaybe<IntFilterInput>;
};

export type NeedyPersonInput = {
  city: InputMaybe<Scalars['ID']>;
  description: InputMaybe<Scalars['String']>;
  firstName: InputMaybe<Scalars['String']>;
  geolocation: InputMaybe<ComponentCoordinatesCoordinatesInput>;
  lastName: InputMaybe<Scalars['String']>;
  needy_category: InputMaybe<Scalars['ID']>;
  patronymic: InputMaybe<Scalars['String']>;
  persons_needs: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  thumbnail: InputMaybe<Scalars['ID']>;
  years: InputMaybe<Scalars['Int']>;
};

export type NeedyPersonRelationResponseCollection = {
  data: Array<NeedyPersonEntity>;
};

export type New = {
  createdAt: Maybe<Scalars['DateTime']>;
  description: Maybe<Scalars['String']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  thumbnail: Maybe<UploadFileEntityResponse>;
  title: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['DateTime']>;
};

export type NewEntity = {
  attributes: Maybe<New>;
  id: Maybe<Scalars['ID']>;
};

export type NewEntityResponse = {
  data: Maybe<NewEntity>;
};

export type NewEntityResponseCollection = {
  data: Array<NewEntity>;
  meta: ResponseCollectionMeta;
};

export type NewFiltersInput = {
  and: InputMaybe<Array<InputMaybe<NewFiltersInput>>>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  description: InputMaybe<StringFilterInput>;
  id: InputMaybe<IdFilterInput>;
  not: InputMaybe<NewFiltersInput>;
  or: InputMaybe<Array<InputMaybe<NewFiltersInput>>>;
  publishedAt: InputMaybe<DateTimeFilterInput>;
  title: InputMaybe<StringFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type NewInput = {
  description: InputMaybe<Scalars['String']>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  thumbnail: InputMaybe<Scalars['ID']>;
  title: InputMaybe<Scalars['String']>;
};

export type Pagination = {
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit: InputMaybe<Scalars['Int']>;
  page: InputMaybe<Scalars['Int']>;
  pageSize: InputMaybe<Scalars['Int']>;
  start: InputMaybe<Scalars['Int']>;
};

export type PersonsNeed = {
  createdAt: Maybe<Scalars['DateTime']>;
  currentSum: Scalars['Int'];
  description: Scalars['String'];
  isActive: Scalars['Boolean'];
  needy_person: Maybe<NeedyPersonEntityResponse>;
  publishedAt: Maybe<Scalars['DateTime']>;
  requestedSum: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Maybe<Scalars['DateTime']>;
  user_payments: Maybe<UserPaymentRelationResponseCollection>;
};


export type PersonsNeedUser_PaymentsArgs = {
  filters: InputMaybe<UserPaymentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PersonsNeedEntity = {
  attributes: Maybe<PersonsNeed>;
  id: Maybe<Scalars['ID']>;
};

export type PersonsNeedEntityResponse = {
  data: Maybe<PersonsNeedEntity>;
};

export type PersonsNeedEntityResponseCollection = {
  data: Array<PersonsNeedEntity>;
  meta: ResponseCollectionMeta;
};

export type PersonsNeedFiltersInput = {
  and: InputMaybe<Array<InputMaybe<PersonsNeedFiltersInput>>>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  currentSum: InputMaybe<IntFilterInput>;
  description: InputMaybe<StringFilterInput>;
  id: InputMaybe<IdFilterInput>;
  isActive: InputMaybe<BooleanFilterInput>;
  needy_person: InputMaybe<NeedyPersonFiltersInput>;
  not: InputMaybe<PersonsNeedFiltersInput>;
  or: InputMaybe<Array<InputMaybe<PersonsNeedFiltersInput>>>;
  publishedAt: InputMaybe<DateTimeFilterInput>;
  requestedSum: InputMaybe<IntFilterInput>;
  title: InputMaybe<StringFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
  user_payments: InputMaybe<UserPaymentFiltersInput>;
};

export type PersonsNeedInput = {
  currentSum: InputMaybe<Scalars['Int']>;
  description: InputMaybe<Scalars['String']>;
  isActive: InputMaybe<Scalars['Boolean']>;
  needy_person: InputMaybe<Scalars['ID']>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  requestedSum: InputMaybe<Scalars['Int']>;
  title: InputMaybe<Scalars['String']>;
  user_payments: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type PersonsNeedRelationResponseCollection = {
  data: Array<PersonsNeedEntity>;
};

export type PublicationState =
  | 'LIVE'
  | 'PREVIEW';

export type Query = {
  cities: Maybe<CityEntityResponseCollection>;
  city: Maybe<CityEntityResponse>;
  foodBasket: Maybe<FoodBasketEntityResponse>;
  i18NLocale: Maybe<I18NLocaleEntityResponse>;
  i18NLocales: Maybe<I18NLocaleEntityResponseCollection>;
  me: Maybe<UsersPermissionsMe>;
  needyCategories: Maybe<NeedyCategoryEntityResponseCollection>;
  needyCategory: Maybe<NeedyCategoryEntityResponse>;
  needyPerson: Maybe<NeedyPersonEntityResponse>;
  needyPersons: Maybe<NeedyPersonEntityResponseCollection>;
  new: Maybe<NewEntityResponse>;
  news: Maybe<NewEntityResponseCollection>;
  personsNeed: Maybe<PersonsNeedEntityResponse>;
  personsNeeds: Maybe<PersonsNeedEntityResponseCollection>;
  uploadFile: Maybe<UploadFileEntityResponse>;
  uploadFiles: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder: Maybe<UploadFolderEntityResponse>;
  uploadFolders: Maybe<UploadFolderEntityResponseCollection>;
  userPayment: Maybe<UserPaymentEntityResponse>;
  userPayments: Maybe<UserPaymentEntityResponseCollection>;
  usersPermissionsRole: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryCitiesArgs = {
  filters: InputMaybe<CityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCityArgs = {
  id: InputMaybe<Scalars['ID']>;
};


export type QueryFoodBasketArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryI18NLocaleArgs = {
  id: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNeedyCategoriesArgs = {
  filters: InputMaybe<NeedyCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNeedyCategoryArgs = {
  id: InputMaybe<Scalars['ID']>;
};


export type QueryNeedyPersonArgs = {
  id: InputMaybe<Scalars['ID']>;
};


export type QueryNeedyPersonsArgs = {
  filters: InputMaybe<NeedyPersonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNewArgs = {
  id: InputMaybe<Scalars['ID']>;
};


export type QueryNewsArgs = {
  filters: InputMaybe<NewFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPersonsNeedArgs = {
  id: InputMaybe<Scalars['ID']>;
};


export type QueryPersonsNeedsArgs = {
  filters: InputMaybe<PersonsNeedFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFolderArgs = {
  id: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUserPaymentArgs = {
  id: InputMaybe<Scalars['ID']>;
};


export type QueryUserPaymentsArgs = {
  filters: InputMaybe<UserPaymentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  pagination: Pagination;
};

export type StringFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains: InputMaybe<Scalars['String']>;
  containsi: InputMaybe<Scalars['String']>;
  endsWith: InputMaybe<Scalars['String']>;
  eq: InputMaybe<Scalars['String']>;
  eqi: InputMaybe<Scalars['String']>;
  gt: InputMaybe<Scalars['String']>;
  gte: InputMaybe<Scalars['String']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt: InputMaybe<Scalars['String']>;
  lte: InputMaybe<Scalars['String']>;
  ne: InputMaybe<Scalars['String']>;
  not: InputMaybe<StringFilterInput>;
  notContains: InputMaybe<Scalars['String']>;
  notContainsi: InputMaybe<Scalars['String']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull: InputMaybe<Scalars['Boolean']>;
  null: InputMaybe<Scalars['Boolean']>;
  or: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  alternativeText: Maybe<Scalars['String']>;
  caption: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['DateTime']>;
  ext: Maybe<Scalars['String']>;
  formats: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata: Maybe<Scalars['JSON']>;
  related: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  attributes: Maybe<UploadFile>;
  id: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  data: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText: InputMaybe<StringFilterInput>;
  and: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption: InputMaybe<StringFilterInput>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  ext: InputMaybe<StringFilterInput>;
  folder: InputMaybe<UploadFolderFiltersInput>;
  folderPath: InputMaybe<StringFilterInput>;
  formats: InputMaybe<JsonFilterInput>;
  hash: InputMaybe<StringFilterInput>;
  height: InputMaybe<IntFilterInput>;
  id: InputMaybe<IdFilterInput>;
  mime: InputMaybe<StringFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<UploadFileFiltersInput>;
  or: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl: InputMaybe<StringFilterInput>;
  provider: InputMaybe<StringFilterInput>;
  provider_metadata: InputMaybe<JsonFilterInput>;
  size: InputMaybe<FloatFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
  url: InputMaybe<StringFilterInput>;
  width: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText: InputMaybe<Scalars['String']>;
  caption: InputMaybe<Scalars['String']>;
  ext: InputMaybe<Scalars['String']>;
  folder: InputMaybe<Scalars['ID']>;
  folderPath: InputMaybe<Scalars['String']>;
  formats: InputMaybe<Scalars['JSON']>;
  hash: InputMaybe<Scalars['String']>;
  height: InputMaybe<Scalars['Int']>;
  mime: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  previewUrl: InputMaybe<Scalars['String']>;
  provider: InputMaybe<Scalars['String']>;
  provider_metadata: InputMaybe<Scalars['JSON']>;
  size: InputMaybe<Scalars['Float']>;
  url: InputMaybe<Scalars['String']>;
  width: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  children: Maybe<UploadFolderRelationResponseCollection>;
  createdAt: Maybe<Scalars['DateTime']>;
  files: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt: Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  attributes: Maybe<UploadFolder>;
  id: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
  data: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children: InputMaybe<UploadFolderFiltersInput>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  files: InputMaybe<UploadFileFiltersInput>;
  id: InputMaybe<IdFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<UploadFolderFiltersInput>;
  or: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent: InputMaybe<UploadFolderFiltersInput>;
  path: InputMaybe<StringFilterInput>;
  pathId: InputMaybe<IntFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name: InputMaybe<Scalars['String']>;
  parent: InputMaybe<Scalars['ID']>;
  path: InputMaybe<Scalars['String']>;
  pathId: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  data: Array<UploadFolderEntity>;
};

export type UserPayment = {
  amount: Maybe<Scalars['Int']>;
  createdAt: Maybe<Scalars['DateTime']>;
  persons_needs: Maybe<PersonsNeedRelationResponseCollection>;
  publishedAt: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  users_permissions_users: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UserPaymentPersons_NeedsArgs = {
  filters: InputMaybe<PersonsNeedFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UserPaymentUsers_Permissions_UsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UserPaymentEntity = {
  attributes: Maybe<UserPayment>;
  id: Maybe<Scalars['ID']>;
};

export type UserPaymentEntityResponse = {
  data: Maybe<UserPaymentEntity>;
};

export type UserPaymentEntityResponseCollection = {
  data: Array<UserPaymentEntity>;
  meta: ResponseCollectionMeta;
};

export type UserPaymentFiltersInput = {
  amount: InputMaybe<IntFilterInput>;
  and: InputMaybe<Array<InputMaybe<UserPaymentFiltersInput>>>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  id: InputMaybe<IdFilterInput>;
  not: InputMaybe<UserPaymentFiltersInput>;
  or: InputMaybe<Array<InputMaybe<UserPaymentFiltersInput>>>;
  persons_needs: InputMaybe<PersonsNeedFiltersInput>;
  publishedAt: InputMaybe<DateTimeFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
  users_permissions_users: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UserPaymentInput = {
  amount: InputMaybe<Scalars['Int']>;
  persons_needs: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  users_permissions_users: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UserPaymentRelationResponseCollection = {
  data: Array<UserPaymentEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  jwt: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  blocked: Maybe<Scalars['Boolean']>;
  confirmed: Maybe<Scalars['Boolean']>;
  email: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  description: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  action: Scalars['String'];
  createdAt: Maybe<Scalars['DateTime']>;
  role: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  attributes: Maybe<UsersPermissionsPermission>;
  id: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action: InputMaybe<StringFilterInput>;
  and: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  id: InputMaybe<IdFilterInput>;
  not: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  createdAt: Maybe<Scalars['DateTime']>;
  description: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  users: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  attributes: Maybe<UsersPermissionsRole>;
  id: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  data: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  description: InputMaybe<StringFilterInput>;
  id: InputMaybe<IdFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type: InputMaybe<StringFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
  users: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  permissions: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type: InputMaybe<Scalars['String']>;
  users: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  blocked: Maybe<Scalars['Boolean']>;
  bonuses: Maybe<Scalars['Int']>;
  confirmed: Maybe<Scalars['Boolean']>;
  createdAt: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phone: Maybe<Scalars['String']>;
  provider: Maybe<Scalars['String']>;
  role: Maybe<UsersPermissionsRoleEntityResponse>;
  thumbnail: Maybe<UploadFileEntityResponse>;
  updatedAt: Maybe<Scalars['DateTime']>;
  user_payments: Maybe<UserPaymentRelationResponseCollection>;
  username: Scalars['String'];
};


export type UsersPermissionsUserUser_PaymentsArgs = {
  filters: InputMaybe<UserPaymentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsUserEntity = {
  attributes: Maybe<UsersPermissionsUser>;
  id: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  data: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked: InputMaybe<BooleanFilterInput>;
  bonuses: InputMaybe<IntFilterInput>;
  confirmationToken: InputMaybe<StringFilterInput>;
  confirmed: InputMaybe<BooleanFilterInput>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  email: InputMaybe<StringFilterInput>;
  firstName: InputMaybe<StringFilterInput>;
  id: InputMaybe<IdFilterInput>;
  lastName: InputMaybe<StringFilterInput>;
  not: InputMaybe<UsersPermissionsUserFiltersInput>;
  or: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password: InputMaybe<StringFilterInput>;
  phone: InputMaybe<StringFilterInput>;
  provider: InputMaybe<StringFilterInput>;
  resetPasswordToken: InputMaybe<StringFilterInput>;
  role: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
  user_payments: InputMaybe<UserPaymentFiltersInput>;
  username: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked: InputMaybe<Scalars['Boolean']>;
  bonuses: InputMaybe<Scalars['Int']>;
  confirmationToken: InputMaybe<Scalars['String']>;
  confirmed: InputMaybe<Scalars['Boolean']>;
  email: InputMaybe<Scalars['String']>;
  firstName: InputMaybe<Scalars['String']>;
  lastName: InputMaybe<Scalars['String']>;
  password: InputMaybe<Scalars['String']>;
  phone: InputMaybe<Scalars['String']>;
  provider: InputMaybe<Scalars['String']>;
  resetPasswordToken: InputMaybe<Scalars['String']>;
  role: InputMaybe<Scalars['ID']>;
  thumbnail: InputMaybe<Scalars['ID']>;
  user_payments: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  username: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  data: Array<UsersPermissionsUserEntity>;
};

export type FoodBasketQueryVariables = Exact<{ [key: string]: never; }>;


export type FoodBasketQuery = { foodBasket: { data: { id: string | null, attributes: { items: Array<{ id: string, name: string | null, price: number | null, quantity: number | null } | null> | null } | null } | null } | null };

export type NeedyPersonQueryVariables = Exact<{
  id: InputMaybe<Scalars['ID']>;
}>;


export type NeedyPersonQuery = { needyPerson: { data: { id: string | null, attributes: { years: number | null, firstName: string, lastName: string, patronymic: string | null, description: string | null, thumbnail: { data: { attributes: { url: string } | null } | null } | null, persons_needs: { data: Array<{ id: string | null, attributes: { title: string, description: string, requestedSum: number, currentSum: number, isActive: boolean, createdAt: any | null } | null }> } | null } | null } | null } | null };

export type NeedyPersonNeedsQueryVariables = Exact<{
  where: InputMaybe<PersonsNeedFiltersInput>;
}>;


export type NeedyPersonNeedsQuery = { personsNeeds: { data: Array<{ id: string | null, attributes: { title: string, description: string, requestedSum: number, currentSum: number, isActive: boolean, createdAt: any | null } | null }> } | null };

export type NeedyPersonsQueryVariables = Exact<{ [key: string]: never; }>;


export type NeedyPersonsQuery = { needyPersons: { data: Array<{ id: string | null, attributes: { thumbnail: { data: { attributes: { url: string, name: string } | null } | null } | null, needy_category: { data: { id: string | null, attributes: { name: string | null } | null } | null } | null, geolocation: { latitude: string, langitude: string } } | null }> } | null };

export type SingleNeedQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SingleNeedQuery = { personsNeed: { data: { id: string | null, attributes: { title: string, description: string, requestedSum: number, currentSum: number, isActive: boolean, createdAt: any | null, needy_person: { data: { id: string | null, attributes: { lastName: string, firstName: string, thumbnail: { data: { id: string | null, attributes: { url: string } | null } | null } | null } | null } | null } | null } | null } | null } | null };

export type UserPaymentQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserPaymentQuery = { userPayment: { data: { id: string | null, attributes: { createdAt: any | null, amount: number | null, users_permissions_users: { data: Array<{ id: string | null, attributes: { firstName: string, lastName: string } | null }> } | null, persons_needs: { data: Array<{ id: string | null, attributes: { title: string, needy_person: { data: { id: string | null, attributes: { firstName: string, lastName: string, thumbnail: { data: { id: string | null, attributes: { url: string } | null } | null } | null } | null } | null } | null } | null }> } | null } | null } | null } | null };

export type UserPaymentsQueryVariables = Exact<{
  where: InputMaybe<UserPaymentFiltersInput>;
  start: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Scalars['String']>;
}>;


export type UserPaymentsQuery = { userPayments: { data: Array<{ id: string | null, attributes: { createdAt: any | null, amount: number | null, persons_needs: { data: Array<{ id: string | null, attributes: { title: string, needy_person: { data: { id: string | null, attributes: { firstName: string, lastName: string } | null } | null } | null } | null }> } | null } | null }>, meta: { pagination: { total: number } } } | null };


export const FoodBasketDocument = gql`
    query FoodBasket {
  foodBasket {
    data {
      id
      attributes {
        items {
          id
          name
          price
          quantity
        }
      }
    }
  }
}
    `;

/**
 * __useFoodBasketQuery__
 *
 * To run a query within a React component, call `useFoodBasketQuery` and pass it any options that fit your needs.
 * When your component renders, `useFoodBasketQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFoodBasketQuery({
 *   variables: {
 *   },
 * });
 */
export function useFoodBasketQuery(baseOptions?: Apollo.QueryHookOptions<FoodBasketQuery, FoodBasketQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FoodBasketQuery, FoodBasketQueryVariables>(FoodBasketDocument, options);
      }
export function useFoodBasketLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FoodBasketQuery, FoodBasketQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FoodBasketQuery, FoodBasketQueryVariables>(FoodBasketDocument, options);
        }
export type FoodBasketQueryHookResult = ReturnType<typeof useFoodBasketQuery>;
export type FoodBasketLazyQueryHookResult = ReturnType<typeof useFoodBasketLazyQuery>;
export type FoodBasketQueryResult = Apollo.QueryResult<FoodBasketQuery, FoodBasketQueryVariables>;
export const NeedyPersonDocument = gql`
    query NeedyPerson($id: ID) {
  needyPerson(id: $id) {
    data {
      id
      attributes {
        years
        thumbnail {
          data {
            attributes {
              url
            }
          }
        }
        firstName
        lastName
        patronymic
        description
        persons_needs {
          data {
            id
            attributes {
              title
              description
              requestedSum
              currentSum
              isActive
              createdAt
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useNeedyPersonQuery__
 *
 * To run a query within a React component, call `useNeedyPersonQuery` and pass it any options that fit your needs.
 * When your component renders, `useNeedyPersonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNeedyPersonQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useNeedyPersonQuery(baseOptions?: Apollo.QueryHookOptions<NeedyPersonQuery, NeedyPersonQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NeedyPersonQuery, NeedyPersonQueryVariables>(NeedyPersonDocument, options);
      }
export function useNeedyPersonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NeedyPersonQuery, NeedyPersonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NeedyPersonQuery, NeedyPersonQueryVariables>(NeedyPersonDocument, options);
        }
export type NeedyPersonQueryHookResult = ReturnType<typeof useNeedyPersonQuery>;
export type NeedyPersonLazyQueryHookResult = ReturnType<typeof useNeedyPersonLazyQuery>;
export type NeedyPersonQueryResult = Apollo.QueryResult<NeedyPersonQuery, NeedyPersonQueryVariables>;
export const NeedyPersonNeedsDocument = gql`
    query NeedyPersonNeeds($where: PersonsNeedFiltersInput) {
  personsNeeds(filters: $where) {
    data {
      id
      attributes {
        title
        description
        requestedSum
        currentSum
        isActive
        createdAt
      }
    }
  }
}
    `;

/**
 * __useNeedyPersonNeedsQuery__
 *
 * To run a query within a React component, call `useNeedyPersonNeedsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNeedyPersonNeedsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNeedyPersonNeedsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useNeedyPersonNeedsQuery(baseOptions?: Apollo.QueryHookOptions<NeedyPersonNeedsQuery, NeedyPersonNeedsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NeedyPersonNeedsQuery, NeedyPersonNeedsQueryVariables>(NeedyPersonNeedsDocument, options);
      }
export function useNeedyPersonNeedsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NeedyPersonNeedsQuery, NeedyPersonNeedsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NeedyPersonNeedsQuery, NeedyPersonNeedsQueryVariables>(NeedyPersonNeedsDocument, options);
        }
export type NeedyPersonNeedsQueryHookResult = ReturnType<typeof useNeedyPersonNeedsQuery>;
export type NeedyPersonNeedsLazyQueryHookResult = ReturnType<typeof useNeedyPersonNeedsLazyQuery>;
export type NeedyPersonNeedsQueryResult = Apollo.QueryResult<NeedyPersonNeedsQuery, NeedyPersonNeedsQueryVariables>;
export const NeedyPersonsDocument = gql`
    query NeedyPersons {
  needyPersons {
    data {
      id
      attributes {
        thumbnail {
          data {
            attributes {
              url
              name
            }
          }
        }
        needy_category {
          data {
            id
            attributes {
              name
            }
          }
        }
        geolocation {
          latitude
          langitude
        }
      }
    }
  }
}
    `;

/**
 * __useNeedyPersonsQuery__
 *
 * To run a query within a React component, call `useNeedyPersonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNeedyPersonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNeedyPersonsQuery({
 *   variables: {
 *   },
 * });
 */
export function useNeedyPersonsQuery(baseOptions?: Apollo.QueryHookOptions<NeedyPersonsQuery, NeedyPersonsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NeedyPersonsQuery, NeedyPersonsQueryVariables>(NeedyPersonsDocument, options);
      }
export function useNeedyPersonsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NeedyPersonsQuery, NeedyPersonsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NeedyPersonsQuery, NeedyPersonsQueryVariables>(NeedyPersonsDocument, options);
        }
export type NeedyPersonsQueryHookResult = ReturnType<typeof useNeedyPersonsQuery>;
export type NeedyPersonsLazyQueryHookResult = ReturnType<typeof useNeedyPersonsLazyQuery>;
export type NeedyPersonsQueryResult = Apollo.QueryResult<NeedyPersonsQuery, NeedyPersonsQueryVariables>;
export const SingleNeedDocument = gql`
    query SingleNeed($id: ID!) {
  personsNeed(id: $id) {
    data {
      id
      attributes {
        title
        description
        requestedSum
        currentSum
        isActive
        createdAt
        needy_person {
          data {
            id
            attributes {
              lastName
              firstName
              thumbnail {
                data {
                  id
                  attributes {
                    url
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
 * __useSingleNeedQuery__
 *
 * To run a query within a React component, call `useSingleNeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleNeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleNeedQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleNeedQuery(baseOptions: Apollo.QueryHookOptions<SingleNeedQuery, SingleNeedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SingleNeedQuery, SingleNeedQueryVariables>(SingleNeedDocument, options);
      }
export function useSingleNeedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SingleNeedQuery, SingleNeedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SingleNeedQuery, SingleNeedQueryVariables>(SingleNeedDocument, options);
        }
export type SingleNeedQueryHookResult = ReturnType<typeof useSingleNeedQuery>;
export type SingleNeedLazyQueryHookResult = ReturnType<typeof useSingleNeedLazyQuery>;
export type SingleNeedQueryResult = Apollo.QueryResult<SingleNeedQuery, SingleNeedQueryVariables>;
export const UserPaymentDocument = gql`
    query UserPayment($id: ID!) {
  userPayment(id: $id) {
    data {
      id
      attributes {
        createdAt
        amount
        users_permissions_users {
          data {
            id
            attributes {
              firstName
              lastName
            }
          }
        }
        persons_needs {
          data {
            id
            attributes {
              title
              needy_person {
                data {
                  id
                  attributes {
                    firstName
                    lastName
                    thumbnail {
                      data {
                        id
                        attributes {
                          url
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
    }
  }
}
    `;

/**
 * __useUserPaymentQuery__
 *
 * To run a query within a React component, call `useUserPaymentQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserPaymentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserPaymentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserPaymentQuery(baseOptions: Apollo.QueryHookOptions<UserPaymentQuery, UserPaymentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserPaymentQuery, UserPaymentQueryVariables>(UserPaymentDocument, options);
      }
export function useUserPaymentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserPaymentQuery, UserPaymentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserPaymentQuery, UserPaymentQueryVariables>(UserPaymentDocument, options);
        }
export type UserPaymentQueryHookResult = ReturnType<typeof useUserPaymentQuery>;
export type UserPaymentLazyQueryHookResult = ReturnType<typeof useUserPaymentLazyQuery>;
export type UserPaymentQueryResult = Apollo.QueryResult<UserPaymentQuery, UserPaymentQueryVariables>;
export const UserPaymentsDocument = gql`
    query UserPayments($where: UserPaymentFiltersInput, $start: Int, $limit: Int, $sort: String) {
  userPayments(
    filters: $where
    pagination: {start: $start, limit: $limit}
    sort: [$sort]
  ) {
    data {
      id
      attributes {
        createdAt
        amount
        persons_needs {
          data {
            id
            attributes {
              title
              needy_person {
                data {
                  id
                  attributes {
                    firstName
                    lastName
                  }
                }
              }
            }
          }
        }
      }
    }
    meta {
      pagination {
        total
      }
    }
  }
}
    `;

/**
 * __useUserPaymentsQuery__
 *
 * To run a query within a React component, call `useUserPaymentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserPaymentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserPaymentsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      start: // value for 'start'
 *      limit: // value for 'limit'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useUserPaymentsQuery(baseOptions?: Apollo.QueryHookOptions<UserPaymentsQuery, UserPaymentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserPaymentsQuery, UserPaymentsQueryVariables>(UserPaymentsDocument, options);
      }
export function useUserPaymentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserPaymentsQuery, UserPaymentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserPaymentsQuery, UserPaymentsQueryVariables>(UserPaymentsDocument, options);
        }
export type UserPaymentsQueryHookResult = ReturnType<typeof useUserPaymentsQuery>;
export type UserPaymentsLazyQueryHookResult = ReturnType<typeof useUserPaymentsLazyQuery>;
export type UserPaymentsQueryResult = Apollo.QueryResult<UserPaymentsQuery, UserPaymentsQueryVariables>;