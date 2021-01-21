import { useTranslation } from 'react-i18next'
import Layout from '../layout'

const Home = () => {
  const { t } = useTranslation()
  return (
    <Layout placeholderFilter={t('characters.placeholderFilter')}>
      <h1>sss</h1>
    </Layout>
  )
}

export default Home
