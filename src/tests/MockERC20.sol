
//  $$   /$$ /$$$$$$$$ /$$$$$$$
// | $$  /$$/| $$_____/|_  $$_/       KEI is a yield-bearing meta stablecoin by Keiko Finance
// | $$ /$$/ | $$        | $$       it accrues and agreggates yield from other stable tokens like:  
// | $$$$$/  | $$$$$     | $$                         aUSDC,  eUSD and sDAI
// | $$  $$  | $$__/     | $$  
// | $$\  $$ | $$        | $$       Reserves are managed by KEIManager.sol and ReserveController.sol
// | $$ \  $$| $$$$$$$$ /$$$$$$                both controlled by KEIKO Governance
// |__/  \__/|________/|______/
                            
// https://www.github.com/KeikoFinance
// https://www.twitter.com/KeikoFinance                

// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import {ERC20} from "solmate/tokens/ERC20.sol";
import {Owned} from "solmate/auth/Owned.sol";

contract MockERC20 is Owned, ERC20 {

    string private constant NAME = "KEI Stablecoin";
    string private constant SYMBOL = "KEI";
    uint8 private constant DECIMALS = 18;

    constructor(address initialOwner) Owned(initialOwner) ERC20(NAME, SYMBOL, DECIMALS) {}

    function mint(address account, uint256 amount) public onlyOwner() {
        _mint(account, amount);
    }

    function burn(address account, uint256 amount) public onlyOwner() {
        _burn(account, amount);
    }
}