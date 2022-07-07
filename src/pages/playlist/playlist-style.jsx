import { styled } from '@mui/material/styles'

export const SelectStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '20px',
  alignItems: 'center',

  '& label': {
    fontWeight: '500',
    fontSize: '13px',
    color: '#FFFFFF',
    opacity: '0.5',
  },
  '& select': {
    background: 'rgb(255 255 255 / 10%)',
    borderRadius: '8px',
    padding: '10px 20px',
    height: 46,
    border: 0,
    color: 'rgb(255 255 255 / 90%)',
    '& option': {
      background: 'rgb(40 39 43)',
      color: '#fff',
    },
  },
}))

export const PlayListBoxLayout = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  borderRadius: 10,
  padding: '40px 30px',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '16px',

  '& span.pl_header': {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  '& .pl_list': {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },

  '& .box__title': {
    backgroundColor: theme.palette.colors.black,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 10,
    padding: 20,
    '& > div': {
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

export const PlaylistBox = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 320,
  margin: 10,
  '& > .pl_plbox__img': {
    cursor: 'pointer',
    width: 300,
    height: 300,
    borderRadius: 15,

    padding: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#222126',
    border: '2px solid #C549FF',
    '& > img': {
      borderRadius: 10,
      objectFit: 'cover',
      // height: 'calc(50% - 4px)',
      // width: '100%',
    },
  },
  '& > .pl_plbox__title': {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginTop: 15,
    padding: 10,
    '& > p ': {
      color: '#ffffff60',

      marginBottom: 0,
      fontSize: 12,
      fontWeignt: 500,
    },
    '& > h2 ': {
      color: '#fff',

      marginBottom: 0,
      fontSize: 16,
      fontWeignt: 800,
    },
  },
}))

export const NewPlaylistBox = styled('div')(({ theme }) => ({
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: 300,
  width: 300,
  margin: 10,
  borderRadius: 15,
  border: '2px dashed #323139',
  background:
    'linear-gradient(#323139 0 0) padding-box,   linear-gradient(to bottom, #FF7449, #AB45E7) border-box',

  '& > img': {
    borderRadius: 10,
    backgroundColor: theme.palette.colors.pink,
    padding: 10,
    width: 40,
  },
  '& > h2': {
    fontSize: 16,
    fontWeignt: 700,
    marginTop: 10,
  },
}))

//-----------------------------------------------
//------------- new play list styles ------------
//-----------------------------------------------

export const NewPlaylistBoxLayout = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  borderRadius: 10,
  padding: '40px 30px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  justifyContent: 'center',
  '& .newpl__info': {
    flex: 1,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: '16px',
    width: '100%',

    '& .box__title': {
      // width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      backgroundColor: theme.palette.colors.black,
      borderRadius: 10,
      padding: 20,
      '& > span': {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',

        '& > div': {
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
            // height: 32,
            // width: 70,
          },
        },
        '& p': {
          color: '#fff',
        },
        '& span': {
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          '& > h1': {
            marginBottom: 5,
          },
          '& .newpl__sub': {
            marginTop: 5,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'baseline',
            justifyContent: 'flex-start',
            '& > *': {
              marginRight: 5,
            },

            '& p': {
              fontSize: 12,
              fontWeight: 500,
            },
            '& h3': {
              fontSize: 12,
              fontWeight: 700,
            },

            '& > p:nth-of-type(2)': {
              color: theme.palette.textColors.whiteFade,
            },
          },
        },
      },
      '& > div': {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',

        '& > *:nth-of-type(1)': {
          marginRight: 15,
        },
      },
    },
  },

  '& .newpl__search_box': {
    backgroundColor: theme.palette.colors.black,
    borderRadius: 10,
    padding: '40px 30px',
    minWidth: 400,
    marginLeft: 15,
    '& > h2': {
      marginBottom: 10,
    },

    '& > .searched_list': {
      marginTop: 15,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      '& > .searched_list__single_row': {
        background: '#212124',
        borderRadius: 10,
        padding: 8,
        margin: '10px 0px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',

        '& > img': {
          width: 53,
          height: 53,
          objectFit: 'cover',
          borderRadius: 6,
        },

        '& > button': {
          height: 35,
          alignSelf: 'center',
          '& img': {
            filter:
              'invert(32%) sepia(76%) saturate(2938%) hue-rotate(261deg) brightness(95%) contrast(89%);',
          },
        },
        '& > span': {
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          marginLeft: 10,
          '& > h3': {
            color: '#fff',
            fontWeight: 700,
            fontSize: 14,
            margin: 0,
            marginBottom: 15,
          },
          '& > p': {
            fontWeight: 500,
            fontSize: 12,
            color: '#ffffff60',
            margin: 0,
          },
        },
      },
    },
  },
  '& .nwpl_back_btn': {
    position: 'absolute',
    right: 20,
    bottom: 20,
    '& > button': {
      transform: 'rotate(180deg)',
    },
  },
}))

export const PlaylistTable = styled('div')(({ theme }) => ({
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
    '& > *:nth-of-type(2)': {
      minWidth: 150,
    },
    '& > *:nth-of-type(3) ': {
      minWidth: 250,
    },

    '& > *:nth-of-type(8)': {
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
      justifyContent: 'center',
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
