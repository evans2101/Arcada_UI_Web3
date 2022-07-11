import { styled } from '@mui/material/styles'

export const BoxLayout = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  borderRadius: 10,
  padding: '40px 30px',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '16px',

  '& .box__title': {
    backgroundColor: theme.palette.colors.black,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius: 10,
    padding: 20,
    '& > div > div': {
      borderRadius: 10,
      marginRight: 20,
      height: 80,
      width: 80,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      backgroundColor: '#222126',
      border: '1px solid #C549FF',
      '& > img': {
        borderRadius: 5,
        objectFit: 'cover',
        height: 32,
        width: 70,
      },
    },
    '& p': {
      color: '#fff',
    },
    '& span': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      '& > h1': {
        marginBottom: 5,
      },
      '& span': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'flex-start',
        '& > *': {
          marginRight: 5,
        },

        '& > p:nth-of-type(2)': {
          color: theme.palette.textColors.whiteFade,
        },
      },
    },
  },
}))

export const FavoriteTable = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'center',
  margin: '5px 0px 5px 0px',
  '& p': {
    color: '#fff',
    margin: 0,
    textAlign: 'left',
    fontSize: 14,
  },

  '& .favorite_table__header': {
    height: 40,
    padding: '5px 10px 5px 10px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.colors.black,
    borderRadius: 10,
    margin: '5px 0px 5px 0px',
    '& > *': {
      flex: 1,
    },
    '& > *:nth-of-type(1)': {
      flex: 0.2,
    },
    '& > *:nth-of-type(7)': {
      flex: 0.2,
    },
    '& > *:nth-of-type(2)': {
      minWidth: 150,
    },
    '& > *:nth-of-type(3) ': {
      minWidth: 250,
    },
    '& >   *:nth-of-type(7)': {
      minWidth: 300,
    },
    '& > *:nth-of-type(9)': {
      flex: 0.2,
    },
  },
  '& .favorite_table__rows': {
    '& > *': {
      flex: 1,
    },
    '& > *:nth-of-type(1)': {
      flex: 0.2,
    },

    height: 80,
    padding: '5px 10px 5px 10px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    margin: '5px 0px 5px 0px',

    ':hover': {
      background: 'linear-gradient(180deg, #7070705c 0%, #ab45e747 100%)',
      borderRadius: 10,
      '& .row__single_action': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 1,
      },
    },
    '& .row_index': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      '& > *': {
        margin: '0px 10px 0px 10px',
      },
      '& > img': {
        cursor: 'pointer',
        width: 30,
        height: 30,
        objectFit: 'contain',
      },
      minWidth: 150,
      flex: 1,
    },
    '& .row_info': {
      minWidth: 250,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      '& > img': {
        width: 80,
        height: 50,
        objectFit: 'contain',
        borderRadius: 10,
        marginRight: 10,
      },
      '& > span': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        '& > p:last-child': {
          color: theme.palette.textColors.whiteFade,
          fontSize: 12,
        },
      },
    },
    '& .row__favorite_box': {
      height: 50,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      '& > img': {
        width: 20,
        height: 20,
      },
    },
    '& .row__action_box': {
      minWidth: 300,
      height: 50,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },

    '& .row__single_action': {
      flex: 0.15,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0,
    },
  },
}))
