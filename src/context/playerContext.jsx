import React, { useContext, createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const PlayerContext = createContext(null)

export const PlayerContextProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false)
  const [song, setSong] = useState()

  const contextValue = {
    isActive,
    setIsActive,
    song,
    setSong,
  }
  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  )
}

PlayerContextProvider.propTypes = {
  children: PropTypes.object,
}

export const usePlayer = () => {
  return useContext(PlayerContext)
}
