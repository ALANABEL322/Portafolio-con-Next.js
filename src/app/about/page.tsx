/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./about.module.css";
import "animate.css";

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative flex items-center h-screen flex-col ${
        isHovered ? styles.hoveredAbout : ""
      }`}
    >
      <div className="w-1/2 z-50">
        <Image
          src={
            "https://res.cloudinary.com/dn5ltihzv/image/upload/v1708470777/imagenes/xukeaadguf1aupoceg75.png"
          }
          alt="image"
          width={800}
          height={800}
          className="object-cover animate__animated animate__zoomIn"
        />
      </div>
      <div
        className={`${styles.ringsRight} md:hidden fixed top-0 right-0 z-40 `}
      >
        <Image
          src={
            "https://res.cloudinary.com/dn5ltihzv/image/upload/v1708545549/imagenes/cg5wn5rayiee632lu8f8.png"
          }
          width={"200"}
          height={"200"}
          alt="ringsRight"
          className="object-cover animate__animated animate__fadeInRight "
        />
      </div>
      <div className="absolute inset-0 flex items-center w-1/2 z-40">
        <Image
          src={
            "https://res.cloudinary.com/dn5ltihzv/image/upload/v1708545558/imagenes/gq8kpbhrtgsknfi32kqa.png"
          }
          alt="ringsLeft"
          width={400}
          height={300}
          className="object-cover animate__animated animate__fadeInLeft"
        />
      </div>
      <div
        className={`w-1/2 flex flex-col items-center justify-center text-gray-300 z-40 ${
          isHovered ? styles.myTheme : ""
        }`}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <h1 className="font-bold mb-1 text-center xs:text-3xl sm:text-4xl md:text-5xl lg:text-8xl">
          <span className={`highlight-word ${styles.word}`}>hi i'm alan</span>{" "}
          <br />
        </h1>
      </div>
      <div className="text-gray-300 z-40 w-1/2 flex flex-col items-center justify-center">
        <span className="mt-2 mb-4 font-bold text-center xs:text-2xl sm:text-3xl md:text-4xl lg:text-8xl">
          {" "}
          let's get to know each other{" "}
        </span>
        <p className="text-center font-semibold mb-4 xs:text-1xl sm:text-2xl md:text-3xl lg:text-4xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum in
          aspernatur iure fuga voluptas repellat asperiores voluptatum
          accusantium ipsam at libero quasi inventore suscipit totam nemo,
          explicabo omnis esse perspiciatis.
        </p>
      </div>
      <div className={`hidden md:block top-[-200px] ${styles.backgroundImage}`}>
        <Image
          src={
            "https://res.cloudinary.com/dn5ltihzv/image/upload/v1708470779/imagenes/x3vlpbdbhzikaykmakfp.png"
          }
          width={1000}
          height={1000}
          alt="background"
          className="w-full h-full object-cover animate__animated animate__fadeInRight"
        />
      </div>
    </div>
  );
}
