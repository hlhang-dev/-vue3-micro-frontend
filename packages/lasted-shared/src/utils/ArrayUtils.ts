import { Assert } from '../validator/Assert'
import { Matcher } from '../inteface/Matcher'

export class ArrayUtils {
  public static isEmpty<T>(arr: T[]) {
    return ArrayUtils.isArray(arr) && arr.length === 0
  }

  public static isArray<T>(arr: T[]) {
    return Array.isArray(arr)
  }

  public static getArrayFirst<T>(arr: T[]) {
    return arr[0]
  }

  public static isNotEmpty<T>(arr: T[]) {
    return ArrayUtils.isArray(arr) && arr.length > 0
  }

  public static matchIndex<T>(matcher: Matcher<T>, arr: T[], beginIndexInclude: number = 0) {
    let index = -1
    Assert.isEmpty(matcher, 'Matcher must be not null !')
    if (ArrayUtils.isNotEmpty(arr)) {
      for (let i = beginIndexInclude; i < arr.length; i++) {
        if (matcher.match(arr[i])) {
          index = i
          break
        }
      }
    }
    return index
  }

  public static matchFind<T>(matcher: Matcher<T>, arr: T[], beginIndexInclude: number = 0): T | null {
    let item: T | null = null
    Assert.isEmpty(matcher, 'Matcher must be not null !')
    if (ArrayUtils.isNotEmpty(arr)) {
      for (let i = beginIndexInclude; i < arr.length; i++) {
        if (matcher.match(arr[i])) {
          item = arr[i]
          break
        }
      }
    }
    return item
  }

  public static isSameLength<T>(arr: T[], arr2: T[]) {
    return arr.length === arr2.length
  }
}
