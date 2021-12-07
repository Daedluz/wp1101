import React, { useState, useEffect } from 'react'
import instance from './instance'
import moment from 'moment'

import { Button } from '@material-ui/core'

function Board(props) {
  const [posts, setPosts] = useState([])
  
  // DONE TODO 2-(2): fetch all posts from database
  useEffect(() => {
    async function fetchPosts()
    {
      try {
        const res = await instance.get('/allPosts')
        console.log(res)
        setPosts( res.data.data )
      }
    catch (error) {
        console.log(error)
      }
    }

    fetchPosts();
    
  }, [])
  
  return (
    <>
      <div className="board-navbar">
        <div style={{ fontWeight: 'bold', fontSize: 28 }}>Post List</div>
        <Button className="board-launch-btn" variant="contained" color="primary" id="pid-post-btn" onClick={() => props.navigate('/new')}>New Post</Button>
      </div>
      
      <div className="board-discuss-container">
        {console.log("post length is ", posts.length)}
        {posts.length ?
          <div className="articles-container">
            {posts.map((post, i) => (
              <div className="article-post" key={i} id={`pid-${i}`}>
                <div className="article-prefix">
                  <span className="each-tag">【Hackathon 2】</span> &nbsp;
                  <span className="each-id" id={`pid-${i}-title`} onClick={() => props.navigate(`/post/${post.postId}`)}>{post.title}</span>
                </div>
                <div className="article-postfix">
                  <span className="each-time" id={`pid-${i}-time`}>{moment(post.timestamp).format('YYYY-MM-DD')}</span>
                </div>
              </div>
            ))}
          </div> : <div></div>
        }
      </div>
    </>
  )
}

export default Board
