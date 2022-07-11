import React from 'react'
import { useNavigate } from 'react-router-dom'
import { usePlayer } from '../../context/playerContext'

import { useTheme } from '@mui/material'
import { BoxLayout, FavoriteTable } from './favourites-style'
import { CustomButton as Button } from '../../components/button/button'
import { favoritesInfo, staticIcons } from '../../data/data'
import { previewDynamicImage } from '../../tools'
import { MoreVerticalIcon } from '../../svg'
import SearchField, {
} from '../../components/search_field/search_field'
import {
  SelectStyle
} from '../playlist/playlist-style'

const Favorites = () => { 
  const theme = useTheme()
  const navigate = useNavigate()
  const { setSong } = usePlayer()

  return (
    <BoxLayout theme={theme}>
      <div className="box__title">
        <div>
          <img
            src={previewDynamicImage(favoritesInfo?.list[0]?.songImg)}
            alt="profile_img"
          />

          <img
            src={previewDynamicImage(favoritesInfo?.list[1]?.songImg)}
            alt="profile_img"
          />
        </div>
          <span>
            <h1>Favorites</h1>
            <span>
              <h3>{favoritesInfo?.profileName} • </h3>
              <p>{favoritesInfo?.list?.length} songs,</p>
              <p>
                {favoritesInfo?.allSongsDuration?.min} min{' '}
                {favoritesInfo?.allSongsDuration?.sec} sec
              </p>
            </span>
          </span>
          <span
          style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'row'}}
          >
            <SearchField
              placeholder="Search in Playlist"
              width={400}
              rightIcon={null}
              radius={8}
              border="0px"
            />
            <SelectStyle
            style={{marginLeft: '80px'}}
            >
              <select>
                <option value="0">Alphabetical</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">4</option>
              </select>
            </SelectStyle>
          </span>
      </div>

      <FavoriteTable>
        <div className="favorite_table__header">
          <p>#</p>
          <p></p>
          <p>Title</p>
          <p>Album</p>
          <p style={{paddingLeft: '50px'}}>Added</p>
          <p style={{marginLeft: '95px'}}>Duration</p>
          <p></p>
          <p></p>
          <p></p>
        </div>

        {favoritesInfo?.list?.map((_, idx) => (
          <div key={idx} className="favorite_table__rows">
            <p>{_?.id}</p>
            <span className="row_index">
              <img
                onClick={() =>
                  navigate('/5d405d43e26c4e5abb03111a/5d5ef36349d7b030bdb7ee76')
                }
                src={previewDynamicImage(staticIcons?.videoWhiteIconWithLogo)}
                alt="video_icon"
              />
              <img
                onClick={() => setSong(_)}
                src={previewDynamicImage(staticIcons?.audioWhiteIconWithLogo)}
                alt="audio_icon"
              />
            </span>

            <span className="row_info">
              <img src={previewDynamicImage(_?.songImg)} alt="profile_img" />

              <span>
                <p>{_?.trackName}</p>
                <p>{_?.artistId}</p>
              </span>
            </span>
            <p>{_?.album}</p>
            <p style={{marginLeft: '15px'}}>{_?.addedTimestamp}</p>
            <span className="row__favorite_box">
              <img
                src={previewDynamicImage(staticIcons?.heartFull)}
                alt="profile_img"
                style={{marginLeft: '25px'}}
              />
            </span>
            <p>{_?.duration}</p>
            <span className="row__action_box">
              <Button
                buttonText="Buy Edition"
                type={'primary'}
                onClick={() => {}}
              />
              <Button
                buttonText="View on OpenSea"
                type={'default'}
                onClick={() => {}}
              />
            </span>
            <span className="row__single_action">
              <MoreVerticalIcon />
            </span>
          </div>
        ))}
      </FavoriteTable>
    </BoxLayout>
  )
}

export default Favorites
