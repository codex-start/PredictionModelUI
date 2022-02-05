import React from 'react';

import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="header section__padding" id="home">
     
      
        <div className="header-content">
          <h1 className = "gradient__text">Database Configuration</h1>
            <div className="header-content__input">
              <input type="number" placeholder="Enter Threshold Value for database space" />
              <button type="button">Set</button> 
              
            </div>
            <div className="header-content__input1">
                <button type="button">Update Threshold value</button>
            </div>
            <div className="header-content__input2">
                <input type="email" placeholder= "Enter email for database space notification"/>
                
                
            </div>
            <div className="header-content__input3">
                <input type="number" placeholder= "Enter mob no. for database space notification"/>
            </div>
            <div className="header-content__input4">
                <button type="button">Get connection and generate report for database space availability</button>
            </div>
        </div>
        
    <div className="header-image">
      <img src={ai} />
    </div>d
  </div>
);

export default Header;