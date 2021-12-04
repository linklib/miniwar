import { PostFragment } from 'src/modules/gql/generated'

export type PostsPageViewProps = {
  posts: PostFragment[]
  catalogid: string | undefined
  catalogTitle: string | undefined
}
