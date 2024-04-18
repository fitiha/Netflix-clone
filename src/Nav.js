import React, { useEffect, useState } from 'react';
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleShow);
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
        alt="User Avatar"
      />
    </div>
  );
}

export default Nav;