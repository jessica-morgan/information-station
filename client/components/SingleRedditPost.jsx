import React, { useGlobal } from 'reactn'
import { Link } from 'react-router-dom'
import { SingleContainer } from '../styles'
import { fromUnixTime, format } from 'date-fns'

const SingleRedditPost = (props) => {
  const [currentTitle, setCurrentTitle] = useGlobal('currentTitle')
  return (
    <div key={currentTitle}>
      {props.posts.map((post, idx) => {
        const checkImageType = post.url.length ? post.url.substr(post.url.length - 4) : <div></div>
        const date = fromUnixTime(post.dateCreated)
        const formattedDate = format(date, 'dd-MM-yy')
        if (post.title === currentTitle) {
          return <SingleContainer key={idx}>
            <SingleContainer title='true' key={post.title}>{post.title}</SingleContainer>
            <SingleContainer authorDateUpvotes='true' key={post.postAuthor}>
              {/* if the date is today have it say 'today' if date is yesterday have it say 'yesterday' else show date */}
              {formattedDate} | Author: {post.postAuthor} | Upvotes: {post.upVotes}
            </SingleContainer>
            {post.media ? JSON.parse(post.media.oembed.html) : <div></div>}
            <SingleContainer image='true' key={post.url}>
              {/* show image smaller and make clickable to open modal to show actual image size, if theres body text show underneath the image */}
              {/* need to center the image and the link */}
              {checkImageType.includes('png') || checkImageType.includes('jpg') || checkImageType.includes('jpeg') || checkImageType.includes('gif') || checkImageType.includes('bpm') || checkImageType.includes('tiff') || checkImageType.includes('svg')
                ? <> <img src={post.url}/> </> : <> <Link to={post.url} >{post.url}</Link> </>}
            </SingleContainer>
            {post.body.length ? <SingleContainer body='true' > {post.body} </SingleContainer> : <div></div>}
            <br/>
          </SingleContainer>
        } else {
          return <div></div>
        }
      })}
    </div>
  )
}

export default SingleRedditPost
