import { IPageUrl } from './IPageUrl'

export interface IHttpDefinition {
  timeout: number
  pageUrl: IPageUrl
  isShowLoading?: boolean
}
