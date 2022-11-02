import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import css from '../../styles.module.css';

export default function MoviesPageLinkItems({ id, name, image, character }) {
  const location = useLocation();
  // const from = location.state?.from || '/homePage';
  console.log('homePage', location);
  return (
    <li className={css.ImageGalleryItem}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <img src={image} alt={name} className={css.ImageGalleryItem_image} />
        {name} {character}
      </Link>
    </li>
  );
}
MoviesPageLinkItems.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  character: PropTypes.string,
};
