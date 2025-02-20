import { ROUTES } from '../routes/routes.ts';

export default class AuthServices {
  public successLogin(data: string): void {
    localStorage.setItem('token', data);
    window.location.replace(ROUTES.PRIVATE.DASHBOARD());
  }

  public async Logout() {
    localStorage.clear();
    window.location.replace(ROUTES.PUBLIC.HOME());
  }

  public authCheck(): boolean {
    return !!localStorage.getItem('token');
  }
}
