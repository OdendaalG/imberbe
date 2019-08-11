import React from 'react';
import bushImg from '../img/top.jpg';
import './MainInfo.css';

function MainInfo(){
  return(
    // <div className='flex item-center'>
    //   <div className='pa3 f3 ma3 outline smash'>Private Wildlife Reserve</div>
    // </div>
    <div id="Main">
      <div className="dt mw8 center pt0 pb5 pv4-m pv6-ns">
        <div className="db dtc-ns v-mid-ns">
          <img src={bushImg} alt="Sunset with tree in foreground" className="w-100 mw7 w5-ns" />
        </div>
        <div className="db dtc-ns v-mid ph2 pr0-ns pl3-ns f7 white">
          <p className="lh-copy">
            Imberbe is a private wildlife reserve located in the Balule reserve,
            in the South African Lowveld. It is a big 5 reserve, adjoining and
            open to the Klaserie game reserve and the bigger Kruger National
            Park. This exclusive and privately owned reserve is an undeveloped
            reserve and is home to the undisturbed natural beauty and wildlife of
            the Lowveld.
          </p>
          <p className="lh-copy">
            Imberbe is 1246 hectares in size, and to the south of Imberde
            borders the Olifants River Game reserve and on the eastern side
            Klaserie game reserve.
          </p>
          <p className="lh-copy">
            The more than 50km of gravel and grass game drive trails crosses
            through the reserve and have been carefully planned to not disturb
            the pristine nature and wildlife. 2 solar powered water holes provide
            relief for wildlife that passes through. 5 km to the north flows the
            Olifants river to the east coast and to the south of Imberbe is
            “Double dam” that is fed from storm water run-off.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainInfo;
