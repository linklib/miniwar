//import { prisma } from '.prisma/client'
import {
  objectType,
  extendType,
  //inputObjectType,
  //nonNull,
  //enumType,
} from 'nexus'

export const CatalogNew = objectType({
  name: 'CatalogNew',
  description: 'Пункт каталога',
  sourceType: {
    module: '@prisma/client',
    export: 'CatalogNew',
  },
  definition(t) {
    t.nonNull.string('id')
    t.nonNull.string('title')
    t.nonNull.string('urlname')
    t.nonNull.string('parent')
  },
})

export const CatalogNewExtendQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.catalogNews({
      description: 'Подразделы каталога',
      filtering: true,
      ordering: true,
    })

    t.crud.catalogNew({
      description: 'Подраздел каталога',
    })
  },
})
