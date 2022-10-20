import { Options, Vue } from 'vue-class-component'
import { MyJsonConverter } from '@lasted/shared'
import BasePageDTO from '../../beans/common/BasePageDTO'
import { HttpService } from '@lasted/uni-shared'

@Options({
  name: 'Index'
})
export default class Index extends Vue {
  value: string = '测试'
  basePageDTO = new BasePageDTO()

  created() {
    this.basePageDTO = MyJsonConverter.getInstance().deserializeObject({ page: 1 }, BasePageDTO)
    HttpService.doRequest(import.meta.env.VITE_APP_BASE_URL,'get')
  }
}
