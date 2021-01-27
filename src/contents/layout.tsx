import PropTypes from 'prop-types'
import { useState } from 'react'

type LayoutPropsType = {
  children: PropTypes.ReactNodeLike
  title: string
  placeholderFilter?: string
  value?: string
  onChange?(i: string): void
}
const Layout: React.FC<LayoutPropsType> = ({ children, title, placeholderFilter, onChange }) => {
  const [searchText, setSearchText] = useState<string>('')

  return (
    <section className="container">
      <div className="row">
        <main className="content">
          <div className="content-header">
            <h1>{title}</h1>
            {placeholderFilter && (
              <div className="content-filters">
                <div className="search ml-auto">
                  <div className="search-icon" />
                  <input
                    className="search-input"
                    type="text"
                    placeholder={placeholderFilter}
                    value={searchText}
                    onChange={(i) => {
                      onChange && onChange(i.target.value)
                      setSearchText(i.target.value)
                    }}
                  />
                  <div
                    className="search-close"
                    onClick={() => {
                      onChange && onChange('')
                      setSearchText('')
                    }}
                  />
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
