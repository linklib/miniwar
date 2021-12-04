import React from 'react'
import Link from 'next/link'
import { PostsPageViewProps } from './interfaces'
import { PostsPageViewStyled } from './styles'

export const PostsPageView: React.FC<PostsPageViewProps> = ({
  posts,
  catalogid,
  catalogTitle,
}) => {
  return (
    <PostsPageViewStyled>
      <Link
        href={`/post/create?catalogNewId=${catalogid}&catalog=${catalogTitle}`}
      >
        Добавить пост в категорию
      </Link>
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>text</th>
            <th>author</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => {
            return (
              <tr key={post.id}>
                <td>
                  <Link href={`/post/${post.urlname}`}>{post.title}</Link>
                </td>
                <td>{post.title}</td>
                <td>
                  {post.CreatedBy ? (
                    <Link href={`/users/${post.CreatedBy.id}`}>
                      {post.CreatedBy.username}
                    </Link>
                  ) : null}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </PostsPageViewStyled>
  )
}
