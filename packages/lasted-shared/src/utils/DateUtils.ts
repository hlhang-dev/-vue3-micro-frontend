export class DateUtils {
  public static startTimeYMDh(nS: number): string {
    let date = new Date(nS)
    let Y = date.getFullYear() + '-'
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1): date.getMonth() + 1) + '-'
    let D = (date.getDate() < 10 ? '0' + date.getDate(): date.getDate())
    return Y + M + D
  }
}
