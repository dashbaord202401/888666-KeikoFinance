import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Mainframe from './Mainframe';
import Mintframe from './Mintframe';
import Redeemframe from './Redeemframe'

const FrameController = () => {
  const [activeFrame, setActiveFrame] = useState('main');

  return (
    <div className="frame-controller">
      <Sidebar setActiveFrame={setActiveFrame} />
      {activeFrame === 'main' && <Mainframe />}
      {activeFrame === 'mint' && <Mintframe />}
      {activeFrame === 'redeem' && <Redeemframe />}
    </div>
  );
};

export default FrameController;