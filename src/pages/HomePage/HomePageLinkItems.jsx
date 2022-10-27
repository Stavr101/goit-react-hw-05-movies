import { StyledLink } from 'components/App.styled';
import PropTypes from 'prop-types';

import css from '../../styles.module.css';

export default function HomePageLinkItems({ name, image, onClick }) {
  return (
    <li
      onClick={() => onClick(console.log(1))}
      className={css.ImageGalleryItem}
    >
      <StyledLink>
        <img src={image} alt={name} className={css.ImageGalleryItem_image} />
        {name}
      </StyledLink>
    </li>
  );
}
HomePageLinkItems.propTypes = {
  name: PropTypes.string,

  onClick: PropTypes.func,
};
