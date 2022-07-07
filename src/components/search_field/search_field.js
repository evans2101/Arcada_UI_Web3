import React from 'react'
import { styled } from '@mui/material/styles'
// import Box from '@mui/material/Box';

const StyledSearchField = styled('div')(
  ({ theme, width, radius, border, background }) => ({
    width: width || 529,
    height: '46px',
    background: background || theme.palette.secondary.light,
    border: '1px solid #3C3C3C',
    borderWidth: border || 0,
    borderRadius: radius || 10,
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0px 10px',
    alignItems: 'center',
    '& img': {
      width: '20px',
      height: '20px',
    },

    '& > img': {
      cursor: 'pointer',
    },

    '& .search-input': {
      flex: 1,

      display: 'flex',
      alignItems: 'center',

      '& p': {
        color: '#ffffff40',
        margin: 0,
      },
      '& input': {
        marginRight: 10,
        marginLeft: 10,
        background: 'transparent',
        border: 0,
        outline: 0,
        color: '#fff',
        opacity: 0.4,
        fontSize: '14px',
        flex: 1,
      },
      '& input#bolden': {
        color: '#fff',
        fontWeight: 700,
        opacity: 1,
      },
    },
  }),
)

const SearchField = ({
  rightIcon = `${process.env.PUBLIC_URL}/assets/icons/mic.png`,
  placeholder = 'Search for Artists,Videos,or Genres',
  width,
  radius,
  border,
}) => {
  return (
    <StyledSearchField width={width} radius={radius} border={border}>
      <div className="search-input">
        {/* <p> Playelist Name : </p> */}
        <img src={`${process.env.PUBLIC_URL}/assets/icons/search.png`} alt="" />
        <input placeholder={placeholder} />
      </div>
      {rightIcon ? <img src={rightIcon} alt="" /> : null}
    </StyledSearchField>
  )
}

export const SearchFieldDark = ({
  placeholder = 'enter playlist name here ...',
  width,
  radius,
  border,
  background,
  value,
  onChange,
}) => {
  return (
    <StyledSearchField
      width={width}
      radius={radius}
      border={border}
      background={background}
    >
      <div className="search-input">
        <p> Playelist Name : </p>
        <input
          id="bolden"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </StyledSearchField>
  )
}

export default SearchField
