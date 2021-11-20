import React from 'react'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { CatalogsPageViewProps } from './interfaces'
import { useRouter } from 'next/router'

export const CatalogsPageView: React.FC<CatalogsPageViewProps> = ({
  catalogs,
}) => {
  const router = useRouter()
  const { title } = router.query

  //console.log('title', router.title)

  return (
    <>
      <NextSeo title={title as string} />
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
