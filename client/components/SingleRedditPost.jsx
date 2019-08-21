import React, { useGlobal } from 'reactn'

const SingleRedditPost = (props) => {
  const [currentTitle, setCurrentTitle] = useGlobal('currentTitle')
  return (
    <div>
      {props.posts.map((post, idx) => {
        if (post.title === currentTitle) {
          return <div key={idx}>
            <h1 key={post.title}>{post.title}</h1>
            <br />
            <h3 key={post.postAuthor}>{post.postAuthor}</h3>
            <br />
            <h3 key={post.dateCreated}>{post.dateCreated}</h3>
            <br />
            {/* cors for images */}
            <img key={post.image} src={post.image}/>
            <br />
            <h2 key={post.body}>{post.body}</h2>
            <br />
            <h3 key={post.upVotes}>{post.upVotes}</h3>
          </div>
        } else {
          return <div></div>
        }
      })}
    </div>
  )
}

export default SingleRedditPost
