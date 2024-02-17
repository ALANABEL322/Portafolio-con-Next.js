import Link from "next/link";
import React from "react";

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
    <div>
      {links.map((link) => (
        <Link href={link.path} key={link.title}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
