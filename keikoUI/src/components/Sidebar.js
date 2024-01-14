import dashboardIcon from '../assets/dashboard.png';
import mintIcon from '../assets/mint.png';
import redeemIcon from '../assets/redeem.png';
import liquidityIcon from '../assets/liquidity.png';
import pickaxeIcon from '../assets/pickaxe.png';
import governanceIcon from '../assets/governance.png';
import documentationIcon from '../assets/documentation.png';
import twitterIcon from '../assets/twitterv2.svg';
import discordIcon from '../assets/discordv2.svg';

const Sidebar = ({ setActiveFrame }) => {
  
    return (
      <div className="sidebar">
        <h2 className="sidebar-title">KEIKO FINANCE</h2>
        <hr className="separator" />
        
        <a
          href="#"
          onClick={() => setActiveFrame('main')}
          className="toggleDiv sidebar-link"
        >
          <img
            src={dashboardIcon}
            alt="Icon Description"
            className="link-icon"
          />
          Dashboard
        </a>
  
        <a
          href="#"
          onClick={() => setActiveFrame('mint')}
          className="toggleDiv sidebar-link"
        >
          <img
            src={mintIcon}
            alt="Icon Description"
            className="link-icon"
          />
          Mint KEI
        </a>
  
        <a
          href="#"
          onClick={() => setActiveFrame('redeem')}
          className="toggleDiv sidebar-link"
        >
          <img
            src={redeemIcon}
            alt="Icon Description"
            className="link-icon"
          />
          Redemptions
        </a>
  
        <hr className="separator" />
  
        <a
          href="#"
          className="sidebar-link"
        >
          <img
            src={liquidityIcon}
            alt="Icon Description"
            className="link-icon"
          />
          Add Liquidity
        </a>
  
        <a
          href="#"
          className="sidebar-link"
        >
          <img
            src={pickaxeIcon}
            alt="Icon Description"
            className="link-icon"
          />
          Liquidity Mining
        </a>
  
        <hr className="separator" />
  
        <a
          href="#"
          className="sidebar-link"
        >
          <img
            src={governanceIcon}
            alt="Icon Description"
            className="link-icon"
          />
          Governance
        </a>
  
        <a
          href="#"
          className="sidebar-link"
        >
          <img
            src={documentationIcon}
            alt="Icon Description"
            className="link-icon"
          />
          Documentation
        </a>
  
        <hr className="separator" />
  
        <div>
          <img
            src={twitterIcon}
            alt="Twitter Logo"
            className="social-icon"
          />
          <img
            src={discordIcon}
            alt="Discord Logo"
            className="social-icon"
          />
        </div>
      </div>
    );
  };
  
  export default Sidebar;