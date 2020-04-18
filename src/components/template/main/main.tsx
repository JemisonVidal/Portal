import React from "react";
import { createStyles, withStyles, Theme } from "@material-ui/core";
import Header from "../header/header";

const UseStyles = (theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      minWidth: "100vh",
      minHeight: "100vh",
    },
  });

interface IState {}

interface IProps {
  classes: any;
}

class Main extends React.Component<IProps, IState> {
  render() {
    const classes = this.props.classes;
    return (
      <React.Fragment>
        <Header />
        <main className={classes.root}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}
export default withStyles(UseStyles)(Main);
