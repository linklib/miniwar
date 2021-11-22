import { objectType, extendType } from 'nexus'

export const PostImage = objectType({
  name: 'PostImage',
  description: 'Картинка',
  sourceType: {
    module: '@prisma/client',
    export: 'PostImage',
  },
  definition(t) {
    t.nonNull.string('id')
    t.nonNull.id('postId')
    t.nonNull.id('fileId')
  },
})

export const PostImageExtendQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.postImages({
      description: 'Список картинок',
      filtering: true,
      ordering: true,
    })

    t.crud.postImage({
      description: 'Картинка поста',
    })
  },
})
