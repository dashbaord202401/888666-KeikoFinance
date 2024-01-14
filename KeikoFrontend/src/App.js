import React from 'react';

// Import your custom components
import FrameController from './components/FrameController';
import injectedModule from '@web3-onboard/injected-wallets'
import { init, useConnectWallet } from '@web3-onboard/react'
import { ethers } from 'ethers'

import './styles/sidebar.css';

const apiKey = '1730eff0-9d50-4382-a3fe-89f0d34a2070'

const injected = injectedModule()

const infuraKey = '8be6fa12786349f592215c54a6762c96'
const rpcUrl = `https://mainnet.infura.io/v3/${infuraKey}`

// initialize Onboard
init({
  apiKey,
  wallets: [injected],
  chains: [
    {
      id: '0x1',
      token: 'ETH',
      label: 'Ethereum Mainnet',
      rpcUrl
    },
    {
      id: 42161,
      token: 'ARB-ETH',
      label: 'Arbitrum One',
      rpcUrl: 'https://rpc.ankr.com/arbitrum'
    },
    {
      id: '0xa4ba',
      token: 'ARB',
      label: 'Arbitrum Nova',
      rpcUrl: 'https://nova.arbitrum.io/rpc'
    },
    {
      id: '0x2105',
      token: 'ETH',
      label: 'Base',
      rpcUrl: 'https://mainnet.base.org'
    }
  ]
})

// Define your parent component
const App = () => {
  return (
    <div className="app-container">
      <div className="main-content">
        <FrameController />
        {/* You can add more Boxes or other components here */}
      </div>
    </div>
  );
};

// Export your parent component
export default App;
