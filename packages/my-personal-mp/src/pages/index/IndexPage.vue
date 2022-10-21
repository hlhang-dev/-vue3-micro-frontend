<template>
  <view class="content">
    {{ value }}
    {{ basePageDTO.page }}
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

<style>
</style>
