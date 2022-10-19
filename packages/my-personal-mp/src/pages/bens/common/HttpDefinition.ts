import { IHttpDefinition, IPageUrl } from '@lasted/uni-shared'

class PageUrl implements IPageUrl{
  LOGIN_PAGE: string = '/pages/login/index'
}

export default class HttpDefinition implements IHttpDefinition{
  isShowLoading: boolean = true
  pageUrl: IPageUrl = new PageUrl()
  timeout: number = 3000

}
