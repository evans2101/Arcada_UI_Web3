import React from 'react'
import { styled } from '@mui/material/styles'

const StyledInputField = styled('div')(({ theme, width }) => ({
  width: width || 529,
  height: 60,

  marginBottom: 30,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  padding: '0px 10px',
  '& > p': {
    color: '#ffffff80',
    margin: 0,
    marginLeft: 5,
    fontSize: 13,
  },

  '& input': {
    background: '#5e5e5e',
    border: '1px solid #ffffff40',

    borderRadius: 10,
    width: '100%',
    height: 45,
    outline: 0,
    color: '#fff',
    padding: 10,
    fontSize: '14px',
  },
}))

export const Input = ({
  placeholder,
  width,
  label,
  disabled,
  value,
  onChange,
}) => {
  return (
    <StyledInputField width={width}>
      <p>{label}</p>

      <input
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </StyledInputField>
  )
}
