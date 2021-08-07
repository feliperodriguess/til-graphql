/*
import { ApolloServer, gql } from 'apollo-server'
import { ApolloServerPluginInlineTrace } from 'apollo-server-core'

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    active: Boolean!
  }

  type Post {
    _id: ID!
    title: String!
    content: String!
    author: User!
  }

  type Query {
    hello: String
    getUsers: [User!]!
    getUserByEmail(email: String!): User!
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
  }
`

const users = [
  { _id: String(Math.random()), name: 'Felipe 1', email: 'felipe1@gmail.com', active: true },
  { _id: String(Math.random()), name: 'Felipe 2', email: 'felipe2@gmail.com', active: false },
  { _id: String(Math.random()), name: 'Felipe 3', email: 'felipe3@gmail.com', active: true },
]

const resolvers = {
  Query: {
    hello: () => 'Hello World',
    getUsers: () => users,
    getUserByEmail: (_, { email }) => users.find((user) => user.email === email),
  },
  Mutation: {
    createUser: (_, { name, email }) => {
      const newUser = { _id: String(Math.random()), name, email, active: false }
      users.push(newUser)
      return newUser
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  plugins: [ApolloServerPluginInlineTrace()],
})
server.listen().then(({ url }) => console.log(`🔥 Server is running at ${url}`))


  Concepts:
  - Every single request on GraphQL is a POST one
  - All request hit the same endpoint (/graphql)
  - Query -> Get data (Similar to /GET from REST)
  - Mutation -> Handle data (Similar to /POST;PUT;PATCH;DELETE from REST)
  - Scalar types (Primitive) -> String, Int, Boolean, Float and ID
*/
