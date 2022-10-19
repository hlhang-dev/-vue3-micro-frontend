import IPageUrl from '../../definition/IPageUrl'

export default class UniDefinition {
  pageUrl!: IPageUrl


  constructor(pageUrl: IPageUrl) {
    this.pageUrl = pageUrl
  }
}
