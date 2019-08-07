import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Your Forms</Title>
      
      <div className={classes.seeMore}>
        <Link color="primary" href="#">
          See more forms
        </Link>
      </div>
    </React.Fragment>
  );
}
