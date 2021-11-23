/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: globalThis.Date;
  JSON: any;
  Json: globalThis.Record<string, any> | globalThis.Array<any>;
  /** desc */
  Upload: globalThis.File;
};

/** Объект ответа мутации пользователя */
export interface AuthPayload {
  __typename?: 'AuthPayload';
  data?: Maybe<User>;
  errors: Array<RequestError>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
}

export interface BoolFilter {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
}

/** Пункт каталога */
export interface Catalog {
  __typename?: 'Catalog';
  Catalogtop?: Maybe<Catalogtop>;
  CatalogtopId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  title: Scalars['String'];
  urlname: Scalars['String'];
}

export interface CatalogListRelationFilter {
  every?: Maybe<CatalogWhereInput>;
  none?: Maybe<CatalogWhereInput>;
  some?: Maybe<CatalogWhereInput>;
}

export interface CatalogOrderByInput {
  CatalogtopId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  urlname?: Maybe<SortOrder>;
}

export interface CatalogWhereInput {
  AND?: Maybe<Array<CatalogWhereInput>>;
  Catalogtop?: Maybe<CatalogtopWhereInput>;
  CatalogtopId?: Maybe<StringFilter>;
  NOT?: Maybe<Array<CatalogWhereInput>>;
  OR?: Maybe<Array<CatalogWhereInput>>;
  Posts?: Maybe<PostListRelationFilter>;
  id?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  urlname?: Maybe<StringFilter>;
}

export interface CatalogWhereUniqueInput {
  id?: Maybe<Scalars['String']>;
}

/** Верхний уровень каталога */
export interface Catalogtop {
  __typename?: 'Catalogtop';
  catalogs?: Maybe<Array<Catalog>>;
  id: Scalars['String'];
  title: Scalars['String'];
  urlname: Scalars['String'];
}

export interface CatalogtopOrderByInput {
  id?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  urlname?: Maybe<SortOrder>;
}

export interface CatalogtopWhereInput {
  AND?: Maybe<Array<CatalogtopWhereInput>>;
  Catalogs?: Maybe<CatalogListRelationFilter>;
  NOT?: Maybe<Array<CatalogtopWhereInput>>;
  OR?: Maybe<Array<CatalogtopWhereInput>>;
  id?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  urlname?: Maybe<StringFilter>;
}

export interface CatalogtopWhereUniqueInput {
  id?: Maybe<Scalars['String']>;
}


export interface DateTimeFilter {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
}

export interface DateTimeNullableFilter {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
}

export interface EnumLetterStatusFilter {
  equals?: Maybe<LetterStatus>;
  in?: Maybe<Array<LetterStatus>>;
  not?: Maybe<NestedEnumLetterStatusFilter>;
  notIn?: Maybe<Array<LetterStatus>>;
}

export interface EnumRoleFilter {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleFilter>;
  notIn?: Maybe<Array<Role>>;
}

/** Файл */
export interface File {
  __typename?: 'File';
  /** Когда создан */
  createdAt: Scalars['DateTime'];
  /** Кодировка */
  encoding: Scalars['String'];
  /** Имя файла */
  filename: Scalars['String'];
  id: Scalars['String'];
  /** Миме-тип */
  mimetype: Scalars['String'];
  /** Пользовательское имя файла */
  name?: Maybe<Scalars['String']>;
  /** Путь к файлу */
  path: Scalars['String'];
  /** Очередность */
  rank: Scalars['Int'];
  /** Размер в байтах */
  size: Scalars['Float'];
  /** Когда обновлен */
  updatedAt: Scalars['DateTime'];
}

export interface FileListRelationFilter {
  every?: Maybe<FileWhereInput>;
  none?: Maybe<FileWhereInput>;
  some?: Maybe<FileWhereInput>;
}

export interface FileOrderByInput {
  createdAt?: Maybe<SortOrder>;
  createdById?: Maybe<SortOrder>;
  encoding?: Maybe<SortOrder>;
  filename?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  mimetype?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  path?: Maybe<SortOrder>;
  rank?: Maybe<SortOrder>;
  size?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
}

