pragma solidity ^0.8.0;
/*
import "forge-std/Test.sol";
import "../KEIManager.sol";
import "./MockERC20.sol";


contract KEIManagerTest is Test {
    KEIManager keiManager;
    MockERC20 stablecoin;

    function setUp() public {
        stablecoin = new MockERC20("Mock Stablecoin", "MSC", 18);
        keiManager = new KEIManager(address(this), address(stablecoin));
    }

    function testSuccessfulDepositAndMint() public {
        uint256 depositAmount = 1000 * 10 ** stablecoin.decimals();
        stablecoin.mint(address(this), depositAmount);
        stablecoin.approve(address(keiManager), depositAmount);

        vm.prank(address(this));
        keiManager.depositAndMint(address(stablecoin), depositAmount);

        assertEq(keiManager.getStablecoinReserve(address(stablecoin)), depositAmount);
    }

    function testDepositWithUnapprovedStablecoin() public {
        MockERC20 unapprovedStablecoin = new MockERC20("Unapproved Stablecoin", "USC", 18);
        uint256 depositAmount = 1000 * 10 ** unapprovedStablecoin.decimals();
        unapprovedStablecoin.mint(address(this), depositAmount);
        unapprovedStablecoin.approve(address(keiManager), depositAmount);

        vm.expectRevert("Stablecoin not supported.");
        vm.prank(address(this));
        keiManager.depositAndMint(address(unapprovedStablecoin), depositAmount);
    }

    function testDepositWithZeroAmount() public {
        vm.expectRevert("Amount must be greater than 0");
        vm.prank(address(this));
        keiManager.depositAndMint(address(stablecoin), 0);
    }

    function testDepositWhenContractIsPaused() public {
        keiManager.pauseContract(true);
        uint256 depositAmount = 1000 * 10 ** stablecoin.decimals();

        vm.expectRevert("Protocol paused");
        vm.prank(address(this));
        keiManager.depositAndMint(address(stablecoin), depositAmount);
    }

    function testSuccessfulBurnAndRedeem() public {
        // This test requires additional setup and understanding of how KEI tokens are burned and redeemed.
        // Implement according to your contract's logic.
    }

    function testBurnAndRedeemWhenRedemptionsAreDisabled() public {
        // Similar to the above, this test depends on the specific mechanics of your KEI token and ReserveController.
    }

    function testBurnAndRedeemWithInvalidToken() public {
        // Implementation depends on the KEI token and ReserveController's behavior.
    }

    function testAddAndRemoveStablecoin() public {
        address newStablecoin = address(new MockERC20("New Stablecoin", "NSC", 18));
        keiManager.addStablecoin(newStablecoin);

        assertTrue(keiManager.isWhitelisted(newStablecoin));
        
        keiManager.removeStablecoin(0);
        assertFalse(keiManager.isWhitelisted(newStablecoin));
    }

    function testPauseAndUnpauseContract() public {
        keiManager.pauseContract(true);
        assertTrue(keiManager.contractPaused());

        keiManager.pauseContract(false);
        assertFalse(keiManager.contractPaused());
    }

    function testSetRegistryAndReserveController() public {
        address newRegistry = address(new MockERC20("New Registry", "NR", 18));
        address newReserveController = address(new MockERC20("New Reserve Controller", "NRC", 18));

        keiManager.setRegistry(newRegistry);
        keiManager.setReserveController(newReserveController);

        assertEq(address(keiManager.registry()), newRegistry);
        assertEq(address(keiManager.reserveController()), newReserveController);
    }
}*/