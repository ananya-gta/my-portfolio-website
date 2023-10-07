import React from 'react'
import {FaLinkedin, FaGithub, FaTwitter, FaDiscord} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/ananya-gupta-1902/" target='_blank'><FaLinkedin /></a>
        <a href="https://github.com/ananya-gta" target='_blank'><FaGithub /></a>
        <a href="https://twitter.com/ananya_192" target='_blank'><FaTwitter/></a>
        <a href="https://discord.com/users/864127704231968789" target='_blank'><FaDiscord/></a>
    </div>
  )
}

export default HeaderSocials