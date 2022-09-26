export class ObjectUtils {

  public static isEmpty<T extends object>(obj: T): boolean {
    return ObjectUtils.isObject(obj) && Reflect.ownKeys(obj).length === 0
  }

  public static isObject<T>(obj: T): boolean {
    return obj && obj instanceof Object
  }

  public static isSame() {

  }
}
