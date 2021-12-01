import { NextSeo } from 'next-seo'
import React from 'react'
import {
  useCatalogNewsQuery,
  CatalogNewsDocument,
} from 'src/modules/gql/generated'
import { Page } from '../_App/interfaces'
import { useRouter } from 'next/router'
import { CatalogsPageView } from './View'

export const CatalogsPage: Page = () => {
  const router = useRouter()
  //const { urlname } = router.query

  const urlname =
    typeof router.query.urlname === 'string' ? router.query.urlname : undefined

  const parent = useCatalogNewsQuery({
    query: CatalogNewsDocument,
    variables: {
      where: {
        urlname: {
          equals: urlname,
        },
      },
    },
  })

  const parentid = parent?.data?.catalogNews[0].id

  //console.log('parent', parent?.data?.catalogNews[0].id)

  const data = useCatalogNewsQuery({
    query: CatalogNewsDocument,
    variables: {
      where: {
        parent: {
          equals: parentid,
        },
      },
    },
  })

  //console.log('data', data)

  return (
    <>
      <NextSeo title="Каталог" />

      <h1>{urlname}</h1>

      <CatalogsPageView catalogs={data.data?.catalogNews || []} />
    </>
  )
}
