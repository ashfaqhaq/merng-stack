# MERN-G Application

### Index.js
1. define typeDefs 
   - declare type of Queries
     - declare the types returned  & if they are required
2. define resolvers
   1. Define what they resolve into
   
3. Start the server
   1. decalre an instance of Apolloserver with typeDefs and resolvers as objects
   2. start listening to the port of the instance created.
   
### Models in MongoDB

1. Create Models folder, write down the schema for Post and Users. Export them
2. Import the schema in our index file.
3. Declare the type of Posts in typeDef
4. Declare the method in typeDef > Query and it's return type
5. Write the endpoint in resolvers under Query.


> A declaration describes an object, whereas a definition requests the creation of an object