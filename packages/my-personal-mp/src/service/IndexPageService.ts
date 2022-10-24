import { Options, Vue } from 'vue-class-component'
import { SwiperItemVO } from '@lasted/mapper-shared'
import { MyJsonConverter, StringToNumConverter } from '@lasted/shared'
import { JsonObject, JsonProperty } from 'json2typescript'

@JsonObject
class Personal {
  @JsonProperty('id',StringToNumConverter,true)
  id: string = ''
}

@Options({
  name: 'IndexPageService'
})
export default class IndexPageService extends Vue {
  value: string = '测试'
  swiperList: SwiperItemVO[] = []


  created() {
    const obj = { id: 1 }
    const personal = MyJsonConverter.getInstance().deserializeObject(obj,Personal)
    console.log(personal)
  }
}
