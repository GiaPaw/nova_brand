import React, { useState } from 'react';
import "./Tab.scss"

const Tab = ({children}) => {
  const [activeTab, setActiveTab] = useState(0);



  return (
    <div className="tab-container">
      <div className="tabs">
        {React.Children.map(children,(tab, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.props.lable}
          </div>
        ))}
      </div>
      <div className="tab-content">{React.Children.toArray(children)[activeTab]}</div>
    </div>
  );
};

export default Tab;
