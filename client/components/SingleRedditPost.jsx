import React, { useGlobal } from 'reactn'
import { Link } from 'react-router-dom'
import { SingleContainer } from '../styles'
import { fromUnixTime, format } from 'date-fns'

const SingleRedditPost = (props) => {
  const [currentTitle, setCurrentTitle] = useGlobal('currentTitle')
  return (
    <div>
      {props.posts.map((post, idx) => {
        const checkImageType = post.url.length ? post.url.substr(post.url.length - 4) : <div></div>
        const date = fromUnixTime(post.dateCreated)
        const formattedDate = format(date, 'dd-MM-yy')
        if (post.title === currentTitle) {
          return <SingleContainer key={idx}>
            <SingleContainer title key={post.title}>{post.title}</SingleContainer>
            <SingleContainer authorDateUpvotes key={post.postAuthor}>
              {formattedDate} | Author: {post.postAuthor} | Upvotes: {post.upVotes}
            </SingleContainer>
            {post.media ? JSON.parse(post.media.oembed.html) : <div></div>}
            <SingleContainer imageAndBody>
              {/* if theres body text show next to image else show centered image */}
              {checkImageType.includes('png') || checkImageType.includes('jpg') || checkImageType.includes('jpeg') || checkImageType.includes('gif') || checkImageType.includes('bpm') || checkImageType.includes('tiff') || checkImageType.includes('svg')
                ? <> <img key={post.url} src={post.url}/> { ' ' } {post.body} </> : <> <Link key={post.url}>{post.url}</Link> {' '} {post.body} </>}
            </SingleContainer>
            {/* <h2 key={post.body}>{post.body}</h2> */}
          </SingleContainer>
        } else {
          return <div></div>
        }
      })}
    </div>
  )
}

export default SingleRedditPost
