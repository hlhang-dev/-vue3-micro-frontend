<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'
import { CheckMiniProgramUpdate } from '@lasted/uni-shared'

@Options({
  name: 'App'
})
export default class App extends Vue {
   @CheckMiniProgramUpdate
    onShow () {
      //console.log('onShow')
    }
}
</script>
