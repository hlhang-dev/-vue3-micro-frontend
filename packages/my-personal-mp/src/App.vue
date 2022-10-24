<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'
import { CheckMiniProgramUpdate, HttpInit } from '@lasted/uni-shared'
import PageUrl from '@/definition/common/PageUrl'

@Options({
  name: 'App'
})
export default class App extends Vue {
  @CheckMiniProgramUpdate
  onShow() {

  }

  onLaunch() {
    HttpInit.getInstance().init(PageUrl.LOGIN_PAGE,Number(import.meta.env.VITE_APP_API_TIMEOUT))
  }
}
</script>

<style lang="scss">
@import "node_modules/@dcloudio/uni-ui/lib/uni-scss";
</style>
