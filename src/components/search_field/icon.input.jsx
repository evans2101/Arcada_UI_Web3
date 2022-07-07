import { styled } from '@mui/material/styles'

const StyledIconInputField = styled('div')(({ theme, width }) => ({
  width: width || 529,
  height: 55,
  marginTop: 10,

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

  '& > span': {
    background: '#5e5e5e',
    border: '1px solid #ffffff40',
    height: 40,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5,
    width: '100%',
    '& > img': {
      height: 20,
      width: 20,
      margin: '0px 5px',
      objectFit: 'contain',
    },
    '& > span': {
      margin: '0px 5px',
      width: 1,
      height: 20,
      background: '#ffffff30',
    },
    '& > input': {
      flex: 1,
      background: 'transparent',
      //   background: 'red',
      border: 0,
      padding: '0px 5px',

      outline: 0,
      color: '#fff',
      //   padding: 10,
      fontSize: 14,
    },
  },
}))

export const IconInput = ({ placeholder, width, label, icon }) => {
  return (
    <StyledIconInputField width={width}>
      <p>{label}</p>
      <span>
        <img src={icon} alt="icon" />
        <span></span>
        <input placeholder={placeholder} />
      </span>
    </StyledIconInputField>
  )
}
