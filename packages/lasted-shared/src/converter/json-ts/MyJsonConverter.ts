import { JsonConvert, ValueCheckingMode } from 'json2typescript'
import { PropertyMatchingRule } from 'json2typescript/src/json2typescript/json-convert-enums'

export default class MyJsonConverter{

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
    new(): T
  }): T {
    let result: T
    try {
      result = MyJsonConverter.jsonConvert.deserializeObject(jsonObject, classReference)
    } catch (error) {
      console.log('MyJsonConverter deserializeObject error', error)
      result = new classReference()
    }
    return result
  }

  public deserializeArray<T>(jsonArray: any[], classReference: {
    new(): T;
  }): T[] {
    let result: T[]
    try {
      result = MyJsonConverter.jsonConvert.deserializeArray(jsonArray, classReference)
    } catch (error) {
      console.log('MyJsonConverter deserializeArray error', error)
      result = []
    }
    return result
  }
}
