import { useEffect, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import Loader from 'shared/Loader.jsx';
import { getMovieId } from '../../shared/api/Api.jsx';
import MoviesDetailsCard from './MoviesDetailsCard.jsx';

export default function MoviesDetails() {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

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

  const goBack = () => navigate(-1);

  return (
    <div>
      <button onClick={goBack}>Go back</button>
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
      {state && MoviesDetailsCard(state)}
    </div>
  );
}
