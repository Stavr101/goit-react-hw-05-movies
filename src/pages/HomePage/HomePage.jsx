import { useEffect, useState } from 'react';
import { getTrending } from 'shared/api/Api';
import Loader from 'shared/Loader';
import HomePageLink from './HomePageLink';

export default function HomePage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // eslint-disable-next-line no-unused-vars
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

  return (
    <div>
      {loading && <Loader />}
      {error && <p>Спробуйте пізніше.... </p>}
      {isPosts && <HomePageLink items={items} />}
    </div>
  );
}
