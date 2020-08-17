import React from 'react'
import Helmet from 'react-helmet'
import styled, { Box } from '@xstyled/styled-components'
import { ScreenContainer, Article, Code } from 'smooth-doc/components'
import awardsImageURL from '../../images/awards.png'

const P = styled.p`
  text-align: center !important;
  max-width: none !important;
  font-size: 20 !important;
`

export function Thanks() {
  return (
    <>
      <Helmet
        meta={[
          {
            name: 'robots',
            content: 'noindex',
          },
        ]}
      />

      <ScreenContainer
        textAlign="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        minHeight="calc(100vh - 50px)"
        maxWidth={900}
      >
        <Box
          forwardedAs="img"
          src={awardsImageURL}
          alt="Thanks"
          margin="0 auto"
          width={{ xs: '100%', md: 400 }}
          height={{ xs: 'auto', md: 300 }}
        />
        <Box forwardedAs="h1" fontSize={40} m={0}>
          Thanks for buying Smooth DOC!
        </Box>
        <Article>
          <P>
            You should have received a license key by email, you can use it in{' '}
            <code>gatsby-config.js</code>:
          </P>
          <pre>
            <Code lang="js" editorStyle={{ textAlign: 'left' }}>
              {`
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: 'smooth-doc',
      options: {
        // ...
        licenseKey: 'YOUR_LICENSE_KEY',
      },
    },
  ],
}
          `.trim()}
            </Code>
          </pre>
        </Article>
      </ScreenContainer>
    </>
  )
}
