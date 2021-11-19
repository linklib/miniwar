/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CatalogtopsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CatalogtopsQuery = { __typename?: 'Query', catalogtops: Array<{ __typename?: 'Catalogtop', id: string, title: string, urlname: string }> };


export const CatalogtopsDocument = gql`
    query catalogtops {
  catalogtops {
    id
    title
    urlname
  }
}
    `;

/**
 * __useCatalogtopsQuery__
 *
 * To run a query within a React component, call `useCatalogtopsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCatalogtopsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCatalogtopsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCatalogtopsQuery(baseOptions?: Apollo.QueryHookOptions<CatalogtopsQuery, CatalogtopsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CatalogtopsQuery, CatalogtopsQueryVariables>(CatalogtopsDocument, options);
      }
export function useCatalogtopsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CatalogtopsQuery, CatalogtopsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CatalogtopsQuery, CatalogtopsQueryVariables>(CatalogtopsDocument, options);
        }
export type CatalogtopsQueryHookResult = ReturnType<typeof useCatalogtopsQuery>;
export type CatalogtopsLazyQueryHookResult = ReturnType<typeof useCatalogtopsLazyQuery>;
export type CatalogtopsQueryResult = Apollo.QueryResult<CatalogtopsQuery, CatalogtopsQueryVariables>;