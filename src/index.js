import  {ApolloServer , gql} from 'apollo-server-express'
import express  from 'express'
import {resolvers} from './resolvers'
import {typeDefs} from './typeDefs'
const mongoose = require('mongoose');

const startServer = async ()=> {
    const app  =express();
 

const server = new ApolloServer({ typeDefs, resolvers });
server.start().then(()=>{
    server.applyMiddleware({app})
})
await mongoose.connect('mongodb://localhost:27017/test3',{useNewUrlParser:true});

app.listen({port:3000},()=>{
    console.log(`server is running at http://localhost:4000${server.graphqlPath}`)
})

}

startServer()