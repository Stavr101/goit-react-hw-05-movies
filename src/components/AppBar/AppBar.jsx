import { StyledLink } from 'components/App.styled';
import { Header } from './AppBar.stuled';

export default function AppBar() {
  return (
    <Header>
      <nav>
        <StyledLink to="homePage" end>
          Home
        </StyledLink>
        <StyledLink to="movies">Movies</StyledLink>
      </nav>{' '}
    </Header>
  );
}
