import { Options, Vue } from 'vue-class-component'
import { MyJsonConverter } from '@lasted/shared'
import { HttpService } from '@lasted/uni-shared'
import BasePageDTO from '../beans/common/BasePageDTO'

@Options({
  name: 'IndexPageService'
})
export default class IndexPageService extends Vue {
  value: string = '测试'
  basePageDTO = new BasePageDTO()

  created() {
    this.basePageDTO = MyJsonConverter.getInstance().deserializeObject({ page: 1 }, BasePageDTO)
    HttpService.doRequest(import.meta.env.VITE_APP_BASE_URL,'get')
  }
}
