import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

type LayoutPropsType = {
  children: PropTypes.ReactNodeLike
  placeholderFilter?: string
  value?: string
  onChange?(): void
}
const Layout: React.FC<LayoutPropsType> = ({ children, placeholderFilter, value, onChange }) => {
  const { t } = useTranslation()

  return (
    <section className="container">
      <div className="row">
        <main className="content">
          <div className="content-header">
            <h1>{t('characters.title')}</h1>
            {placeholderFilter && (
              <div className="content-filters">
                <div className="search ml-auto">
                  <div className="search-icon" />
                  <input
                    className="search-input"
                    type="text"
                    placeholder={placeholderFilter}
                    value={value}
                    onChange={onChange}
                  />
                  <div className="search-close" />
                </div>
              </div>
            )}
          </div>
          {children}
        </main>
      </div>
    </section>
  )
}

export default Layout
