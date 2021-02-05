import { Characters } from 'constants/Character'
import ElementList from 'constants/Element'
import { URL } from 'constants/general'
import { BaseWeapon } from 'constants/Weapon'
import Layout from 'contents/layout'
import Tooltip from 'rc-tooltip'
import React, { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import HeadTableTier from './components/HeadTableTier'
import RowTableTier from './components/RowTableTier'

type TierPropsType = {
  single: number
  aoe: number
  commentEn?: string
  commentVi?: string
}

type TierSupportPropsType = {
  buff: number
  heal: number
  commentEn?: string
  commentVi?: string
}

const TierList = () => {
  const { t, i18n } = useTranslation()

  const isEnglish = i18n.language === 'en'
  const [elementFilter, setElementFilter] = useState<string>('')
  const [weaponFilter, setWeaponFilter] = useState<string>('')
  // const [nameFilter, setNameFilter] = useState<string>('')

  const chooseElement = useCallback(
    (element) => {
      setElementFilter(element === elementFilter ? '' : element)
    },
    [elementFilter]
  )

  const chooseWeapon = useCallback(
    (weapon) => {
      setWeaponFilter(weapon === weaponFilter ? '' : weapon)
    },
    [weaponFilter]
  )

  const mainDpsList = Characters.filter(
    (character: { tier: { mainDps: { aoe: number; single: number } } }) =>
      character.tier.mainDps.aoe !== 0 || character.tier.mainDps.single !== 0
  )
  function compareMain(a: any, b: any) {
    if (a.tier.mainDps.single > b.tier.mainDps.single) return -1
    if (a.tier.mainDps.single < b.tier.mainDps.single) return 1
    return 0
  }
  const sortedMainDpsList = mainDpsList.sort(compareMain)

  const subDpsList = Characters.filter(
    (character: { tier: { subDps: { aoe: number; single: number } } }) =>
      character.tier.subDps.aoe !== 0 || character.tier.subDps.single !== 0
  )
  function compareSub(a: any, b: any) {
    if (a.tier.subDps.single > b.tier.subDps.single) return -1
    if (a.tier.subDps.single < b.tier.subDps.single) return 1
    return 0
  }
  const sortedSubDpsList = subDpsList.sort(compareSub)

  const supportList = Characters.filter(
    (character: { tier: { support: { heal: number; buff: number } } }) =>
      character.tier.support.heal !== 0 || character.tier.support.buff !== 0
  )
  function compareSup(a: any, b: any) {
    if (a.tier.support.buff > b.tier.support.buff) return -1
    if (a.tier.support.buff < b.tier.support.buff) return 1
    return 0
  }
  const sortedSupportList = supportList.sort(compareSup)

  return (
    <Layout title={t('tierList.title')} placeholderFilter={t('characters.placeholderFilter')}>
      {/* FILTER */}
      <div className="filters">
        <div className="filters-list">
          {ElementList.map((element: { en: string; vi: string }) => (
            <Tooltip
              key={element.en}
              placement="top"
              overlay={<div className="filters-tooltip">{isEnglish ? element.en : element.vi}</div>}
            >
              <img
                alt={element.en}
                className={`filters-item ${element.en === elementFilter && 'active'}`}
                src={`${URL.ELEMENT}${element.en}.png`}
                onClick={() => chooseElement(element.en)}
              />
            </Tooltip>
          ))}
          <div className="filters-divider" />
          {BaseWeapon.map((weapon: { en: string; vi: string }) => (
            <Tooltip
              key={weapon.en}
              placement="top"
              overlay={<div className="filters-tooltip">{isEnglish ? weapon.en : weapon.vi}</div>}
            >
              <img
                className={`filters-item weapon ${weapon.en === weaponFilter && 'active'}`}
                alt={weapon.en}
                src={`${URL.WEAPON}${weapon.en}.png`}
                onClick={() => chooseWeapon(weapon.en)}
              />
            </Tooltip>
          ))}
        </div>
      </div>
      <h3 className="tier-role">{t('tierList.mainDPS')}</h3>
      <p style={{ marginBottom: '20px' }}>{t('tierList.mainDpsDecryption')}</p>
      <div>
        <div className="ReactTable table">
          <div className="rt-table" role="grid">
            <HeadTableTier type="mainDps" />
            <div className="rt-tbody" style={{ minWidth: '760px' }}>
              {sortedMainDpsList.map(
                (character: {
                  name: string
                  tier: {
                    mainDps: TierPropsType
                    subDps: TierPropsType
                    support: TierSupportPropsType
                  }
                  element: string
                }) => (
                  <RowTableTier character={character} type="mainDps" key={character.name} />
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <h3 className="tier-role">{t('tierList.subDPS')}</h3>
      <p style={{ marginBottom: '20px' }}>{t('tierList.subDpsDecryption')}</p>
      <div>
        <div className="ReactTable table">
          <div className="rt-table" role="grid">
            <HeadTableTier type="subDps" />
            <div className="rt-tbody" style={{ minWidth: '760px' }}>
              {sortedSubDpsList.map(
                (character: {
                  name: string
                  tier: {
                    mainDps: TierPropsType
                    subDps: TierPropsType
                    support: TierSupportPropsType
                  }
                  element: string
                }) => (
                  <RowTableTier character={character} type="subDps" key={character.name} />
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <h3 className="tier-role">{t('tierList.support')}</h3>
      <p style={{ marginBottom: '20px' }}>{t('tierList.supportDecryption')}</p>
      <div>
        <div className="ReactTable table">
          <div className="rt-table" role="grid">
            <HeadTableTier type="support" />
            <div className="rt-tbody" style={{ minWidth: '760px' }}>
              {sortedSupportList.map(
                (character: {
                  name: string
                  tier: {
                    mainDps: TierPropsType
                    subDps: TierPropsType
                    support: TierSupportPropsType
                  }
                  element: string
                }) => (
                  <RowTableTier character={character} type="support" key={character.name} />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TierList
