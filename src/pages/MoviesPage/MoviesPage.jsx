// import { StyledLink } from 'components/App.styled';
import SearchBar from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { getSearch } from 'shared/api/Api';
import Loader from '../../shared/Loader.jsx';
import Button from '../../components/Button/LoadMoreButton';
import css from '../../styles.module.css';
import HomePageLink from 'pages/HomePage/HomePageLink';
import MoviesSearchPage from './MoviesSearchPage.jsx';
import { Outlet, useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const isPosts = Boolean(movies.length);
  const [totalResults, setTotalResults] = useState(true);
  const [name, setName] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('');

  // const onSearch = search => {
  //   setSearchParams({ query: search });
  //   setMovies([]);
  // };

  useEffect(() => {
    setMovies([]);
  }, [name]);

  useEffect(() => {
    // if (!query) {
    //   return null;
    // }
    const fetchSearch = async () => {
      setLoading(true);
      try {
        const data = await getSearch(query, page);
        // console.log(name, page);
        setMovies(prevMovies => {
          return [...prevMovies, ...data.results];
        });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSearch();
  }, [query, page]);

  const onSearch = ({ name }) => {
    setName(name);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className={css.App}>
      <SearchBar onSubmit={onSearch} />

      {loading && <Loader />}
      {error && <p>Movies not found.... </p>}
      {isPosts && <MoviesSearchPage items={movies} />}

      {isPosts && <Button onClick={loadMore} />}
      <Outlet />
    </div>
  );
}
