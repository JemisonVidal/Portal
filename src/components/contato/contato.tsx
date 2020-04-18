import React from "react";
import {
  Grid,
  Typography,
  TableHead,
  Table,
  TableCell,
  TableRow,
} from "@material-ui/core/";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";

interface IProps {
  classes: any;
}

const useStyles = (theme: Theme) =>
  createStyles({
    social: {
      flexDirection: "column",
      alignItems: "center",
      height: "30px",
      width: "35px",
      margin: theme.spacing(3, 3, 0, 3),
      borderRadius: "20px",
    },
    image: {
      backgroundImage:
        "url(https://source.unsplash.com/1600x900/?florest,water,dog)",
      backgroundRepeat: "no-repeat",
      backgroundColor:
        theme.palette.type === "light"
          ? theme.palette.grey[50]
          : theme.palette.grey[900],
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  });

class Contato extends React.Component<IProps> {
  public render() {
    const classes = this.props.classes;
    return <Grid item xs={false} sm={4} md={7} className={classes.image} />;
  }

  private handleOpenLinkedIn() {
    window.open("https://www.linkedin.com/in/jemison-vidal-7b7b17a9/");
  }

  private handleOpenGitHub() {
    window.open("https://github.com/JemisonVidal");
  }
}

export default withStyles(useStyles)(Contato);
