import LoadingManagement from './LoadingManagement'
import MyResponseCodeEnum from '../definition/http/MyResponseCodeEnum'
import { MyJsonConverter, Utils } from '@lasted/shared'
import ApiUnifiedVO from '../beans/http/vo/ApiUnifiedVO'
import UniUtils from '../common/UniUtils'

class UniAppManagement {
  public static wxRequest<T>(url: string, method: string, data: object, timeout: number, callback: (requestCode: MyResponseCodeEnum, result?: ApiUnifiedVO) => void, headers: object = {}, showLoading: boolean = true) {
    if (showLoading) {
      LoadingManagement.getInstance().show()
    }
    uni.request({
      url: url,
      method: method as 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT',
      header: UniUtils.buildHeader(headers),
      data: data,
      timeout: timeout,
      success: (res) => {
        const result = MyJsonConverter.getInstance().deserializeObject(res, ApiUnifiedVO)
        callback(MyResponseCodeEnum.SUCCESS, result)
      },
      fail: () => {
        callback(MyResponseCodeEnum.FAILED)
      },
      complete: () => {
        if (showLoading) {
          LoadingManagement.getInstance().hide()
        }
        callback(MyResponseCodeEnum.COMPLETE)
      }
    })
  }
}

export default UniAppManagement
