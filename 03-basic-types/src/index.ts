// Boolean
let isAdmin: boolean = false

// Number
let decimal: number = 6
let hex: number = 0xf00d
let binary: number = 0b1010
let octal: number = 0o744

// String
let myName: string = 'Jirachai'

// Array
let arr: any[] = ['name', 123]
let arr2: (string | number)[] = ['name', 123]
let arr3: Array<number> = [1, 2, 4, 8]

// Tuple
let nameWithAge: [string, number] = ['John', 18]

// Enum
enum MachineStatus { 'online', 'pending', 'offline' }
let currentStatus: MachineStatus = MachineStatus.online

// Any
let whatever: any = 'string'
whatever = 100
whatever = { msg: 'I can be anything as I want~' }

// void
function hello(): void {
  console.log('Hello my dear friend.')
}

// Never
function neverStop(): never {
  while(true) {
    console.log('Hi')
  }
}

// Null & Undefined
let u: undefined = undefined
let n: null = null
