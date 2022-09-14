import { useContent } from 'fusion:content';
import PropTypes from 'prop-types';
import movieFilter from '../../../content/filters/movieFilter';

const MovieBlock = (props) => {
  const { config } = props.customFields;
  let movieData = {};

  movieData = useContent({
    source: config.contentService,
    query: config.contentConfigValues,
    filter: movieFilter,
  });

  console.log(movieData);
  return !movieData ? (
    ''
  ) : (
    <div>
      <h1>Title: {movieData.Title}</h1>
      <p>Year: {movieData.Year}</p>
      <p>Rated: {movieData.Rated}</p>
      <p>Released: {movieData.Released}</p>
      <p>Runtime: {movieData.Runtime}</p>
      <img src={movieData.Poster} />
    </div>
  );
};

MovieBlock.propTypes = {
  customFields: PropTypes.shape({
    config: PropTypes.contentConfig(),
  }),
};
export default MovieBlock;
