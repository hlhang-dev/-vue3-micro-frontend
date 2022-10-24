import { Options, Vue } from 'vue-property-decorator'
import { SwiperItemVO } from '@lasted/mapper-shared'

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
