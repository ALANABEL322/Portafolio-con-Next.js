/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./about.module.css";
import "animate.css";
// import { gsap } from "gsap";

// import { CustomEase } from "gsap/CustomEase";

// gsap.registerPlugin(CustomEase);
export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative flex items-center h-screen flex-col   ${
        isHovered ? styles.hoveredAbout : ""
      }`}
    >
      <div className="w-1/3 z-50 ">
        <Image
          src={
            "https://res.cloudinary.com/dn5ltihzv/image/upload/v1708470777/imagenes/xukeaadguf1aupoceg75.png"
          }
          alt="image"
          width={650}
          height={650}
          className="object-cover animate__animated animate__zoomIn "
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
        className={`w-2/2 flex  flex-col items-center justify-center text-gray-300 z-40 ${
          isHovered ? styles.myTheme : ""
        }`}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <h1 className="font-bold mb-1 text-center animate__animated animate__backInUp xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl">
          <span className={`highlight-word   ${styles.word}`}>hi i'm alan</span>{" "}
          <br />
        </h1>
      </div>
      <div className="text-gray-300 z-40 flex flex-col items-center justify-center">
        <span className="mt-1 mb-2 font-bold text-center xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl">
          {" "}
          let's get to know each other{" "}
        </span>
        <h2 className="text-center flex flex-col items-center justify-center leading-relaxed font-semibold mb-3 xs:text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-7xl">
          Passionate Web Developer,{" "}
          <span className=" shadow-lg shadow-cyan-500/10">
            Music and Pizza Lover
          </span>
        </h2>
      </div>
      <div className={`hidden md:block top-[-120px] ${styles.backgroundImage}`}>
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
      {/* Gradiente entre la sección y el texto */}
      <div
        className={`${styles.sectionAbout} w-screen max-w-full flex flex-col items-center  min-h-full bg-gradient-to-b from-transparent to-gray-900 `}
      >
        <h1 className="text-gray-300 mt-11 m-[50px] font-bold  xs:text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-7xl">
          hobbies
        </h1>
        <div className="container w-full flex items-center justify-end  z-50">
          <Image
            src={
              "https://res.cloudinary.com/dn5ltihzv/image/upload/v1708721592/imagenes/violinImage.svg"
            }
            width={200}
            height={300}
            alt="image-violin"
            className=" object-cover pr-8 hidden md:block lg:block xl:block"
          />
          <div
            className={`w-1/6 lg:w-1/12 h-full hidden md:block lg:block xl:block ${styles.verticalhr}`}
          ></div>
          <p className="w-5/6 pl-8 hidden md:block lg:block xl:block text-gray-300 font-semibold mb-4 mt-4 xs:text-1xl sm:text-2xl md:text-3xl lg:text-4xl z-40">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum in
            aspernatur iure fuga voluptas repellat asperiores voluptatum
            accusantium ipsam at libero quasi inventore suscipit totam nemo,
            explicabo omnis esse perspiciatis.
          </p>
        </div>
        {/**HOBBII 2 */}
        <div className="container w-1/2 h-[32rem] flex flex-col justify-center items-center mt-4">
          <Image
            src={
              "https://res.cloudinary.com/dn5ltihzv/image/upload/v1708721592/imagenes/violinImage.svg"
            }
            width={200}
            height={300}
            alt="image-violin"
            className="md:hidden lg:hidden xl:hidden h-auto object-cover md:w-1/3 lg:w-2/3 xl:w-1/3 mb-4"
          />
          <div
            className={`w-1/6 lg:w-1/12 h-2 bg-gray-300 mb-2 md:hidden lg:hidden xl:hidden ${styles.horizontalhr}`}
          ></div>
          <p className="md:hidden lg:hidden xl:hidden md:w-5/6 pl-8 text-gray-300 font-semibold mt-2 md:text-5xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum in
            aspernatur iure fuga voluptas repellat asperiores voluptatum
            accusantium ipsam at libero quasi inventore suscipit totam nemo,
            explicabo omnis esse perspiciatis.
          </p>
        </div>
      </div>
    </div>
  );
}
//md:hidden lg:hidden xs:hidden
//md:hidden lg:hidden xl:hidden
