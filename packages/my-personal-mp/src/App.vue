<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import HttpInit from '@lasted/uni-shared/src/common/HttpInit'
import HttpDefinition from './pages/bens/common/HttpDefinition'

onLaunch(() => {
  HttpInit.getInstance().init(new HttpDefinition())
})
onShow(() => {
})
onHide(() => {
})
</script>
<style></style>