export interface FileWhereInput {
  AND?: Maybe<Array<FileWhereInput>>;
  CreatedBy?: Maybe<UserWhereInput>;
  NOT?: Maybe<Array<FileWhereInput>>;
  OR?: Maybe<Array<FileWhereInput>>;
  PostImages?: Maybe<PostImageListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  createdById?: Maybe<StringNullableFilter>;
  encoding?: Maybe<StringFilter>;
  filename?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  mimetype?: Maybe<StringFilter>;
  name?: Maybe<StringNullableFilter>;
  path?: Maybe<StringFilter>;
  rank?: Maybe<IntFilter>;
  size?: Maybe<FloatFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface FileWhereUniqueInput {
  id?: Maybe<Scalars['String']>;
}

export interface FloatFilter {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
}

export interface IntFilter {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
}

export interface IntNullableFilter {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
}



export interface JsonNullableFilter {
  equals?: Maybe<Scalars['Json']>;
  not?: Maybe<Scalars['Json']>;
}

export interface LetterListRelationFilter {
  every?: Maybe<LetterWhereInput>;
  none?: Maybe<LetterWhereInput>;
  some?: Maybe<LetterWhereInput>;
}

export enum LetterStatus {
  CREATED = 'Created',
  ERROR = 'Error',
  PROCESSING = 'Processing',
  SENDED = 'Sended'
}

export interface LetterWhereInput {
  AND?: Maybe<Array<LetterWhereInput>>;
  CreatedBy?: Maybe<UserWhereInput>;
  NOT?: Maybe<Array<LetterWhereInput>>;
  OR?: Maybe<Array<LetterWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  createdById?: Maybe<StringNullableFilter>;
  deleteOnSend?: Maybe<BoolFilter>;
  email?: Maybe<StringFilter>;
  errorMessage?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  message?: Maybe<StringFilter>;
  rank?: Maybe<IntNullableFilter>;
  replyTo?: Maybe<StringNullableFilter>;
  returnTo?: Maybe<StringNullableFilter>;
  status?: Maybe<EnumLetterStatusFilter>;
  subject?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface Mutation {
  __typename?: 'Mutation';
  createPost: Post;
  createResetPasswordProcessor: ResetPasswordResponse;
  resetPasswordProcessor: AuthPayload;
  /** Авторизация */
  signin: AuthPayload;
  /** Регистрация */
  signup: AuthPayload;
  /** Загрузка файла */
  singleUpload?: Maybe<File>;
  updatePost: Post;
}


export type MutationCreatePostArgs = {
  data: PostCreateInput;
};


export type MutationCreateResetPasswordProcessorArgs = {
  where: UserWhereUniqueInput;
};


export type MutationResetPasswordProcessorArgs = {
  where: ResetPasswordProcessorWhereInput;
};


export type MutationSigninArgs = {
  data: UserSigninDataInput;
  where: UserWhereUniqueInput;
};


export type MutationSignupArgs = {
  data: UserSignupDataInput;
};


export type MutationSingleUploadArgs = {
  data?: Maybe<SingleUploadInput>;
  file?: Maybe<Scalars['Upload']>;
};


export type MutationUpdatePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};

export interface NestedBoolFilter {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
}

export interface NestedDateTimeFilter {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
}

export interface NestedDateTimeNullableFilter {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
}

export interface NestedEnumLetterStatusFilter {
  equals?: Maybe<LetterStatus>;
  in?: Maybe<Array<LetterStatus>>;
  not?: Maybe<NestedEnumLetterStatusFilter>;
  notIn?: Maybe<Array<LetterStatus>>;
}

export interface NestedEnumRoleFilter {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleFilter>;
  notIn?: Maybe<Array<Role>>;
}

export interface NestedFloatFilter {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
}

export interface NestedIntFilter {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
}

export interface NestedIntNullableFilter {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
}

export interface NestedStringFilter {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
}

export interface NestedStringNullableFilter {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
}

/** Пост */
export interface Post {
  __typename?: 'Post';
  Catalog?: Maybe<Catalog>;
  CreatedBy?: Maybe<User>;
  catalogId: Scalars['ID'];
  content?: Maybe<Scalars['JSON']>;
  /** Когда создан */
  createdAt: Scalars['DateTime'];
  createdById: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  postimages?: Maybe<Array<PostImage>>;
  title: Scalars['String'];
  /** Когда обновлен */
  updatedAt: Scalars['DateTime'];
  urlname?: Maybe<Scalars['String']>;
}

export interface PostCreateInput {
  catalogId?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  urlname?: Maybe<Scalars['String']>;
}

/** Картинка */
export interface PostImage {
  __typename?: 'PostImage';
  fileId: Scalars['ID'];
  id: Scalars['String'];
  postId: Scalars['ID'];
}

export interface PostImageListRelationFilter {
  every?: Maybe<PostImageWhereInput>;
  none?: Maybe<PostImageWhereInput>;
  some?: Maybe<PostImageWhereInput>;
}

export interface PostImageOrderByInput {
  fileId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  postId?: Maybe<SortOrder>;
}

export interface PostImageWhereInput {
  AND?: Maybe<Array<PostImageWhereInput>>;
  File?: Maybe<FileWhereInput>;
  NOT?: Maybe<Array<PostImageWhereInput>>;
  OR?: Maybe<Array<PostImageWhereInput>>;
  Post?: Maybe<PostWhereInput>;
  fileId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  postId?: Maybe<StringFilter>;
}

export interface PostImageWhereUniqueInput {
  id?: Maybe<Scalars['String']>;
}

export interface PostListRelationFilter {
  every?: Maybe<PostWhereInput>;
  none?: Maybe<PostWhereInput>;
  some?: Maybe<PostWhereInput>;
}

export interface PostOrderByInput {
  catalogId?: Maybe<SortOrder>;
  content?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  createdById?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  urlname?: Maybe<SortOrder>;
}

export interface PostUpdateInput {
  catalogId?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  urlname?: Maybe<Scalars['String']>;
}

export interface PostWhereInput {
  AND?: Maybe<Array<PostWhereInput>>;
  Catalog?: Maybe<CatalogWhereInput>;
  CreatedBy?: Maybe<UserWhereInput>;
  NOT?: Maybe<Array<PostWhereInput>>;
  OR?: Maybe<Array<PostWhereInput>>;
  PostImages?: Maybe<PostImageListRelationFilter>;
  catalogId?: Maybe<StringFilter>;
  content?: Maybe<JsonNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  createdById?: Maybe<StringFilter>;
  description?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  image?: Maybe<StringNullableFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  urlname?: Maybe<StringFilter>;
}

export interface PostWhereUniqueInput {
  id?: Maybe<Scalars['String']>;
}

export interface Query {
  __typename?: 'Query';
  /** Подраздел каталога */
  catalog?: Maybe<Catalog>;
  /** Подразделы каталога */
  catalogs: Array<Catalog>;
  /** Раздел каталога */
  catalogtop?: Maybe<Catalogtop>;
  /** Список разделов каталога */
  catalogtops: Array<Catalogtop>;
  /** Файл */
  file?: Maybe<File>;
  /** Список файлов */
  files: Array<File>;
  /** Количество файлов */
  filesCount: Scalars['Int'];
  me?: Maybe<User>;
  /** Пост */
  post?: Maybe<Post>;
  /** Картинка поста */
  postImage?: Maybe<PostImage>;
  /** Список картинок */
  postImages: Array<PostImage>;
  /** Список постов */
  posts: Array<Post>;
  tokens: Array<Token>;
  /** Пользователь */
  user?: Maybe<User>;
  /** Список пользователей */
  users: Array<User>;
  /** Количество пользователей */
  usersCount: Scalars['Int'];
}


export type QueryCatalogArgs = {
  where: CatalogWhereUniqueInput;
};


export type QueryCatalogsArgs = {
  cursor?: Maybe<CatalogWhereUniqueInput>;
  orderBy?: Maybe<Array<CatalogOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CatalogWhereInput>;
};


export type QueryCatalogtopArgs = {
  where: CatalogtopWhereUniqueInput;
};


export type QueryCatalogtopsArgs = {
  cursor?: Maybe<CatalogtopWhereUniqueInput>;
  orderBy?: Maybe<Array<CatalogtopOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CatalogtopWhereInput>;
};


export type QueryFileArgs = {
  where: FileWhereUniqueInput;
};


export type QueryFilesArgs = {
  cursor?: Maybe<FileWhereUniqueInput>;
  orderBy?: Maybe<Array<FileOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FileWhereInput>;
};


export type QueryFilesCountArgs = {
  where?: Maybe<FileWhereInput>;
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryPostImageArgs = {
  where: PostImageWhereUniqueInput;
};


export type QueryPostImagesArgs = {
  cursor?: Maybe<PostImageWhereUniqueInput>;
  orderBy?: Maybe<Array<PostImageOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PostImageWhereInput>;
};


export type QueryPostsArgs = {
  cursor?: Maybe<PostWhereUniqueInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
};


export type QueryTokensArgs = {
  cursor?: Maybe<TokenWhereUniqueInput>;
  orderBy?: Maybe<Array<TokenOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TokenWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryUsersCountArgs = {
  where?: Maybe<UserWhereInput>;
};

/** Объект ошибки */
export interface RequestError {
  __typename?: 'RequestError';
  key: Scalars['String'];
  message: Scalars['String'];
}

export interface ResetPassword {
  __typename?: 'ResetPassword';
  foo?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
}

export interface ResetPasswordListRelationFilter {
  every?: Maybe<ResetPasswordWhereInput>;
  none?: Maybe<ResetPasswordWhereInput>;
  some?: Maybe<ResetPasswordWhereInput>;
}

export interface ResetPasswordProcessorWhereInput {
  User: UserWhereUniqueInput;
  code: Scalars['ID'];
}

export interface ResetPasswordResponse {
  __typename?: 'ResetPasswordResponse';
  data?: Maybe<ResetPassword>;
  errors: Array<RequestError>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
}

export interface ResetPasswordWhereInput {
  AND?: Maybe<Array<ResetPasswordWhereInput>>;
  NOT?: Maybe<Array<ResetPasswordWhereInput>>;
  OR?: Maybe<Array<ResetPasswordWhereInput>>;
  User?: Maybe<StringFilter>;
  User_ResetPasswordToUser?: Maybe<UserWhereInput>;
  code?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  validTill?: Maybe<DateTimeNullableFilter>;
}

export interface ResetPasswordWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
}

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER'
}

export interface SingleUploadInput {
  /** В какую директорю загружать файл */
  directory?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
  /** Пользовательское имя файла */
  name?: Maybe<Scalars['String']>;
}

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc'
}

