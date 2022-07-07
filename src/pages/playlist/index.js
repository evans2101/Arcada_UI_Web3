import React, { useState } from 'react'

import { Playlist } from './playlist.js'
import { NewPlaylist } from './new-playlist.js'

export default function RootPlaylist() {
  const [mode, setMode] = useState('current')
  const [pl, sePl] = useState()

  const context = {
    mode,
    setMode,
    pl,
    sePl,
  }

  if (mode === 'new') {
    return <NewPlaylist {...context} />
  }
  if (mode === 'edit') {
    return <NewPlaylist {...context} />
  }
  return <Playlist {...context} />
}

// export default RootPlaylist
