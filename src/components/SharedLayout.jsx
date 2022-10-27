import { Outlet } from 'react-router-dom';
import AppBar from './AppBar/AppBar';

import { Box } from './Box';

export const SharedLayout = () => {
  return (
    <Box>
      <AppBar />
      <Outlet />
    </Box>
  );
};
