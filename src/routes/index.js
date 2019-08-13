import React from 'react';
import { Switch, Redirect, Router, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import { MoveToInbox, CheckCircle, Star, Send } from '@material-ui/icons';
// components
import EditorPage from '../pages/EditorPage';
import ReportsPage from '../pages/ReportsPage';
import UserPage from '../pages/UserPage';
import ConstructorPage from '../pages/ConstructorPage';

// // configs
import routes from '../configs/routes';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0,
  },
  toolbar: theme.mixins.toolbar,
});

const history = createBrowserHistory();

const Routes = props => {
  const { classes } = props;

  return (
    <div>
      <Router history={history}>
        <div className={classes.root}>
          <Drawer
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <List>
              <ListItem button component={Link} to="/constructor">
                <ListItemIcon>
                  <MoveToInbox />
                </ListItemIcon>
                <ListItemText primary="Constructor" />
              </ListItem>

              <ListItem button component={Link} to="/editor">
                <ListItemIcon>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="Editor" />
              </ListItem>

              <ListItem button component={Link} to="/reports">
                <ListItemIcon>
                  <Star />
                </ListItemIcon>
                <ListItemText primary="Reports" />
              </ListItem>

              <ListItem button component={Link} to="/user">
                <ListItemIcon>
                  <Send />
                </ListItemIcon>
                <ListItemText primary="User" />
              </ListItem>
            </List>
          </Drawer>
          <main className={classes.content}>
            <Switch>
              <Route
                exact
                path={routes.CONSTRUCTOR}
                component={ConstructorPage}
              />
              <Route exact path={routes.EDITOR} component={EditorPage} />
              <Route exact path={routes.REPORTS} component={ReportsPage} />
              <Route exact path={routes.USER} component={UserPage} />
              <Redirect to="/constructor" />
            </Switch>
          </main>
        </div>
      </Router>
    </div>
  );
};

export default withStyles(styles)(Routes);
