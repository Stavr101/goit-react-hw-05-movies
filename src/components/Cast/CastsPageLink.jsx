import { BASE_URL_IMG } from 'pages/MoviesPage/MoviesSearchPage';
import css from '../../styles.module.css';
import CastsPageItems from './CastsPageItems';
import PropTypes from 'prop-types';

export default function CastsPageLink({ items }) {
  return (
    <div>
      <ul className={css.ImageGallery}>
        {items.map(item => (
          <CastsPageItems
            id={item.id}
            key={item.id}
            character={item.character}
            name={item.name}
            image={
              item.profile_path
                ? `${BASE_URL_IMG}${item.profile_path}`
                : 'https://www.freeiconspng.com/uploads/no-image-icon-4.png'
            }
          />
        ))}
      </ul>
    </div>
  );
}
CastsPageLink.propTypes = {
  items: PropTypes.string,
};
