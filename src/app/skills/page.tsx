// Skills.js
import React from "react";
import styles from "./Skills.module.css";
import Image from "next/image";
import Footer from "@/components/footer/Footer";

export default function Skills() {
  return (
    <div className="h-screen w-screen relative ">
      <h1
        className={`${styles.skills} text-slate-50 md:mb-[100px] mb-[80px] text-center xs:text-[30px] sm:text-[80px] md:text-[120px] lg:text-[180px] xl:text-[240px] z-40 relative`}
      >
        Skills
      </h1>
      <div className={`${styles.line} top-[-110px] absolute `}>
        <Image
          src={
            "https://res.cloudinary.com/dn5ltihzv/image/upload/v1709345397/imagenes/flechaSVG.svg"
          }
          width={200}
          height={200}
          alt="line"
          className="w-full h-full object-cover animate__animated animate__fadeInRight"
        />
      </div>
      <div className="container">
        <Image
          src={
            "https://res.cloudinary.com/dn5ltihzv/image/upload/v1709402071/imagenes/P-LenguajesSVG.svg"
          }
          width={900}
          height={500}
          alt="arrow"
          className="object-cover animate__animated animate__fadeInRight"
        />
      </div>
      <div className="flex content-evenly items-center justify-center lg:flex-row md:flex-row flex-col mt-10">
        <div className={`${styles.card} flex items-center  flex-col mt-`}>
          <div className=" flex items-center justify-center flex-col">
            <Image
              src={
                "https://res.cloudinary.com/dn5ltihzv/image/upload/v1709298831/imagenes/javascriptSVG.svg"
              }
              width={50}
              height={50}
              alt=""
              className=" object-cover mt-5"
            />
          </div>
          <h3 className="flex-col px-1 text-yellow-300 flex text-center items-center h-24 gap-4 xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-[15px] xl:text-[20px]">
            Javascript
            <p className="text-yellow-100	top-0  text-[15px]">
              {" "}
              orientado a objetos, de tipado débil se utiliza en el área del{" "}
              <span className="text-yellow-300">cliente</span> y{" "}
              <span className="text-yellow-300">servidor</span>
            </p>
          </h3>
        </div>
        <div
          className={`${styles.cardTypescript} flex items-center  flex-col mx-20 my-5`}
        >
          <div className=" flex items-center justify-center flex-col">
            <Image
              src={
                "https://res.cloudinary.com/dn5ltihzv/image/upload/v1709393613/imagenes/typescriptSVG.svg"
              }
              width={60}
              height={50}
              alt=""
              className=" object-cover mt-5"
            />
          </div>
          <h3 className="flex-col px-1 text-sky-500	 flex text-center items-center h-24 gap-4 xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-[15px] xl:text-[20px]">
            Typescript
            <p className="text-sky-50		top-0  text-[15px]">
              {" "}
              TS código abierto desarrollado y mantenido por microsoft.Es un
              superconjunto de JavaScript, añade tipos estáticos y objetos
              basados en clases <span className="text-sky-200	">
                cliente
              </span> y <span className="text-sky-200	">servidor</span>
            </p>
          </h3>
        </div>
      </div>
      {/**Frameworks */}
      <div className="h-screen w-screen relative bg-gradient-to-b from-[#0c0c0e]	 to-[#0E1118]">
        <div className=" absolute right-0 ">
          <Image
            src={
              "https://res.cloudinary.com/dn5ltihzv/image/upload/v1709397786/imagenes/frameworksSVG.svg"
            }
            width={900}
            height={500}
            alt="image-arrow2"
            className="object-cover"
          />
        </div>
        <div className="flex items-center justify-center lg:flex-row md:flex-row flex-col ">
          <div className={`${styles.card} flex items-center  flex-col `}>
            <div className=" flex items-center justify-center flex-col">
              <Image
                src={
                  "https://res.cloudinary.com/dn5ltihzv/image/upload/v1709298831/imagenes/javascriptSVG.svg"
                }
                width={50}
                height={50}
                alt=""
                className=" object-cover mt-5"
              />
            </div>
            <h3 className="flex-col px-1 text-yellow-300 flex text-center items-center h-24 gap-4 xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-[15px] xl:text-[20px]">
              Javascript
              <p className="text-yellow-100	top-0  text-[15px]">
                {" "}
                orientado a objetos, de tipado débil se utiliza en el área del{" "}
                <span className="text-yellow-300">cliente</span> y{" "}
                <span className="text-yellow-300">servidor</span>
              </p>
            </h3>
          </div>
          <div
            className={`${styles.cardTypescript} flex items-center  flex-col mx-20 my-5`}
          >
            <div className=" flex items-center justify-center flex-col">
              <Image
                src={
                  "https://res.cloudinary.com/dn5ltihzv/image/upload/v1709393613/imagenes/typescriptSVG.svg"
                }
                width={60}
                height={50}
                alt=""
                className=" object-cover mt-5"
              />
            </div>
            <h3 className="flex-col px-1 text-sky-500	 flex text-center items-center h-24 gap-4 xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-[15px] xl:text-[20px]">
              Typescript
              <p className="text-sky-50		top-0  text-[15px]">
                {" "}
                TS código abierto desarrollado y mantenido por microsoft.Es un
                superconjunto de JavaScript, añade tipos estáticos y objetos
                basados en clases <span className="text-sky-200	">
                  cliente
                </span>{" "}
                y <span className="text-sky-200	">servidor</span>
              </p>
            </h3>
          </div>
        </div>
      </div>
      <div className="h-screen w-screen relative bg-gradient-to-b from-[#0E1118] to-gray-950">
        <div className="container">
          <Image
            src={
              "https://res.cloudinary.com/dn5ltihzv/image/upload/v1709402129/imagenes/HerramientasSVG.svg"
            }
            width={900}
            height={500}
            alt="image-He"
            className="object-cover"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
