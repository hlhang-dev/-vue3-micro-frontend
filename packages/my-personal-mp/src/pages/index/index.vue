<template>
  <view class="content">

  </view>
</template>

<script lang="ts">
import { Options } from 'vue-class-component'
import { MyJsonConverter } from '@lasted/shared'
import BasePageDTO from '../beans/BasePageDTO'
import { Vue } from 'vue-property-decorator'

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
