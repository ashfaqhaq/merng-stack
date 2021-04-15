const {ApolloServer, gql} = require('apollo-server');


//  similar to defining types in TS
//  ! stands for Required
//  Query contains what they return
const typeDefs = gql`
  type Query{
      sayHi : String!
  }
`

// resolvers contain Queries, Mutations and Subscription 
const resolvers ={
  Query:{
    sayHi: ()=>"Hello world"
  }
}

const server = new ApolloServer({
   
    typeDefs,  // can be written as typeDefs:typeDefs but ES6 infers on it
    resolvers  // Same as above ^
})

server.listen({port : 5000})
  .then(res=>{
    console.log(`Server is running at ${res.url}`)
  });

// Go and refer the node modules, we can observe express is already working as backend for Apollo.
// run script using node index 
