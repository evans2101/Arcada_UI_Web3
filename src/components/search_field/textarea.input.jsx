import { styled } from '@mui/material/styles'

const StyledInputAreaField = styled('div')(({ theme, width }) => ({
  width: width || 529,
  height: '-webkit-fill-available',
  position: 'relative',

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
    height: 15,
  },

  '& > span': {
    color: '#ffffff80',

    fontSize: 10,
    position: 'absolute',
    right: 20,
    bottom: 10,
  },

  '& textarea': {
    background: '#5e5e5e',
    border: '1px solid #ffffff40',
    resize: 'none',
    borderRadius: 10,
    width: '100%',
    height: 145,
    outline: 0,
    color: '#fff',
    padding: 10,
    fontSize: '14px',
  },
}))

export const InputArea = ({
  placeholder,
  width,
  label,
  value,
  onChange,
  maxCount,
  currentCount,
}) => {
  return (
    <StyledInputAreaField width={width}>
      <p>{label}</p>

      <textarea
        maxLength={maxCount}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />

      <span>
        {currentCount}/{maxCount}
      </span>
    </StyledInputAreaField>
  )
}
