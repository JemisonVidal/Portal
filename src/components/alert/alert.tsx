import React from "react";
import { inject, observer } from "mobx-react";
import { AlertService } from "../../services/alertService";
import { Theme, withStyles } from "@material-ui/core";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

interface Props {
  classes?: any;
  alertService?: AlertService;
}

const useStyles = (theme: Theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
    elevation: 6,
    variant: "filled",
  },
});

function AlertOpen(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

@inject("alertService")
@observer
class Alert extends React.Component<Props> {
  public render() {
    const { classes, alertService } = this.props;

    const handleCloseAlert = () => {
      alertService.message = "";
    };

    return !alertService.message ? (
      <div></div>
    ) : (
      <div className={classes.root}>
        <AlertOpen
          onClose={handleCloseAlert}
          severity={"error"}
          variant="outlined"
        >
          {alertService.message}
        </AlertOpen>
      </div>
    );
  }
}

export default withStyles(useStyles)(Alert);
