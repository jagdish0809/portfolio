import React from 'react';
import { BsInstagram } from 'react-icons/bs';
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