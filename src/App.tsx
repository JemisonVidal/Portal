import React from "react";
import { observer, Provider } from "mobx-react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import auth from "./services/auth";
import authStore from "store/authStore";
import Alert from "components/alert/alert";
import AlertService from "./services/alertService";
import Start from "components/start/start";
import Progress from "components/progress/progress";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Trebuchet MS", "Roboto", "Arial"].join(","),
  },
  palette: {
    //type: "dark",
    background: {
      default: "#ffff",
      paper: "#ffff",
    },

    primary: {
      contrastText: "#fff",
      main: "#136F63",
    },
    secondary: {
      contrastText: "#fff",
      main: "#136F63",
    },
  },
});

@observer
class App extends React.Component {
  constructor(props: any) {
    super(props);
    auth.startListenFirebaseAuthChange();
  }

  private providerProps = {
    alertService: AlertService,
  };

  public render() {
    return (
      <Provider {...this.providerProps}>
        <MuiThemeProvider theme={theme}>
          <Alert />
          {authStore.isCheckedAuth ? <Start /> : <Progress />}
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
