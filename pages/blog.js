import React, { useState, useEffect} from 'react'
import Navbar from 'components/Navbar';
import { Segment, Image, Container, Header } from 'semantic-ui-react';
// import db from 'utils/db'

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([])

  // useEffect(() => {
  //   const getBlogPosts = async () => {
  //     setBlogPosts(await db.container('blog').orderBy('created', 'desc').limit(5))
  //   }
  //   getBlogPosts();
  // }, [])

  return (
  <div>
    <Navbar />
    <Segment tertiary attached style={{ minHeight: 'calc(100vh - 415.86px)' }}>
      <Container textAlign="center" text>
        <Header as="h1">This page is still under construction!</Header>
      </Container>
      {/* {blogPosts.map(post => (
      <Container textAlign="center" text>
        test
      </Container>
      ))} */}
    </Segment>
  </div>
)};

export default Blog;
