<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'
import { CheckMiniProgramUpdate, HttpInit } from '@lasted/uni-shared'
import HttpDefinition from './beans/common/HttpDefinition'

@Options({
  name: 'App'
})
export default class App extends Vue {
   @CheckMiniProgramUpdate
    onShow () {

    }

    onLaunch() {
      HttpInit.getInstance().init(new HttpDefinition())
    }
}
</script>

<style lang="scss">

</style>
