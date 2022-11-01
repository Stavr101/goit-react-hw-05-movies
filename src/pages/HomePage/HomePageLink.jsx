import React from 'react';
import PropTypes from 'prop-types';
import HomePageLinkItems from './HomePageLinkItems';
import css from '../../styles.module.css';

export const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';

export default function HomePageLink({ items, onClick }) {

  return (
    <ul className={css.ImageGallery}>
      {items.map(item => (
        <HomePageLinkItems
          id={item.id}
          key={item.id}
          onClick={onClick}
          name={item.title ? item.title : item.name}
          image={`${BASE_URL_IMG}${item.poster_path}`}
        />
      ))}
    </ul>
  );
}
HomePageLink.propTypes = {
  items: PropTypes.array,
  onclick: PropTypes.func,
};
