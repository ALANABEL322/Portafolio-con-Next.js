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
            src="https://res.cloudinary.com/dn5ltihzv/image/upload/v1708019562/imagenes/nbrk7j4dwj3e40ojk26w.png"
            alt="logo"
            width={100}
            height={100}
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
