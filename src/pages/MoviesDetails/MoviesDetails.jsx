import { useEffect, useState } from 'react';
import { StyledLink } from 'components/App.styled';
import { Outlet, useLocation, useParams, useNavigate } from 'react-router-dom';
import css from '../../styles.module.css';
import Loader from 'shared/Loader.jsx';
import { getMovieId } from '../../shared/api/Api.jsx';

export default function MoviesDetails() {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  console.log('moviesDetails', location);

  useEffect(() => {
    const fetchSearchById = async id => {
      try {
        setLoading(true);
        setError(null);
        const data = await getMovieId(id);

        setState(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSearchById(id);
  }, [id]);
  if (!state) {
    return null;
  }

  const isCast = location.pathname.includes('cast');
  const castLink = isCast ? `/movies/${id}` : `/movies/${id}/cast`;
  const isReviews = location.pathname.includes('reviews');

  const reviewsLink = isReviews ? `/movies/${id}` : `/movies/${id}/reviews`;
  const imagePath = state.poster_path
    ? `https://image.tmdb.org/t/p/w500${state.poster_path}`
    : 'https://w7.pngwing.com/pngs/772/172/png-transparent-film-cinema-television-android.png';
  const releaseDate = state.release_date
    ? state.release_date?.split('-')[0]
    : 'No data';

  const from = location.state?.from || '/movies';
  const goBack = () => navigate(from);

  return (
    <div>
      <button onClick={goBack} type="button">
        Go back
      </button>

      {loading && <Loader />}
      {error && (
        <div>
          <h4>The resource you requested could not be found.</h4>
          <img
            src={
              'https://w7.pngwing.com/pngs/772/172/png-transparent-film-cinema-television-android.png'
            }
            alt=""
          />
        </div>
      )}
      {/* {state && MoviesDetailsCard(state)} */}
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
              <StyledLink to={castLink} state={{ from }}>
                Cast
              </StyledLink>
            </li>
            <li>
              <StyledLink to={reviewsLink} state={{ from }}>
                Reviews
              </StyledLink>
            </li>
          </ul>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
