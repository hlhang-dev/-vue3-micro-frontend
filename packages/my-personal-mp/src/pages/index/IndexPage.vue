<template>
  <view class="content">
    {{ value }}
    {{ basePageDTO.page }}
    <uni-badge text="1"></uni-badge>
  </view>
</template>

<script lang="ts">
import { mixins, Options } from 'vue-property-decorator'
import IndexPageService from '@/service/IndexPageService'

@Options({
  name: 'IndexPage'
})
export default class IndexPage extends mixins(IndexPageService) {

}
</script>

<style lang="scss" scoped>
.content {
    background: $uni-bg-color-mask;
}
</style>
