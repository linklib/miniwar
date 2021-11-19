import React from 'react'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { CatalogsPageViewProps } from './interfaces'

export const CatalogsPageView: React.FC<CatalogsPageViewProps> = ({
  catalogs,
}) => {
  //console.log('catalogs', catalogs)

  return (
    <>
      <NextSeo title="Каталог" />
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
