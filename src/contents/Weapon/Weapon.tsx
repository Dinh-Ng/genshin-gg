import { URL } from 'constants/general'
import { BaseWeapon, WeaponList } from 'constants/Weapon'
import Layout from 'contents/layout'
import i18n from 'i18n'
import Tooltip from 'rc-tooltip'
import React, { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import star1 from 'images/background/1star.png'
import star2 from 'images/background/2star.png'
import star3 from 'images/background/3star.png'
import star4 from 'images/background/4star.png'
import star5 from 'images/background/5star.png'

const Weapon: React.FC = () => {
  const { t } = useTranslation()
  const isEnglish = i18n.language === 'en'

  const [weaponFilter, setWeaponFilter] = useState<string>('')

  const chooseWeapon = useCallback(
    (weapon) => {
      setWeaponFilter(weapon === weaponFilter ? '' : weapon)
    },
    [weaponFilter]
  )

  const sortedList = WeaponList

  const star = (rarity: number) => {
    switch (rarity) {
      case 1:
        return star1
      case 2:
        return star2
      case 3:
        return star3
      case 4:
        return star4
      case 5:
        return star5
      default:
        break
    }
  }

  const renderWeaponItem = (weapon: {
    nameEn: string
    nameVi: string
    typeEn: string
    typeVi: string
    rarity: number
    ATK: number
    secondaryEn: string
    secondaryVi: string
    bonusEn: string
    bonusVi: string
    locationEn: string
    locationVi: string
  }) => {
    // github img : https://raw.githubusercontent.com/Dinh-Ng/Dinh-Ng.github.io/master/image/weapon/
    const linkImg = `${URL.WEAPON}${weapon.nameEn.replace(/\s/g, '_')}.png`
    if (weapon.typeEn === weaponFilter || weaponFilter === '')
      return (
        <div className="rt-tr-group" role="rowgroup" key={weapon.nameEn}>
          <div className="rt-tr -odd" role="row">
            <div className="rt-td" role="gridcell" style={{ flex: '160 0 auto', width: '160px' }}>
              <img
                className="table-image"
                src={linkImg}
                alt={weapon.nameEn}
                style={{ backgroundImage: `url(${star(weapon.rarity)})`, backgroundSize: 'cover' }}
              />
              {isEnglish ? weapon.nameEn : weapon.nameVi}
            </div>
            <div
              className="rt-td t1"
              role="gridcell"
              style={{
                justifyContent: 'center',
                textAlign: 'center',
                flex: '80 0 auto',
                width: '80px',
              }}
            >
              {isEnglish ? weapon.typeEn : weapon.typeVi}
            </div>
            <div
              className="rt-td t1"
              role="gridcell"
              style={{
                justifyContent: 'center',
                textAlign: 'center',
                flex: '50 0 auto',
                width: '50px',
              }}
            >
              {weapon.ATK}
            </div>
            <div
              className="rt-td t1"
              role="gridcell"
              style={{
                justifyContent: 'center',
                textAlign: 'center',
                flex: '100 0 auto',
                width: '100px',
              }}
            >
              {isEnglish ? weapon.secondaryEn : weapon.secondaryVi}
            </div>
            <div className="rt-td" role="gridcell" style={{ flex: '250 0 auto', width: '250px' }}>
              <div
                className="table-bonus"
                dangerouslySetInnerHTML={{ __html: isEnglish ? weapon.bonusEn : weapon.bonusVi }}
              />
            </div>
            <div
              className="rt-td t1"
              role="gridcell"
              style={{
                justifyContent: 'center',
                flex: '100 0 auto',
                width: '100px',
                textAlign: 'center',
              }}
            >
              {isEnglish ? weapon.locationEn : weapon.locationVi}
            </div>
          </div>
        </div>
      )
  }

  return (
    <Layout title={t('weapon.title')} placeholderFilter={t('weapon.placeholderFilter')}>
      <div className="filters">
        <div className="filters-list">
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

      <div className="ReactTable table">
        <div className="rt-table" role="grid">
          <div className="rt-thead -header" style={{ minWidth: '740px' }}>
            <div className="rt-tr" role="row">
              <div
                className="rt-th -cursor-pointer -sort-desc"
                role="columnheader"
                style={{ flex: '160 0 auto', width: '160px' }}
              >
                {t('weapon.header')}
              </div>
              <div
                className="rt-th -cursor-pointer"
                role="columnheader"
                style={{ textAlign: 'center', flex: '80 0 auto', width: '80px' }}
              >
                {t('weapon.type')}
              </div>
              <div
                className="rt-th -cursor-pointer"
                role="columnheader"
                style={{ textAlign: 'center', flex: '50 0 auto', width: '50px' }}
              >
                ATK
              </div>
              <div
                className="rt-th -cursor-pointer"
                role="columnheader"
                style={{ textAlign: 'center', flex: '100 0 auto', width: '100px' }}
              >
                {t('weapon.secondary')}
              </div>
              <div
                className="rt-th -cursor-pointer"
                role="columnheader"
                style={{ flex: '250 0 auto', width: '250px' }}
              >
                Bonus
              </div>
              <div
                className="rt-th -cursor-pointer"
                role="columnheader"
                style={{ textAlign: 'center', flex: '100 0 auto', width: '100px' }}
              >
                {t('weapon.location')}
              </div>
            </div>
          </div>
          <div className="rt-tbody" style={{ minWidth: '740px' }}>
            {sortedList.map((weapon) => renderWeaponItem(weapon))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Weapon
