import { NextSeo } from 'next-seo'
import React from 'react'
import { useCatalogsQuery, CatalogsDocument } from 'src/modules/gql/generated'
import { Page } from '../_App/interfaces'
import { useRouter } from 'next/router'
import { CatalogsPageView } from './View'

export const CatalogsPage: Page = () => {
  const router = useRouter()
  //const { urlname } = router.query

  const urlname =
    typeof router.query.urlname === 'string' ? router.query.urlname : undefined

  const data = useCatalogsQuery({
    query: CatalogsDocument,
    variables: {
      where: {
        Catalogtop: {
          urlname: {
            equals: urlname,
          },
        },
      },
    },
  })

  //console.log('data', data)

  return (
    <>
      <NextSeo title="Каталог" />

      <h1>{urlname}</h1>

      <CatalogsPageView catalogs={data.data?.catalogs || []} />
    </>
  )
}
