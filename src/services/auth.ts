import app from "config/initFirebase";
import { action } from "mobx";
import authStore from "store/authStore";

export class AuthService {
  public startListenFirebaseAuthChange() {
    app.auth().onAuthStateChanged(
      action(async (user: firebase.User) => {
        const oldUser = authStore.loggedUser;
        authStore.loggedUser = user;
        authStore.isCheckedAuth = true;
        this.doReload({ oldUser, user });
      })
    );
  }

  private doReload({
    oldUser,
    user,
  }: {
    oldUser: firebase.User;
    user: firebase.User;
  }) {
    if (!user && oldUser) {
      window.location.pathname = "/";
    } else if (oldUser && oldUser !== user) {
      window.location.pathname = "/";
    }
  }

  public async login(
    email: string,
    password: string,
    stayLoggedI: boolean = false
  ) {
    await app.auth().setPersistence(stayLoggedI ? "local" : "session");
    await app.auth().signInWithEmailAndPassword(email, password);
  }

  public async logOut() {
    await app.auth().signOut();
  }

  public async createUserWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<string> {
    const userCredential: firebase.auth.UserCredential = await app
      .auth()
      .createUserWithEmailAndPassword(email, password);
    return userCredential.user.uid;
  }

  public async sendPasswordResetEmail(email: string) {
    await app.auth().sendPasswordResetEmail(email);
  }
}

const authService = new AuthService();
export default authService;
