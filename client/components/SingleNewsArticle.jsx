import React, { useGlobal } from 'reactn'

const SingleNewsArticle = (props) => {
  const [currentTitle, setCurrentTitle] = useGlobal('currentTitle')
  return (
    <div key={currentTitle}>
      {props.articles.map((article, idx) => {
        if (article.title === currentTitle) {
          return <div key={idx}>
            <h1 key={article.title}>{article.title}</h1>
            <br />
            <h3 key={article.author}>{article.author}</h3>
            <br />
            <h3 key={article.publishedAt}>{article.publishedAt}</h3>
            <br />
            {/* cors for images */}
            <img key={article.url} src={article.url}/>
            <br />
            <h2 key={article.content}>{article.content}</h2>
          </div>
        } else {
          return <div></div>
        }
      })}
    </div>
  )
}

export default SingleNewsArticle
