<template>
  <view class="content">
    {{ value }}
    {{ basePageDTO.page }}
  </view>
</template>

<script lang="ts">
import { mixins, Options, Vue } from 'vue-property-decorator'
import Index from './Index'

@Options({
  name: 'IndexPage',

})
export default class IndexPage extends mixins(Index) {

}
</script>

<style>
</style>
