import IHttpDefinition from '../definition/IHttpDefinition'
import HttpService from './HttpService'

export default class HttpInit {

  protected static _instance: HttpInit

  public static getInstance() {
    if (!this._instance) {
      this._instance = new HttpInit()
    }
    return this._instance
  }

  init(httpDefinition: IHttpDefinition) {
      HttpService.init(httpDefinition)
  }
}
