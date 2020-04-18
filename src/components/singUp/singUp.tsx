import React from "react";
import { Link } from "react-router-dom";
import Media from "react-media";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Paper,
  Typography,
  withStyles,
  createStyles,
  Theme,
} from "@material-ui/core/";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import app from "config/initFirebase";
import { User } from "../../models/User";
import Contato from "../contato/contato";
import Auth from "../../services/auth";
import alertService from "services/alertService";

const useStyles = (theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 0.5, 0),
    },
    colorLink: {
      margin: theme.spacing(0),
      color: theme.palette.primary.main,
    },
  });

interface Props {
  classes: any;
}

const collection = "user";

class SingUp extends React.Component<Props> {
  firstNameRef = React.createRef<TextValidator>();
  lastNameRef = React.createRef<TextValidator>();
  emailRef = React.createRef<TextValidator>();
  passwordRef = React.createRef<TextValidator>();

  public state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    stayLoggedIn: false,
  };

  public render() {
    const classes = this.props.classes;

    return (
      <ValidatorForm onSubmit={this.handleCreateAccount}>
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6}>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Cadastro
              </Typography>
              <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextValidator
                      value={this.state.firstName}
                      autoComplete="fname"
                      name="firstName"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="Primeiro Nome"
                      onChange={this.handleFirstNameChange}
                      autoFocus
                      validators={["required"]}
                      errorMessages={["O Nome é Obrigatório"]}
                      onBlur={this.handleFirstNameBlur}
                      ref={this.firstNameRef}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextValidator
                      value={this.state.lastName}
                      variant="outlined"
                      required
                      fullWidth
                      id="lastName"
                      label="Último Nome"
                      name="lastName"
                      onChange={this.handleLastNameChange}
                      autoComplete="lname"
                      validators={["required"]}
                      errorMessages={["O Ultimo nome é Obrigatório"]}
                      onBlur={this.handleLastNameBlur}
                      ref={this.lastNameRef}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextValidator
                      value={this.state.email}
                      variant="outlined"
                      required
                      fullWidth
                      onChange={this.handleEmailChange}
                      type="email"
                      id="email"
                      label="Email"
                      name="email"
                      validators={["required"]}
                      errorMessages={["O Email é Obrigatório"]}
                      onBlur={this.handleEmailBlur}
                      ref={this.emailRef}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextValidator
                      value={this.state.password}
                      onChange={this.handlePasswordChange}
                      type="password"
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Senha"
                      id="password"
                      autoComplete="current-password"
                      validators={["required"]}
                      errorMessages={["A senha é obrigatória"]}
                      onBlur={this.handlePasswordBlur}
                      ref={this.passwordRef}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Cadastrar
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link to="/" className={classes.colorLink}>
                      Já possui uma conta ?
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Grid>
          <Media query="(min-width: 600px)" render={() => <Contato />} />
        </Grid>
      </ValidatorForm>
    );
  }

  private handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState({ firstName: event.target.value });
  };

  private handleLastNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState({ lastName: event.target.value });
  };

  private handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: event.target.value });
  };

  private handlePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState({ password: event.target.value });
  };

  private handleFirstNameBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    (this.firstNameRef.current as any).validate(event.target.value);
  };

  private handleLastNameBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    (this.lastNameRef.current as any).validate(event.target.value);
  };

  private handleEmailBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    (this.emailRef.current as any).validate(event.target.value);
  };

  private handlePasswordBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    (this.emailRef.current as any).validate(event.target.value);
  };

  private handleCreateAccount = async () => {
    try {
      if (!this.state.email) {
        alertService.addNotification("O Email é Obrigatório", "error");
        return;
      } else if (!this.state.password) {
        alertService.addNotification("A Senha é Obrigatória", "error");
        return;
      }

      const userId = await Auth.createUserWithEmailAndPassword(
        this.state.email,
        this.state.password
      );

      const newUser: User = {
        id: userId,
        name: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
      };

      await app.firestore().collection(collection).doc(userId).set(newUser);

      window.location.pathname = "/";
    } catch (error) {
      switch (error.code) {
        case "auth/weak-password":
          alertService.addNotification(
            "Senha fraca! informe outra senha.",
            "warning"
          );
          break;
        case "auth/email-already-in-use":
          alertService.addNotification(
            "Email já esta sendo utilizado!",
            "warning"
          );
          break;
        default:
          alertService.addNotification("Senha inválida", "error");
      }
    }
  };
}
export default withStyles(useStyles)(SingUp);
