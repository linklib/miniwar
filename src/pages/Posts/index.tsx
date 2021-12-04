import { NextSeo } from 'next-seo'
import React from 'react'
import { usePostsQuery, PostsDocument } from 'src/modules/gql/generated'
import {
  useCatalogNewsQuery,
  CatalogNewsDocument,
} from 'src/modules/gql/generated'
import { Page } from '../_App/interfaces'
import { PostsPageView } from './View'
import { useRouter } from 'next/router'

export const PostsPage: Page = () => {
  const router = useRouter()
  const urlname =
    typeof router.query.urlname === 'string' ? router.query.urlname : undefined

  const catalog = useCatalogNewsQuery({
    query: CatalogNewsDocument,
    variables: {
      where: {
        urlname: {
          equals: urlname,
        },
      },
    },
  })

  const catalogid = catalog?.data?.catalogNews[0].id
  const catalogTitle = catalog?.data?.catalogNews[0].title

  const data = usePostsQuery({
    query: PostsDocument,
    variables: {
      where: {
        catalogNewId: {
          equals: catalogid,
        },
      },
    },
  })

  //console.log('router', router.query)

  return (
    <>
      <NextSeo title="Posts" />

      <PostsPageView
        posts={data.data?.posts || []}
        catalogid={catalogid}
        catalogTitle={catalogTitle}
      />
    </>
  )
}
