import React from 'react'
import { PostPageViewProps } from './interfaces'
import { PostPageViewStyled } from './styles'

export const PostPageView: React.FC<PostPageViewProps> = ({ post }) => {
  //console.log('post', post)
  const content = post ? JSON.parse(post.content) : ''
  //console.log('content', content)
  return (
    <PostPageViewStyled>
      <h1>{post?.title}</h1>
      {content.blocks.map((v: any, i: number) => {
        switch (v.type) {
          case 'h2':
            i++
            return <h2 key={i}>{v.data.text}</h2>
          case 'p':
            i++
            return <p key={i}>{v.data.text}</p>
        }
      })}
    </PostPageViewStyled>
  )
}
