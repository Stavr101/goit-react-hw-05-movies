import { StyledLink } from 'components/App.styled';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import css from '../../styles.module.css';

export default function HomePageLinkItems({ id, name, image, onClick }) {
  return (
    <li
      onClick={() => onClick(console.log(1))}
      className={css.ImageGalleryItem}
    >
      {/* <StyledLink> */}
      <Link to={`/movies/${id}`}>
        <img src={image} alt={name} className={css.ImageGalleryItem_image} />
        {name}
      </Link>
      {/* </StyledLink> */}
    </li>
  );
}
HomePageLinkItems.propTypes = {
  name: PropTypes.string,

  onClick: PropTypes.func,
};
