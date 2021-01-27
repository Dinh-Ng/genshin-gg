import { Talents } from 'constants/Farming'
import { URL } from 'constants/general'
import Layout from 'contents/layout'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Farming = () => {
  const { t, i18n } = useTranslation()
  const isEnglish = i18n.language === 'en'

  const renderTalentList = () =>
    Talents.map(
      (talent: {
        nameEn: string
        nameVi: string
        dayEn: string
        dayVi: string
        characters: { name: string; element: string }[]
      }) => (
        <div className="rt-tr-group" role="rowgroup" key={talent.nameEn}>
          <div className="rt-tr -odd" role="row">
            <div className="rt-td" role="gridcell" style={{ flex: '150 0 auto', width: '150px' }}>
              <img
                className="table-image potion"
                src={`https://rerollcdn.com/GENSHIN/Farming/NEW/${talent.nameEn.replace(
                  /\s/g,
                  '_'
                )}.png`}
                alt={talent.nameEn}
              />
              {isEnglish ? talent.nameEn : talent.nameVi}
            </div>
            <div className="rt-td" role="gridcell" style={{ flex: '150 0 auto', width: '150px' }}>
              {isEnglish ? talent.dayEn : talent.dayVi}
            </div>
            <div
              className="rt-td wrap-row"
              role="gridcell"
              style={{ flexWrap: 'wrap', padding: '5px', flex: '300 0 auto', width: '300px' }}
            >
              {talent.characters.map((character: { name: string; element: string }) => (
                <a
                  className="character-portrait"
                  href={`/characters/${character.name}`}
                  key={character.name}
                >
                  <img
                    src={`${URL.characterImage}${character.name}.png`}
                    className="character-icon"
                    alt={character.name}
                  />
                  <img
                    src={`https://rerollcdn.com/GENSHIN/Elements/Element_${character.element}.png`}
                    className="character-type"
                    alt={character.element}
                  />
                  <h2 className="character-name">{character.name}</h2>
                </a>
              ))}
            </div>
          </div>
        </div>
      )
    )
  return (
    <Layout title={t('farming.title')} placeholderFilter={t('characters.placeholderFilter')}>
      <h2>{t('farming.headerTalent')}</h2>
      <div className="gear-list">
        <div className="ReactTable table multi-char">
          <div className="rt-table" role="grid">
            <div className="rt-thead -header">
              <div className="rt-tr" role="row">
                <div
                  className="rt-th -cursor-pointer"
                  role="columnheader"
                  style={{ flex: '150 1 auto', width: '150px' }}
                  tabIndex={-1}
                >
                  <div>{t('farming.material')}</div>
                </div>
                <div
                  className="rt-th -cursor-pointer"
                  role="columnheader"
                  style={{ flex: '150 1 auto', width: '150px' }}
                  tabIndex={-1}
                >
                  <div>{t('farming.days')}</div>
                </div>
                <div
                  className="rt-th -cursor-pointer"
                  role="columnheader"
                  style={{ flex: '300 1 auto', width: '300px' }}
                  tabIndex={-1}
                >
                  <div>{t('farming.characters')}</div>
                </div>
              </div>
            </div>
            <div className="rt-tbody">{renderTalentList()}</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Farming
