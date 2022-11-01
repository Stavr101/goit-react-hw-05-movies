import HomePage from 'pages/HomePage/HomePage';
import MoviesDetails from 'pages/MoviesDetails/MoviesDetails';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
import { Container } from './App.styled';
import CastPage from './Cast/CastPage';
import Reviews from './Reviews/Reviews';
import { SharedLayout } from './SharedLoyout/SharedLayout';

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="homePage" element={<HomePage />} end />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:id" element={<MoviesDetails />}>
            <Route path="cast" element={<CastPage />} end />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Container>
  );
};
