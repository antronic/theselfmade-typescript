// function saveState(state: IState): void {
// }

type ISave<T> = {
  saveName: string
  data: T
}

const getSave = <T>(name: string, state: T): ISave<T> => {
  let save: ISave<T> = { saveName: name, data: state }
  return save
}

interface Level1 {
  shop_1: any
  shop_2: any
  shop_3: any
  hasBoss: boolean
}

getSave<Level1>('level_1', { shop_1: [100, 200], shop_2: [200, 250], shop_3: [400, 420], hasBoss: false })

interface Level2 {
  shop_1: any
  hasBoss: boolean
  npc_1: any
}
getSave<Level2>('level_1', { shop_1: [100, 200], hasBoss: true, npc_1: [300, 320] })
