import React from "react";
import {NETFLIX_LOGO} from "../utils/NetflixLog";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-linear-to-b from-black z-10">
      <img src={NETFLIX_LOGO} alt="Netflix Logo" className="h-18" />
    </div>
  );
};

export default Header;
