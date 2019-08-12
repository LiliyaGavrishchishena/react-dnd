/* eslint-disable no-script-url */

import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';

import MaterialUIDatePicker from '../MaterialUIDatePicker/MaterialUIDatePicker';
import TextInputName from '../TextInputName/TextInputName';
import RadioButtonGender from '../RadioButtonGender/RadioButtonGender';
import SwitchNews from '../SwitchNews/SwitchNews';

const useStyles = makeStyles(theme => ({
  padding: {
    padding: theme.spacing(3),
  },
}));

export default function Constructor() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid spacing={2} className={classes.padding}>
        <Grid item>
          <Typography component="h1" variant="h6" color="inherit" noWrap>
            You can create a form you need
          </Typography>
        </Grid>
        <Grid item>
          <TextInputName />
        </Grid>
        <Grid item>
          <RadioButtonGender />
        </Grid>
        <Grid item>
          <SwitchNews />
        </Grid>
        <Grid item>
          <MaterialUIDatePicker />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
