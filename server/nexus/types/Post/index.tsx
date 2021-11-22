import { objectType, extendType, inputObjectType, nonNull } from 'nexus'
import { createpost } from './resolvers/createpost'
import { updatepost } from './resolvers/updatepost'

export const Post = objectType({
  name: 'Post',
  description: 'Пост',
  sourceType: {
    module: '@prisma/client',
    export: 'Post',
  },
  definition(t) {
    t.nonNull.string('id')
    t.nonNull.date('createdAt', {
      description: 'Когда создан',
    })
    t.nonNull.date('updatedAt', {
      description: 'Когда обновлен',
    })
    t.nonNull.string('title')
    t.string('description')
    t.string('urlname')
    t.string('image')

    t.field('content', {
      type: 'JSON',
    })

    t.nonNull.id('createdById')
    t.field('CreatedBy', {
      type: 'User',
      resolve({ createdById }, _, ctx) {
        return createdById
          ? ctx.prisma.user.findUnique({ where: { id: createdById } })
          : null
      },
    })
    /*
    t.list.nonNull.field('postimages', {
      type: 'PostImage',
      resolve(_root, _args, ctx) {
        return ctx.prisma.postImage.findMany()
      },
    })
*/
    t.list.nonNull.field('catalog', {
      type: 'Catalog',
      resolve(_root, _args, ctx) {
        return ctx.prisma.catalog.findMany()
      },
    })
  },
})

export const PostExtendQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.posts({
      description: 'Список постов',
      filtering: true,
      ordering: true,
    })

    t.crud.post({
      description: 'Пост',
    })
  },
})

export const PostCreateInput = inputObjectType({
  name: 'PostCreateInput',
  definition(t) {
    t.nonNull.string('title')
    t.string('description')
    t.string('urlname')
    t.field('content', { type: 'JSON' })
    t.string('image')
  },
})

export const PostUpdateInput = inputObjectType({
  name: 'PostUpdateInput',
  definition(t) {
    t.nonNull.string('title')
    t.string('description')
    t.string('urlname')
    t.field('content', { type: 'JSON' })
    t.string('image')
  },
})

export const PostExtendMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createPost', {
      type: 'Post',
      args: {
        data: nonNull('PostCreateInput'),
      },
      resolve: createpost,
    })
    t.nonNull.field('updatePost', {
      type: 'Post',
      args: {
        data: nonNull('PostUpdateInput'),
        where: nonNull('PostWhereUniqueInput'),
      },
      resolve: updatepost,
    })
  },
})
