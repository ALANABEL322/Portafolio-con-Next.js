// Skills.js
import React from "react";
import styles from "./Skills.module.css";
import Image from "next/image";
import Footer from "@/components/footer/Footer";

export default function Skills() {
  return (
    <div className="h-screen w-screen relative ">
      <h1
        className={`${styles.skills} text-slate-50 mt-20 md:mb-[100px] mb-[80px] text-center text-[100px] sm:text-[80px] md:text-[120px] lg:text-[180px] xl:text-[240px] z-40 relative`}
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
          className="w-full h-full object-cover "
        />
      </div>
      {/**programmingLenguages */}
      <div className="flex w-screen relative items-center justify-center  lg:flex-row md:flex-row flex-col mt-10 bg-gradient-to-b from-[#0c0c0e] ">
        <div className="container absolute left-0 top-0">
          <Image
            src={
              "https://res.cloudinary.com/dn5ltihzv/image/upload/v1709750905/imagenes/lenguajes%20de%20programacion%20flecha.svg"
            }
            width={600}
            height={200}
            alt="arrow"
            className="object-cover  "
          />
        </div>
        <div className={`${styles.cardJS} flex items-center  flex-col mt-40`}>
          <div className=" flex items-center justify-center flex-col">
            <Image
              src={
                "https://res.cloudinary.com/dn5ltihzv/image/upload/v1709298831/imagenes/javascriptSVG.svg"
              }
              width={50}
              height={50}
              alt="imageJS"
              className=" object-cover mt-5"
            />
          </div>
          <h3 className="flex-col mt-3 px-1 text-balance text-yellow-300 flex text-center items-center h-24 gap-4 xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-[15px] xl:text-[20px]">
            Javascript
            <p className="text-yellow-100	top-0  text-[15px] ">
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
          className={`${styles.cardTypescript} flex items-center flex-col mx-20 mt-40`}
        >
          <div className="flex items-center justify-center flex-col">
            <Image
              src={
                "https://res.cloudinary.com/dn5ltihzv/image/upload/v1709393613/imagenes/typescriptSVG.svg"
              }
              width={55}
              height={50}
              alt=""
              className="object-cover mt-5"
            />
          </div>
          <h3 className="flex-col mt-3 px-1 text-sky-500 flex text-center items-center gap-4 xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-[15px] xl:text-[20px]">
            Typescript
            <p className="text-sky-50 top-0 text-[15px]">
              {" "}
              libre y de código abierto desarrollado y mantenido por Microsoft.
              Es un superconjunto de{" "}
              <span className="text-sky-200">JavaScript,</span> que
              esencialmente añade tipos estáticos y objetos basados en{" "}
              <span className="text-sky-200">clases.</span>{" "}
            </p>
          </h3>
        </div>
      </div>
      {/**Frameworks */}
      <div className="w-screen relative  mt-20 bg-gradient-to-b from-[#0c0c0e] to-gray-700">
        <div className="absolute right-0">
          <Image
            src={
              "https://res.cloudinary.com/dn5ltihzv/image/upload/v1709597316/imagenes/frameworksSVG.svg"
            }
            width={900}
            height={500}
            alt="image-arrow2"
            className="object-cover w-full h-full"
          />
        </div>
        <div className=" flex flex-col items-center justify-center ">
          <div className="container flex items-center justify-center mt-10 flex-col lg:flex-row">
            <div
              className={`${styles.cardexpress} flex items-center  flex-col mx-20 mt-20`}
            >
              <div className=" flex items-center justify-center flex-col">
                <Image
                  src={
                    "https://res.cloudinary.com/dn5ltihzv/image/upload/v1709425122/imagenes/expressSVG.svg"
                  }
                  width={100}
                  height={100}
                  alt="cardTY"
                  className="object-cover mt-8 lg:w-1/2  "
                />
              </div>
              <h3 className="flex-col px-1 text-slate-50	mt-2 flex text-center items-center h-24 gap-4 xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-[15px] xl:text-[15px]">
                Express
                <p className="text-sky-50	top-0 text-[15px]">
                  {" "}
                  Express.js o simplemente Express es un entorno de trabajo para
                  aplicaciones web para el programario Node.js, de código
                  abierto y con licencia MIT. Se utiliza para desarrollar
                  aplicaciones <span className="text-gray-400">
                    web{" "}
                  </span> y <span className="text-gray-400">APIs.</span>{" "}
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
              <h3 className="flex-col 	mt-3 px-1 text-[#df4f4f]	 flex text-center items-center h-24 gap-4 xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-[15px] xl:text-[20px]">
                Meteor
                <p className="text-sky-50	top-0  text-[15px]">
                  {" "}
                  Meteor, o MeteorJS, es un framework para aplicaciones web con
                  JavaScript libre y de código abierto​ usando Node.js. Meteor
                  facilita la creación rápida de{" "}
                  <span className="text-rose-400	">prototipos</span> y produce
                  código
                  <span className="text-rose-400	"> multiplataforma.</span>{" "}
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
                  className="object-cover mt-5 lg:w-1/4  "
                />
              </div>
              <h3 className="flex-col mt-4 px-1 text-slate-50 flex text-center items-center h-24 gap-4 xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-[15px] xl:text-[20px]">
                Next.js
                <p className="text-sky-50		top-0  text-[15px]">
                  {" "}
                  Next.js es un marco web de desarrollo{" "}
                  <span className="text-slate-300	"> front-end</span> de React de
                  código abierto creado por Vercel que habilita funcionalidades
                  como la representación del lado del{" "}
                  <span className="text-slate-300	">servidor.</span>{" "}
                </p>
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/**la mitad de tarjetas */}
      <div className=" w-screen relative bg-gradient-to-b from-[#374151] to-gray-800">
        <div className="absolute left-0 mt-10">
          <Image
            src="https://res.cloudinary.com/dn5ltihzv/image/upload/v1709751161/imagenes/P%20AND%20L.svg"
            width={900}
            height={500}
            alt="arrowPRE"
            className=" object-cover w-5/6"
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
              <h3 className="flex-col mt-3 px-1 text-[#4DB6AC]	 flex text-center items-center h-24 gap-4 xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-[15px] xl:text-[16px]">
                TailwindCSS
                <p className="text-sky-50	top-0 text-[15px]">
                  {" "}
                  framework de CSS de código abierto​ para el diseño de páginas
                  web. La principal característica de esta biblioteca es que no
                  genera una serie de clases{" "}
                  <span className="text-teal-300"> predefinidas</span> para
                  <span className="text-teal-300"> elementos </span> como
                  botones o tablas{" "}
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
              <h3 className="flex-col mt-4 px-1 text-[#A37BE1]	 flex text-center items-center h-24 gap-4 xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-[15px] xl:text-[16px]">
                Bootstrap 5
                <p className="text-sky-50		top-0  text-[15px]">
                  {" "}
                  Bootstrap es una biblioteca{" "}
                  <span className="text-violet-400"> multiplataforma</span> o
                  conjunto de herramientas de código abierto para diseño de
                  sitios y<span className="text-violet-400"> aplicaciones</span>{" "}
                  web.{" "}
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
              <h3 className="flex-col mt-3 px-1 text-[#D83B8B] flex text-center items-center h-24 gap-4 xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-[15px] xl:text-[16px]">
                SASS
                <p className="text-sky-50 top-0 text-[15px]">
                  {" "}
                  Sass es un lenguaje de hoja de estilos en cascada​ Después de
                  sus versiones iniciales, Nathan Weizenbaum y Chris Eppstein
                  han continuado extendiendo Sass con{" "}
                  <span className="text-pink-300">SassScript</span> , un
                  lenguaje de <span className="text-pink-300"> script </span>{" "}
                  simple, usado en los ficheros Sass.{" "}
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
              <h3 className="flex-col mt-3 px-1 text-[#61DAFB]	 flex text-center items-center h-24 gap-4 xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-[15px] xl:text-[16px]">
                React
                <p className="text-sky-50	top-0 text-[15px]">
                  {" "}
                  React es una biblioteca Javascript de código abierto diseñada
                  para crear <span className="text-sky-200	">interfaces</span> de
                  usuario con el objetivo de facilitar el desarrollo de
                  aplicaciones en una <span className="text-sky-200	">sola</span>{" "}
                  página.{" "}
                </p>
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/**Tools */}
      <div className="w-screen relative bg-gradient-to-b from-[#202A38] to-gray-900">
        <div className=" absolute right-0 ">
          <Image
            src={
              "https://res.cloudinary.com/dn5ltihzv/image/upload/v1709572214/imagenes/toolsSVG.svg"
            }
            width={600}
            height={200}
            alt="image-arrow2"
            className="object-cover mt-10  w-full h-full"
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
                width={80}
                height={50}
                alt="cardTY"
                className=" object-cover mt-5 lg:w-1/3  "
              />
            </div>
            <h3 className="flex-col px-1 mt-3 text-[#6fa560]	 flex text-center items-center h-24 gap-4 xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-[15px] xl:text-[16px]">
              node.js
              <p className="text-sky-50	top-0 text-[15px]">
                {" "}
                Node.js es un entorno de ejecución multiplataforma, basado en el
                lenguaje de programación{" "}
                <span className="text-lime-400">JavaScript,</span> asíncrono,
                con E/S de datos en una arquitectura orientada a{" "}
                <span className="text-lime-400">eventos</span> y basado en el
                motor V8 de Google{" "}
              </p>
            </h3>
          </div>
          <div
            className={`${styles.cardPostgre} flex items-center  flex-col lg:mb-20  mx-10 lg:mt-40 mt-20`}
          >
            <div className=" flex items-center justify-center flex-col">
              <Image
                src={
                  "https://res.cloudinary.com/dn5ltihzv/image/upload/v1709573611/imagenes/postgreSQL.svg"
                }
                width={50}
                height={50}
                alt="cardTY"
                className=" object-cover mt-5"
              />
            </div>
            <h3 className="flex-col mt-3 px-1 text-[#6093bb]	 flex text-center items-center h-24 gap-4 xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-[15px] xl:text-[20px]">
              PostgreSQL
              <p className="text-sky-50	top-0 text-[15px]">
                {" "}
                PostgreSQL, también llamado Postgres, es un sistema de gestión
                de bases de datos{" "}
                <span className="text-sky-400">relacional</span> orientado a
                <span className="text-sky-400"> objetos</span> y de código
                abierto, publicado bajo la licencia PostgreSQL, ​ similar a la
                BSD o la MIT.{" "}
              </p>
            </h3>
          </div>
          <div
            className={`${styles.cardMongo} flex items-center  flex-col lg:mb-20 lg:mt-40 mt-20`}
          >
            <div className="flex items-center justify-center flex-col lg:flex-row">
              <Image
                src={
                  "https://res.cloudinary.com/dn5ltihzv/image/upload/v1709572553/imagenes/mongoDBSVG.svg"
                }
                width={30}
                height={10}
                alt="cardTY"
                className=" object-cover mt-5"
              />
            </div>
            <h3 className="flex-col mt-2 px-1 text-[#07AC4F]	 flex text-center items-center h-24 gap-4 xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-[15px] xl:text-[16px]">
              MongoDB
              <p className="text-sky-50	top-0 text-[15px]">
                {" "}
                MongoDB es un sistema de base de datos NoSQL, orientado a
                <span className="text-green-400"> documentos</span> y de código
                abierto. En lugar de guardar los datos en tablas, tal y como se
                hace en las bases de datos relacionales, MongoDB guarda
                estructuras de datos{" "}
                <span className="text-green-400"> BSON (JSON)</span>{" "}
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
                width={50}
                height={50}
                alt="cardTY"
                className=" object-cover mt-5"
              />
            </div>
            <h3 className="flex-col mt-3 px-1 text-sky-100	 flex text-center items-center h-24 gap-4 xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-[15px] xl:text-[20px]">
              Figma
              <p className="text-sky-50	top-0 text-[15px]">
                {" "}
                Figma es un editor de gráficos vectorial y una herramienta de
                generación de{" "}
                <span className="text-green-400"> prototipos,</span>{" "}
                principalmente basada en la{" "}
                <span className="text-orange-400">web,</span> con
                características off-line adicionales habilitadas por
                aplicaciones de escritorio en macOS y Windows.
              </p>
            </h3>
          </div>
        </div>
      </div>
      <div className="w-screen min-h-screen bg-gradient-to-b from-[#121928] to-gray-950 flex flex-col items-center justify-center truncate">
        <h1
          className={`${styles.softSkills} truncate text-sky-50 text-center container text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-20`}
        >
          Soft Skills
        </h1>
        <div className="container w-full  text-balance h-full list-outside leading-relaxed flex justify-center pr-10">
          <ul className="list-disc text-sky-50 text-center ml-10">
            <li className="mb-10 text-left">
              <span className="text-[#20CBE5]">Effective communication:</span> I
              have the ability to convey ideas and messages clearly and
              understandably both verbally and in writing, and to listen
              actively to others.
            </li>
            <li className="mb-10 text-left">
              <span className="text-[#20CBE5]">Teamwork:</span> Ability to
              collaborate and work effectively with others, sharing
              responsibilities, ideas and effectively with others, sharing
              responsibilities, ideas and resources to achieve common resources
              to achieve common goals.
            </li>
            <li className="mb-10 text-left">
              <span className="text-[#20CBE5]">Problem solving:</span> Ability
              to identify, analyze and address problems efficiently and
              creatively, using analyze and address problems efficiently and
              creatively, using available available resources to find effective
              solutions.
            </li>
            <li className="mb-10 text-left">
              <span className="text-[#20CBE5]"> Adaptability:</span> Flexibility
              to adjust and face changes in the work environment or new
              situations changes in the work environment or new situations
              quickly and effectively. effective manner.
            </li>
            <li className="mb-10 text-left">
              <span className="text-[#20CBE5]"> Empathy:</span> Ability to
              understand and share the feelings, thoughts and experiences of
              others, and experiences of others, as well as to show compassion
              and empathy in social interactions. compassion and empathy in
              social interactions.
            </li>
            <li className="mb-10 text-left">
              <span className="text-[#20CBE5]"> Time management:</span> Ability
              to prioritize tasks, establish deadlines and efficiently and
              efficiently manage available time to achieve objectives in a
              timely manner. achieve objectives in a timely manner.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
