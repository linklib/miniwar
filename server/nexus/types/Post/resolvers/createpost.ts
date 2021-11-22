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

  const { title, description, image } = args.data
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

  /*
  if (mashroomId) {
    createData.Mashroom = {
      connect: {
        id: mashroomId,
      },
    }
  }
*/
  const post = await ctx.prisma.post.create({
    data: createData,
  })

  return post
}
