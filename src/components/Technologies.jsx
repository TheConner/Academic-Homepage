import * as React from 'react'

import { Columns, Hero, Image } from 'react-bulma-components'
import { chunkArray } from '../utils/chunkArray'
import './Technologies.scss'

// TODO: A11Y
function Technologies({ technologiesData }) {
  const KEY = 'Tech-'
  function transpose(array) {
    return array[0].map((_, colIndex) => array.map((row) => row[colIndex]))
  }

  // Seperate the technologiesData into smaller rows
  const rows = transpose(chunkArray(technologiesData, 4))

  // Build the columns
  const columns = rows.map((technologiesData, i) => {
    return (
      <Columns.Column
        mobile={{
          size: 3,
          offset: 0,
        }}
        key={KEY + 'Col' + i}
      >
        {technologiesData.map((tile, j) => {
          if (tile == null) return <div key={KEY + 'Empty-' + i + '-' + j} />

          return (
            <a
              href={tile.href}
              target="_blank"
              rel="noreferrer"
              key={KEY + 'Tile' + i + '-' + j}
            >
              <Image
                key={KEY + 'Img' + i + '-' + j}
                alt={tile.alt}
                src={'assets/' + tile.img}
              />
            </a>
          )
        })}
      </Columns.Column>
    )
  })

  return (
    <div className="technologies-container">
      <Hero.Header>
        <h2 className="title">Frequently Used Technologies</h2>
      </Hero.Header>

      <Columns className="image-container is-mobile" key={KEY + 'ColContainer'}>
        {columns}
      </Columns>
    </div>
  )
}

export default Technologies
