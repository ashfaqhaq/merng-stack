import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { Grid } from 'semantic-ui-react';

import PostForm from '../components/PostForm'
import PostCard from '../components/PostCard';

function Home() {
  // const {loading,data: { getPosts: posts } } = useQuery(FETCH_POSTS_QUERY);
  const { data, loading, error } = useQuery(FETCH_POSTS_QUERY);
  if(data) {
    console.log(data);
    var { getPosts: posts } = data;
  }
  if(error) {
    console.log(error);
    return "error"; // blocks rendering
  }
  return (
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>
      <Grid.Row>
      <PostForm/>
        {loading ? (
          <h1>Loading posts..</h1>
        ) : (
         
          posts &&
          posts.map((post) => (
            <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
              <PostCard post={post} />
            </Grid.Column>
          ))
        )}
      </Grid.Row>
    </Grid>
  );
}

const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
      
        body
      }
    }
  }
`;

export default Home;
