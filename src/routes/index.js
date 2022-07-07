import React, { useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import MainLayout from '../components/layout/main_layout'
import ArtistProfile from '../pages/artist-profile/artist-profile'
import Charts from '../pages/charts/charts'
import Collections from '../pages/collections/collections'
import Favourites from '../pages/favourites/favourites'
import Home from '../pages/home/home'
import Playlist from '../pages/playlist'
import Settings from '../pages/settings/settings'
import Video from '../pages/video/video'

import { UserProfile } from '../pages/user-profile/user-profile'
import { AccountContext } from '../provider/wallet.provider'

const AppRoutes = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { address } = React.useContext(AccountContext)

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home')
    }
  }, [location])

  return (
    <Routes>
      {/* Public Routes */}
      <Route exact path="/" element={<MainLayout />}>
        <Route path="home" element={<Home />} />
        {/* <Route path='home/:artistName' element={<ArtistProfile />} /> */}

        <Route path=":artistName" element={<ArtistProfile />} />
        <Route path=":artistId/:videoId" element={<Video />} />

        <Route path={`user/${address}`} element={<UserProfile />} />

        <Route path="favourites" element={<Favourites />} />
        <Route path="collections" element={<Collections />} />
        <Route path="settings" element={<Settings />} />
        <Route path="charts" element={<Charts />} />
        <Route path="playlist" element={<Playlist />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
