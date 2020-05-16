function add(a: number, b: number): number {
  return a + b
}

// ------------------------------------------------

interface ICalculator {
  add: (a: number, b: number) => number
  subt: (a: number, b: number) => number
  getPrevResult(): string
  readonly name: string
}

export class Calculator implements ICalculator {
  private prevResult = 0
  name = ''

  constructor(name: string) {
    this.name = name
  }

  /**
   * Plus action
   * @param a first number
   * @param b second number
   */
  add(a: number, b: number) {
    const result = a + b
    this.saveResult(result)
    return result
  }

  /**
   * Subtract action
   * @param a first number
   * @param b second number
   */
  subt(a: number, b: number) {
    const result = a - b
    this.saveResult(result)
    return result
  }

  /**
   * save previous result
   * @param result
   */
  private saveResult(result: number) {
    this.prevResult = result
  }

  getPrevResult() {
    return `Prev result of ${this.name} is ${this.prevResult}`
  }
}

// ---------------------
