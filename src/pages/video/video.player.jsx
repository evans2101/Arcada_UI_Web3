import React, { useRef, useState } from 'react'
import { useTheme, Slider } from '@mui/material'
import PropTypes from 'prop-types'

import { VideoPlayerLayout, BackDrop } from './video.player.styled'
import { staticIcons } from '../../data/data'
import { previewStaticImage, convertSecondsToTime } from '../../tools'
import ReactPlayer from 'react-player/lazy'
import { usePlayer } from '../../context/playerContext'

const maxStyle = {
  position: 'absolute',
  zIndex: 100001,

  maxWidth: 1200,
  minWidth: 1000,
  margin: 'auto',
  right: 0,
  left: 0,
  top: '30vh',
}
const minStyle = {
  position: 'relative',
}
const VideoPlayer = ({ videoInfo }) => {
  const { setIsActive } = usePlayer()

  // const { videoInfo } = props
  const theme = useTheme()
  const videoPlayer = useRef()
  const [volume, setVolume] = useState(0.6)
  const [videoProgress, setVideoProgress] = useState()
  const [isFullScreen, setIsFullScreen] = useState(false)

  const [isPlaying, setIsPlaying] = useState(false)
  const [isCoverEnabled, setIsCoverEnabled] = useState(true)
  const [controlStatus, setControlStatus] = useState(false)

  const playStarted = () => {
    setIsCoverEnabled(false)
    // console.log(videoPlayer.current?.getDuration());
  }

  const getSpeakerIcon = () => {
    if (!volume) {
      return staticIcons?.speakerOffIcon
    }
    if (volume < 0.5) {
      return staticIcons?.speakerMiddleIcon
    }
    if (volume > 0.5) {
      return staticIcons?.speakerIcon
    }
  }

  const showController = () => {
    if (!isPlaying) {
      return
    }
    if (controlStatus) {
      return
    }
    setControlStatus(true)
    setTimeout(() => {
      setControlStatus(false)
    }, 5000)
  }

  const isFullScreenMode = (state) => {
    setIsFullScreen(state)
    setIsActive(state)
  }

  const resetVideo = () => {
    setIsPlaying(false)
    videoPlayer.current.seekTo(0, 'seconds')
  }
  return (
    <>
      {isFullScreen ? <BackDrop /> : null}
      <VideoPlayerLayout
        style={isFullScreen ? maxStyle : minStyle}
        theme={theme}
        onMouseMove={() => showController()}
      >
        <span className="video_overlay">
          <img
            className={`play_icon${!isPlaying ? '' : ' hide_image'}`}
            onClick={() => setIsPlaying(!isPlaying)}
            src={previewStaticImage(staticIcons?.hugePlayIcon)}
            alt="play_icon"
          />
          <img
            className={`play_cover_image${isCoverEnabled ? '' : ' hide_image'}`}
            src={previewStaticImage(videoInfo?.coverImg)}
            alt="cover_image"
          />
          <span
            className={`play_controller${
              controlStatus ? '' : ' hide_controls'
            }`}
          >
            <span className="main_controls">
              <span
                className="control_icon"
                onClick={() =>
                  videoPlayer.current.seekTo(
                    videoProgress?.playedSeconds > 10
                      ? videoProgress?.playedSeconds - 10
                      : 0,
                    'seconds',
                  )
                }
              >
                <img src={staticIcons?.backIcon} alt="back_icon" />
              </span>
              <span
                onClick={() => setIsPlaying(!isPlaying)}
                className="control_icon_pause"
              >
                <img
                  src={
                    isPlaying ? staticIcons?.pauseIcon : staticIcons?.playIcon
                  }
                  alt="pause_icon"
                />
              </span>
              <span
                className="control_icon"
                onClick={() =>
                  videoPlayer.current.seekTo(
                    videoInfo?.videoDurationInSecond -
                      videoProgress?.playedSeconds >
                      10
                      ? videoProgress?.playedSeconds + 10
                      : videoInfo?.videoDurationInSecond,
                    'seconds',
                  )
                }
              >
                <img src={staticIcons?.forwardIcon} alt="forward_icon" />
              </span>
            </span>
            <span className="volume_controls">
              <img src={previewStaticImage(getSpeakerIcon())} alt="back_icon" />
              <Slider
                size="small"
                aria-label="Small"
                value={(volume || 0) * 100}
                color="primary"
                onChange={(e) =>
                  setVolume(parseFloat(parseInt(e?.target?.value) / 100))
                }
              />
            </span>

            <span className="control_btns">
              <img src={staticIcons?.shuffleIcon} alt="shuffle_icon" />
            </span>

            <span className="timeline_controls">
              <p>{convertSecondsToTime(videoProgress?.playedSeconds || 0)}</p>
              <Slider
                size="small"
                aria-label="Small"
                defaultValue={0}
                color="primary"
                value={
                  parseFloat(
                    (videoProgress?.playedSeconds || 0) /
                      videoInfo?.videoDurationInSecond,
                  ) * 100
                }
                onChange={(e) =>
                  videoPlayer.current.seekTo(
                    parseFloat(e.target.value / 100),
                    'fraction',
                  )
                }
              />
              <p>
                -
                {convertSecondsToTime(
                  parseInt(
                    videoInfo?.videoDurationInSecond -
                      (videoProgress?.playedSeconds || 0),
                  ),
                )}
              </p>
            </span>
            <span className="control_btns">
              <img src={staticIcons?.repeatIcon} alt="repeat_icon" />
            </span>
            <span className="control_btns">
              <img src={staticIcons?.listPlusIcon} alt="list_plus_icon" />
            </span>
            <span className="control_btns">
              <img src={staticIcons?.boxIcon} alt="box_icon" />
            </span>
            <span
              onClick={() => isFullScreenMode(!isFullScreen)}
              className="control_btns"
            >
              <img
                src={
                  isFullScreen
                    ? staticIcons?.minimizeIcon
                    : staticIcons?.maximizeIcon
                }
                alt="maximize_icon"
              />
            </span>
          </span>
          <span className={`view_counter${!isPlaying ? '' : ' hide_image'}`}>
            <p>{videoInfo?.viewCount} Views</p>
          </span>
          <span
            onClick={() => isFullScreenMode(!isFullScreen)}
            className={`view_fullscreen${!isPlaying ? '' : ' hide_image'}`}
          >
            <img
              src={
                isFullScreen
                  ? staticIcons?.minimizeIcon
                  : staticIcons?.maximizeIcon
              }
              alt="maximize_icon"
            />
          </span>
        </span>

        <ReactPlayer
          ref={videoPlayer}
          onProgress={(e) => setVideoProgress(e)}
          onEnded={() => resetVideo()}
          className="react_player"
          onPlay={() => playStarted()}
          url={videoInfo?.videoUrl}
          playing={isPlaying}
          stopOnUnmount={false}
          volume={volume}
        />
      </VideoPlayerLayout>
    </>
  )
}

export default VideoPlayer
