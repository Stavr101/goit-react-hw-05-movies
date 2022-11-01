import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'shared/api/Api';
import Loader from 'shared/Loader';
import CastsPageLink from './CastsPageLink';

export default function CastPage() {
  const [casts, setCasts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const isCasts = Boolean(casts.length);

  useEffect(() => {
    const fetchSearchCastById = async id => {
      try {
        setLoading(true);
        setError(null);
        const data = await getMovieCredits(id);
        setCasts(data.cast);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSearchCastById(id);
  }, [id]);

  return (
    <div>
      {loading && <Loader />}
      {error && <p>Спробуйте пізніше.... </p>}
      {isCasts && <CastsPageLink items={casts} />}
    </div>
  );
}
