import PropTypes from 'prop-types';

import css from '../../styles.module.css';

export default function CastsPageItems({ name, image, character }) {
  return (
    <li className={css.ImageGalleryItem}>
      <img src={image} alt={name} className={css.ImageGalleryItem_image} />
      <p>{name}</p> <p>{character}</p>
    </li>
  );
}
CastsPageItems.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  character: PropTypes.string,
};
