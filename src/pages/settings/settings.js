import React, { useContext } from 'react'

import { useTheme } from '@mui/material'
import { SeetingBoxLayout } from './setting-style'
import { IconButton, NormalButton } from '../../components/button'
import { staticIcons, settingContent } from '../../data/data'
import { previewDynamicImage, previewStaticImage } from '../../tools'
import { CameraIcon, EditIcon } from '../../svg'

import { Input, InputArea, IconInput } from '../../components/search_field'
import { AccountContext } from '../../provider/wallet.provider'

export const Setting = () => {
  const theme = useTheme()

  const { address } = useContext(AccountContext)
  const [mode, setMode] = React.useState('account')
  const [bio, setBio] = React.useState('')

  return (
    <SeetingBoxLayout theme={theme}>
      <div className="setting__sidebar">
        <h1>Settings</h1>
        <span>
          <span
            className={mode === 'account' ? 'setting_sidebir__active' : ''}
            onClick={() => setMode('account')}
          >
            Account
          </span>
          <span
            className={mode === 'social' ? 'setting_sidebir__active' : ''}
            onClick={() => setMode('social')}
          >
            Add Social
          </span>
        </span>
      </div>
      {mode === 'account' ? (
        <div className="setting__content">
          <div className="setting__content_main">
            <span className="setting__content_header">
              <span className="cover">
                <img
                  src={previewDynamicImage(settingContent?.account?.coverImg)}
                  alt="plus"
                />
                <IconButton icon={<EditIcon />} />
              </span>
              <span className="profile">
                <img
                  src={previewDynamicImage(settingContent?.account?.profileImg)}
                  alt="plus"
                />
                <IconButton icon={<CameraIcon />} />
              </span>
            </span>
            <span className="input_form_data">
              <Input
                label="Username"
                width={'40%'}
                value={settingContent?.account?.userName}
              />
              <Input
                value={address}
                disabled={true}
                label="Wallet"
                width={'60%'}
              />
              <InputArea
                label="Bio"
                width={'100%'}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                maxCount={1000}
                currentCount={bio?.length}
              />
            </span>
          </div>

          <NormalButton title="Save Changes" />
        </div>
      ) : (
        <div className="social__content">
          <span className="social__content__form">
            <IconInput
              label="Instagram link"
              icon={previewStaticImage(staticIcons?.instagram)}
              width={'50%'}
            />
            <IconInput
              label="Twitter link"
              icon={previewStaticImage(staticIcons?.twitter)}
              width={'50%'}
            />
            <IconInput
              label="Linkedin link"
              icon={previewStaticImage(staticIcons?.linkedin)}
              width={'50%'}
            />
            <IconInput
              label="Opensea link"
              icon={previewStaticImage(staticIcons?.opensea)}
              width={'50%'}
            />
            <IconInput
              label="TikTok link"
              icon={previewStaticImage(staticIcons?.tiktok)}
              width={'50%'}
            />
            <IconInput
              label="Facebool link"
              icon={previewStaticImage(staticIcons?.facebook)}
              width={'50%'}
            />
          </span>

          <NormalButton title="Save Changes" />
        </div>
      )}
    </SeetingBoxLayout>
  )
}

export default Setting
