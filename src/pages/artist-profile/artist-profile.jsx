import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CustomButton } from '../../components/button/button'
import SongCard from '../../components/cards/song_card'
import { Box, useTheme, Grid } from '@mui/material'
import { ArtistProfileStyled } from './asrtist-profile-styled'
import { SongSamples, artistSamples, staticIcons } from '../../data/data'
import { previewDynamicImage, previewStaticImage } from '../../tools'

const ArtistProfile = () => {
  const { artistName } = useParams()
  const navigate = useNavigate()
  const theme = useTheme()
  const [artistData, setArtistData] = useState()

  useEffect(() => {
    const currentArtistProfileUrl = artistSamples?.find(
      (_) => _?.artistProfileUrl === artistName,
    )
    if (currentArtistProfileUrl) {
      setArtistData(currentArtistProfileUrl)
      return
    }
    navigate('/home')
    return () => {}
  }, [artistName, navigate])

  return (
    <Box
      bgcolor={theme.palette.secondary.light}
      sx={{ borderRadius: '10px', padding: '40px 30px' }}
    >
      <ArtistProfileStyled>
        <div className="artist_profile__header">
          <img
            className="artist_profile__header_cover_img"
            src={previewDynamicImage(artistData?.coverImg)}
            alt="main img"
          />
          <span>
            <img
              className="artist_profile__header_profile_img"
              src={previewDynamicImage(artistData?.profileImg)}
              alt="profile img"
            />
            <span>
              <span>
                <h2>{artistData?.name}</h2>
                <img
                  className="artist_profile__verify-tick-icon"
                  alt="verify tick"
                  src={previewStaticImage(staticIcons?.verifyTick)}
                />
              </span>
              <p>{artistData?.artistId}</p>
            </span>
          </span>
        </div>

        <div className="artist_profile__body">
          <div className="artist_profile__portfolio">
            <h3>Portfolio</h3>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {SongSamples?.map((item, idx) => {
                return (
                  <Grid key={idx} item sm={12} md={12} lg={6} xl={6} xx={4}>
                    <SongCard
                      {...item}
                      showPrice={true}
                      addToPlayListIcon={true}
                    />
                  </Grid>
                )
              })}
            </Grid>
          </div>
          <div className="artist_profile__info">
            <div className="artist_profile__bio">
              <h3>Bio</h3>
              <p>{artistData?.description}</p>
            </div>
            <div className="artist_profile__social">
              <h3>Social Media</h3>
              <span>
                <CustomButton
                  buttonText="Twitter"
                  startIcon={previewStaticImage(staticIcons?.twitter)}
                  endIcon={previewStaticImage(staticIcons?.chevronRight)}
                  type="#00455F"
                  left_icon_size={20}
                  right_icon_size={10}
                  onClick={() => {}}
                />
                <CustomButton
                  buttonText="Instagram"
                  startIcon={previewStaticImage(staticIcons?.instagramWhite)}
                  endIcon={previewStaticImage(staticIcons?.chevronRight)}
                  type="#49171A"
                  left_icon_size={20}
                  right_icon_size={10}
                  onClick={() => {}}
                />
              </span>
            </div>
          </div>
        </div>
        {/* <div className='artist-profile__profile'>
					<img className='artist-profile__profile-img' src={previewDynamicImage(artistData?.profileImg)} alt='profile img' />
					<div className='artist-profile__title'>
						{artistData?.name}
						<img className='artist-profile__verify-tick-icon' alt='verify tick' src={previewStaticImage(staticIcons?.verifyTick)} />
					</div>
					<div className='artist-profile__account-social'>
						<a href='#' className='artist-profile__ether-account artist-profile__icon'>
							<img className='artist-profile__ether-icon' alt='ether' src={previewStaticImage(staticIcons?.etherWhite)} />
							{artistData?.address}
						</a>
						<a href='#' className='artist-profile__twitter artist-profile__icon'>
							<img className='artist-profile__twitter' alt='ether' src={previewStaticImage(staticIcons?.twitterWhite)} />
						</a>
						<a href='#' className='artist-profile__instagram artist-profile__icon'>
							<img className='artist-profile__instagram' alt='ether' src={previewStaticImage(staticIcons?.instagramWhite)} />
						</a>
					</div>
					<div className='artist-profile__description'>{artistData?.description}</div>
					<div className='artist-profile__btns'>
						<CustomButton buttonText='Listed Collections (2)' type={activeTab === 'listed' ? 'primary' : 'dark'} onClick={() => setActiveTab('listed')} />

						<CustomButton buttonText='Sold Collections (25)' type={activeTab === 'sold' ? 'primary' : 'dark'} onClick={() => setActiveTab('sold')} />

						<CustomButton
							buttonText='New Collection'
							startIcon={previewStaticImage(staticIcons?.plus)}
							type={activeTab === 'new' ? 'primary' : 'dark'}
							onClick={() => setActiveTab('new')}
						/>
					</div>
				</div> */}
      </ArtistProfileStyled>
    </Box>
  )
}

export default ArtistProfile
