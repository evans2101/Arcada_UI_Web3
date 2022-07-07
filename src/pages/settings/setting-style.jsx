import { styled } from '@mui/material/styles'

export const SeetingBoxLayout = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  height: 'calc(100vh - 120px);',

  borderRadius: 10,
  padding: '40px 30px',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',

  gap: '16px',

  '& > .setting__sidebar': {
    borderRadius: 10,
    alignSelf: 'flex-start',
    backgroundColor: '#ffffff30',
    minWidth: 300,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflow: 'hidden',
    '& > h1': {
      fontSize: 24,
      fontWeight: 700,
      padding: 20,
    },
    '& > span': {
      cursor: 'pointer',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      justifyContent: 'flex-end',
      '& > span': {
        minHeight: 46,
        padding: '15px 20px',
        fontSize: 15,
        fontWeight: 600,
      },
      '& > .setting_sidebir__active': {
        background:
          'linear-gradient(90deg, rgba(171, 69, 231, 0.75) 0%, rgba(171, 69, 231, 0) 100%);',
      },
    },
  },
  '& > .setting__content': {
    borderRadius: 10,

    backgroundColor: '#ffffff30',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& > .setting__content_main': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      '& > .setting__content_header': {
        width: '100%',
        padding: 15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& .cover': {
          borderRadius: 10,
          position: 'relative',
          '& > img': {
            width: '100%',
          },
          '& > button': {
            position: 'absolute',
            right: -5,
            bottom: 0,
          },
        },
        '& .profile': {
          marginTop: -50,
          width: 120,
          height: 120,
          borderRadius: 10,
          position: 'relative',
          '& > img': {
            width: '100%',
            height: '100%',
            borderRadius: 10,
          },
          '& > button': {
            position: 'absolute',
            right: -7,
            bottom: -3,
          },
        },
      },
      '& > .input_form_data': {
        width: '100%',
        padding: '0px 20px',
        marginTop: 50,

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        '& > span': {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'stretch',
          justifyContent: 'flex-start',
        },
      },
    },
  },
  '& > .social__content': {
    width: '100%',

    borderRadius: 10,

    backgroundColor: '#ffffff30',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& > .social__content__form': {
      padding: 30,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
    },
  },
}))
