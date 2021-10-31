import  {ApolloServer , gql} from 'apollo-server-express'

export const typeDefs = gql`
    type Query {
        hello :String!
        getAllCat:[Cat!]!
    }

    type Cat {
        id:ID!
        name:String!
    }

    type Mutation {
        createCat(name:String!) : Cat!
    }

`;

