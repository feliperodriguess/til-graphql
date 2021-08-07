import { ApolloServer } from 'apollo-server'
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} from 'apollo-server-core'
import mongoose from 'mongoose'

export const startServer = ({ typeDefs, resolvers }) => {
  mongoose.connect('mongodb://localhost:27017/graphql', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  // const pubsub = new PubSub()
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // context: { pubsub },
    plugins: [
      process.env.NODE_ENV === 'production'
        ? ApolloServerPluginLandingPageDisabled()
        : ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
  })
  server.listen().then(({ url }) => console.log(`🔥 Server started at ${url}`))
}
