/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { CatalogNewDataFragment } from './CatalogNewData';
import { gql } from '@apollo/client';
import { CatalogNewDataFragmentDoc } from './CatalogNewData';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CatalogNewsQueryVariables = Types.Exact<{
  where?: Types.Maybe<Types.CatalogNewWhereInput>;
}>;


export type CatalogNewsQuery = { __typename?: 'Query', catalogNews: Array<(
    { __typename?: 'CatalogNew' }
    & CatalogNewDataFragment
  )> };


export const CatalogNewsDocument = gql`
    query catalogNews($where: CatalogNewWhereInput) {
  catalogNews(where: $where) {
    ...CatalogNewData
  }
}
    ${CatalogNewDataFragmentDoc}`;

/**
 * __useCatalogNewsQuery__
 *
 * To run a query within a React component, call `useCatalogNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCatalogNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCatalogNewsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useCatalogNewsQuery(baseOptions?: Apollo.QueryHookOptions<CatalogNewsQuery, CatalogNewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CatalogNewsQuery, CatalogNewsQueryVariables>(CatalogNewsDocument, options);
      }
export function useCatalogNewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CatalogNewsQuery, CatalogNewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CatalogNewsQuery, CatalogNewsQueryVariables>(CatalogNewsDocument, options);
        }
export type CatalogNewsQueryHookResult = ReturnType<typeof useCatalogNewsQuery>;
export type CatalogNewsLazyQueryHookResult = ReturnType<typeof useCatalogNewsLazyQuery>;
export type CatalogNewsQueryResult = Apollo.QueryResult<CatalogNewsQuery, CatalogNewsQueryVariables>;