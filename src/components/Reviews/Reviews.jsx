import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'shared/api/Api';
import Loader from 'shared/Loader';
import ListOfReviews from './ListOfReviews';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const isReviews = Boolean(reviews.length);

  useEffect(() => {
    const fetchSearchReviewsById = async id => {
      try {
        setLoading(true);
        setError(null);
        const data = await getMovieReviews(id);
        setReviews(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSearchReviewsById(id);
  }, [id]);

  return (
    <>
      {isReviews && <ListOfReviews items={reviews} />}
      {loading && <Loader />}
      {error && <p>Something wrong</p>}
    </>
  );
}
