import { AppBar, Container, Toolbar, Typography, Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router';

export const App = () => {
  return (
    <>
      <AppBar color={'transparent'} position={'static'}>
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
      <Box sx={{ height: '20px' }}/>
      <Container >
        <Outlet />
      </Container>
    </>
  )
}
