import { observable, action } from "mobx";

export class AlertService {
  @observable
  public message: string = null;
  public type: string = "error";

  @action
  public addNotification(message: string, type: string) {
    this.message = message;
    this.type = type;
  }
}

const alertService = new AlertService();
export default alertService;
