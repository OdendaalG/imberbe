import React, {Component} from 'react';
// import logo from './img/logo.png';
import './NavBar.css'

class NavBar extends Component {
  render(){
    return(
      <nav id='NavBar' className="db dt-l w-100 border-box pa3 ph5-l ">
        <a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="./index.js" title="Home">
          <div className='smash f1'>IMBERBE</div>
        </a>
        <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
          <a className="link dim white f6 f5-l dib mr3 mr4-l" href="./index.js" title="Home">Home</a>
          <a className="link dim white f6 f5-l dib mr3 mr4-l" href="./index.js" title="Environment">Environment</a>
          <a className="link dim white f6 f5-l dib mr3 mr4-l" href="./index.js" title="Wildlife">Wildlife</a>
          <a className="link dim white f6 f5-l dib mr3 mr4-l" href="./index.js" title="Location">Location</a>
          <a className="link dim white f6 f5-l dib" href="./index.js" title="Feedback">Feedback</a>
        </div>
      </nav>
    );
  }
}
export default NavBar;
