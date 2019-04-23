import React from 'react'
import { Grid } from '@smooth-ui/core-sc'
import { Article } from './Article'

export function NotFound() {
  return (
    <Grid gutter={20}>
      <Article style={{ textAlign: 'center', overflow: 'hidden' }}>
        <h1>404</h1>
        <p style={{ textAlign: 'center', margin: '20px auto' }}>
          We couldn’t find what you were looking for.
        </p>
        <a href="https://dribbble.com/shots/2402048-Kylo-is-waiting">
          <img
            alt="Kylo is waiting"
            src="https://cdn.dribbble.com/users/469578/screenshots/2402048/star_wars_kyloren_ren.gif"
            width="400"
          />
        </a>
        <p style={{ textAlign: 'center', margin: '20px auto' }}>
          Please contact the owner of the site that linked you to the original
          URL and let them know their link is broken.
        </p>
      </Article>
    </Grid>
  )
}
