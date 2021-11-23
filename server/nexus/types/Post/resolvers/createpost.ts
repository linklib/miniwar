import { Prisma } from '.prisma/client'
import { FieldResolver } from 'nexus'

export const createpost: FieldResolver<'Mutation', 'createPost'> = async (
  _,
  args,
  ctx
) => {
  const { currentUser } = ctx

  if (!currentUser) {
    throw new Error('Не был получен пользователь')
  }

  const { title, description, image, catalogId } = args.data
  const urlname = typeof args.data.urlname === 'string' ? args.data.urlname : ''

  const createData: Prisma.PostCreateInput = {
    title,
    description,
    image,
    urlname,
    CreatedBy: {
      connect: {
        id: currentUser.id,
      },
    },
  }

  if (catalogId) {
    createData.Catalog = {
      connect: {
        id: catalogId,
      },
    }
  }

  const post = await ctx.prisma.post.create({
    data: createData,
  })

  return post
}
