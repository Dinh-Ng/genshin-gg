import React, { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import flagEn from 'images/flag/en.png'
import flagVi from 'images/flag/vi.png'

const Header = () => {
  const { t, i18n } = useTranslation()
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState<boolean>(false)
  const toggleMenu = useCallback(() => {
    setIsOpenMobileMenu(!isOpenMobileMenu)
  }, [isOpenMobileMenu])

  const { pathname } = useLocation()

  const flag = (language: string) => {
    switch (language) {
      case 'en':
        return flagEn
      case 'vi':
        return flagVi
      default:
        return flagEn
    }
  }

  return (
    <nav className="nav">
      <div className="container">
        <div className="row">
          <a className="nav-brand active" aria-current="page" href="/">
            <h3 className="brand">
              <img src="https://rerollcdn.com/GENSHIN/UI/genshin-logo.svg" alt="brand" />
              Genshin
            </h3>
          </a>
          <button className="nav-brand">
            <h4
              onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'vi' : 'en')}
              className="brand"
            >
              <img src={flag(i18n.language)} alt="brand" />
              {t('language')}
            </h4>
          </button>
          <ul className="nav-links ml-auto">
            <li className="nav-item">
              <Link className={`nav-link ${pathname === '/' && 'active'}`} to="/">
                {t('characters.header')}
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${pathname === '/farming' && 'active'}`} to="/farming">
                {t('farming.header')}
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${pathname === '/tier-list' && 'active'}`} to="/tier-list">
                {t('tierList.header')}
              </Link>
            </li>
          </ul>
          <div className={`hamburger ${isOpenMobileMenu ? 'is-active' : ''}`} onClick={toggleMenu}>
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
          </div>
          <div className={`mobile-menu ${isOpenMobileMenu ? 'open' : ''}`}>
            <ul className="mobile-links">
              <li className="mobile-item">
                <a className="mobile-link" href="/">
                  Characters
                </a>
              </li>
              <li className="mobile-item">
                <a className="mobile-link" href="/teams" aria-current="page">
                  Teams
                </a>
              </li>
              <li className="mobile-item">
                <a className="mobile-link" href="/tier-list">
                  Tier List
                </a>
              </li>
              <li className="mobile-item">
                <a className="mobile-link" href="/map">
                  Map
                </a>
              </li>
              <li className="mobile-item">
                <a className="mobile-link" href="/farming">
                  Farming Guide
                </a>
              </li>
              <li className="mobile-item">
                <a className="mobile-link" href="/weapons">
                  Weapons
                </a>
              </li>
              <li className="mobile-item">
                <a className="mobile-link" href="/artifacts">
                  Artifacts
                </a>
              </li>
              <li className="mobile-item">
                <a className="mobile-link" href="/elements">
                  Elements
                </a>
              </li>
              <li className="mobile-item">
                <a className="mobile-link" href="/cooking">
                  Cooking
                </a>
              </li>
              <li className="mobile-item">
                <a className="mobile-link" href="/alchemy">
                  Alchemy
                </a>
              </li>
              <li className="mobile-item">
                <a className="mobile-link" href="/spiral-abyss">
                  Spiral Abyss
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
