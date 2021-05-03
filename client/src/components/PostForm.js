import React from 'react';
import gql from 'graphql-tag';
import { Button, Form } from 'semantic-ui-react';
import {useMutation} from '@apollo/client';

import {useForm} from './../util/hooks';
import {FETCH_POSTS_QUERY} from './../util/graphql'

function PostForm() {

    const {onChange,values,onSubmit }= useForm(createPostCallback,{
        body:''
    });

    const [createPost,{error}] = useMutation(CREATE_POST,{
        variables:values,
        update(proxy,result){
            var data = proxy.readQuery({
                query: FETCH_POSTS_QUERY
              })

              console.log(proxy.readQuery({
                query: FETCH_POSTS_QUERY
              }))
              data.getPosts = [result.data.createPost, ...data.getPosts];
              proxy.writeQuery({ query: FETCH_POSTS_QUERY, data });
              values.body = '';
        }
       
    });

    function createPostCallback (){
        createPost();
    }

    return (
        <div>
       <Form onSubmit={onSubmit}>
      <h2>Create a post:</h2>
      <Form.Field>
        <Form.Input
          placeholder="Hi World!"
          name="body"
          onChange={onChange}
          value={values.body}
        />
        <Button type="submit" color="teal">
          Submit
        </Button>
      </Form.Field>
    </Form>
        </div>
    )
}


const CREATE_POST = gql`
mutation createPost($body:String!){
        createPost(body:$body){
            id
        body
        createdAt
        username
        likes {
                id
                username
                createdAt
            }
        likeCount
        comments {
                    id
                    body
                    username
                    createdAt
                 }
        commentCount
            }
    }
`;

export default PostForm
