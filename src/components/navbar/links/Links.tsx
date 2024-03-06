import Link from "next/link";
import React from "react";
import styles from "./Links.module.css";

const Links = () => {
  const links = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "proyects",
      path: "/proyects",
    },
    {
      title: "skills",
      path: "/skills",
    },
    {
      title: "contact",
      path: "/contact",
    },
  ];

  return (
    <div className={`${styles.links}`}>
      {links.map((link) => (
        <Link
          className={`${styles.enlaces} brightness-200 mr-2`}
          href={link.path}
          key={link.title}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
