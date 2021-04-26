const {gql} = require('apollo-server');

module.exports = gql`
type Post{
  id:ID!,
  body:String!,
  createdAt : String!,
  username:String!
  comments: [Comment]!
    likes: [Like]!
    likeCount: Int!
    commentCount: Int!
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
  type Comment{
    id:ID!
    username:String!
    body:String!
  }
  type Like{
    id:ID!
    username:String!
    createdAt: String!
  }

type Mutation{
  register(registerInput: RegisterInput): User!
  login(username: String!, password:String!): User!
  createPost(body: String!): Post!
  deletePost(postId: ID!): String!
  createComment(postId:ID!,body:String!): Comment!
  deleteComment(postId:ID!,commentId:ID!): Post!
  likePost(postId:ID!):Post!
}
type Subscription {
    newPost: Post!
  }
`;