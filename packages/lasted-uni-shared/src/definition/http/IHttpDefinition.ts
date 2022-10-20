import { IPageUrl } from '../interface/IPageUrl'

export interface IHttpDefinition {
  timeout: number
  pageUrl: IPageUrl
  isShowLoading?: boolean
}
