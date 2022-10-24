
<script lang="ts">
import { Options, Vue } from 'vue-property-decorator'


@Options({
  name: ''
})
export default class HelloWorld extends Vue{
  created () {
  }
}
</script>

<template>


</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
