import React, { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ElementList from 'constants/Element'
import { BaseWeapon } from 'constants/Weapon'
import Layout from '../layout'
import Tooltip from 'rc-tooltip'
import i18n from 'i18n'
import { Characters } from 'constants/Character'

const Home = () => {
  const { t } = useTranslation()

  const isEnglish = i18n.language === 'en'
  const [elementFilter, setElementFilter] = useState('')
  const [weaponFilter, setWeaponFilter] = useState('')
  const [nameFilter, setNameFilter] = useState('')

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

  console.log('nameFilter', nameFilter)

  return (
    <Layout
      title={t('characters.title')}
      placeholderFilter={t('characters.placeholderFilter')}
      onChange={(i) => setNameFilter(i)}
    >
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
                src={`https://rerollcdn.com/GENSHIN/Elements/Element_${element.en}.png`}
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
                alt={weapon.vi}
                src={`https://rerollcdn.com/GENSHIN/Weapon/NEW/${weapon.en}.png`}
                onClick={() => chooseWeapon(weapon.en)}
              />
            </Tooltip>
          ))}
        </div>
      </div>
      <div className="character-list">
        {Characters.map(
          (character: { name: string; element: string; weapon: string; isNew?: boolean }) => {
            if (
              (character.element === elementFilter || elementFilter === '') &&
              (character.weapon === weaponFilter || weaponFilter === '') &&
              character.name.toLowerCase().includes(nameFilter.toLowerCase())
            ) {
              return (
                <a
                  key={character.name}
                  className={`character-portrait ${character?.isNew && 'new'}`}
                  href={`/character/${character.name}`}
                >
                  <img
                    className="character-icon"
                    alt={`${character.name}`}
                    src={`https://rerollcdn.com/GENSHIN/Characters/${character.name}.png`}
                  />
                  <img
                    src={`https://rerollcdn.com/GENSHIN/Elements/Element_${character.element}.png`}
                    className="character-type"
                    alt="Pyro"
                  />
                  <h2 className="character-name">{character.name}</h2>
                </a>
              )
            } else return <div />
          }
        )}
      </div>
    </Layout>
  )
}

export default Home
