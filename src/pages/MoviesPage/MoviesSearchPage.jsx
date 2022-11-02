import React from 'react';
import PropTypes from 'prop-types';
import css from '../../styles.module.css';
import MoviesPageLinkItems from './MoviesPageLinlItems';

export const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';

export default function MoviesSearchPage({ items, onClick }) {
  return (
    <ul className={css.ImageGallery}>
      {items.map(item => (
        <MoviesPageLinkItems
          id={item.id}
          key={item.id}
          onClick={onClick}
          name={item.title ? item.title : item.name}
          image={
            item.poster_path
              ? `${BASE_URL_IMG}${item.poster_path}`
              : 'https://www.freeiconspng.com/uploads/no-image-icon-4.png'
          }
        />
      ))}
    </ul>
  );
}
MoviesSearchPage.propTypes = {
  items: PropTypes.array,
  onclick: PropTypes.func,
};
