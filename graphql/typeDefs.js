const {gql} = require('apollo-server');

module.exports = gql`
type Post{
  id:ID!,
  body:String!,
  createdAt : String!,
  username:String
}
  type Query{
     getPosts : [Post] 
     getPost(postId:ID!) : Post
    #  getPost(postId: ID!): Post 
  }
type User{
  id:ID!
  email:String!
  token:String!
  username:String!
  createdAt:String!
}
  input RegisterInput{
    email: String!
    username:String!
    password: String!
    confirmPassword: String!
  }
type Mutation{
  register(registerInput: RegisterInput): User!
  login(username: String!, password:String!): User!
  createPost(body: String!): Post!
  deletePost(postId: ID!): String!
}
`;