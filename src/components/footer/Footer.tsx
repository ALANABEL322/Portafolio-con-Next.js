"use client";

import React from "react";
import Image from "next/image";

import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer
        className={`${styles.footer} bg-gray-950 footer items-center p-4 text-neutral-content`}
      >
        <aside className="items-center grid justify-items-start place-content-start grid-flow-col">
          <Link className={`${styles.logo}`} href="/">
            <Image
              src="https://res.cloudinary.com/dn5ltihzv/image/upload/v1708019562/imagenes/nbrk7j4dwj3e40ojk26w.png"
              alt="logo"
              width={100}
              height={100}
              className="object-cover hidden sm:block md:block lg:block xl:block"
            />
          </Link>
          <p className="text-slate-100 hidden sm:block md:block lg:block xl:block">
            Copyright © 2024 - All right reserved
          </p>
        </aside>
        {/**pantallas xs */}
        <div className="container flex flex-col justify-center items-center">
          <Link className={`${styles.logo}`} href="/">
            <Image
              src="https://res.cloudinary.com/dn5ltihzv/image/upload/v1708019562/imagenes/nbrk7j4dwj3e40ojk26w.png"
              alt="logo"
              width={100}
              height={100}
              className="object-cover sm:hidden md:hidden lg:hidden xl:hidden"
            />
          </Link>
          <p className="text-slate-100 text-center md:hidden sm:hidden lg:hidden xl:hidden flex justify-center items-center">
            Copyright © 2024 - All right reserved
          </p>
        </div>
        {/**pantalla xl */}
        <nav
          className={`${styles.icon} px-5 grid-flow-col gap-4 md:place-self-center md:justify-self-end`}
        >
          <a
            href="https://github.com/ALANABEL322"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://res.cloudinary.com/dn5ltihzv/image/upload/v1708978685/imagenes/iconoGithubSvg.svg"
              alt="GitHub icon"
              width={50}
              height={50}
              className="object-cover "
            />
          </a>
          <a
            href="https://www.linkedin.com/in/alan-abel-pereyra-0a8324257/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://res.cloudinary.com/dn5ltihzv/image/upload/v1708979170/imagenes/IconoLinkedinSVG.svg"
              alt="LinkedIn icon"
              width={51}
              height={50}
              className="object-cover "
            />
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
