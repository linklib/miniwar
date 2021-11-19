/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type CatalogdataFragment = { __typename?: 'Catalog', id: string, title: string, urlname: string, Catalogtop?: Types.Maybe<{ __typename?: 'Catalogtop', id: string, title: string, urlname: string }> };

export const CatalogdataFragmentDoc = gql`
    fragment Catalogdata on Catalog {
  id
  title
  urlname
  Catalogtop {
    id
    title
    urlname
  }
}
    `;