import { JsonObject, JsonProperty } from 'json2typescript'

@JsonObject
export default class HeaderVO {
  @JsonProperty('Content-Type', String, true)
  contentType: string = ''

  @JsonProperty('Date', String, true)
  date: string = ''

  @JsonProperty('Server', String, true)
  server: string = ''

}
