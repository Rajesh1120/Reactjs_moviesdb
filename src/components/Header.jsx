import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isLight, setIsLight] = useState(false);

  function handleDarkMode() {
    if (isLight === false){
      setIsLight(true);
    }
    else{
      setIsLight(false);
    }
    
  }

  return (
    <div className="header">
      <nav>
        <h1 className="title">Rajflix</h1>
        <div className="search-bar">
          <input type="text" className="input" placeholder="Search" />
          <button class='search-btn'>Search</button>
          {!isLight ? (
            <button  className="mode" onClick={() => handleDarkMode()}>
              <Link className="modelink" to="/">Light Mode</Link>
            </button>
          ) :
              <button  className="mode" onClick={() => handleDarkMode()}>
                <Link className="modelink" to="/">Light Mode</Link>
              </button>
        }
        </div>
      </nav>
    </div>
  );
};

export default Header;
