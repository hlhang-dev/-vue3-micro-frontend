<template>
  <div></div>
</template>

<script lang="ts">
import { Options } from 'vue-class-component'
import { mixins } from 'vue-property-decorator'
import IndexPageService from '@/service/IndexPageService'


@Options({
  name: 'LoginPage'
})
export default class LoginPage extends mixins(IndexPageService) {

  mounted() {
    this.work()
  }
}
</script>

<style lang="scss" scoped>

</style>
