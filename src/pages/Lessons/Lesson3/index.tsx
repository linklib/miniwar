import { NextSeo } from 'next-seo'
import { Page } from 'src/pages/_App/interfaces'

export const Lesson3Page: Page = () => {
  const title = 'Урок 2. Как создавать страницы.'

  return (
    <>
      <NextSeo title={title} />

      <h3>{title}</h3>
    </>
  )
}
