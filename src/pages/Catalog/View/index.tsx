import React from 'react'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { CatalogsPageViewProps } from './interfaces'
import { useRouter } from 'next/router'

export const CatalogsPageView: React.FC<CatalogsPageViewProps> = ({
  catalogs,
}) => {
  const router = useRouter()
  //const { title } = router.query

  const title =
    typeof router.query.title === 'string' ? router.query.title : undefined

  //console.log('title', router.title)

  return (
    <>
      <NextSeo title={title} />
      <ul>
        {catalogs.map((c) => {
          return (
            <li key={c.id}>
              <Link href={`/posts/${c.urlname}`}>{c.title}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
