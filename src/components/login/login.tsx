import React from "react";
import { Link } from "react-router-dom";
import Media from "react-media";
import {
  Avatar,
  Button,
  CssBaseline,
  FormControlLabel,
  Checkbox,
  Paper,
  Grid,
  Typography,
} from "@material-ui/core/";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import Contato from "../contato/contato";
import Auth from "../../services/auth";
import alertService from "services/alertService";

interface IState {
  email: string;
  password: string;
  stayLoggedIn: boolean;
  showPassword: boolean;
}

interface IProps {
  classes: any;
}

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
      paddingRight: "3px",
      margin: theme.spacing(1, 3, 0.5, 2),
    },
    submit: {
      margin: theme.spacing(1, 0, 0.5, 0),
    },
    buttonSocial: {
      margin: theme.spacing(0.5, 0, 0.5, 0),
    },
    colorLink: {
      color: theme.palette.primary.main,
    },
  });

class Login extends React.Component<IProps, IState> {
  public state = {
    email: "",
    isLoading: false,
    password: "",
    stayLoggedIn: false,
    showPassword: false,
  };

  emailRef = React.createRef<TextValidator>();
  passwordRef = React.createRef<TextValidator>();

  public render() {
    const classes = this.props.classes;

    return (
      <ValidatorForm onSubmit={this.handleLoginSubmit}>
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Login
              </Typography>
              <form className={classes.form} noValidate>
                <TextValidator
                  value={this.state.email}
                  variant="outlined"
                  margin="normal"
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
                <TextValidator
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  margin="normal"
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
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.stayLoggedIn}
                      onChange={this.handleStayLoggedIn}
                      value="remember"
                      color="primary"
                    />
                  }
                  label="Permanecer conectado"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Entrar
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link to="#" className={classes.colorLink}>
                      Esqueceu a senha ?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/singUp" className={classes.colorLink}>
                      {"Cadastre-se"}
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

  private handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: event.target.value });
  };

  private handlePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState({ password: event.target.value });
  };

  private handleEmailBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    (this.emailRef.current as any).validate(event.target.value);
  };

  private handlePasswordBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    (this.emailRef.current as any).validate(event.target.value);
  };

  private handleStayLoggedIn = () => {
    this.setState({ stayLoggedIn: !this.state.stayLoggedIn });
  };

  private handleLoginSubmit = async () => {
    try {
      if (!this.state.email) {
        alertService.addNotification("O Email é Obrigatório", "error");
        return;
      } else if (!this.state.password) {
        alertService.addNotification("A Senha é Obrigatória", "error");
        return;
      }
      await Auth.login(
        this.state.email,
        this.state.password,
        this.state.stayLoggedIn
      );
    } catch (error) {
      alertService.addNotification("Usuário/Senha inválidos!", "error");
    }
  };
}
export default withStyles(useStyles)(Login);
