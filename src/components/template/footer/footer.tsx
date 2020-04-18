import * as React from "react";

interface IState {}

class Footer extends React.Component<{}, IState> {
  public render() {
    return (
      <footer>
        Developed by <strong>Jemison Vidal</strong>
      </footer>
    );
  }
}

export default Footer;
