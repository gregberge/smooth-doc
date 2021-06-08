import {
  FeatureSection, FeatureList, Feature, FeatureImage, 
  FeatureText, FeatureTitle, 
} from '../components/Feature'

export default function FeaturesBlock({features}) {
  return (
    <FeatureSection>
      <FeatureList>
        {
          features.map(f => (
            <Feature key={f.title} >
              <FeatureImage src={f.image}/>
              <FeatureTitle>{f.title}</FeatureTitle>
              <FeatureText>{f.desc}</FeatureText>
            </Feature>
          ))
        }
      </FeatureList>
    </FeatureSection>
  )
}