import React from 'react'

import facebook from '../img/facebook.svg'
import instagram from '../img/instagram.svg'
import twitter from '../img/twitter.svg'
import youtube from '../img/youtube-play.svg'


const SocialIcon = props => (

        <a
          className=" is-outlined"
          href={props.to}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon is-medium">
            <img src={props.icon} alt="Github" />
          </span>
        </a>
)

const SocialBar = () => (
<div className="container has-text-centered">
    <SocialIcon to="http://facebook.com" icon={facebook} />
    <SocialIcon to="http://twitter.com" icon={twitter} />
    <SocialIcon to="http://youtube.com" icon={youtube} />
    <SocialIcon to="http://instragram.com" icon={instagram} />

</div>
);
export default SocialBar