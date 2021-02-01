import { URL } from 'constants/general'
import { useTranslation } from 'react-i18next'

type CharacterAscensionPropsType = {
  materials: {
    nameEn: string
    nameVi: string
    image?: string
    characters?: { name: string; element: string }[]
  }
}

const CharacterAscensionItem = ({ materials }: CharacterAscensionPropsType) => {
  const { i18n } = useTranslation()
  const isEnglish = i18n.language === 'en'

  const avatar = materials.image ?? `${URL.FARMING}${materials.nameEn.replace(/\s/g, '_')}.png`

  return (
    <div className="rt-tr-group" role="rowgroup">
      <div className="rt-tr -odd" role="row">
        <div className="rt-td" role="gridcell" style={{ flex: '150 0 auto', width: '150px' }}>
          <img className="table-image potion" src={avatar} alt={materials.nameEn} />
          {isEnglish ? materials.nameEn : materials.nameVi}
        </div>
        <div
          className="rt-td wrap-row"
          role="gridcell"
          style={{ flexWrap: 'wrap', padding: '5px', flex: '300 0 auto', width: '300px' }}
        >
          {materials.characters &&
            materials.characters.map((character: { name: string; element: string }) => (
              <a
                className="character-portrait"
                href={`/characters/${character.name}`}
                key={character.name}
              >
                <img
                  src={`${URL.CHARACTER_IMAGE}${character.name}.png`}
                  className="character-icon"
                  alt={character.name}
                />
                <img
                  src={`${URL.ELEMENT}${character.element}.png`}
                  className="character-type"
                  alt={character.element}
                />
              </a>
            ))}
        </div>
      </div>
    </div>
  )
}

export default CharacterAscensionItem
