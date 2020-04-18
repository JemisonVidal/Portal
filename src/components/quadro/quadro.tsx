import React from "react";
import {
  Theme,
  createStyles,
  withStyles,
  LinearProgress,
  Grid,
  CssBaseline,
  Paper,
} from "@material-ui/core/";
import Main from "../template/main/main";

const useStyles = (theme: Theme) =>
  createStyles({
    root: {
      minWidth: "100vh",
      minHeight: "100vh",
      flex: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: theme.spacing(6.5, 0, 0, 7),
      [theme.breakpoints.up("sm")]: {
        margin: theme.spacing(8, 0, 0, 7),
      },
      flex: 1,
      flexDirection: "column",
    },
  });

interface Props {
  classes: any;
}

class Quadro extends React.Component<Props> {
  public render() {
    const classes = this.props.classes;

    return (
      <Main>
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Paper className={classes.paper}>Quadro</Paper>
        </Grid>
      </Main>
    );
  }
}

export default withStyles(useStyles)(Quadro);
