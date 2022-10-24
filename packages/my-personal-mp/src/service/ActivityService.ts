import { Options, Vue } from 'vue-property-decorator'

@Options({
  name: 'ActivityService'
})
export default class ActivityService extends Vue {


  fetchActivityList() {
    console.log('fetchActivityList')
  }
}
