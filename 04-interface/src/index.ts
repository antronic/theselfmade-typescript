// Javascript Object
const someObj = { name: 'Dang', type: 'Cat' }

enum Color { 'White', 'PearlWhite', 'GlossyBlack', 'TrustMeItsBlack', 'ReallyRed' }

// With Interface
interface ICar {
  wheel: number
  engine: string
  color: Color
  startEngine(): void
}

interface ITesla extends ICar {
  battery: number // kWh
  firmware: string
}

function getModelS(): ITesla {
  const modelS: ITesla = {
    wheel: 4,
    engine: 'Electricity',
    color: Color.TrustMeItsBlack,
    battery: 100,
    firmware: '10.0',
    startEngine: () => console.log('Whoom'),
  }

  return modelS
}
