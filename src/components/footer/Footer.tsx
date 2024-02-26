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
        <aside className="items-center grid-flow-col">
          <Link className={`${styles.logo}`} href="/">
            <Image
              src="https://res.cloudinary.com/dn5ltihzv/image/upload/v1708019562/imagenes/nbrk7j4dwj3e40ojk26w.png"
              alt="logo"
              width={100}
              height={100}
            />
          </Link>
          <p className="text-slate-100	">
            Copyright © 2024 - All right reserved
          </p>
        </aside>
        <nav className="px-5 grid-flow-col gap-4 md:place-self-center md:justify-self-end">
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
            />
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
