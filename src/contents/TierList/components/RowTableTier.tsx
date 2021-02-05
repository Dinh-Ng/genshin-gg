import { realRank, styleRank, URL } from 'constants/general'
import React from 'react'
import { useTranslation } from 'react-i18next'

type TierPropsType = {
  character: {
    name: string
    tier: {
      mainDps: { single: number; aoe: number; commentEn?: string; commentVi?: string }
      subDps: { single: number; aoe: number; commentEn?: string; commentVi?: string }
      support: { buff: number; heal: number; commentEn?: string; commentVi?: string }
    }
    element: string
  }
  type: string
}

const RowTableTier: React.FC<TierPropsType> = ({ character, type }: TierPropsType) => {
  let commentEn = ''
  let commentVi = ''
  let pointType1 = 0
  let pointType2 = 0

  switch (type) {
    case 'subDps':
      commentEn = character.tier.subDps.commentEn || ''
      commentVi = character.tier.subDps.commentVi || ''
      pointType1 = character.tier.subDps.single
      pointType2 = character.tier.subDps.aoe
      break
    case 'support':
      commentEn = character.tier.support.commentEn || ''
      commentVi = character.tier.support.commentVi || ''
      pointType1 = character.tier.support.buff
      pointType2 = character.tier.support.heal
      break
    default:
      commentEn = character.tier.mainDps.commentEn || ''
      commentVi = character.tier.mainDps.commentVi || ''
      pointType1 = character.tier.mainDps.single
      pointType2 = character.tier.mainDps.aoe
      break
  }

  const { i18n } = useTranslation()
  const isEnglish = i18n.language === 'en'
  return (
    <div className="rt-tr-group">
      <div className="rt-tr" role="row">
        <div className="rt-td" role="gridcell" style={{ flex: '100 0 auto', width: '100px' }}>
          <a className="character-portrait" href={character.name}>
            <img
              className="character-icon"
              alt={character.name}
              src={`${URL.CHARACTER_IMAGE}${character.name}.png`}
            />
            <img
              className="character-type"
              alt={character.name}
              src={`${URL.ELEMENT}${character.element}.png`}
            />
          </a>
        </div>
        <div
          className="rt-td"
          role="gridcell"
          style={{ textAlign: 'center', flex: '460 0 auto', width: '460px' }}
        >
          <div style={{ width: '100%' }}>{isEnglish ? commentEn : commentVi}</div>
        </div>
        <div
          className="rt-td"
          role="gridcell"
          style={{ textAlign: 'center', flex: '100 0 auto', width: '100px' }}
        >
          <div
            style={{
              fontSize: '18px',
              width: '100%',
              color: styleRank(pointType1),
            }}
          >
            {realRank(pointType1)}
          </div>
        </div>
        <div
          className="rt-td"
          role="gridcell"
          style={{ textAlign: 'center', flex: '100 0 auto', width: '100px' }}
        >
          <div
            style={{
              fontSize: '18px',
              width: '100%',
              color: styleRank(pointType2),
            }}
          >
            {realRank(pointType2)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RowTableTier
