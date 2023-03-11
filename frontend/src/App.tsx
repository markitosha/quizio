import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router';

import { Space } from './components/Space';

export const App = () => {
  return (
    <>
      <AppBar color="secondary" position={'static'}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            test
          </Typography>
        </Toolbar>
      </AppBar>
      <Space />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
