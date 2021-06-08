import { ScreenContainer } from '../components/ScreenContainer'
import Article from '../components/Article'
import { SiblingNav, SiblingNavLink } from '../components/SiblingNav'

export default function GetStartedBlock({content}) {
  return (
    <ScreenContainer as="section" py={5}>
      <Article dangerouslySetInnerHTML={{ __html: content }} />
      <SiblingNav>
        <SiblingNavLink type="next" href="/docs/getting-started/">
          Read full documentation
        </SiblingNavLink>
      </SiblingNav>
    </ScreenContainer>
  )
}