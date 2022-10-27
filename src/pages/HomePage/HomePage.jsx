// import { StyledLink } from 'components/App';
// import axios from 'axios';
// import Button from 'components/Button/LoadMoreButton';
import { useEffect, useState } from 'react';
import { getTrending } from 'shared/api/Api';
import Loader from 'shared/Loader';
import HomePageLink from './HomePageLink';

export default function HomePage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [page, setPage] = useState(1);
  const isPosts = Boolean(items.length);

  useEffect(() => {
    setItems([]);
  }, []);

  useEffect(() => {
    const fetchTrending = async () => {
      setLoading(true);
      try {
        const data = await getTrending();

        setItems(prevItems => {
          return [...prevItems, ...data.results];
        });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrending();
  }, [page]);

  //   const loadMore = () => {
  //     setPage(prevPage => prevPage + 1);
  //   };
  //   console.log(items);
  const openMoviesDetails = modalContent => {};

  return (
    <div>
      {loading && <Loader />}
      {error && <p>Спробуйте пізніше.... </p>}
      {isPosts && <HomePageLink items={items} onClick={openMoviesDetails} />}
      {/* {isPosts && <Button onClick={loadMore} />} */}
    </div>
  );
}
