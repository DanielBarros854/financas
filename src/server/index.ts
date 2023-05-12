import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server'
import { prisma_client } from '../db/prisma'

const app = async () => {
  const schema = await buildSchema({
    resolvers: [`${__dirname}/../resolvers/*Resolver.{ts,js}`]
  })

  const context = {
    prisma: prisma_client,
  }

  new ApolloServer({ schema, context }).listen({ port: 4000 }, () =>
    console.log('🚀 Server ready at: <http://localhost:4000>')
  )
}

app()
