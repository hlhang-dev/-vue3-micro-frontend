import { JsonObject, JsonProperty } from 'json2typescript'

@JsonObject
export default class BasePageDTO {
  @JsonProperty('page',Number,true)
  page: number = 0
}
