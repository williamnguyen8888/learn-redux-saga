import * as React from 'react';
import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core';
import { useAppDispatch } from '../../../app/hooks';
import { authAction } from '../authSlice';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  box: {
    padding: theme.spacing(3),
  },
}));

export function LoginPage() {
  const classes = useStyle();
  const dispatch = useAppDispatch();

  const handleLoginClick = () => {
    // to do: ger username + pwd from login from
    dispatch(authAction.login({
      username: '',
      password: '',
    }));
  };
  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant='h5' component='h1'>Student Management</Typography>
        <Box mt={4}>
          <Button fullWidth variant='contained' color='primary' onClick={handleLoginClick}>
            Fake Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
