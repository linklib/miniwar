import { NextSeo } from 'next-seo'
import React from 'react'
import { usePostsQuery, PostsDocument } from 'src/modules/gql/generated'
import { Page } from '../_App/interfaces'
import { PostsPageView } from './View'
import { useRouter } from 'next/router'

export const PostsPage: Page = () => {
  const router = useRouter()
  const urlname =
    typeof router.query.urlname === 'string' ? router.query.urlname : undefined
  const data = usePostsQuery({
    query: PostsDocument,
    variables: {
      where: {
        Catalog: {
          urlname: {
            equals: urlname,
          },
        },
      },
    },
  })

  //console.log('router', router.query)

  return (
    <>
      <NextSeo title="Posts" />

      <PostsPageView posts={data.data?.posts || []} />
    </>
  )
}
