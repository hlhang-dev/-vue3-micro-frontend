export class Utils {
  public static getRandom(): string {
    let chars = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z'
    ]
    let res = ''
    for (let i = 0; i < 10; i++) {
      let id = Math.ceil(Math.random() * 35)
      res += chars[id]
    }
    return res
  }

  public static isBoolean<T>(object: T) {
    return object && typeof object === 'boolean'
  }

  public static objToUrlParam(obj?: object, question: boolean = true): string {
    let queryParams = ''
    let count = 0
    if (obj) {
      for (const key of Object.keys(obj)) {
        // @ts-ignore
        const value = obj[key]
        if (value || value === 0) {
          count++
          const param = key + '=' + value
          if (count === 1 && question) {
            queryParams = '?' + param
          } else {
            queryParams = queryParams + '&' + param
          }
        }
      }
    }
    return queryParams
  }

  public static hasValue<T>(param: T) {
    let hasValue: boolean
    if (param === undefined || param === null || param === '') {
      hasValue = false
    } else if (typeof param === 'number') {
      hasValue = isNaN(param)
    } else if (Array.isArray(param)) {
      hasValue = (param.length !== 0)
    } else {
      hasValue = true
    }
    return hasValue
  }
}
