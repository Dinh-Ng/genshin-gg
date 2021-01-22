import ElementList from './Element'
import { BaseWeapon } from './Weapon'

const Anemo = ElementList[0].en
const Cryo = ElementList[1].en
const Electro = ElementList[2].en
// const Dendro = ElementList[3].en
const Geo = ElementList[4].en
const Hydro = ElementList[5].en
const Pyro = ElementList[6].en

const Bow = BaseWeapon[0].en
const Catalyst = BaseWeapon[1].en
const Claymore = BaseWeapon[2].en
const Polearm = BaseWeapon[3].en
const Sword = BaseWeapon[4].en

const Characters = [
  { name: 'Amber', element: Pyro, weapon: Bow },
  { name: 'Barbara', element: Hydro, weapon: Catalyst },
  { name: 'Beidou', element: Electro, weapon: Claymore },
  { name: 'Bennett', element: Pyro, weapon: Sword },
  { name: 'Chongyun', element: Cryo, weapon: Claymore },
  { name: 'Diluc', element: Pyro, weapon: Claymore },
  { name: 'Diona', element: Cryo, weapon: Bow },
  { name: 'Fischl', element: Electro, weapon: Bow },
  { name: 'Jean', element: Anemo, weapon: Sword },
  { name: 'Kaeya', element: Cryo, weapon: Sword },
  { name: 'Keqing', element: Electro, weapon: Sword },
  { name: 'Klee', element: Pyro, weapon: Catalyst },
  { name: 'Lisa', element: Electro, weapon: Catalyst },
  { name: 'Mona', element: Hydro, weapon: Catalyst },
  { name: 'Ningguang', element: Geo, weapon: Catalyst },
  { name: 'Noelle', element: Geo, weapon: Claymore },
  { name: 'Qiqi', element: Cryo, weapon: Sword },
  { name: 'Razor', element: Electro, weapon: Claymore },
  { name: 'Sucrose', element: Cryo, weapon: Catalyst },
  { name: 'Tartaglia', element: Hydro, weapon: Bow },
  { name: 'Traveler (Anemo)', element: Anemo, weapon: Sword },
  { name: 'Traveler (Geo)', element: Geo, weapon: Sword },
  { name: 'Venti', element: Anemo, weapon: Bow },
  { name: 'Xiangling', element: Pyro, weapon: Polearm },
  { name: 'Xiao', element: Anemo, weapon: Polearm, isNew: true },
  { name: 'Xingqiu', element: Hydro, weapon: Sword },
  { name: 'Xinyan', element: Pyro, weapon: Claymore },
  { name: 'Zhongli', element: Geo, weapon: Polearm },
  { name: 'Albedo', element: Geo, weapon: Sword },
  { name: 'Ganyu', element: Cryo, weapon: Bow, isNew: true },
]

export { Characters }
