import {HttpService } from './HttpService'
import { IHttpDefinition } from '../definition/http/IHttpDefinition'

export class HttpInit {

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
