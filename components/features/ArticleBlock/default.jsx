import { useFusionContext } from 'fusion:context';
import './default.scss';

const ArticleBlock = () => {
  const { globalContent } = useFusionContext();

  const parseElement = (element) => {
    const { type, content } = element;

    switch (type) {
      case 'text': {
        return content ? <p>{content}</p> : null;
      }
      case 'header': {
        return content ? <h1>{content}</h1> : null;
      }
      case 'image': {
        return (
          <div className="image">
            <img src={element.url} alt={element.subtitle} />
          </div>
        );
      }

      default:
        return null;
    }
  };

  const renderArticle = () => {
    return globalContent.content_elements.map((element) =>
      parseElement(element)
    );
  };

  return (
    <div>
      <h1>{globalContent.headlines.basic}</h1>
      <p>{globalContent.subheadlines.basic}</p>
      {renderArticle()}
    </div>
  );
};

export default ArticleBlock;
