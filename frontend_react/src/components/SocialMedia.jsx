import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <AiFillGithub />
      </div>
      <div>
        <AiFillLinkedin />
      </div>
      <div>
        <BsInstagram />
      </div>
    </div>
  );
}

export default SocialMedia