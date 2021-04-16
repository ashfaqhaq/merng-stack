const {ApolloServer, gql} = require('apollo-server');
const mongoose = require("mongoose")

const Post = require('./models/Post');
const {MONGODB} = require("./config.js") 

//  similar to defining types in TS
//  ! stands for Required

const typeDefs = gql`
type Post{
  id:ID!,
  body:String!,
  createdAt : String!,
  username:String
}
//  Query contains what they return and their data type
  type Query{
     getPosts : [Post]
  }
`

// resolvers contain Queries, Mutations and Subscription 
const resolvers ={
  Query:{
    async getPosts(){
      // try and catch help your survive in handling else your app might stop
      try{
        const posts = await Post.find();
        return posts;
      }
      catch(error){
        throw new Error(error)
      }
    }
  }
}

const server = new ApolloServer({
    typeDefs,  // can be written as typeDefs:typeDefs but ES6 infers on it
    resolvers  // Same as above ^
})

mongoose.connect(MONGODB,{useNewUrlParser:true,useUnifiedTopology: true,useCreateIndex: true})
  .then(()=>{
    console.log("mongodb connected")
    return server.listen({port:5000});
  })
 .then(res=>{
    console.log(`Server is running at ${res.url}`)
  });

// Go and refer the node modules, we can observe express is already working as backend for Apollo.
// run script using node index 
