// Import images
import dashboardIcon from '../assets/dashboard.png';
import ethLogo from '../assets/ethlogo.svg';
import usdcLogo from '../assets/usdc.svg';
import daiLogo from '../assets/dai.svg';
import keikoLogo from '../assets/KEIKOLOGO.png';

import injectedModule from '@web3-onboard/injected-wallets'
import { init, useConnectWallet } from '@web3-onboard/react'
import { ethers } from 'ethers'
import React, { useState } from 'react';

import { showDivSidebar, showDivSaleButtons, setMaxValue, redirectToContract } from '../utils/utils.js';

const DashboardContent = () => {

    const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()

    // create an ethers provider
    let ethersProvider

    if (wallet) {
        // if using ethers v6 this is:
        ethersProvider = new ethers.BrowserProvider(wallet.provider, 'any')
        //ethersProvider = new ethers.providers.Web3Provider(wallet.provider, 'any')
    }

    return (
      <div id="div1" className="dashboard-content contentDiv" style={{ display: 'block' }}>
          <div className="dashboard">
              Dashboard
          </div>
          <div className="action-buttons">
              <button onClick={() => showDivSaleButtons('depBox1')} id="depositeth" className="action-btn">Deposit ETH</button>
              <button onClick={() => showDivSaleButtons('depBox2')} id="depositerc" className="action-btn">Deposit ERC20</button>
              <button onClick={() => showDivSaleButtons('withdrawBox')} id="withdraw" className="action-btn">Withdraw</button>
              <button onClick={() => showDivSaleButtons('claimBox')} id="claim" className="action-btn">&nbsp;&nbsp;Claim&nbsp;&nbsp;</button>
          </div>
  
          <div className="data-box">
              <span className="databox-title">WEO WEO Statistics <img src={dashboardIcon} alt="Icon Description" className="link-icon" /></span>
              <hr className="databox-separator" />
              <span className="databox-text">ETH Cap: 1000 ETH</span>
              <br />
              <span className="databox-text">eUSD Cap: 250k eUSD</span>
              <br />
              <span className="databox-text">DAI Cap: 250k DAI</span>
              <br />
              <span className="databox-text">USDC Cap: 250k USDC</span>
              <hr className="databox-separator" />
              <span className="databox-text">ETH Deposited: 764.5 ETH</span>
              <br />
              <span className="databox-text">eUSD Deposited: 112.881 eUSD</span>
              <br />
              <span className="databox-text">DAI Deposited: 27.040 DAI</span>
              <br />
              <span className="databox-text">USDC Deposited: 451.000 USDC</span>
          </div>
  
          {/* DEPOSIT ETH BOX */}
          <div id="depBox1" className="main-box contentSaleBox">
              <div className="header">
                  <img src={ethLogo} alt="Icon Description" className="icon-img" />
                  <span className="title">Deposit ETH</span>
              </div>
              <hr className="separator" />
              <div className="available">Available: 0 ETH</div>
              <div className="input-container">
                  <input type="text" className="input-bar" placeholder="Enter amount" />
                  <button className="max-btn" onClick={setMaxValue}>MAX</button>
              </div>                
              <button className="deposit-btn">Deposit</button>
          </div>
  
          {/* DEPOSIT ERC20 BOX */}
          <div id="depBox2" className="main-box contentSaleBox" style={{ display: 'none' }}>
              <div className="header">
                  <img src={usdcLogo} alt="Icon Description" className="icon-img" />
                  <span className="title">Deposit ERC20</span>
              </div>
              <hr className="separator" />
              <div className="available">Available: 0 ETH</div>
              <div className="input-container">
                  <input type="text" className="input-bar" placeholder="Enter amount" />
                  <button className="max-btn" onClick={setMaxValue}>MAX</button>
              </div>                
              <button className="deposit-btn">Deposit</button>
          </div>
          
          {/* WITHDRAW */}
          <div id="withdrawBox" className="main-box contentSaleBox" style={{ display: 'none' }}>
              <div className="header">
                  <img src={daiLogo} alt="Icon Description" className="icon-img" />
                  <span className="title">Withdraw ETH & ERC20</span>
              </div>
              <hr className="separator" />
              <div className="available">Available: 0 ETH</div>
              <button className="deposit-btn">Withdraw ETH</button>
              <hr className="separator" />
              <div className="available">Available: 5k eUSD, 300 DAI, 50k USDC </div>               
              <button className="deposit-btn">Withdraw Tokens</button>
          </div>
          
          {/* CLAIM KEIKO */}
          <div id="claimBox" className="main-box contentSaleBox" style={{ display: 'none' }}>
              <div className="header">
                  <img src={keikoLogo} alt="Icon Description" className="icon-img" />
                  <span className="title">Claim KEIKO</span>
              </div>
              <hr className="separator" />
              <div className="available">Available: 0 KEIKO</div>
              <div className="input-container">
                  <input type="text" className="input-bar" placeholder="Enter amount" />
                  <button className="max-btn" onClick={setMaxValue}>MAX</button>
              </div>                
              <button className="deposit-btn">Claim KEIKO</button>
          </div>
  
          <div onClick={redirectToContract} className="info-box">
              <div className="available">
                  Users can deposit ETH or approved ERC20 tokens for the sale. 
                  Each token has a deposit limit. If exceeded, the excess can be claimed proportionally.<br /><br />
                  After the sale, you can withdraw your share. <br />Click for details.
              </div>
          </div>
          
          <div className='ac-trigger svelte-1o9vinu'></div>
          <button className='connect-wallet' disabled={connecting} onClick={() => (wallet ? disconnect(wallet) : connect())}>
          {connecting ? 'connecting' : wallet ? 'disconnect' : 'connect'}
          </button>
      </div>
    );
  };
  
  export default DashboardContent;