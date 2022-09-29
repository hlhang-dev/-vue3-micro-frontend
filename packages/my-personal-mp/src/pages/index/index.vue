<template>
  <view class="content">

  </view>
</template>

<script lang="ts">
import { Options,Vue } from 'vue-class-component'
import { MyJsonConverter } from '@lasted/shared'
import BasePageDTO from '../beans/BasePageDTO'
@Options({
  name: 'Index'
})
export default class Index extends Vue {
  created() {
    const basePageDTO = MyJsonConverter.getInstance().deserializeObject({page: 1}, BasePageDTO)
    console.log(basePageDTO)
  }
}

</script>

<style>
</style>
