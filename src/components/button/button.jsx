import React from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

const CustomButtonStyled = styled(Button)(
  ({
    type,
    block,
    theme,
    left_icon_size,
    right_icon_size,
    font_weight,
    font_size,
    radius,
    border_width,
  }) => ({
    height: '46px',
    maxWidth: '300px',
    textTransform: 'none',
    borderRadius: radius || 10,
    textAlign: 'center',
    boxShadow: 'none',

    border: '1px solid #3C3C3C',
    ...(type === 'outline' && {
      borderColor: theme.palette.colors.purple,
    }),
    borderWidth: typeof border_width === 'number' ? border_width : 1,

    fontSize: font_size || 14,
    fontWeight: font_weight || 700,
    opacity: 1,

    marginLeft: 5,
    marginRight: 5,
    '&:hover': {
      ...(type === 'primary' && {
        backgroundColor: theme.palette.primary.main,
      }),
      ...(type === 'default' && {
        backgroundColor: '#fff',
      }),
      ...(type === 'dark' && {
        backgroundColor: theme.palette.secondary.main,
      }),
      ...(type === 'gray' && {
        backgroundColor: theme.palette.secondary.gray,
      }),
      ...(type === 'outline' && {
        backgroundColor: '#00000000',
      }),
      ...(type.includes('#') && {
        backgroundColor: type,
      }),

      boxShadow: 'none',
      opacity: 1,
    },
    '& span': {
      width: '100%',

      display: 'flex',
      alignItems: 'center',

      justifyContent: `${
        left_icon_size && right_icon_size ? 'space-between' : 'space-evenly'
      }`,
      '& img:nth-of-type(1)': {
        height: '24px',
        marginRight: '8px',

        objectFit: 'contain',
      },
      '& img:nth-of-type(2)': {
        height: '24px',

        marginLeft: '8px',
        objectFit: 'contain',
      },

      '& > img:nth-of-type(1)': {
        maxWidth: `${left_icon_size || 15}px !important`,
        height: `${left_icon_size || 15}px !important`,
        width: `${left_icon_size || 15}px !important`,
        maxHeight: `${left_icon_size || 15}px !important`,
        objectFit: 'contain',
      },
      '& > img:nth-of-type(2)': {
        maxWidth: `${right_icon_size || 15}px !important`,
        height: `${right_icon_size || 15}px !important`,
        width: `${right_icon_size || 15}px !important`,
        maxHeight: `${right_icon_size || 15}px !important`,
        objectFit: 'contain',
      },
    },
    ...(type === 'primary' && {
      color: '#fff',
      background: theme.palette.primary.main,
    }),
    ...(type === 'default' && {
      color: theme.palette.primary.main,
      background: '#ffffff',
    }),
    ...(type === 'dark' && {
      color: '#fff',
      background: theme.palette.secondary.main,
    }),
    ...(type === 'gray' && {
      color: '#000',
      background: theme.palette.secondary.gray,
    }),
    ...(type === 'outline' && {
      color: theme.palette.colors.purple,
      backgroundColor: '#00000000',
    }),
    ...(type.includes('#') && {
      backgroundColor: type,
    }),

    ...(block && { width: '90%' }),
  }),
)

export const CustomButton = ({
  buttonText,
  startIcon,
  endIcon,
  type,
  block,
  onClick,
  right_icon_size,
  left_icon_size,
  font_size,
  font_weight,
  radius,
  border_width,
}) => {
  return (
    <CustomButtonStyled
      variant="contained"
      type={type}
      block={block}
      onClick={onClick}
      right_icon_size={right_icon_size}
      left_icon_size={left_icon_size}
      font_size={font_size}
      font_weight={font_weight}
      radius={radius}
      border_width={border_width}
    >
      <span>
        {startIcon && (
          <img src={startIcon} alt={buttonText || 'This is button'} />
        )}
        {buttonText}
        {endIcon && <img src={endIcon} alt={buttonText || 'This is button'} />}
      </span>
    </CustomButtonStyled>
  )
}
