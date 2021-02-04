import React, { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ElementList from 'constants/Element'
import { BaseWeapon } from 'constants/Weapon'
import Layout from '../layout'
import Tooltip from 'rc-tooltip'
import { Characters } from 'constants/Character'
import { URL } from 'constants/general'

const Home: React.FC = () => {
  const { t, i18n } = useTranslation()

  const isEnglish = i18n.language === 'en'
  const [elementFilter, setElementFilter] = useState<string>('')
  const [weaponFilter, setWeaponFilter] = useState<string>('')
  const [nameFilter, setNameFilter] = useState<string>('')

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

  return (
    <Layout
      title={t('characters.title')}
      placeholderFilter={t('characters.placeholderFilter')}
      onChange={(name) => setNameFilter(name)}
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
                    alt={`${character.name}`}
                    className="character-icon"
                    src={`${URL.CHARACTER_IMAGE}${character.name}.png`}
                  />
                  <img
                    alt={character.element}
                    className="character-type"
                    src={`${URL.ELEMENT}${character.element}.png`}
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
