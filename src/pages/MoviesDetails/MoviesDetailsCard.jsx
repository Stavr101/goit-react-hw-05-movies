import PropTypes from 'prop-types';
import { NavLink, Outlet } from 'react-router-dom';
import css from '../../styles.module.css';

export default function MoviesDetailsCard(state) {
  const imagePath = state.poster_path
    ? `https://image.tmdb.org/t/p/w500${state.poster_path}`
    : 'https://w7.pngwing.com/pngs/772/172/png-transparent-film-cinema-television-android.png';
  const releaseDate = state.release_date
    ? state.release_date?.split('-')[0]
    : 'No data';

  return (
    <div>
      <div className={css.movieWrapper}>
        <div className={css.movieImgThumb}>
          <img
            className={css.movieImg}
            src={imagePath}
            alt={state.title || state.name}
          />
        </div>
        <div className={css.movieInfo}>
          <h2 className={css.movieTitle}>
            {state.title || state.name} ({releaseDate})
          </h2>
          <ul className={css.movieInfoList}>
            <li className={css.movieInfoItem}>
              User score:{' '}
              <span className={css.movieInfoDetail}>
                {Math.round(state.vote_average * 10)}%
              </span>
            </li>
            <li className={css.movieInfoItem}>
              Popularity:{' '}
              <span className={css.movieInfoDetail}>{state.popularity}</span>
            </li>
            <li className={css.movieInfoItem}>
              Duration:{' '}
              <span className={css.movieInfoDetail}>{state.runtime} min</span>
            </li>
          </ul>
          <div className={css.movieInfoWrapper}>
            <h4>About</h4>
            <p className={css.movieInfoAbout}>{state.overview}</p>
          </div>

          <div className={css.movieInfoWrapper}>
            <h4>Genres</h4>
            <p className={css.movieInfoAbout}>
              {state.genres.map(genre => (
                <span className={css.movieGenre} key={genre.id}>
                  {genre.name}
                </span>
              ))}
            </p>
          </div>
        </div>{' '}
      </div>
      <div className={css.movieAdditionalWrapper}>
        <h4>Additional information</h4>
        <ul className={css.movieAdditionalInfoList}>
          <li>
            <NavLink
              //   state={{ from }}
              to={'cast'}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              // state={{ from }}
              to={'reviews'}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
}
MoviesDetailsCard.propTypes = {
  state: PropTypes.array,
};
