/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type PostFragment = { __typename?: 'Post', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, title: string, description?: Types.Maybe<string>, urlname?: Types.Maybe<string>, image?: Types.Maybe<string>, content?: Types.Maybe<any>, createdById: string, catalogId: string, CreatedBy?: Types.Maybe<{ __typename?: 'User', id: string, username?: Types.Maybe<string> }>, Catalog?: Types.Maybe<{ __typename?: 'Catalog', title: string }> };

export const PostFragmentDoc = gql`
    fragment post on Post {
  id
  createdAt
  updatedAt
  title
  description
  urlname
  image
  content
  createdById
  CreatedBy {
    id
    username
  }
  catalogId
  Catalog {
    title
  }
}
    `;