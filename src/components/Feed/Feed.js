/** @format */

import React, { useState } from 'react';
import Post from '../Post/Post';
import './Feed.css';

export default function Feed(){
  const [posts] = useState([
    {
      id: 1,
      userName: 'john_doe',
      caption: 'A beautiful day!',
      postImageUrl: 'https://via.placeholder.com/400',
      postProfileUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      userName: 'jane_doe',
      caption: 'Having fun at the beach!',
      postImageUrl: 'https://via.placeholder.com/400',
      postProfileUrl: 'https://via.placeholder.com/150',
    },
  ]);

  return (
    <div className="feed">
      {posts.map((post) => (
        <Post
          key={post.id}
          userName={post.userName}
          caption={post.caption}
          postImageUrl={post.postImageUrl}
          postProfileUrl={post.postProfileUrl}
        />
      ))}
    </div>
  );
}
