<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import HttpDefinition from './pages/bens/common/HttpDefinition'
import { HttpInit } from '@lasted/uni-shared'

onLaunch(() => {
  HttpInit.getInstance().init(new HttpDefinition())
})
onShow(() => {
})
onHide(() => {
})
</script>
<style></style>
