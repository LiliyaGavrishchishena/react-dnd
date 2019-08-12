import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import { MoveToInbox, CheckCircle, Star, Send } from '@material-ui/icons';
// import PeopleIcon from '@material-ui/icons/PeopleIcon';
// import BarChartIcon from '@material-ui/icons/BarChartIcon';
// import LayersIcon from '@material-ui/icons/LayersIcon';

const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <MoveToInbox />
      </ListItemIcon>
      <ListItemText primary="Constructor" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <CheckCircle />
      </ListItemIcon>
      <ListItemText primary="Editor" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <Star />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <Send />
      </ListItemIcon>
      <ListItemText primary="User" />
    </ListItem>
  </div>
);

export default mainListItems;
