import { NextSeo } from 'next-seo'
import React from 'react'
import { usePostsQuery, PostsDocument } from 'src/modules/gql/generated'
import { Page } from '../../_App/interfaces'
import { PostPageView } from './View'
import { useRouter } from 'next/router'
//import { PostPageProps } from './interfaces'

/*
import dynamic from 'next/dynamic'

const CustomEditor = dynamic(() => import('src/components/EditorJS'), {
  ssr: false,
})
*/
export const PostPage: Page = () => {
  const router = useRouter()
  const urlname =
    typeof router.query.urlname === 'string' ? router.query.urlname : undefined
  const data = usePostsQuery({
    query: PostsDocument,
    variables: {
      where: {
        urlname: {
          equals: urlname,
        },
      },
    },
  })

  const post = data.data?.posts[0]
  //console.log('data', post)

  return (
    <>
      <NextSeo title="Posts" />

      {/*
      <CustomEditor />*/}

      <PostPageView post={post || []} />
    </>
  )
}
