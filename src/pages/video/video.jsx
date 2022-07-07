import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useTheme } from '@mui/material'

import VideoPlayer from './video.player'
import { VideoPageLayout, HistoryTable } from './video-styled'
import { CustomButton as Button } from '../../components/button/button'
import { videoList, staticIcons } from '../../data/data'
import { previewDynamicImage, previewStaticImage } from '../../tools'
import Timer from '../../components/timer/timer'

const VideoPage = () => {
  const { artistId, videoId } = useParams()
  const navigate = useNavigate()
  const theme = useTheme()
  const [isStarted, setIsStarted] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  const [videoInfo, setVideoInfo] = useState(true)

  useEffect(() => {
    const currentartistIdVideo = videoList?.find(
      (_) => _?.artistId.toString() === artistId.toString(),
    )
    const currentVideoInfo = currentartistIdVideo?.list?.find(
      (_) => _?.videoId.toString() === videoId.toString(),
    )

    if (currentVideoInfo) {
      setVideoInfo(currentVideoInfo)
      setIsMounted(true)
      return
    }
    navigate('/home')
    return () => {}
  }, [artistId, navigate, videoId])

  return !isMounted ? null : (
    <VideoPageLayout theme={theme}>
      <div className="video__box">
        <VideoPlayer videoInfo={videoInfo} />
        {/* <img src={previewDynamicImage(videoInfo?.coverImg)} alt='cover_img' /> */}
      </div>
      <div className="video__action_box">
        <span>
          <h2>{videoInfo?.songName}</h2>
          <p>{videoInfo?.artistName}</p>
        </span>

        <div>
          <Button
            buttonText="Share onTwitter"
            startIcon={previewStaticImage(staticIcons?.twitterWhite)}
            type="#00ACEE"
            left_icon_size={20}
            right_icon_size={10}
            font_weight={400}
            onClick={() => {}}
          />
          <Button
            buttonText="Copy Link"
            startIcon={previewStaticImage(staticIcons?.linkIcon)}
            type="default"
            left_icon_size={15}
            font_weight={400}
            onClick={() => {}}
          />
          <Button
            buttonText="Embeded Item"
            startIcon={previewStaticImage(staticIcons?.embdedIcon)}
            type="default"
            left_icon_size={15}
            font_weight={400}
            onClick={() => {}}
          />
          <span>
            <img
              src={previewDynamicImage(videoInfo?.profileImg)}
              alt="profile_img"
            />
            <span>
              <p>{videoInfo?.artistAddress}</p>
              <p>owner</p>
            </span>
          </span>
        </div>
      </div>

      <div className="video__about_box">
        <h3>About the Collection</h3>
        <p>{videoInfo?.about}</p>
      </div>
      <div className="video__info_box">
        <div>
          <span>
            <p>Edition Price</p>
            <span>
              <img
                src={previewStaticImage(staticIcons?.ethereumIcon)}
                alt="profile_img"
              />
              <h2>{videoInfo?.editionCryptoPrice} ETH</h2>
            </span>

            <p>USD ${videoInfo?.editionPrice}</p>
          </span>
          <span>
            <p>Edition Sold</p>

            {isStarted ? (
              <>
                <h2>{videoInfo?.editionSold}</h2>
              </>
            ) : (
              <h2>3</h2>
            )}

            <p>Limited Editions</p>
          </span>
        </div>

        <div>
          <span>
            {isStarted ? (
              <>
                <p>Editions Remaining</p>
                <h2>{videoInfo?.remains}</h2>
                <div>
                  <span></span>
                </div>
              </>
            ) : (
              <>
                <p>Time Remaining</p>
                <h2>
                  <Timer
                    timeInSecond={videoInfo?.timeReaminsInSeconds}
                    setExpired={() => console.log('expired')}
                  />
                </h2>
              </>
            )}
            <span>
              <Button
                buttonText="Buy Edition"
                type="primary"
                onClick={() => {}}
              />
              <Button
                buttonText="View on OpenSea"
                type="default"
                onClick={() => {}}
              />
            </span>
          </span>
        </div>
      </div>
      <div className="video__history_box">
        <h3>History</h3>
        <HistoryTable>
          <div className="history_table__header">
            <p>Seller</p>
            <p>Time</p>
            <p>Buyer</p>
            <p>Edition Number</p>
            <p>Price Of Edition</p>
          </div>

          {videoInfo?.history?.map((_, idx) => (
            <div key={idx} className="history_table__rows">
              <p>{_?.seller}</p>
              <p>{_?.time}</p>

              <span className="double__deck">
                <p>{_?.buyer?.username}</p>
                <p>{_?.buyer?.address} </p>
              </span>
              <p>{_?.editionNumer}</p>
              <span className="double__deck">
                <p>{_?.priceOfEdition?.cryptoPrice} ETH</p>
                <p>${_?.priceOfEdition?.price} </p>
              </span>
            </div>
          ))}
        </HistoryTable>
      </div>
    </VideoPageLayout>
  )
}

export default VideoPage
