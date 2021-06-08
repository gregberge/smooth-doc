/**
 * Homepage 
 * @2021/06/01
 */
import PageLayout from '../components/PageLayout'
import HeroBlock from '../blocks/hero-block'
import FeaturesBlock from '../blocks/features-block'
import GetStartedBlock from '../blocks/getstarted-block'

import siteMetadata from '../config/siteMetadata'
import features from '../config/features'
import { getPartial } from '../lib/api'
import { markdownToHtml } from '../lib/markdownToHtml'

export default function Index({guide}) {
  return (
    <PageLayout title="Home">
      <HeroBlock hero={siteMetadata.hero}/>
      <FeaturesBlock features={features}/>
      <GetStartedBlock content={guide}/>
    </PageLayout>
  )
}

export async function getStaticProps() {
  const content = getPartial('getting-started')
  const guide = await markdownToHtml(content || '')

  return {
    props: { guide }
  }
}