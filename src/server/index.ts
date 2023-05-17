import 'reflect-metadata'
import '../../typedi.config'
import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server'
import { join } from 'path'
import Container from 'typedi'

import { prismaClient } from '../db/prisma'

const bootstrap = async (): Promise<void> => {
  Container.set('container', Container)

  const schema = await buildSchema({
    resolvers: [join(__dirname, '/../resolvers/*Resolver.{ts,js}')],
    container: Container
  })

  const context = {
    prisma: prismaClient
  }

  const port = process.env.PORT ?? 4000

  void new ApolloServer(
    { schema, context }).listen({ port },
    () => { console.log(`🚀 Server ready at: <http://localhost:${port}>`) }
  )
}

void bootstrap()
