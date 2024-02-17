import Link from "next/link";
import React from "react";
import styles from "./Links.module.css"



const Links = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "proyects",
      path: "/proyects",
    },
    {
      title: "contact",
      path: "/contact",
    },
    {
      title: "skills",
      path: "/skills",
    },
  ];

  return (
    <div className={styles.links}>
      {links.map((link) => (
        <Link className={styles.enlaces} href={link.path} key={link.title}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
