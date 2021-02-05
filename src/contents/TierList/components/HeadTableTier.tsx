import { useTranslation } from 'react-i18next'

type HeadPropType = {
  type: string
}

const HeadTableTier = ({ type }: HeadPropType) => {
  const { t } = useTranslation()
  const isSupport = type === 'support'
  return (
    <div className="rt-thead -header" style={{ minWidth: '760px' }}>
      <div className="rt-tr" role="row">
        <div
          className="rt-th -cursor-pointer"
          role="columnheader"
          tabIndex={-1}
          style={{ flex: '100 0 auto', width: '100px' }}
        >
          <div>{t('tierList.unit')}</div>
        </div>
        <div
          className="rt-th -cursor-pointer"
          role="columnheader"
          tabIndex={-1}
          style={{ textAlign: 'center', flex: '460 0 auto', width: '460px' }}
        >
          <div>{t('tierList.comment')}</div>
        </div>
        <div
          className="rt-th -cursor-pointer"
          role="columnheader"
          tabIndex={-1}
          style={{ textAlign: 'center', flex: '100 0 auto', width: '100px' }}
        >
          <div>{isSupport ? t('tierList.buff') : t('tierList.single')}</div>
        </div>
        <div
          className="rt-th -cursor-pointer"
          role="columnheader"
          tabIndex={-1}
          style={{ textAlign: 'center', flex: '100 0 auto', width: '100px' }}
        >
          <div>{isSupport ? t('tierList.heal') : t('tierList.aoe')}</div>
        </div>
      </div>
    </div>
  )
}

export default HeadTableTier
