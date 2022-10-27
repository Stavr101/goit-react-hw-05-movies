import React from 'react';
import PropTypes from 'prop-types';
import css from '../../styles.module.css';
import HomePageLinkItems from 'pages/HomePage/HomePageLinkItems';

export const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';

export default function MoviesSearchPage({ items, onClick }) {
  return (
    <ul className={css.ImageGallery}>
      {items.map(item => (
        <HomePageLinkItems
          key={item.id}
          onClick={onClick}
          name={item.title ? item.title : item.name}
          image={`${BASE_URL_IMG}${item.poster_path}`}
        />
      ))}
    </ul>
  );
}
MoviesSearchPage.propTypes = {
  items: PropTypes.array,
  onclick: PropTypes.func,
};
