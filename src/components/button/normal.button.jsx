import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

const NormalButtonStyled = styled(Button)(({ theme }) => ({
  //   width: 35,
  height: 35,
  minWidth: 35,
  padding: '8px 20px',
  textTransform: 'none',
  borderRadius: 8,
  textAlign: 'center',
  boxShadow: 'none',
  border: 0,
  margin: 20,
  backgroundColor: theme.palette.colors.lighterPink,
  '&:hover': {
    backgroundColor: theme.palette.colors.lighterPink,
  },

  '& > span': {
    width: '100%',
    fontWeight: 300,
    fontSize: 12,
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    justifyContent: 'center',
  },
}))
export const NormalButton = ({ title }) => {
  return (
    <NormalButtonStyled>
      <span>{title}</span>
    </NormalButtonStyled>
  )
}
