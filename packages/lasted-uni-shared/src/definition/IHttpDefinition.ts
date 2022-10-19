import IPageUrl from './IPageUrl'

export default interface IHttpDefinition {
  timeout: number
  pageUrl: IPageUrl
  isShowLoading?: boolean
}
