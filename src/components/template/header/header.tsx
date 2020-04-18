import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import {
  createStyles,
  withStyles,
  Theme,
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Divider,
  IconButton,
  ListItem,
  ListItemText,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import ViewColumnRoundIcon from "@material-ui/icons/ViewColumnRounded";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";

interface IState {
  drawerOpen: boolean;
}
interface IProps {
  classes: any;
}

const drawerWidth = 240;
const useStyles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      paddingLeft: 12,
      [theme.breakpoints.up("sm")]: {
        paddingLeft: 5,
      },
      marginRight: 30,
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      color: "#ffff",
      backgroundColor: theme.palette.primary.main,
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      color: "#ffff",
      backgroundColor: theme.palette.primary.main,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
    },
    toolbarPefil: {
      display: "flex",
      justifyContent: "flex-start",
    },
    toolbar: {
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(1, 1),
      },
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    colorIcon: {
      color: "#ffff",
    },
  });

class Header extends React.Component<IProps, IState> {
  public state = {
    drawerOpen: false,
  };

  public render() {
    const classes = this.props.classes;
    return (
      <header>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: this.state.drawerOpen,
            })}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: this.state.drawerOpen,
                })}
              >
                <MenuIcon color="inherit" />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: this.state.drawerOpen,
              [classes.drawerClose]: !this.state.drawerOpen,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: this.state.drawerOpen,
                [classes.drawerClose]: !this.state.drawerOpen,
              }),
            }}
          >
            <div className={classes.toolbarPefil}>
              <ListItem
                button
                component={(props) => <Link to="/perfil" {...props} />}
                key="perfil"
              >
                <ListItemIcon>
                  <PersonRoundedIcon className={classes.colorIcon} />
                </ListItemIcon>
                <ListItemText primary="Perfil" />
              </ListItem>
              <div className={classes.toolbar}>
                <IconButton onClick={this.handleDrawerClose}>
                  <ChevronLeftIcon className={classes.colorIcon} />
                </IconButton>
              </div>
            </div>

            <Divider />
            <List>
              <ListItem
                button
                component={(props) => <Link to="/" {...props} />}
                key="home"
              >
                <ListItemIcon>
                  <HomeRoundedIcon className={classes.colorIcon} />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem
                button
                component={(props) => <Link to="/dashboard" {...props} />}
                key="Dashboard"
              >
                <ListItemIcon>
                  <DashboardRoundedIcon className={classes.colorIcon} />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
              <ListItem
                button
                component={(props) => <Link to="/quadro" {...props} />}
                key="Quadros"
              >
                <ListItemIcon>
                  <ViewColumnRoundIcon className={classes.colorIcon} />
                </ListItemIcon>
                <ListItemText primary="Quadro" />
              </ListItem>
            </List>
          </Drawer>
        </div>
      </header>
    );
  }

  private handleDrawerOpen = () => {
    this.setState({ drawerOpen: true });
  };

  private handleDrawerClose = () => {
    this.setState({ drawerOpen: false });
  };

  private handlePreventDefault = (event: any) => {
    event.preventDefault();
  };
}

export default withStyles(useStyles)(Header);
