import { StyledLink } from 'components/App.styled';
import { Outlet } from 'react-router-dom';
import { Header } from './AppBar.stuled';

export default function AppBar() {
  return (
    <div>
      <Header>
        <nav>
          <StyledLink to="homePage" end>
            Home
          </StyledLink>
          <StyledLink to="movies">Movies</StyledLink>
          {/* <StyledLink to="movies/:id">MoviesDetails</StyledLink> */}
        </nav>
      </Header>
      <Outlet />
    </div>
  );
}
