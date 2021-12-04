import * as Typegen from 'nexus-plugin-prisma/typegen'
import * as Prisma from '@prisma/client';

// Pagination type
type Pagination = {
    take?: boolean
    skip?: boolean
    cursor?: boolean
}

// Prisma custom scalar names
type CustomScalars = 'DateTime'

// Prisma model type definitions
interface PrismaModels {
  User: Prisma.User
  Token: Prisma.Token
  File: Prisma.File
  Letter: Prisma.Letter
  Log: Prisma.Log
  ResetPassword: Prisma.ResetPassword
  Post: Prisma.Post
  PostImage: Prisma.PostImage
  Catalogtop: Prisma.Catalogtop
  Catalog: Prisma.Catalog
  CatalogNew: Prisma.CatalogNew
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'username' | 'email' | 'fullname' | 'password' | 'active' | 'role' | 'sudo' | 'createdAt' | 'updatedAt' | 'showEmail' | 'showFullname' | 'image' | 'Tokens' | 'Files' | 'Letters' | 'ResetPasswords' | 'Posts'
      ordering: 'id' | 'username' | 'email' | 'fullname' | 'password' | 'active' | 'role' | 'sudo' | 'createdAt' | 'updatedAt' | 'showEmail' | 'showFullname' | 'image'
    }
    tokens: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'expiredAt' | 'userId' | 'User'
      ordering: 'id' | 'createdAt' | 'expiredAt' | 'userId'
    }
    files: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'path' | 'filename' | 'name' | 'mimetype' | 'encoding' | 'size' | 'rank' | 'createdById' | 'CreatedBy' | 'PostImages'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'path' | 'filename' | 'name' | 'mimetype' | 'encoding' | 'size' | 'rank' | 'createdById'
    }
    letters: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'email' | 'subject' | 'message' | 'status' | 'errorMessage' | 'rank' | 'deleteOnSend' | 'replyTo' | 'returnTo' | 'createdById' | 'CreatedBy'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'email' | 'subject' | 'message' | 'status' | 'errorMessage' | 'rank' | 'deleteOnSend' | 'replyTo' | 'returnTo' | 'createdById'
    }
    logs: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'level' | 'objectType' | 'message' | 'stack'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'level' | 'objectType' | 'message' | 'stack'
    }
    resetPasswords: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'code' | 'password' | 'validTill' | 'User' | 'User_ResetPasswordToUser'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'code' | 'password' | 'validTill' | 'User'
    }
    posts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'title' | 'public' | 'urlname' | 'description' | 'image' | 'content' | 'createdById' | 'CreatedBy' | 'PostImages' | 'catalogId' | 'Catalog' | 'catalogNewId' | 'CatalogNew'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'title' | 'public' | 'urlname' | 'description' | 'image' | 'content' | 'createdById' | 'catalogId' | 'catalogNewId'
    }
    postImages: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'postId' | 'Post' | 'fileId' | 'File'
      ordering: 'id' | 'postId' | 'fileId'
    }
    catalogtops: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title' | 'urlname' | 'Catalogs'
      ordering: 'id' | 'title' | 'urlname'
    }
    catalogs: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title' | 'urlname' | 'CatalogtopId' | 'Catalogtop' | 'Posts'
      ordering: 'id' | 'title' | 'urlname' | 'CatalogtopId'
    }
    catalogNews: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title' | 'urlname' | 'parent' | 'Posts'
      ordering: 'id' | 'title' | 'urlname' | 'parent'
    }
  },
  User: {
    Tokens: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'expiredAt' | 'userId' | 'User'
      ordering: 'id' | 'createdAt' | 'expiredAt' | 'userId'
    }
    Files: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'path' | 'filename' | 'name' | 'mimetype' | 'encoding' | 'size' | 'rank' | 'createdById' | 'CreatedBy' | 'PostImages'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'path' | 'filename' | 'name' | 'mimetype' | 'encoding' | 'size' | 'rank' | 'createdById'
    }
    Letters: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'email' | 'subject' | 'message' | 'status' | 'errorMessage' | 'rank' | 'deleteOnSend' | 'replyTo' | 'returnTo' | 'createdById' | 'CreatedBy'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'email' | 'subject' | 'message' | 'status' | 'errorMessage' | 'rank' | 'deleteOnSend' | 'replyTo' | 'returnTo' | 'createdById'
    }
    ResetPasswords: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'code' | 'password' | 'validTill' | 'User' | 'User_ResetPasswordToUser'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'code' | 'password' | 'validTill' | 'User'
    }
    Posts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'title' | 'public' | 'urlname' | 'description' | 'image' | 'content' | 'createdById' | 'CreatedBy' | 'PostImages' | 'catalogId' | 'Catalog' | 'catalogNewId' | 'CatalogNew'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'title' | 'public' | 'urlname' | 'description' | 'image' | 'content' | 'createdById' | 'catalogId' | 'catalogNewId'
    }
  }
  Token: {

  }
  File: {
    PostImages: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'postId' | 'Post' | 'fileId' | 'File'
      ordering: 'id' | 'postId' | 'fileId'
    }
  }
  Letter: {

  }
  Log: {

  }
  ResetPassword: {

  }
  Post: {
    PostImages: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'postId' | 'Post' | 'fileId' | 'File'
      ordering: 'id' | 'postId' | 'fileId'
    }
  }
  PostImage: {

  }
  Catalogtop: {
    Catalogs: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title' | 'urlname' | 'CatalogtopId' | 'Catalogtop' | 'Posts'
      ordering: 'id' | 'title' | 'urlname' | 'CatalogtopId'
    }
  }
  Catalog: {
    Posts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'title' | 'public' | 'urlname' | 'description' | 'image' | 'content' | 'createdById' | 'CreatedBy' | 'PostImages' | 'catalogId' | 'Catalog' | 'catalogNewId' | 'CatalogNew'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'title' | 'public' | 'urlname' | 'description' | 'image' | 'content' | 'createdById' | 'catalogId' | 'catalogNewId'
    }
  }
  CatalogNew: {
    Posts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'title' | 'public' | 'urlname' | 'description' | 'image' | 'content' | 'createdById' | 'CreatedBy' | 'PostImages' | 'catalogId' | 'Catalog' | 'catalogNewId' | 'CatalogNew'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'title' | 'public' | 'urlname' | 'description' | 'image' | 'content' | 'createdById' | 'catalogId' | 'catalogNewId'
    }
  }
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    user: 'User'
    users: 'User'
    token: 'Token'
    tokens: 'Token'
    file: 'File'
    files: 'File'
    letter: 'Letter'
    letters: 'Letter'
    log: 'Log'
    logs: 'Log'
    resetPassword: 'ResetPassword'
    resetPasswords: 'ResetPassword'
    post: 'Post'
    posts: 'Post'
    postImage: 'PostImage'
    postImages: 'PostImage'
    catalogtop: 'Catalogtop'
    catalogtops: 'Catalogtop'
    catalog: 'Catalog'
    catalogs: 'Catalog'
    catalogNew: 'CatalogNew'
    catalogNews: 'CatalogNew'
  },
  Mutation: {
    createOneUser: 'User'
    updateOneUser: 'User'
    updateManyUser: 'AffectedRowsOutput'
    deleteOneUser: 'User'
    deleteManyUser: 'AffectedRowsOutput'
    upsertOneUser: 'User'
    createOneToken: 'Token'
    updateOneToken: 'Token'
    updateManyToken: 'AffectedRowsOutput'
    deleteOneToken: 'Token'
    deleteManyToken: 'AffectedRowsOutput'
    upsertOneToken: 'Token'
    createOneFile: 'File'
    updateOneFile: 'File'
    updateManyFile: 'AffectedRowsOutput'
    deleteOneFile: 'File'
    deleteManyFile: 'AffectedRowsOutput'
    upsertOneFile: 'File'
    createOneLetter: 'Letter'
    updateOneLetter: 'Letter'
    updateManyLetter: 'AffectedRowsOutput'
    deleteOneLetter: 'Letter'
    deleteManyLetter: 'AffectedRowsOutput'
    upsertOneLetter: 'Letter'
    createOneLog: 'Log'
    updateOneLog: 'Log'
    updateManyLog: 'AffectedRowsOutput'
    deleteOneLog: 'Log'
    deleteManyLog: 'AffectedRowsOutput'
    upsertOneLog: 'Log'
    createOneResetPassword: 'ResetPassword'
    updateOneResetPassword: 'ResetPassword'
    updateManyResetPassword: 'AffectedRowsOutput'
    deleteOneResetPassword: 'ResetPassword'
    deleteManyResetPassword: 'AffectedRowsOutput'
    upsertOneResetPassword: 'ResetPassword'
    createOnePost: 'Post'
    updateOnePost: 'Post'
    updateManyPost: 'AffectedRowsOutput'
    deleteOnePost: 'Post'
    deleteManyPost: 'AffectedRowsOutput'
    upsertOnePost: 'Post'
    createOnePostImage: 'PostImage'
    updateOnePostImage: 'PostImage'
    updateManyPostImage: 'AffectedRowsOutput'
    deleteOnePostImage: 'PostImage'
    deleteManyPostImage: 'AffectedRowsOutput'
    upsertOnePostImage: 'PostImage'
    createOneCatalogtop: 'Catalogtop'
    updateOneCatalogtop: 'Catalogtop'
    updateManyCatalogtop: 'AffectedRowsOutput'
    deleteOneCatalogtop: 'Catalogtop'
    deleteManyCatalogtop: 'AffectedRowsOutput'
    upsertOneCatalogtop: 'Catalogtop'
    createOneCatalog: 'Catalog'
    updateOneCatalog: 'Catalog'
    updateManyCatalog: 'AffectedRowsOutput'
    deleteOneCatalog: 'Catalog'
    deleteManyCatalog: 'AffectedRowsOutput'
    upsertOneCatalog: 'Catalog'
    createOneCatalogNew: 'CatalogNew'
    updateOneCatalogNew: 'CatalogNew'
    updateManyCatalogNew: 'AffectedRowsOutput'
    deleteOneCatalogNew: 'CatalogNew'
    deleteManyCatalogNew: 'AffectedRowsOutput'
    upsertOneCatalogNew: 'CatalogNew'
  },
  User: {
    id: 'String'
    username: 'String'
    email: 'String'
    fullname: 'String'
    password: 'String'
    active: 'Boolean'
    role: 'Role'
    sudo: 'Boolean'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    showEmail: 'Boolean'
    showFullname: 'Boolean'
    image: 'String'
    Tokens: 'Token'
    Files: 'File'
    Letters: 'Letter'
    ResetPasswords: 'ResetPassword'
    Posts: 'Post'
  }
  Token: {
    id: 'String'
    createdAt: 'DateTime'
    expiredAt: 'DateTime'
    userId: 'String'
    User: 'User'
  }
  File: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    path: 'String'
    filename: 'String'
    name: 'String'
    mimetype: 'String'
    encoding: 'String'
    size: 'Float'
    rank: 'Int'
    createdById: 'String'
    CreatedBy: 'User'
    PostImages: 'PostImage'
  }
  Letter: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    email: 'String'
    subject: 'String'
    message: 'String'
    status: 'LetterStatus'
    errorMessage: 'String'
    rank: 'Int'
    deleteOnSend: 'Boolean'
    replyTo: 'String'
    returnTo: 'String'
    createdById: 'String'
    CreatedBy: 'User'
  }
  Log: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    level: 'LogLevel'
    objectType: 'String'
    message: 'String'
    stack: 'String'
  }
  ResetPassword: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    code: 'String'
    password: 'String'
    validTill: 'DateTime'
    User: 'String'
    User_ResetPasswordToUser: 'User'
  }
  Post: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    title: 'String'
    public: 'Boolean'
    urlname: 'String'
    description: 'String'
    image: 'String'
    content: 'String'
    createdById: 'String'
    CreatedBy: 'User'
    PostImages: 'PostImage'
    catalogId: 'String'
    Catalog: 'Catalog'
    catalogNewId: 'String'
    CatalogNew: 'CatalogNew'
  }
  PostImage: {
    id: 'String'
    postId: 'String'
    Post: 'Post'
    fileId: 'String'
    File: 'File'
  }
  Catalogtop: {
    id: 'String'
    title: 'String'
    urlname: 'String'
    Catalogs: 'Catalog'
  }
  Catalog: {
    id: 'String'
    title: 'String'
    urlname: 'String'
    CatalogtopId: 'String'
    Catalogtop: 'Catalogtop'
    Posts: 'Post'
  }
  CatalogNew: {
    id: 'String'
    title: 'String'
    urlname: 'String'
    parent: 'String'
    Posts: 'Post'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  User: Typegen.NexusPrismaFields<'User'>
  Token: Typegen.NexusPrismaFields<'Token'>
  File: Typegen.NexusPrismaFields<'File'>
  Letter: Typegen.NexusPrismaFields<'Letter'>
  Log: Typegen.NexusPrismaFields<'Log'>
  ResetPassword: Typegen.NexusPrismaFields<'ResetPassword'>
  Post: Typegen.NexusPrismaFields<'Post'>
  PostImage: Typegen.NexusPrismaFields<'PostImage'>
  Catalogtop: Typegen.NexusPrismaFields<'Catalogtop'>
  Catalog: Typegen.NexusPrismaFields<'Catalog'>
  CatalogNew: Typegen.NexusPrismaFields<'CatalogNew'>
  Query: Typegen.NexusPrismaFields<'Query'>
  Mutation: Typegen.NexusPrismaFields<'Mutation'>
}

interface NexusPrismaGenTypes {
  inputs: NexusPrismaInputs
  outputs: NexusPrismaOutputs
  methods: NexusPrismaMethods
  models: PrismaModels
  pagination: Pagination
  scalars: CustomScalars
}

declare global {
  interface NexusPrismaGen extends NexusPrismaGenTypes {}

  type NexusPrisma<
    TypeName extends string,
    ModelOrCrud extends 'model' | 'crud'
  > = Typegen.GetNexusPrisma<TypeName, ModelOrCrud>;
}
  