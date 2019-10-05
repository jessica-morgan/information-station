import React, { useGlobal } from 'reactn'

const SingleNewsArticle = (props) => {
  const [currentTitle, setCurrentTitle] = useGlobal('currentTitle')
  return (
    <div key={currentTitle}>
      {props.articles.map((article, idx) => {
        const formattedDate = article.publishedAt.substring(0, 10)
        if (article.title === currentTitle) {
          return <div key={idx}>
            <h1 key={article.title}>{article.title}</h1>
            <br />
            <h3 key={article.author}>{article.author}</h3>
            <br />
            <h3 key={formattedDate}>{formattedDate}</h3>
            <br />
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
