import React from 'react'
import { PostPageViewProps } from './interfaces'
import { PostPageViewStyled } from './styles'

export const PostPageView: React.FC<PostPageViewProps> = ({ post }) => {
  console.log('post', post)
  return (
    <PostPageViewStyled>
      <h1>{post.title}</h1>
    </PostPageViewStyled>
  )
}