export interface StringFilter {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
}

export interface StringNullableFilter {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
}

export interface Token {
  __typename?: 'Token';
  User?: Maybe<User>;
  createdAt: Scalars['DateTime'];
  expiredAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  userId?: Maybe<Scalars['String']>;
}

export interface TokenListRelationFilter {
  every?: Maybe<TokenWhereInput>;
  none?: Maybe<TokenWhereInput>;
  some?: Maybe<TokenWhereInput>;
}

export interface TokenOrderByInput {
  createdAt?: Maybe<SortOrder>;
  expiredAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
}

export interface TokenWhereInput {
  AND?: Maybe<Array<TokenWhereInput>>;
  NOT?: Maybe<Array<TokenWhereInput>>;
  OR?: Maybe<Array<TokenWhereInput>>;
  User?: Maybe<UserWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  expiredAt?: Maybe<DateTimeNullableFilter>;
  id?: Maybe<StringFilter>;
  userId?: Maybe<StringNullableFilter>;
}

export interface TokenWhereUniqueInput {
  id?: Maybe<Scalars['String']>;
}


/** Пользователь */
export interface User {
  __typename?: 'User';
  Tokens?: Maybe<Array<Maybe<Token>>>;
  /** Когда создан */
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  /** Avatar */
  image?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  /** Показывать емейл другим пользователям */
  showEmail: Scalars['Boolean'];
  /** Показывать ФИО другим пользователям */
  showFullname: Scalars['Boolean'];
  sudo?: Maybe<Scalars['Boolean']>;
  /** Когда обновлен */
  updatedAt: Scalars['DateTime'];
  username?: Maybe<Scalars['String']>;
}

