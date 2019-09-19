# smooth-doc

Gatsby theme for Smooth Code documentation website.

## Install

```sh
yarn add smooth-doc gatsby react react-dom
```

## Setup Gatsby

```js
module.exports = {
  plugins: [
    {
      resolve: 'smooth-doc',
      options: {
        name: 'Loadable Components',
        slug: 'loadable-components',
        author: 'Greg Bergé',
        description: 'The recommended Code Splitting library for React.',
        siteUrl: 'https://www.smooth-code.com/open-source/loadable-components',
        github: 'https://github.com/smooth-code/loadable-components',
        menu: ['Introduction', 'Guides', 'API'],
        nav: [{ title: 'Docs', url: '/docs/' }],
        codeFundProperty: 268,
      },
    },
  ],
}
```

## Folder structure

```
src/
  images/
    home-logo.png
    logo.png
  pages/
    index.mdx
    docs/
      index.mdx
```

## Homepage

```mdx
---
title: SVGR
---

import { Grid, Row, Col } from '@smooth-ui/core-sc'
import { HomeHero, ShowCase } from 'smooth-doc'
import Helmet from 'react-helmet'

<Helmet>
  <title>SVGR - The React to SVG transformer</title>
</Helmet>

<HomeHero />

<ShowCase>
  <Grid maxWidth={660} gutter={20}>
    <Row>
      <Col xs={12} md>
        <h2># What is SVGR?</h2>
        <ul>
          <li>A SVG to React transformer</li>
          <li>A Node library</li>
          <li>A CLI tool</li>
          <li>A webpack plugin</li>
        </ul>
      </Col>
      <Col xs={12} md="auto">
        <h2># Why?</h2>
        <ul>
          <li>Easy integration</li>
          <li>Flexbility</li>
          <li>Performances</li>
        </ul>
      </Col>
    </Row>
  </Grid>
</ShowCase>
```

## Not Found

```mdx
---
title: Not Found
---

import { NotFound } from 'smooth-doc'

<NotFound />
```

## License

MIT
