import React from "react";
import {
  Theme,
  createStyles,
  withStyles,
  Grid,
  CssBaseline,
  Paper,
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button,
  TextField,
  CardHeader,
} from "@material-ui/core/";
import clsx from "clsx";
import moment from "moment";
import Main from "../template/main/main";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const useStyles = (theme: Theme) =>
  createStyles({
    root: {
      minWidth: "100vh",
      //minHeight: "100vh",
      flex: 1,
    },
    paper: {
      padding: theme.spacing(1),
      margin: theme.spacing(5, 0, 0, 7),
      [theme.breakpoints.up("sm")]: {
        margin: theme.spacing(6, 0, 0, 7),
      },
      flex: 1,
      flexDirection: "column",
    },
    car: {
      padding: theme.spacing(4),
    },
    details: {
      display: "flex",
    },
    avatar: {
      marginLeft: "auto",
      height: 60,
      width: 60,
      flexShrink: 0,
      flexGrow: 0,
    },
    localAvatar: {
      marginLeft: "10px",
    },
    uploadButton: {
      marginRight: theme.spacing(2),
    },
  });

interface Props {
  classes: any;
}

class Perfil extends React.Component<Props> {
  public render() {
    const classes = this.props.classes;
    const user = {
      name: "Jemison Vidal",
      city: "Itu",
      country: "Brasil",
      timezone: "",
      avatar: "",
    };

    return (
      <Main>
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid container spacing={4} className={classes.paper}>
            <Grid item sm={12} xs={6}>
              <Card>
                <CardContent>
                  <div className={classes.details}>
                    <div>
                      <Typography gutterBottom variant="h3">
                        {user.name}
                      </Typography>
                      <Typography color="textSecondary" variant="body1">
                        {user.city}, {user.country}
                      </Typography>
                      <Typography
                        className={classes.dateText}
                        color="textSecondary"
                        variant="body1"
                      >
                        {moment().format("hh:mm A")}
                      </Typography>
                    </div>
                    <div className={classes.avatar}>
                      <Avatar
                        className={classes.localAvatar}
                        src={user.avatar}
                      />
                      <Typography color="textSecondary" variant="body1">
                        Atualizar
                      </Typography>
                    </div>
                  </div>
                </CardContent>
                <Divider />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item sm={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Primeiro Nome"
                        margin="dense"
                        name="firstName"
                        //={handleChange}
                        required
                        // value={values.firstName}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Útilmo Nome"
                        margin="dense"
                        name="lastName"
                        // onChange={handleChange}
                        required
                        // value={values.lastName}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        margin="dense"
                        name="email"
                        //  onChange={handleChange}
                        required
                        //  value={values.email}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Telefone"
                        margin="dense"
                        name="phone"
                        //  onChange={handleChange}
                        type="number"
                        //  value={values.phone}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Endereço"
                        margin="dense"
                        name="address"
                        //  onChange={handleChange}
                        //  value={values.phone}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Número"
                        margin="dense"
                        name="number"
                        //  onChange={handleChange}
                        //  value={values.phone}
                        variant="outlined"
                        type="number"
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Bairro"
                        margin="dense"
                        name="neighborhood"
                        //  onChange={handleChange}
                        //  value={values.phone}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Cidade"
                        margin="dense"
                        name="city"
                        //  onChange={handleChange}
                        //  value={values.phone}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField
                        fullWidth
                        label="UF"
                        margin="dense"
                        name="uf"
                        //  onChange={handleChange}
                        //  value={values.phone}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField
                        fullWidth
                        label="País"
                        margin="dense"
                        name="country"
                        //  onChange={handleChange}
                        //  value={values.phone}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <CardActions>
                    <Button color="primary" variant="contained">
                      Salvar
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Main>
    );
  }
}

export default withStyles(useStyles)(Perfil);
