import { Any, JsonObject, JsonProperty } from 'json2typescript'
import { StringToBooleanConverter } from '@lasted/shared'


@JsonObject
export default class BaseServiceVO {
  @JsonProperty('code', StringToBooleanConverter, true)
  success: boolean = false

  @JsonProperty('msg', String, true)
  msg: string = ''

  @JsonProperty('data', Any, true)
  data: any = {}

  @JsonProperty('', String, true)
  time: string = ''
}
