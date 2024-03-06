import Link from "next/link";
import React from "react";
import Image from "next/image";
import Links from "./links/Links";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <Link className={`${styles.logo}`} href="/">
          <Image
            src="https://res.cloudinary.com/dn5ltihzv/image/upload/v1709754260/imagenes/logo%20SVG.svg"
            alt="logo"
            width={100}
            height={100}
            className="object-cover"
          />
        </Link>
        <div>
          <Links />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
