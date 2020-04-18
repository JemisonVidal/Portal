import { observable } from "mobx";

class AuthStore {
  @observable
  public loggedUser: firebase.User;

  @observable
  public isCheckedAuth = false;
}

const authStore = new AuthStore();
export default authStore;
