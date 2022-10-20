export class ArrayUtils {
  public static isEmpty<T>(arr: T[]) {
    return ArrayUtils.isArray(arr) && arr.length > 0
  }

  public static isArray<T>(arr: T[]) {
    return Array.isArray(arr)
  }

  public static getArrayFirst<T>(arr: T[]) {
    return arr[0]
  }
}
