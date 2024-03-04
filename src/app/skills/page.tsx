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
      {/**programmingLenguages */}
      <div className="flex content-evenly items-center justify-center lg:flex-row md:flex-row flex-col mt-10">
        <div className={`${styles.cardJS} flex items-center  flex-col mt-10`}>
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
          <h3 className="flex-col mt-3 px-1 text-yellow-300 flex text-center items-center h-24 gap-4 xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-[15px] xl:text-[20px]">
            Javascript
            <p className="text-yellow-100	top-0  text-[15px]">
              {" "}
              JavaScript es un lenguaje de programación interpretado, dialecto
              del estándar <span className="text-yellow-300">
                ECMAScript.
              </span>{" "}
              Se define como orientado a{" "}
              <span className="text-yellow-300">objetos,</span> ​ basado en
              prototipos, imperativo, débilmente tipado y dinámico.{" "}
            </p>
          </h3>
        </div>
        <div
          className={`${styles.cardTypescript} flex items-center  flex-col mx-20 mt-10`}
        >
          <div className=" flex items-center justify-center flex-col">
            <Image
              src={
                "https://res.cloudinary.com/dn5ltihzv/image/upload/v1709393613/imagenes/typescriptSVG.svg"
              }
              width={55}
              height={50}
              alt=""
              className=" object-cover mt-5"
            />
          </div>
          <h3 className="flex-col mt-3 px-1 text-sky-500	 flex text-center items-center h-24 gap-4 xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-[15px] xl:text-[20px]">
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
      <div className=" w-screen  relative bg-gradient-to-b from-[#0c0c0e]	   to-slate-800 mt-20">
        <div className=" absolute right-0 ">
          <Image
            src={
              "https://res.cloudinary.com/dn5ltihzv/image/upload/v1709397786/imagenes/frameworksSVG.svg"
            }
            width={900}
            height={500}
            alt="image-arrow2"
            className="object-cover "
          />
        </div>
        <div className=" flex flex-col items-center justify-center ">
          <div className="container flex items-center justify-center mt-10 flex-col lg:flex-row">
            <div
              className={`${styles.cardexpress} flex items-center  flex-col mx-20  mt-20 `}
            >
              <div className=" flex items-center justify-center flex-col">
                <Image
                  src={
                    "https://res.cloudinary.com/dn5ltihzv/image/upload/v1709425122/imagenes/expressSVG.svg"
                  }
                  width={100}
                  height={100}
                  alt="cardTY"
                  className=" object-cover mt-8 lg:w-1/2  "
                />
              </div>
              <h3 className="flex-col px-1 text-slate-50	mt-2 flex text-center items-center h-24 gap-4 xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-[15px] xl:text-[15px]">
                Express
                <p className="text-sky-50	top-0 text-[15px]">
                  {" "}
                  TS código abierto desarrollado y mantenido por microsoft.Es un
                  superconjunto de JavaScript, añade tipos estáticos y objetos
                  basados en clases{" "}
                  <span className="text-gray-400		">cliente</span> y{" "}
                  <span className="text-gray-400		">servidor</span>
                </p>
              </h3>
            </div>
            <div
              className={`${styles.cardMeteor} flex items-center  flex-col mx-20  mt-20 `}
            >
              <div className=" flex items-center justify-center flex-col">
                <Image
                  src={
                    "https://res.cloudinary.com/dn5ltihzv/image/upload/v1709423996/imagenes/meteorSVG.svg"
                  }
                  width={60}
                  height={50}
                  alt="cardTY"
                  className=" object-cover mt-5 lg:w-1/4  "
                />
              </div>
              <h3 className="flex-col 	mt-3 px-1 text-[#df4f4f]	 flex text-center items-center h-24 gap-4 xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-[15px] xl:text-[30px]">
                Meteor
                <p className="text-sky-50	top-0  text-[15px]">
                  {" "}
                  TS código abierto desarrollado y mantenido por microsoft.Es un
                  superconjunto de JavaScript, añade tipos estáticos y objetos
                  basados en clases{" "}
                  <span className="text-sky-200	">cliente</span> y{" "}
                  <span className="text-sky-200	">servidor</span>
                </p>
              </h3>
            </div>
            <div
              className={`${styles.cardNext} flex items-center  flex-col mx-20  mt-20 `}
            >
              <div className=" flex items-center justify-center flex-col">
                <Image
                  src={
                    "https://res.cloudinary.com/dn5ltihzv/image/upload/v1709424799/imagenes/nextjsSVG.svg"
                  }
                  width={60}
                  height={50}
                  alt="cardTY"
                  className=" object-cover mt-5 lg:w-1/4  "
                />
              </div>
              <h3 className="flex-col mt-4 px-1 text-slate-50 flex text-center items-center h-24 gap-4 xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-[15px] xl:text-[20px]">
                Next.js
                <p className="text-sky-50		top-0  text-[15px]">
                  {" "}
                  TS código abierto desarrollado y mantenido por microsoft.Es un
                  superconjunto de JavaScript, añade tipos estáticos y objetos
                  basados en clases{" "}
                  <span className="text-zinc-400">cliente</span> y{" "}
                  <span className="text-zinc-400">servidor</span>
                </p>
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/**la mitad de tarjetas */}
      <div className=" w-screen   relative bg-gradient-to-b from-[#1E293A] to-[#0E1118]">
        <div className="absolute left-0 mt-10">
          <Image
            src="https://res.cloudinary.com/dn5ltihzv/image/upload/v1709426659/imagenes/Preprocessors%20and%20libraries%20SVG.svg"
            width={500}
            height={500}
            alt="arrowPRE"
            className="object-cover lg:w-1/2"
          />
        </div>
        <div className=" flex flex-col items-center justify-center ">
          <div className="container flex items-center justify-center mt-10 flex-col lg:flex-row">
            <div
              className={`${styles.cardTailwind} flex items-center  flex-col   mt-20 `}
            >
              <div className=" flex items-center justify-center flex-col">
                <Image
                  src={
                    "https://res.cloudinary.com/dn5ltihzv/image/upload/v1709425787/imagenes/tailwindcssSVG.svg"
                  }
                  width={60}
                  height={50}
                  alt="cardTY"
                  className=" object-cover mt-5 lg:w-1/4  "
                />
              </div>
              <h3 className="flex-col px-1 text-[#4DB6AC]	 flex text-center items-center h-24 gap-4 xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-[15px] xl:text-[20px]">
                TailwindCSS
                <p className="text-sky-50	top-0 text-[15px]">
                  {" "}
                  TS código abierto desarrollado y mantenido por microsoft.Es un
                  superconjunto de JavaScript, añade tipos estáticos y objetos
                  basados en clases{" "}
                  <span className="text-teal-300">cliente</span> y{" "}
                  <span className="text-teal-300">servidor</span>
                </p>
              </h3>
            </div>
            <div
              className={`${styles.cardBootstrap} flex items-center  flex-col mx-10  mt-20 `}
            >
              <div className=" flex items-center justify-center flex-col">
                <Image
                  src={
                    "https://res.cloudinary.com/dn5ltihzv/image/upload/v1709425463/imagenes/bootstrapSVG.svg"
                  }
                  width={60}
                  height={50}
                  alt="cardTY"
                  className=" object-cover mt-5 lg:w-1/4  "
                />
              </div>
              <h3 className="flex-col mt-4 px-1 text-[#A37BE1]	 flex text-center items-center h-24 gap-4 xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-[15px] xl:text-[20px]">
                Bootstrap 5
                <p className="text-sky-50		top-0  text-[15px]">
                  {" "}
                  TS código abierto desarrollado y mantenido por microsoft.Es un
                  superconjunto de JavaScript, añade tipos estáticos y objetos
                  basados en clases{" "}
                  <span className="text-violet-400">cliente</span> y{" "}
                  <span className="text-violet-400">servidor</span>
                </p>
              </h3>
            </div>
            <div
              className={`${styles.cardSass} flex items-center  flex-col   mt-20`}
            >
              <div className=" flex items-center justify-center flex-col">
                <Image
                  src={
                    "https://res.cloudinary.com/dn5ltihzv/image/upload/v1709427425/imagenes/sassSVG.svg"
                  }
                  width={60}
                  height={50}
                  alt="cardTY"
                  className=" object-cover mt-5 lg:w-1/4  "
                />
              </div>
              <h3 className="flex-col mt-3 px-1 text-[#D83B8B] flex text-center items-center h-24 gap-4 xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-[15px] xl:text-[20px]">
                SASS
                <p className="text-sky-50 top-0 text-[15px]">
                  {" "}
                  TS código abierto desarrollado y mantenido por microsoft.Es un
                  superconjunto de JavaScript, añade tipos estáticos y objetos
                  basados en clases{" "}
                  <span className="text-pink-300">cliente</span> y{" "}
                  <span className="text-pink-300">servidor</span>
                </p>
              </h3>
            </div>
            <div
              className={`${styles.cardReact} flex items-center  flex-col  mx-10 mt-20`}
            >
              <div className=" flex items-center justify-center flex-col">
                <Image
                  src={
                    "https://res.cloudinary.com/dn5ltihzv/image/upload/v1709427681/imagenes/reactSVG.svg"
                  }
                  width={60}
                  height={50}
                  alt="cardTY"
                  className=" object-cover mt-5 lg:w-1/4  "
                />
              </div>
              <h3 className="flex-col mt-4 px-1 text-[#61DAFB]	 flex text-center items-center h-24 gap-4 xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-[15px] xl:text-[20px]">
                React
                <p className="text-sky-50	top-0 text-[15px]">
                  {" "}
                  TS código abierto desarrollado y mantenido por microsoft.Es un
                  superconjunto de JavaScript, añade tipos estáticos y objetos
                  basados en clases{" "}
                  <span className="text-sky-200	">cliente</span> y{" "}
                  <span className="text-sky-200	">servidor</span>
                </p>
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/**Tools */}
      <div className="w-screen relative bg-gradient-to-b from-[#0E1118] to-gray-950">
        <div className=" absolute right-0 ">
          <Image
            src={
              "https://res.cloudinary.com/dn5ltihzv/image/upload/v1709572214/imagenes/toolsSVG.svg"
            }
            width={600}
            height={200}
            alt="image-arrow2"
            className="object-cover mt-10"
          />
        </div>

        <div className="flex items-center justify-center flex-col lg:flex-row ">
          <div
            className={`${styles.cardNode}  flex items-center  flex-col  lg:mb-20 mt-40`}
          >
            <div className=" flex items-center justify-center ">
              <Image
                src={
                  "https://res.cloudinary.com/dn5ltihzv/image/upload/v1709571649/imagenes/nodeSVG.svg"
                }
                width={70}
                height={50}
                alt="cardTY"
                className=" object-cover mt-5 lg:w-1/3  "
              />
            </div>
            <h3 className="flex-col px-1 mt-4 text-[#6fa560]	 flex text-center items-center h-24 gap-4 xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-[15px] xl:text-[20px]">
              node.js
              <p className="text-sky-50	top-0 text-[15px]">
                {" "}
                TS código abierto desarrollado y mantenido por microsoft.Es un
                superconjunto de JavaScript, añade tipos estáticos y objetos
                basados en clases <span className="text-lime-400		">
                  cliente
                </span>{" "}
                y <span className="text-lime-400		">servidor</span>
              </p>
            </h3>
          </div>
          <div
            className={`${styles.cardMongo} flex items-center  flex-col mx-10 lg:mb-20 lg:mt-40 mt-20`}
          >
            <div className="flex items-center justify-center flex-col lg:flex-row">
              <Image
                src={
                  "https://res.cloudinary.com/dn5ltihzv/image/upload/v1709572553/imagenes/mongoDBSVG.svg"
                }
                width={40}
                height={50}
                alt="cardTY"
                className=" object-cover mt-5 lg:w-1/3  "
              />
            </div>
            <h3 className="flex-col px-1 text-[#07AC4F]	 flex text-center items-center h-24 gap-4 xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-[15px] xl:text-[20px]">
              MongoDB
              <p className="text-sky-50	top-0 text-[15px]">
                {" "}
                TS código abierto desarrollado y mantenido por microsoft.Es un
                superconjunto de JavaScript, añade tipos estáticos y objetos
                basados en clases{" "}
                <span className="text-green-400		">cliente</span> y{" "}
                <span className="text-green-400		">servidor</span>
              </p>
            </h3>
          </div>
          <div
            className={`${styles.cardPostgre} flex items-center  flex-col lg:mb-20 lg:mt-40 mt-20`}
          >
            <div className=" flex items-center justify-center flex-col">
              <Image
                src={
                  "https://res.cloudinary.com/dn5ltihzv/image/upload/v1709573611/imagenes/postgreSQL.svg"
                }
                width={60}
                height={50}
                alt="cardTY"
                className=" object-cover mt-5 lg:w-1/3  "
              />
            </div>
            <h3 className="flex-col px-1 text-[#6093bb]	 flex text-center items-center h-24 gap-4 xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-[15px] xl:text-[20px]">
              PostgreSQL
              <p className="text-sky-50	top-0 text-[15px]">
                {" "}
                TS código abierto desarrollado y mantenido por microsoft.Es un
                superconjunto de JavaScript, añade tipos estáticos y objetos
                basados en clases <span className="text-sky-400		">
                  cliente
                </span>{" "}
                y <span className="text-sky-400		">servidor</span>
              </p>
            </h3>
          </div>
          <div
            className={`${styles.cardFigma} flex items-center flex-col mx-10 mb-20 lg:mt-40 my-20`}
          >
            <div className="flex items-center justify-center flex-col ">
              <Image
                src={
                  "https://res.cloudinary.com/dn5ltihzv/image/upload/v1709573950/imagenes/figmaSVG.svg"
                }
                width={60}
                height={50}
                alt="cardTY"
                className=" object-cover mt-5 lg:w-1/3  "
              />
            </div>
            <h3 className="flex-col px-1 text-sky-100	 flex text-center items-center h-24 gap-4 xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-[15px] xl:text-[20px]">
              Figma
              <p className="text-sky-50	top-0 text-[15px]">
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
      <Footer />
    </div>
  );
}
