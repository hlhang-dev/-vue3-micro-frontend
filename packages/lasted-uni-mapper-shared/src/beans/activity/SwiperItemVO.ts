import { JsonObject,JsonProperty } from 'json2typescript'
import { StringToNumConverter } from '@lasted/shared'
import SwiperModeEnum from '../../definition/activity/swiper/SwiperModeEnum'
import SwiperTypeEnum from '../../definition/activity/swiper/SwiperTypeEnum'

@JsonObject
class SwiperItemVO {
  @JsonProperty('type',StringToNumConverter,true)
  type: SwiperTypeEnum = SwiperTypeEnum.ACTIVITY
  @JsonProperty('title',String,true)
  title: string = ''
  @JsonProperty('slogan',String,true)
  slogan: string = ''
  @JsonProperty('img',String,true)
  img: string = ''
  @JsonProperty('mode',StringToNumConverter,true)
  mode: SwiperModeEnum = SwiperModeEnum.ONLINE
  @JsonProperty('src',String,true)
  src: string = ''
  @JsonProperty('time', StringToNumConverter, true)
  time: number = 0
}

export default SwiperItemVO
