import { observable } from "mobx";
import { User } from "../models/User";

export class UserStore {
  @observable
  public user: User;
}

export const userStore = new UserStore();
