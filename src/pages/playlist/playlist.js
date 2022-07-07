import React from 'react'
import { useNavigate } from 'react-router-dom'
import { usePlayer } from '../../context/playerContext'

import { useTheme } from '@mui/material'
import {
  PlayListBoxLayout,
  PlaylistTable,
  SelectStyle,
  PlaylistBox,
  NewPlaylistBox,
} from './playlist-style'
import { CustomButton as Button } from '../../components/button/button'
import { favoritesInfo, staticIcons, playListArray } from '../../data/data'
import { previewDynamicImage, previewStaticImage } from '../../tools'
import { MoreVerticalIcon } from '../../svg'

export const Playlist = ({ mode, setMode, sePl }) => {
  const theme = useTheme()
  const navigate = useNavigate()

  const createCover = (list) => {
    if (!list?.length) {
      return <span></span>
    }
    if (list?.length === 1) {
      return (
        <img
          style={{ width: '100%', height: '100%' }}
          src={previewDynamicImage(list[0]?.songImg)}
          alt="profile_img"
        />
      )
    }

    if (list?.length >= 2) {
      return (
        <>
          <img
            style={{ height: 'calc(50% - 4px)', width: '100%' }}
            src={previewDynamicImage(list[0]?.songImg)}
            alt="profile_img"
          />

          <img
            style={{ height: 'calc(50% - 4px)', width: '100%' }}
            src={previewDynamicImage(list[1]?.songImg)}
            alt="profile_img"
          />
        </>
      )
    }
  }

  const updatePl = (data) => {
    sePl(data)
    setMode('edit')
  }
  return (
    <PlayListBoxLayout theme={theme}>
      <span className="pl_header">
        <h1>My Playlists</h1>
        <SelectStyle>
          <label>Sort by:</label>
          <select>
            <option value="0">Alphabetical</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">4</option>
          </select>
        </SelectStyle>
      </span>
      <div className="pl_list">
        <NewPlaylistBox onClick={() => setMode('new')}>
          <img src={previewStaticImage(staticIcons?.plus)} alt="plus" />
          <h2>Create Playlist</h2>
        </NewPlaylistBox>
        {playListArray?.map((_, idx) => (
          <PlaylistBox key={idx} onClick={() => updatePl(_)}>
            <span className="pl_plbox__img">{createCover(_?.list)}</span>
            <span className="pl_plbox__title">
              <h2>{_?.name}</h2>
              <p>John Doe</p>
            </span>
          </PlaylistBox>
        ))}
      </div>
    </PlayListBoxLayout>
  )
}
