/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type CatalogNewDataFragment = { __typename?: 'CatalogNew', id: string, title: string, urlname: string, parent: string };

export const CatalogNewDataFragmentDoc = gql`
    fragment CatalogNewData on CatalogNew {
  id
  title
  urlname
  parent
}
    `;