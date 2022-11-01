import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import css from '../../styles.module.css';

export default function HomePageLinkItems({ id, name, image, character }) {
  return (
    <li className={css.ImageGalleryItem}>
      <Link to={`/movies/${id}`}>
        <img src={image} alt={name} className={css.ImageGalleryItem_image} />
        {name} {character}
      </Link>
    </li>
  );
}
HomePageLinkItems.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  character: PropTypes.string,
};
