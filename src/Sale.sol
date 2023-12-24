
//  /$$   /$$ /$$$$$$$$ /$$$$$$ /$$   /$$  /$$$$$$         /$$$$$$   /$$$$$$  /$$       /$$$$$$$$
// | $$  /$$/| $$_____/|_  $$_/| $$  /$$/ /$$__  $$       /$$__  $$ /$$__  $$| $$      | $$_____/
// | $$ /$$/ | $$        | $$  | $$ /$$/ | $$  \ $$      | $$  \__/| $$  \ $$| $$      | $$      
// | $$$$$/  | $$$$$     | $$  | $$$$$/  | $$  | $$      |  $$$$$$ | $$$$$$$$| $$      | $$$$$   
// | $$  $$  | $$__/     | $$  | $$  $$  | $$  | $$       \____  $$| $$__  $$| $$      | $$__/   
// | $$\  $$ | $$        | $$  | $$\  $$ | $$  | $$       /$$  \ $$| $$  | $$| $$      | $$      
// | $$ \  $$| $$$$$$$$ /$$$$$$| $$ \  $$|  $$$$$$/      |  $$$$$$/| $$  | $$| $$$$$$$$| $$$$$$$$
// |__/  \__/|________/|______/|__/  \__/ \______/        \______/ |__/  |__/|________/|________/

// Official contract for KEIKO public sale.

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {ERC20} from "solmate/tokens/ERC20.sol";
import {Owned} from "solmate/auth/Owned.sol";

contract Sale {
    bool public saleStarted;
    bool public salePaused;
    uint256 public saleDuration = 150; // 1 week - 604406
    uint256 public saleStart;

    address private eUSD = 0xBB526C1F7a1e1730cEE790dBe1026137b54c6c55;
    address private DAI = 0x52410d0c2f01A9fa7b6Dab445215187d30F22D5F;
    address private USDC = 0x8Ee9775Ed9A87024953F7c0A15c6CA8a62D5114C;

    mapping(address => uint256) public userDepositedETH;
    mapping(address => uint256) public userDepositedDAI;
    mapping(address => uint256) public userDepositedEUSD;
    mapping(address => uint256) public userDepositedUSDC;

    mapping(address => bool) alreadyWithdrawETH;
    mapping(address => bool) alreadyWithdrawERC;

    uint256 public depositedEther;
    uint256 public depositedEUSD;
    uint256 public depositedDAI;
    uint256 public depositedUSDC;

    uint256 public saleETHSoftCap = 0.0001 ether; // 1000 ether
    uint256 public saleERCSoftCap = 250 * 1e21; // 250.000

    function depositETH() payable public {
        require(saleStarted == true, "Sale has not started yet");
        require(block.timestamp < saleStart + saleDuration, "Sell has ended");
        require(msg.value > 0, "amount must be greater than 0");
        require(msg.value > 0.00001 ether, "Minimum deposit: 0.1 ETH");

        userDepositedETH[msg.sender] += msg.value;
        depositedEther += msg.value;

    }

    function depositERC20(address _token, uint256 _amount) public {
        require(saleStarted == true, "Sale has not started yet");
        require(block.timestamp < saleStart + saleDuration, "Sell has ended");
        require(_amount > 250 * 1e18, "Minimum deposit: 250");

        if (_token == eUSD || _token == DAI || _token == USDC) {
            if (_token == eUSD) {
                ERC20(_token).transferFrom(msg.sender, address(this), _amount);
                userDepositedEUSD[msg.sender] += _amount;
                depositedEUSD += _amount;

            } else if (_token == DAI) {
                ERC20(_token).transferFrom(msg.sender, address(this), _amount);
                userDepositedDAI[msg.sender] += _amount;
                depositedDAI += _amount;

            } else {
                ERC20(_token).transferFrom(msg.sender, address(this), _amount);
                userDepositedUSDC[msg.sender] += _amount;
                depositedUSDC += _amount;
            }
        }
    }

    function withdrawExcessETH() public {
        require(saleStarted == true, "Sell has not started yet");
        require(block.timestamp > saleStart + saleDuration, "Sale has not ended yet");
        require(depositedEther > saleETHSoftCap, "No excess ETH to withdraw");
        require(userDepositedETH[msg.sender] > 0, "No ETH to withdraw");
        require(alreadyWithdrawETH[msg.sender] == false, "Nothing left to withdraw");

        uint256 excessAmount = depositedEther - saleETHSoftCap;
        uint256 percentage = (userDepositedETH[msg.sender] / depositedEther) * 100;
        uint256 amount = calculateUserExcess(excessAmount, percentage);
    
        payable(msg.sender).transfer(amount);
        alreadyWithdrawETH[msg.sender] = true;
    }

    function withdrawExcessERC20() public {
        require(saleStarted == true, "Sell has not started yet");
        require(block.timestamp > saleStart + saleDuration, "Sale has not ended yet");
        require(alreadyWithdrawERC[msg.sender] == false, "Nothing left to withdraw");

        if (userDepositedEUSD[msg.sender] > 0) {
            require(depositedEUSD > saleERCSoftCap, "No excess eUSD to withdraw");

            uint256 excessAmount = depositedEUSD - saleERCSoftCap;
            uint256 percentage = (userDepositedEUSD[msg.sender] / depositedEUSD) * 100;
            uint256 amount = (excessAmount * percentage) / 100;

            ERC20(eUSD).transfer(msg.sender, amount);
        }

        if (userDepositedDAI[msg.sender] > 0) {
            require(depositedDAI > saleERCSoftCap, "No excess DAI to withdraw");

            uint256 excessAmount = depositedDAI - saleERCSoftCap;
            uint256 percentage = (userDepositedDAI[msg.sender] / depositedDAI) * 100;
            uint256 amount = (excessAmount * percentage) / 100;

            ERC20(DAI).transfer(msg.sender, amount);
        }

        if (userDepositedUSDC[msg.sender] > 0) {
            require(depositedUSDC > saleERCSoftCap, "No excess USDC to withdraw");

            uint256 excessAmount = depositedUSDC - saleERCSoftCap;
            uint256 percentage = (userDepositedUSDC[msg.sender] / depositedUSDC) * 100;
            uint256 amount = (excessAmount * percentage) / 100;

            ERC20(USDC).transfer(msg.sender, amount);
        }

        alreadyWithdrawERC[msg.sender] = true;
    }

    /*function adminWithdraw() onlyOwner {
        require(saleStarted == true, "Sell has not started yet");
        require(block.timestamp > saleStart + saleDuration, "Sale has not ended yet");

        // TO-DO
    }*/

    function startSale() public {
        if (saleStart == 0) {
            saleStart = block.timestamp;
            saleStarted = true;
        }
    }

    function getSaleEndBlock() public view returns (uint256) {
        return saleStart + saleDuration;
    }

    function calculateUserExcess(uint256 _excessAmount, uint256 _percentage) public pure returns (uint256) {
        return (_excessAmount * _percentage) / 100;
    }
}