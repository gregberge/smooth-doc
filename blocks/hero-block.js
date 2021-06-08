import { 
  HeroSection, Hero, HeroBody, HeroTitle, HeroTeaser, 
  HeroActionList, HeroAction, 
 } from '../components/Hero'
import { ScreenContainer } from '../components/ScreenContainer'
import { Button } from '../components/Button'

export default function HeroBlock({hero}) {
  return (
    <HeroSection>
      <ScreenContainer>
        <Hero backgroundImageURL={hero.backgroundImageURL}>
          <HeroBody>
            <HeroTitle>{hero.slogan}</HeroTitle>
            <HeroTeaser>{hero.teaser}</HeroTeaser>
            <HeroActionList>
              <HeroAction>
                <Button as="a" href={hero.btnUrl}>
                  {hero.btnTxt}
                </Button>
              </HeroAction>
            </HeroActionList>
          </HeroBody>
        </Hero>
      </ScreenContainer>
    </HeroSection>
  )
}