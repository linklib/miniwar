/* eslint-disable no-console */
import React from 'react'
import { PostPageViewProps } from './interfaces'
import { PostPageViewStyled } from './styles'
import { Container, StepConnector } from '@mui/material'

interface ContentProps {
  data: any
  type: string
  text: string
  src: string
}

export const PostPageView: React.FC<PostPageViewProps> = ({ post }) => {
  try {
    console.log('post', post)

    const content = post ? post.content.blocks : ''

    return (
      <PostPageViewStyled>
        <Container>
          <h1>{post?.title}</h1>
          <StepConnector />
          {content.map((v: ContentProps, i: number) => {
            switch (v.type) {
              case 'h2':
                i++
                return <h2 key={i}>{v.data.text}</h2>
              case 'p':
                i++
                return <p key={i}>{v.data.text}</p>

              case 'img':
                i++
                return (
                  <>
                    <img
                      key={i}
                      src={v.data.src}
                      alt={v.data.text}
                      width="100%"
                    />
                    <i>{v.data.text}</i>
                  </>
                )

              default:
                return
            }
          })}
        </Container>
      </PostPageViewStyled>
    )
  } catch (e) {
    console.log('Error: ', e)
  }
  return <h2>Ошибка</h2>
  /*
  console.log('post', post)

  try {
    console.log('post', typeof post.content)
    const content = post ? JSON.parse(post.content) : []
    console.log('content', content)
    return <h2>1111</h2>
  } catch (e) {
    console.log('Error: ', e)
  }

  return <></>
  */
  /*
  return (
    <PostPageViewStyled>
      <Container>
        <h1>{post?.title}</h1>
        <StepConnector />
        {content.blocks?.map((v: ContentProps, i: number) => {
          switch (v.type) {
            case 'h2':
              i++
              return <h2 key={i}>{v.data.text}</h2>
            case 'p':
              i++
              return <p key={i}>{v.data.text}</p>

            case 'img':
              i++
              return <img key={i} src={v.data.src} alt={v.data.text} />

            default:
              return

          }
        })}
      </Container>
    </PostPageViewStyled>
  )*/
}
