/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { CatalogdataFragment } from './Catalogdata';
import { gql } from '@apollo/client';
import { CatalogdataFragmentDoc } from './Catalogdata';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CatalogsQueryVariables = Types.Exact<{
  where?: Types.Maybe<Types.CatalogWhereInput>;
}>;


export type CatalogsQuery = { __typename?: 'Query', catalogs: Array<(
    { __typename?: 'Catalog' }
    & CatalogdataFragment
  )> };


export const CatalogsDocument = gql`
    query catalogs($where: CatalogWhereInput) {
  catalogs(where: $where) {
    ...Catalogdata
  }
}
    ${CatalogdataFragmentDoc}`;

/**
 * __useCatalogsQuery__
 *
 * To run a query within a React component, call `useCatalogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCatalogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCatalogsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useCatalogsQuery(baseOptions?: Apollo.QueryHookOptions<CatalogsQuery, CatalogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CatalogsQuery, CatalogsQueryVariables>(CatalogsDocument, options);
      }
export function useCatalogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CatalogsQuery, CatalogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CatalogsQuery, CatalogsQueryVariables>(CatalogsDocument, options);
        }
export type CatalogsQueryHookResult = ReturnType<typeof useCatalogsQuery>;
export type CatalogsLazyQueryHookResult = ReturnType<typeof useCatalogsLazyQuery>;
export type CatalogsQueryResult = Apollo.QueryResult<CatalogsQuery, CatalogsQueryVariables>;