import React from 'react';
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  Switch,
} from '@material-ui/core';

export default function SwitchNews() {
  const [state, setState] = React.useState({
    news: false,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Get news on email</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={state.news}
              onChange={handleChange('news')}
              value="news"
            />
          }
          label="news"
        />
      </FormGroup>
    </FormControl>
  );
}
