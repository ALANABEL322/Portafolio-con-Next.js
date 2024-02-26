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
      className={`relative  h-screen    ${
        isHovered ? styles.hoveredAbout : ""
      }`}
    >
      {/**imagen al centro */}
      <div className="h-screen-[40%] w-screen md:h-screen md:max-h-screen max-w-full ">
        <div className="container flex-col flex items-center">
          <div className=" w-3/5 z-50  sm:justify-center xs:justify-center">
            <Image
              src="https://res.cloudinary.com/dn5ltihzv/image/upload/v1708470777/imagenes/xukeaadguf1aupoceg75.png"
              alt="profileimage1"
              width={650}
              height={650}
              className="object-cover animate__animated animate__zoomIn  md:hidden lg:hidden xl:hidden h-auto md:w-1/3 lg:w-2/3 xl:w-1/3 mb-4"
            />
          </div>
        </div>

        <div className={`${styles.ringsRight} md:hidden fixed top-0 right-0  `}>
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
        <div className="absolute inset-0 flex items-center w-1/2 ">
          <Image
            src={
              "https://res.cloudinary.com/dn5ltihzv/image/upload/v1708545558/imagenes/gq8kpbhrtgsknfi32kqa.png"
            }
            alt="ringsLeft"
            width={400}
            height={300}
            className="object-cover animate__animated animate__fadeInLeft md:hidden lg:hidden xl:hidden h-auto md:w-1/3 lg:w-2/3 xl:w-1/3 mb-4"
          />
        </div>

        {/**imagen a la izquierda */}
        <div className="flex flex-col items-center text-gray-300 md:flex-row">
          {/* Imagen a la izquierda */}
          <div className="w-full md:w-2/5  z-10">
            <Image
              src="https://res.cloudinary.com/dn5ltihzv/image/upload/v1708470777/imagenes/xukeaadguf1aupoceg75.png"
              alt="profileimage1"
              width={650}
              height={650}
              className="object-cover animate__animated animate__zoomIn hidden md:block lg:block xl:block"
            />
          </div>

          {/* Texto a la derecha */}
          <div className=" w-full md:w-3/5 p-6 relative z-20 hidden md:block lg:block xl:block text-balance">
            <h1 className="font-bold mb-1  animate__animated animate__backInDown xs:text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl z-40 ">
              <span className={`highlight-word  ${styles.word}`}>
                hi i'm alan
              </span>{" "}
              <br />
            </h1>
            <span className="mt-1 mb-2 font-bold  xs:text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl z-40">
              {" "}
              let's get to know each other{" "}
            </span>
            <h2 className=" leading-relaxed font-semibold mb-3 xs:text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl z-[20]">
              Passionate Web Developer,{" "}
              <span className="shadow-lg shadow-cyan-500/10 xs:text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
                {" "}
                Music and Pizza Lover{" "}
              </span>
            </h2>
          </div>
        </div>

        <div
          className={`hidden md:block top-[-120px] z-0 absolute ${styles.backgroundImage}`}
        >
          <Image
            src={
              "https://res.cloudinary.com/dn5ltihzv/image/upload/v1708470779/imagenes/x3vlpbdbhzikaykmakfp.png"
            }
            width={1000}
            height={1000}
            alt="background"
            className="w-full h-full object-cover animate__animated animate__fadeInRight z-40"
          />
        </div>

        {/**texto vertical */}
        <div
          className={`w-2/2 flex md:hidden lg:hidden xl:hidden flex-col items-center justify-center text-gray-300  ${
            isHovered ? styles.myTheme : ""
          }`}
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
        >
          <h1 className="font-bold mb-1 text-center animate__animated animate__backInUp xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl z-40">
            <span className={`highlight-word   ${styles.word}`}>
              hi i'm alan
            </span>{" "}
            <br />
          </h1>
        </div>
        <div className="text-gray-300  flex flex-col items-center justify-center">
          <span className="mt-1 mb-2 font-bold text-center xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl z-40 md:hidden lg:hidden xl:hidden">
            {" "}
            let's get to know each other{" "}
          </span>
          <h2 className="md:hidden lg:hidden xl:hidden text-center flex flex-col items-center  leading-relaxed font-semibold mb-3 xs:text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-7xl z-40">
            Passionate Web Developer,{" "}
            <span className=" shadow-lg shadow-cyan-500/10 mb-60">
              Music and Pizza Lover
            </span>
          </h2>
        </div>
      </div>
      <div className={`hidden xl:block top-[-280px] ${styles.backgroundImage}`}>
        <Image
          src={
            "https://res.cloudinary.com/dn5ltihzv/image/upload/v1708470779/imagenes/x3vlpbdbhzikaykmakfp.png"
          }
          width={2000}
          height={2000}
          alt="background"
          className="w-full h-full object-cover animate__animated animate__fadeInRight z-40"
        />
      </div>

      {/* Gradiente entre la sección y el texto */}

      <div
        className={`${styles.sectionAbout} w-screen md:h-screen md:max-h-screen max-w-full flex flex-col items-center bg-gradient-to-b from-[#0c0c0e]	 to-[#0E1118]`}
      >
        <h1 className="text-gray-300 pb-8 mt-30 font-bold  xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-7xl z-30">
          hobbies
        </h1>
        {/**hobbie horizontal1 */}
        <div className="container w-full  flex items-center justify-end  z-50">
          <Image
            src={
              "https://res.cloudinary.com/dn5ltihzv/image/upload/v1708721592/imagenes/violinImage.svg"
            }
            width={200}
            height={300}
            alt="image-violin"
            className=" object-cover pr-8 hidden md:block lg:block xl:block mt-20"
          />
          <div
            className={`w-1/6 lg:w-1/12 h-full hidden md:block lg:block xl:block mr-4 mt-20 ${styles.verticalhr}`}
          ></div>
          <p className="text-balance w-5/6 pl-2 hidden md:block lg:block xl:block text-gray-300 font-semibold mt-20 xs:text-1xl sm:text-2xl md:text-3xl lg:text-4xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum in
            aspernatur iure fuga voluptas repellat asperiores voluptatum
          </p>
        </div>
        {/**HOBBII vertical1 */}
        <div className="container w-1/2 h-[24rem] flex flex-col justify-center items-center mt-4">
          <Image
            src={
              "https://res.cloudinary.com/dn5ltihzv/image/upload/v1708721592/imagenes/violinImage.svg"
            }
            width={150}
            height={300}
            alt="image-violin"
            className="md:hidden lg:hidden xl:hidden h-auto object-cover md:w-1/3 lg:w-2/3 xl:w-1/3 mb-4"
          />
          <div
            className={`w-1/6 lg:w-1/12 h-2 bg-gray-300 mb-2 md:hidden lg:hidden xl:hidden ${styles.horizontalhr}`}
          ></div>
          <p className="text-balance pl-4 md:hidden lg:hidden xl:hidden md:w-5/6  text-gray-300 font-semibold mt-2 md:text-5xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum in
            aspernatur iure fuga voluptas repellat asperiores voluptatum
          </p>
        </div>
        {/***hobie2 horizontal */}
        <div className="container w-full  flex items-center justify-end  z-50">
          <Image
            src={
              "https://res.cloudinary.com/dn5ltihzv/image/upload/v1708796983/imagenes/ControlGame.svg"
            }
            width={200}
            height={300}
            alt="image-violin"
            className=" object-cover pr-8 hidden md:block lg:block xl:block"
          />
          <div
            className={`w-1/6 lg:w-1/12 h-full hidden md:block lg:block xl:block mr-4 ${styles.verticalhr}`}
          ></div>
          <p className="text-balance  w-5/6 pl-2 hidden md:block lg:block xl:block text-gray-300 font-semibold  xs:text-1xl sm:text-2xl md:text-3xl lg:text-4xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum in
            aspernatur iure fuga voluptas repellat asperiores voluptatum
          </p>
        </div>
        {/**HOBBII 2 vertical*/}
        <div className="container w-1/2 h-[24rem]  flex flex-col justify-center items-center mt-4">
          <Image
            src={
              "https://res.cloudinary.com/dn5ltihzv/image/upload/v1708796983/imagenes/ControlGame.svg"
            }
            width={150}
            height={300}
            alt="image-violin"
            className="md:hidden lg:hidden xl:hidden h-auto object-cover md:w-1/3 lg:w-2/3 xl:w-1/3 mb-4"
          />
          <div
            className={`w-1/6 lg:w-1/12 h-2 bg-gray-300  md:hidden lg:hidden xl:hidden ${styles.horizontalhr}`}
          ></div>
          <div className=" ">
            <p className="text-balance pl-4 md:hidden lg:hidden xl:hidden md:w-5/6  text-gray-300 font-semibold mt-2 md:text-5xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum in
              aspernatur iure fuga voluptas repellat asperiores voluptatum
            </p>
          </div>
        </div>
        {/**hobiie 3 horizontal */}
        <div className="container w-full  flex items-center justify-end  z-50">
          <Image
            src={
              "https://res.cloudinary.com/dn5ltihzv/image/upload/v1708963475/imagenes/brazomusculosoSVG.svg"
            }
            width={200}
            height={300}
            alt="image-violin"
            className=" object-cover pr-8 hidden md:block lg:block xl:block"
          />
          <div
            className={`w-1/6 lg:w-1/12 h-full hidden md:block lg:block xl:block mr-4 ${styles.verticalhr}`}
          ></div>
          <p className="text-balance  w-5/6 pl-2 hidden md:block lg:block xl:block text-gray-300 font-semibold  xs:text-1xl sm:text-2xl md:text-3xl lg:text-4xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum in
            aspernatur iure fuga voluptas repellat asperiores voluptatum
          </p>
        </div>
        {/**HOBBII 3 vertical*/}
        <div className="container w-1/2 h-[24rem]  flex flex-col justify-center items-center mt-4">
          <Image
            src={
              "https://res.cloudinary.com/dn5ltihzv/image/upload/v1708963475/imagenes/brazomusculosoSVG.svg"
            }
            width={150}
            height={300}
            alt="image-violin"
            className="md:hidden lg:hidden xl:hidden h-auto object-cover md:w-1/3 lg:w-2/3 xl:w-1/3 mb-4"
          />
          <div
            className={`w-1/6 lg:w-1/12 h-2 bg-gray-300  md:hidden lg:hidden xl:hidden ${styles.horizontalhr}`}
          ></div>
          <div className=" ">
            <p className="text-balance pl-4 md:hidden lg:hidden xl:hidden md:w-5/6  text-gray-300 font-semibold mt-2 md:text-5xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum in
              aspernatur iure fuga voluptas repellat asperiores voluptatum
            </p>
          </div>
        </div>
      </div>
      {/**section aboutme */}
      <div className="w-screen  lg:min-h-screen xl:min-h-screen max-w-full flex flex-col items-center bg-gradient-to-b  from-[#0E1118]	 to-gray-950 lg:overflow-hidden">
        <h1 className=" text-center text-gray-300 mt-20  m-[50px] font-bold xs:text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-7xl">
          about me{" "}
        </h1>

        <div className="md:flex justify-center items-center w-full">
          {/* Imagen en el extremo derecho en pantallas grandes */}
          <div className="hidden lg:w-3/5 md:block lg:block xl:block pr-6 lg:p-0 xl:p-0">
            <p className="text-gray-300 lg:w-5/6 ps-8 flex justify-center items-center lg:block xl:block font-semibold xs:text:2-l sm:text-3-l md:text-2xl lg:text-4xl xl:text-4xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia enim
              possimus a nesciunt dolorum sint quod, doloremque excepturi
              quaerat mollitia doloribus officia ex similique placeat tempora
              aliquid aliquam tenetur commodi.
            </p>
          </div>
          <div className="hidden md:block lg:block xl:block p-6 md:mr-auto lg:mr-auto xl:mr-auto">
            <Image
              src={
                "https://res.cloudinary.com/dn5ltihzv/image/upload/v1708800592/imagenes/perfil2.png"
              }
              width={450}
              height={400}
              alt="profileimage2 "
              className="object-cover md:w-3/4 max-w-full"
            />
          </div>

          {/* Imagen arriba del texto en pantallas pequeñas */}
        </div>
        <div className="flex flex-col visible sm:visible md:invisible lg:invisible xl:invisible items-center p-6">
          <Image
            src={
              "https://res.cloudinary.com/dn5ltihzv/image/upload/v1708800592/imagenes/perfil2.png"
            }
            width={450}
            height={400}
            alt="profileimage2"
            className="object-cover w-2/5 max-w-full"
          />
        </div>
        <div className="lg:w-3/5   visible sm:visible md:invisible lg:invisible xl:invisible">
          <p className="text-gray-300 lg:w-5/6 sm:pr-7 pl-7 flex justify-center items-center lg:block xl:block font-semibold lg:text-4xl xl:text-4xl mb-[40px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia enim
            possimus a nesciunt dolorum sint quod, doloremque excepturi quaerat
            mollitia doloribus officia ex similique placeat tempora aliquid
            aliquam tenetur commodi.
          </p>
        </div>
      </div>
    </div>
  );
}
//md:hidden lg:hidden xs:hidden
//md:hidden lg:hidden xl:hidden
