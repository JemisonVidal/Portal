import React from "react";
import {
  Theme,
  createStyles,
  withStyles,
  LinearProgress,
  Grid,
  CssBaseline,
} from "@material-ui/core/";

const useStyles = (theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
    content: {
      maxHeight: "50%",
      maxWidth: "50%",
    },
    progress: {
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
    },
  });

interface Props {
  classes: any;
}

class Progress extends React.Component<Props> {
  public state = {
    completed: 49,
  };

  public render() {
    const classes = this.props.classes;
    if (this.state.completed < 100) {
      this.progress();
    }

    return (
      <Grid container component="main">
        <CssBaseline />
        <div className={classes.root}>
          <Grid container component="main" className={classes.progress}>
            <Grid item className={classes.content}>
              <LinearProgress
                variant="determinate"
                value={this.state.completed}
              />
              Carregando
            </Grid>
          </Grid>
        </div>
      </Grid>
    );
  }

  private progress() {
    const timer = setInterval(() => {
      const diff = Math.random() * 10;
      const oldCompleted = this.state.completed;
      this.setState({ completed: Math.min(oldCompleted + diff, 100) });
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }
}

export default withStyles(useStyles)(Progress);
