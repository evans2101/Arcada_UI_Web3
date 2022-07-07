import React, { useContext, useEffect, useState } from 'react'
import Web3Modal from '@soundxyz/web3modal'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import { ethers } from 'ethers'

import SignModal from '../modal/sign-modal'
import { AccountContext } from '../../provider/wallet.provider'
import {
  networkParams,
  toHex,
  truncateAddress,
  providerOptions,
} from '../../utils'

const web3Modal = new Web3Modal({
  cacheProvider: true, // optional
  providerOptions, // required
  // theme: {
  //   background: "rgb(39, 49, 56)",
  //   main: "rgb(199, 199, 199)",
  //   secondary: "rgb(136, 136, 136)",
  //   border: "rgba(195, 195, 195, 0.14)",
  //   hover: "rgb(16, 26, 32)"
  // }
})

const ConnectWalletButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  background: theme.palette.primary.main,
  height: '46px',
  width: '175px',
  textTransform: 'none',
  borderRadius: '10px',
  textAlign: 'center',
  boxShadow: 'none',
  fontWeight: 300,
  border: '1px solid #3C3C3C',
  fontSize: '15px',
  opacity: 0.9,
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    boxShadow: 'none',
    opacity: 1,
  },
  '& span': {
    display: 'flex',
    alignItems: 'center',
    '& img': {
      width: '24px',
      height: '24px',
      marginRight: '8px',
    },
  },
}))

function NavBarButton() {
  const { setAddress } = useContext(AccountContext)
  const [provider, setProvider] = useState()
  const [library, setLibrary] = useState()
  const [account, setAccount] = useState()
  const [signature, setSignature] = useState('')
  const [error, setError] = useState('')
  const [chainId, setChainId] = useState()
  const [network, setNetwork] = useState()
  const [message, setMessage] = useState('')
  const [signedMessage, setSignedMessage] = useState('')
  const [verified, setVerified] = useState()
  const [isOpen, setIsOpen] = useState(false)

  const connectWallet = async (shouldOpenModal) => {
    try {
      const provider = await web3Modal.connect()
      const library = new ethers.providers.Web3Provider(provider)
      const accounts = await library.listAccounts()
      const network = await library.getNetwork()
      setProvider(provider)
      setLibrary(library)
      if (accounts) {
        setAccount(accounts[0])
      }
      setChainId(network.chainId)

      if (shouldOpenModal) {
        setIsOpen(true)
      }
    } catch (error) {
      setError(error)
    }
  }

  const handleNetwork = (e) => {
    const id = e.target.value
    setNetwork(Number(id))
  }

  const handleInput = (e) => {
    const msg = e.target.value
    setMessage(msg)
  }

  const switchNetwork = async () => {
    try {
      await library.provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: toHex(network) }],
      })
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await library.provider.request({
            method: 'wallet_addEthereumChain',
            params: [networkParams[toHex(network)]],
          })
        } catch (error) {
          setError(error)
        }
      }
    }
  }

  const signMessage = async () => {
    if (!library) return
    let nonce = ethers.BigNumber.from(ethers.utils.randomBytes(32))
    let message = `Welcome to Arcadia! \n\nApprove this message to securely log in. \n\nnonce: ${nonce}`
    try {
      const signature = await library.provider.request({
        method: 'personal_sign',
        params: [message, account],
      })
      setSignedMessage(message)
      setSignature(signature)
      setAddress(account)
      setIsOpen(false)
    } catch (error) {
      setError(error)
      disconnect()
    }
  }

  const verifyMessage = async () => {
    if (!library) return
    try {
      const verify = await library.provider.request({
        method: 'personal_ecRecover',
        params: [signedMessage, signature],
      })
      setVerified(verify === account.toLowerCase())
    } catch (error) {
      setError(error)
    }
  }

  const refreshState = () => {
    setAccount()
    setAddress('')
    setChainId()
    setNetwork('')
    setMessage('')
    setSignature('')
    setVerified(undefined)
    setIsOpen(false)
  }

  const disconnect = async () => {
    await web3Modal.clearCachedProvider()
    refreshState()
  }

  useEffect(() => {
    // if (web3Modal.cachedProvider) {
    // 	connectWallet();
    // }
    disconnect()
  }, [])

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts) => {
        console.log('accountsChanged', accounts)
        if (accounts) {
          setAccount(accounts[0])
          setAddress(accounts[0])
        }
      }

      const handleChainChanged = (_hexChainId) => {
        setChainId(_hexChainId)
      }

      const handleDisconnect = () => {
        console.log('disconnect', error)
        disconnect()
      }

      provider.on('accountsChanged', handleAccountsChanged)
      provider.on('chainChanged', handleChainChanged)
      provider.on('disconnect', handleDisconnect)

      return () => {
        if (provider.removeListener) {
          provider.removeListener('accountsChanged', handleAccountsChanged)
          provider.removeListener('chainChanged', handleChainChanged)
          provider.removeListener('disconnect', handleDisconnect)
        }
      }
    }
  }, [provider])

  return (
    <>
      <SignModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        signMessage={signMessage}
        disconnect={disconnect}
      />
      {!account ? (
        <ConnectWalletButton variant="contained" onClick={connectWallet}>
          <span>
            <img
              src={`${process.env.PUBLIC_URL}/assets/icons/Wallet.png`}
              alt="connect"
            />{' '}
            Connect Wallet
          </span>
        </ConnectWalletButton>
      ) : (
        <ConnectWalletButton variant="contained" onClick={disconnect}>
          <span>
            <img
              src={`${process.env.PUBLIC_URL}/assets/icons/Wallet.png`}
              alt="connect"
            />
            {signature ? truncateAddress(account) : 'Connect Wallet'}
          </span>
        </ConnectWalletButton>
      )}
    </>
  )
}

export default NavBarButton
