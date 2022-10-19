import IPageUrl from '../../definition/IPageUrl'

export default interface HttpDefinition {
  timeout: number
  pageUrl: IPageUrl
  isShowLoading?: boolean
}
