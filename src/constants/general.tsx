const URL = {
  CHARACTER_IMAGE: 'https://rerollcdn.com/GENSHIN/Characters/',
  FARMING: 'https://rerollcdn.com/GENSHIN/Farming/NEW/',
  ELEMENT: 'https://rerollcdn.com/GENSHIN/Elements/Element_',
  WEAPON: 'https://rerollcdn.com/GENSHIN/Weapon/NEW/',
}

const styleRank = (point: number) => {
  switch (point) {
    case 1:
      return '#9fc5e8'
    case 2:
      return '#b6d7a8'
    case 3:
      return '#ffd966'
    case 4:
      return '#f6b26b'
    case 5:
      return '#ea9999'
    case 6:
      return '#b4a7d6'
    default:
      return '#fff'
  }
}

const realRank = (point: number) => {
  switch (point) {
    case 1:
      return 'C'
    case 2:
      return 'B'
    case 3:
      return 'A'
    case 4:
      return 'A+'
    case 5:
      return 'S'
    case 6:
      return 'SS'
    default:
      return 'NA'
  }
}

export { URL, styleRank, realRank }
