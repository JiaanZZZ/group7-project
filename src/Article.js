import './app.scss'

const Article = ( articleData, index ) => {
  articleData= articleData.articleData;
    const title = articleData.title
    const author = articleData.author
    const source = articleData.source.title
    const content = articleData.content
    const link = articleData.url
    const imageLink = articleData.urlToImage

  return (
    <div
      id={`recipe${index}`}
      key={index}
      className="mdc-card mdc-card--outlined my-card-content">
        <div className="my-card__media mdc-card__media mdc-card__media--16-9">
        <div className="mdc-card__media-content">
          <img
            src={imageLink}
            alt={title}
            className="mdc-card--image"
          />
        </div>

          <h4 >{title}</h4>
          <p>{author} {source}</p>
          <p>{content}</p>
          <a href={link} target="_blank" rel="noreferrer">
            <button className='mdc-button mdc-card__action mdc-card__action--button'>
            <span className="mdc-button__label">Read more</span>
            </button>
          </a>
      </div>
    </div>
  );
};

export default Article;
