import { Options, Vue } from 'vue-class-component'
import { SwiperItemVO } from '@lasted/mapper-shared'
import { HttpService, TokenManagement } from '@lasted/uni-shared'

@Options({
  name: 'IndexPageService'
})
export default class IndexPageService extends Vue {
  value: string = '测试'
  swiperList: SwiperItemVO[] = []

  work () {
    console.log('正在工作')
  }
}
