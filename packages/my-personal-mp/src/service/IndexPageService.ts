import { Options, Vue } from 'vue-class-component'
import { ActivityMapper, SwiperItemVO } from '@lasted/mapper-shared'

@Options({
  name: 'IndexPageService'
})
export default class IndexPageService extends Vue {
  value: string = '测试'
  swiperList: SwiperItemVO[] = []


  created() {
    this.fetchSwiperList()
  }

  fetchSwiperList() {
    ActivityMapper.fetchSwiperList(this.fetchSwiperListCallback)
  }

  fetchSwiperListCallback(success: boolean, swiperList: SwiperItemVO[]) {
    if (success) {
      this.swiperList = swiperList
    }
  }
}
