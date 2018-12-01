# smooth-doc

Common config & components to create Gatsby documentation of open source projects.

## Install

```sh
yarn add smooth-doc gatsby
```

## Setup Gatsby

```js
// gatbsy-config.js
const { getGatsbyConfig } = require('smooth-doc/config')

module.exports = getGatsbyConfig({
  root: __dirname,
  name: 'SVGR',
  slug: 'svgr',
  github: 'https://github.com/smooth-code/svgr',
  menu: ['About', 'Usage', 'Configuring SVGR', 'Advanced'],
  nav: [{ title: 'Usage', url: '/docs/' }],
})
```

```js
// gatbsy-node.js
const { getGatsbyNode } = require('smooth-doc/node')

module.exports = getGatsbyNode({
  root: __dirname,
})
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
