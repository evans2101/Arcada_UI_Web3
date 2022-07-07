import React from 'react'
import { useNavigate } from 'react-router-dom'
import { usePlayer } from '../../context/playerContext'

import { useTheme } from '@mui/material'
import {
  NewPlaylistBoxLayout,
  PlaylistTable,
  SelectStyle,
} from './playlist-style'
import { CustomButton as Button } from '../../components/button/button'
import { staticIcons, searchedSongList } from '../../data/data'
import {
  getListDuration,
  convertSecondsToTime,
  previewDynamicImage,
} from '../../tools'
import { MoreVerticalIcon } from '../../svg'
import SearchField, {
  SearchFieldDark,
} from '../../components/search_field/search_field'

export const NewPlaylist = ({ mode, setMode, pl }) => {
  const theme = useTheme()
  const navigate = useNavigate()
  const { setSong } = usePlayer()
  const [data, setData] = React.useState({ list: [] })

  React.useEffect(() => {
    if (pl) {
      setData(pl)
    }

    return () => {}
  }, [pl])

  const createCover = () => {
    if (!data?.list?.length) {
      return <span></span>
    }
    if (data?.list?.length === 1) {
      return (
        <img
          style={{ width: 70, height: 70 }}
          src={previewDynamicImage(data?.list[0]?.songImg)}
          alt="profile_img"
        />
      )
    }

    if (data?.list?.length >= 2) {
      return (
        <>
          <img
            style={{ width: 70, height: 32 }}
            src={previewDynamicImage(data?.list[0]?.songImg)}
            alt="profile_img"
          />

          <img
            style={{ width: 70, height: 32 }}
            src={previewDynamicImage(data?.list[1]?.songImg)}
            alt="profile_img"
          />
        </>
      )
    }
  }

  const addSong = (song) => {
    if (data?.list?.map((_) => _.id).includes(song?.id)) {
      setData((prev) => {
        return { ...prev, list: prev.list.filter((_) => _.id !== song.id) }
      })
      return
    }

    setData((prev) => {
      return { ...prev, list: [...prev.list, song] }
    })
  }
  return (
    <NewPlaylistBoxLayout theme={theme}>
      <div className="newpl__info">
        <div className="box__title">
          <span>
            <div>{createCover()}</div>
            <span>
              <SearchFieldDark
                placeholder="Search in Playlist"
                width={'100%'}
                rightIcon={null}
                radius={8}
                background="#00000000"
                border={2}
                value={pl?.name || ''}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, name: e.target.value }))
                }
              />
              <span className="newpl__sub">
                <h3>John Doe • </h3>
                <p>{data?.list?.length} songs,</p>
                <p>{getListDuration(data?.list)}</p>
              </span>
            </span>
          </span>
          <div>
            <SearchField
              placeholder="Search in Playlist"
              width={400}
              rightIcon={null}
              radius={8}
              border="0px"
            />
            <SelectStyle>
              <select>
                <option value="0">Alphabetical</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">4</option>
              </select>
            </SelectStyle>
          </div>
        </div>

        <PlaylistTable>
          <div className="favorite_table__header">
            <p>#</p>
            <p></p>
            <p>Title</p>
            <p>Album</p>
            <p>Added</p>
            <p></p>
            <p>Duration</p>
            <p></p>
          </div>

          {data?.list?.map((_, idx) => (
            <div key={idx} className="favorite_table__rows">
              <p>{_?.id}</p>
              <span className="row_index">
                <img
                  onClick={() =>
                    navigate(
                      '/5d405d43e26c4e5abb03111a/5d5ef36349d7b030bdb7ee76',
                    )
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
              <p>{_?.addedTimestamp}</p>

              <span className="row__favorite_box">
                <img
                  src={previewDynamicImage(staticIcons?.heartFull)}
                  alt="profile_img"
                />
              </span>
              <p>{convertSecondsToTime(_?.audioDurationInSecond)}</p>

              <span className="row__single_action">
                <MoreVerticalIcon />
              </span>
            </div>
          ))}
        </PlaylistTable>
      </div>
      <div className="newpl__search_box">
        <h2>Search to Add to Playlist</h2>
        <SearchField
          placeholder="Search"
          width={'100%'}
          rightIcon={null}
          radius={8}
          border="0px"
        />

        <div className="searched_list">
          {searchedSongList.map((_, idx) => (
            <span className="searched_list__single_row" key={idx}>
              <img src={_.bannerImg} alt="img" />
              <span>
                <h3>{_?.trackName}</h3>
                <p>{_?.artistName}</p>
              </span>
              {_?.type === 'album' ? (
                <Button
                  startIcon={staticIcons?.chevronRight}
                  type={'outline'}
                  border_width={0}
                  onClick={() => addSong(_)}
                />
              ) : (
                <Button
                  radius={8}
                  buttonText={
                    data?.list?.map((_) => _.id).includes(_?.id)
                      ? 'remove'
                      : 'Add'
                  }
                  type={'outline'}
                  border_width={2}
                  onClick={() => addSong(_)}
                />
              )}
            </span>
          ))}
        </div>
      </div>

      <div className="nwpl_back_btn">
        <Button
          startIcon={staticIcons?.chevronRight}
          type={'primary'}
          onClick={() => setMode('current')}
        />
      </div>
    </NewPlaylistBoxLayout>
  )
}

export default NewPlaylist
