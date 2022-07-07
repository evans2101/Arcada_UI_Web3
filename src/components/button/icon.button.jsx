import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

const IconButtonStyled = styled(Button)(({ theme }) => ({
  width: 35,
  height: 35,
  minWidth: 35,
  padding: 6,
  textTransform: 'none',
  borderRadius: 8,
  textAlign: 'center',
  boxShadow: 'none',
  border: 0,
  backgroundColor: theme.palette.colors.lighterPink,
  '&:hover': {
    backgroundColor: theme.palette.colors.lighterPink,
  },

  '& > span': {
    width: '100%',

    display: 'flex',
    alignItems: 'center',

    justifyContent: 'center',
    '& > svg': {
      filter:
        'invert(100%) sepia(100%) saturate(0%) hue-rotate(309deg) brightness(105%) contrast(101%);',
    },
  },
}))
export const IconButton = ({ icon }) => {
  return (
    <IconButtonStyled>
      <span>{icon}</span>
    </IconButtonStyled>
  )
}
