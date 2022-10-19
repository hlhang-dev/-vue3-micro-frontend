import { Utils } from '@lasted/shared'

export class PageManagement {
  public static redirectPage<T>(page: string, params?: object) {
    uni.redirectTo({
      url: page + Utils.objToUrlParam(params, true)
    })
  }


  public static navigateToPage<T>(page: string, params?: object,callback?: () => void) {
    uni.navigateTo({
      url: page + Utils.objToUrlParam(params, true),
      success: (result) => {
        if (callback) {
          callback()
        }
      }
    })
  }

  public static navigateBack(layers: number = 1) {
    uni.navigateBack({
      delta: layers
    })
  }

  public static switchTabPage<T>(page: string, params?: object) {
    uni.switchTab({
      url: page + Utils.objToUrlParam(params, true)
    })
  }

  public static getUpperLevelPageRoute(): string {
    const router = getCurrentPages()
    return '/' + router[router.length - 2].route
  }

  public static getUpperLevelPage() {
    const router = getCurrentPages()
    return router[router.length - 2]
  }

}

