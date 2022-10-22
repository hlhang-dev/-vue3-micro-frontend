import { HttpService } from '@lasted/uni-shared'
import { MyJsonConverter } from '@lasted/shared'
import ActivityServerApi from '../definition/server-api/ActivityServerApi'
import { SwiperItemVO } from '../beans/activity/SwiperItemVO'

export class ActivityMapper {
  private static ACTIVITY_BASE_URL = import.meta.env.VITE_APP_ACTIVITY_BASE_API + ActivityServerApi.prefix + ActivityServerApi.version

  public static async fetchSwiperList(callback: (success: boolean, swiperList: SwiperItemVO[]) => void) {
    const url = ActivityMapper.ACTIVITY_BASE_URL + ActivityServerApi.carousel.prefix + ActivityServerApi.carousel.newActivity.requestUrl
    const { data } = await HttpService.doRequest(url, ActivityServerApi.carousel.newActivity.method)
    const { success, data: result } = data

    const swiperList: SwiperItemVO[] = MyJsonConverter.getInstance().deserializeArray(result, SwiperItemVO)
    callback(success, swiperList)
  }

}