export interface UserOrderByInput {
  active?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  fullname?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
  showEmail?: Maybe<SortOrder>;
  showFullname?: Maybe<SortOrder>;
  sudo?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
}

export interface UserSigninDataInput {
  password?: Maybe<Scalars['String']>;
}

export interface UserSignupDataInput {
  email?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  /** Показывать емейл другим пользователям */
  showEmail: Scalars['Boolean'];
  /** Показывать ФИО другим пользователям */
  showFullname: Scalars['Boolean'];
  username?: Maybe<Scalars['String']>;
}

export interface UserWhereInput {
  AND?: Maybe<Array<UserWhereInput>>;
  Files?: Maybe<FileListRelationFilter>;
  Letters?: Maybe<LetterListRelationFilter>;
  NOT?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  Posts?: Maybe<PostListRelationFilter>;
  ResetPasswords?: Maybe<ResetPasswordListRelationFilter>;
  Tokens?: Maybe<TokenListRelationFilter>;
  active?: Maybe<BoolFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringNullableFilter>;
  fullname?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  image?: Maybe<StringNullableFilter>;
  password?: Maybe<StringNullableFilter>;
  role?: Maybe<EnumRoleFilter>;
  showEmail?: Maybe<BoolFilter>;
  showFullname?: Maybe<BoolFilter>;
  sudo?: Maybe<BoolFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  username?: Maybe<StringNullableFilter>;
}

export interface UserWhereUniqueInput {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
}
