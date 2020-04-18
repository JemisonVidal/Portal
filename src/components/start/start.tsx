import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { observer } from "mobx-react";
import { createStyles, withStyles, Theme } from "@material-ui/core";
import authStore from "store/authStore";
import RouterApp from "../../routes/Routes";
import RouterAuth from "../../routes/RoutesAuth";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
    },
  });

interface IProps {
  classes: any;
}

@observer
class Start extends React.Component<IProps> {
  public render() {
    const { classes } = this.props;
    return (
      <BrowserRouter>
        <div className={classes.root}>
          {authStore.loggedUser ? <RouterApp /> : <RouterAuth />}
        </div>
      </BrowserRouter>
    );
  }
}

export default withStyles(styles)(Start);
