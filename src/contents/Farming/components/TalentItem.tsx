import { URL } from 'constants/general'
import { useTranslation } from 'react-i18next'

type TalentPropsType = {
  talent: {
    nameEn: string
    nameVi: string
    dayEn: string
    dayVi: string
    characters: { name: string; element: string }[]
  }
  charFilter: string
}

const TalentItem: React.FC<TalentPropsType> = ({ talent, charFilter }: TalentPropsType) => {
  const { i18n } = useTranslation()
  const isEnglish = i18n.language === 'en'

  if (charFilter === '' || talent.characters.some((char) => char.name.includes(charFilter))) {
    return (
      <div className="rt-tr-group" role="rowgroup">
        <div className="rt-tr -odd" role="row">
          <div className="rt-td" role="gridcell" style={{ flex: '150 0 auto', width: '150px' }}>
            <img
              className="table-image potion"
              src={`${URL.FARMING}${talent.nameEn.replace(/\s/g, '_')}.png`}
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
            {talent.characters.map((character: { name: string; element: string }) => {
              if (character.name.includes(charFilter))
                return (
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
                    <h2 className="character-name">{character.name}</h2>
                  </a>
                )
              else return <div key={character.name} />
            })}
          </div>
        </div>
      </div>
    )
  } else return <div />
}

export default TalentItem
