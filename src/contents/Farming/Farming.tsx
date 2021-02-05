import { CharacterAscension, Talents } from 'constants/Farming'
import Layout from 'contents/layout'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import CharacterAscensionItem from './components/CharacterAscensionItem'
import TalentItem from './components/TalentItem'

const Farming: React.FC = () => {
  const { t } = useTranslation()
  const [nameFilter, setNameFilter] = useState<string>('')

  const renderTalentList = () =>
    Talents.map(
      (talent: {
        nameEn: string
        nameVi: string
        dayEn: string
        dayVi: string
        characters: { name: string; element: string }[]
      }) => <TalentItem talent={talent} key={talent.nameEn} charFilter={nameFilter} />
    )

  const renderCharacterAscension = () =>
    CharacterAscension.map(
      (item: {
        nameEn: string
        nameVi: string
        characters?: { name: string; element: string }[]
      }) => <CharacterAscensionItem materials={item} key={item.nameEn} charFilter={nameFilter} />
    )

  return (
    <Layout
      title={t('farming.title')}
      placeholderFilter={t('characters.placeholderFilter')}
      onChange={(name) => setNameFilter(name)}
    >
      {/* TALENT */}
      <h2>{t('farming.headerTalent')}</h2>
      <div className="gear-list">
        <div className="ReactTable table multi-char">
          <div className="rt-table" role="grid">
            <div className="rt-thead -header">
              <div className="rt-tr" role="row">
                <div
                  className="talent-header-1 rt-th -cursor-pointer"
                  role="columnheader"
                  style={{ flex: '150 0 auto', width: '150px' }}
                  tabIndex={-1}
                >
                  <div>{t('farming.material')}</div>
                </div>
                <div
                  className="rt-th -cursor-pointer talent-header-1"
                  role="columnheader"
                  style={{ flex: '150 0 auto', width: '150px' }}
                  tabIndex={-1}
                >
                  <div>{t('farming.days')}</div>
                </div>
                <div
                  className="rt-th -cursor-pointer talent-header-2"
                  role="columnheader"
                  style={{ flex: '300 0 auto', width: '300px' }}
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
      {/* Character Ascension */}
      <h2 style={{ marginTop: '30px' }}>{t('farming.headerCharacterAscension')}</h2>
      <div className="gear-list">
        <div className="ReactTable table multi-char">
          <div className="rt-table" role="grid">
            <div className="rt-thead -header">
              <div className="rt-tr" role="row">
                <div
                  className="rt-th -cursor-pointer"
                  role="columnheader"
                  style={{ flex: '150 0 auto', width: '150px' }}
                  tabIndex={-1}
                >
                  <div>{t('farming.material')}</div>
                </div>
                <div
                  className="rt-th -cursor-pointer"
                  role="columnheader"
                  style={{ flex: '300 0 auto', width: '300px' }}
                  tabIndex={-1}
                >
                  <div>{t('farming.characters')}</div>
                </div>
              </div>
            </div>
            <div className="rt-tbody">{renderCharacterAscension()}</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Farming
