import { Options, Vue } from 'vue-class-component'
import { ActivityMapper } from '@lasted/mapper-shared'
import SwiperItemVO from '@lasted/mapper-shared/src/beans/activity/SwiperItemVO'

@Options({
  name: 'IndexPageService'
})
export default class IndexPageService extends Vue {
  value: string = '测试'


  created() {
    this.fetchSwiperList()
  }

  fetchSwiperList() {
    ActivityMapper.fetchSwiperList(this.fetchSwiperListCallback)
  }

  fetchSwiperListCallback(success: boolean, swiperList: SwiperItemVO[]) {
    console.log(swiperList)
  }
}
