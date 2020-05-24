import React from 'react';
import './BottomInfo.css';
import env from '../img/enviroment.png';
import wld from '../img/wildlife.png';
import loc from '../img/location.png';

function BottomInfo(){
  return(
    <div className="dt-ns dt--fixed-ns" id="Bottom">
      <div className="hover-enlarge dtc-ns tc pv4 ph2">
        <a href='./index.js'><img src={env} alt='Bush veld and road' /></a>
      </div>
      <div className="hover-enlarge dtc-ns tc pv4 ph2">
        <a href='./index.js'><img src={wld} alt='Bush veld and road' /></a>
      </div>
      <div className="hover-enlarge dtc-ns tc pv4 ph2">
        <a href='./index.js'><img src={loc} alt='Bush veld and road' /></a>
      </div>
    </div>
  );
}
export default BottomInfo;
