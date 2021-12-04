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

  const { title, description, image, catalogId, catalogNewId, content } =
    args.data
  const urlname = typeof args.data.urlname === 'string' ? args.data.urlname : ''

  const createData: Prisma.PostCreateInput = {
    title,
    description,
    content,
    image,
    urlname,
    CreatedBy: {
      connect: {
        id: currentUser.id,
      },
    },
    Catalog: {
      create: undefined,
      connectOrCreate: undefined,
      connect: undefined,
    },
    CatalogNew: {
      create: undefined,
      connectOrCreate: undefined,
      connect: undefined,
    },
  }

  if (catalogId) {
    createData.Catalog = {
      connect: {
        id: catalogId,
      },
    }
  }

  if (catalogNewId) {
    createData.CatalogNew = {
      connect: {
        id: catalogNewId,
      },
    }
  }

  const post = await ctx.prisma.post.create({
    data: createData,
  })

  return post
}
