//import { prisma } from '.prisma/client'
import {
  objectType,
  extendType,
  //inputObjectType,
  //nonNull,
  //enumType,
} from 'nexus'

export const Catalogtop = objectType({
  name: 'Catalogtop',
  description: 'Верхний уровень каталога',
  sourceType: {
    module: '@prisma/client',
    export: 'Catalogtop',
  },
  definition(t) {
    t.nonNull.string('id')
    t.nonNull.string('title')
    t.nonNull.string('urlname')
    t.list.nonNull.field('catalogs', {
      type: 'Catalog',
      resolve(_root, _args, ctx) {
        return ctx.prisma.catalog.findMany({
          where: { CatalogtopId: _root.id },
        })
      },
    })
  },
})

export const CatalogtopExtendQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.catalogtops({
      description: 'Список разделов каталога',
      filtering: true,
      ordering: true,
    })

    t.crud.catalogtop({
      description: 'Раздел каталога',
    })
  },
})

export const Catalog = objectType({
  name: 'Catalog',
  description: 'Пункт каталога',
  sourceType: {
    module: '@prisma/client',
    export: 'Catalog',
  },
  definition(t) {
    t.nonNull.string('id')
    t.nonNull.string('title')
    t.nonNull.string('urlname')
    t.string('CatalogtopId')
    t.field('Catalogtop', {
      type: 'Catalogtop',
      resolve({ CatalogtopId }, _, ctx) {
        return CatalogtopId
          ? ctx.prisma.catalogtop.findUnique({
              where: { id: CatalogtopId },
            })
          : null
      },
    })
  },
})

export const CatalogExtendQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.catalogs({
      description: 'Подразделы каталога',
      filtering: true,
      ordering: true,
    })

    t.crud.catalog({
      description: 'Подраздел каталога',
    })
  },
})
