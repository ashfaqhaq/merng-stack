
const Post = require("../../models/Post");

module.exports ={
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