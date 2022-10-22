<template>
  <view class="content" >
    {{ value }}
    <view class="uni-primary">主色</view>
    <image v-for="item in swiperList" :src="item.img" :key="item.src"/>
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
