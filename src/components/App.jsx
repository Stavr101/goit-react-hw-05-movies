import HomePage from 'pages/HomePage/HomePage';
import MoviesDetails from 'pages/MoviesDetails/MoviesDetails';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
// import styled from 'styled-components';
import { Container } from './App.styled';
import Cast from './Cast';
import Reviews from './Reviews';
import { SharedLayout } from './SharedLayout';

// export const StyledLink = styled(NavLink)`
//   color: black;

//   &.active {
//     color: blue;
//   }
// `;

export const App = () => {
  return (
    // <Box>
    <Container>
      {/* 
      <StyledLink to=":movieId">MovieDetails</StyledLink> 
      <StyledLink to=":movieId">MovieDetails</StyledLink> */}

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="homePage" element={<HomePage />} end />
          <Route path="movies" element={<MoviesPage />}>
            <Route path="movies/:id" element={<MoviesDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Container>
    // </Box>
  );
};
