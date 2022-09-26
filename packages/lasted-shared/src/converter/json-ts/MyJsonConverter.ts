import { JsonConvert, ValueCheckingMode } from 'json2typescript'

export class MyJsonConverter {

  private static _instance: MyJsonConverter

  private static jsonConvert: JsonConvert

  public static getInstance() {
    if (!MyJsonConverter._instance) {
      MyJsonConverter._instance = new MyJsonConverter()

      this.jsonConvert = new JsonConvert()
      this.jsonConvert.ignorePrimitiveChecks = false
      this.jsonConvert.valueCheckingMode = ValueCheckingMode.DISALLOW_NULL
    }
    return MyJsonConverter._instance
  }

  public deserializeObject<T>(jsonObject: any, classReference: {
    new(): T;
  }): T {
    let result = MyJsonConverter.jsonConvert.deserializeObject(jsonObject, classReference)
    return result
  }

  deserializeArray<T>(jsonArray: any[], classReference: {
    new(): T;
  }): T[] {
    return MyJsonConverter.jsonConvert.deserializeArray(jsonArray, classReference)
  }
}
