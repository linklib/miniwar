import { NextSeo } from 'next-seo'
import React from 'react'
import { useCatalogtopsQuery } from 'src/modules/gql/generated'
import { Page } from '../_App/interfaces'
import Link from 'next/link'

/*
const catalogsVariables: CatalogsQueryVariables = {
  where: {
    Catalogtop: {
      urlname: {
        equals: urlname,
      },
    },
  },
}
*/

export const CatalogsPage: Page = () => {
  const data = useCatalogtopsQuery()

  const catalogtops = data.data?.catalogtops || []

  return (
    <>
      <NextSeo title="Каталог" />
      <ul>
        {catalogtops.map((c) => {
          return (
            <li key={c.id}>
              <Link
                href={{
                  pathname: `/catalog/${c.urlname}`,
                  query: { title: c.title },
                }}
              >
                {c.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
