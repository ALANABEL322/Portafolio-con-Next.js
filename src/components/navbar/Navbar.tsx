import Link from "next/link";
import React from "react";
import Image from "next/image";
import Links from "./links/Links";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar text-gray-50">
        <div className="">
          <Link className="navbar-brand" href="/">
            <Image src={""} alt="logo" width={100} height={100} />
          </Link>

          <Links/> 
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          {/* <div className="collapse navbar-collapse" id="navbarNav">
            <div className="text-gray-50 navbar-nav ms-auto p-2">
              <Link className="text-gray-50 nav-link p-3" href="/proyects">
                Proyects
              </Link>
              <Link className="text-gray-50 nav-link p-3" href="/aboutme">
                About me
              </Link>
              <Link className="text-gray-50 nav-link p-3" href="/skills">
                Skills
              </Link>
              <Link className="text-gray-50 nav-link p-3" href="/Contact">
                Contact
              </Link>
            </div>
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
