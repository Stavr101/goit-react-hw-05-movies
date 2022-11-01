import SearchBar from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { getSearch } from 'shared/api/Api';
import Loader from '../../shared/Loader.jsx';
import Button from '../../components/Button/LoadMoreButton';
import css from '../../styles.module.css';
import MoviesSearchPage from './MoviesSearchPage.jsx';
import { useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(true);
  const isPosts = Boolean(items.length);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  const onSearch = ({ name }) => {
    setSearchParams({ query: name });

    setItems([]);
  };

  useEffect(() => {
    setItems([]);
  }, [searchParams]);

  useEffect(() => {
    const fetchSearch = async () => {
      setLoading(true);
      try {
        const data = await getSearch(query, page);

        setItems(prevItems => {
          return [...prevItems, ...data.results];
        });
        setTotalResults(!data.total_results ? false : true);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (query) fetchSearch();
  }, [query, page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className={css.App}>
      <SearchBar onSubmit={onSearch} />

      {loading && <Loader />}

      {totalResults ? (
        <MoviesSearchPage items={items} />
      ) : (
        <p>Movies not found. Try again.</p>
      )}
      {error && <p>Movies not found.... </p>}
      {isPosts && <Button onClick={loadMore} />}
    </div>
  );
}
