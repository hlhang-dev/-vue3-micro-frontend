import ParentLoginManagement from '../definition/ILoginManagement'


class LoginManagement extends ParentLoginManagement{

  public static getInstance() {
    if (!this._instance) {
      this._instance = new LoginManagement()
    }
    return this._instance
  }
}

export default LoginManagement
