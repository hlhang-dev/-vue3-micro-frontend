import { Options, Vue } from 'vue-class-component'
import { SwiperItemVO } from '@lasted/mapper-shared'
import { HttpService, TokenManagement } from '@lasted/uni-shared'

@Options({
  name: 'IndexPageService'
})
export default class IndexPageService extends Vue {
  value: string = '测试'
  swiperList: SwiperItemVO[] = []

  created () {
    TokenManagement.getInstance().saveAccountToken('ewe')
    HttpService.doRequest('https://localhost:8080','get',undefined,{hellos: '3232'},false)
    HttpService.doRequest('https://localhost:8080','get',undefined)
  }

  work () {
    console.log('正在工作')
  }
}
