import React from "react";
import styles from "./Skills.module.css";
import Image from "next/image";
import Footer from "@/components/footer/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description: "Estas en la sección habilidades",
};

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
              JavaScript is an interpreted programming language, a dialect of
              the standard of the standard
              <span className="text-yellow-300">ECMAScript.</span> It is defined
              as oriented to <span className="text-yellow-300">objects,</span> ​
              prototype-based, imperative, weakly typed and dynamic.
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
              free and open source software developed and maintained by
              Microsoft. It is a superset of
              <span className="text-sky-200">JavaScript,</span> that essentially
              adds static types and objects based on
              <span className="text-sky-200">classes.</span>
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
                  Express.js or simply Express is a framework for web
                  applications for the Node.js web applications for the Node.js
                  open source, MIT-licensed Node.js open source and MIT
                  licensed. It is used to develop applications
                  <span className="text-gray-400">web </span> y
                  <span className="text-gray-400">APIs.</span>
                </p>
              </h3>
            </div>
            <div
              className={`${styles.cardMeteor} flex items-center  flex-col mx-20  mt-20 `}
            >
              <div className="flex items-center justify-center flex-col">
                <Image
                  src={
                    "https://res.cloudinary.com/dn5ltihzv/image/upload/v1709423996/imagenes/meteorSVG.svg"
                  }
                  width={60}
                  height={50}
                  alt="cardTY"
                  className=" object-cover mt-5 lg:w-1/4"
                />
              </div>
              <h3 className="flex-col 	mt-3 px-1 text-[#df4f4f]	flex text-center items-center h-24 gap-4 xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-[15px] xl:text-[20px]">
                Meteor
                <p className="text-sky-50	top-0 text-[15px]">
                  Meteor, or MeteorJS, is a framework for web applications with
                  free and open source JavaScript using Node.js. free and open
                  source JavaScript using Node.js. Meteor facilitates the rapid
                  creation of <span className="text-rose-400">prototypes</span>
                  and produces code
                  <span className="text-rose-400">multiplatform.</span>
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
                  Next.js is a web development framework.
                  <span className="text-slate-300	"> front-end</span> React open
                  source code created by Vercel that enables functionalities
                  such as such as the rendering of the
                  <span className="text-slate-300	">server.</span>
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
                  open source CSS framework for web page design. web design. The
                  main feature of this library is that it does not generates a
                  series of classes
                  <span className="text-teal-300">predefined</span> for
                  <span className="text-teal-300"> elements </span> like buttons
                  or tables
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
                  Bootstrap is a library
                  <span className="text-violet-400"> multiplatform</span> open
                  source toolset for site design and site design and
                  <span className="text-violet-400"> applications</span>
                  web.
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
                  Sass is a cascading style sheet language. its initial
                  versions, Nathan Weizenbaum and Chris Eppstein have continued
                  to extend Sass with
                  <span className="text-pink-300">SassScript</span> , a language
                  of <span className="text-pink-300"> script </span>
                  simple, used in Sass files.
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
                  React is an open-source Javascript library designed to create
                  to create <span className="text-sky-200	">interfaces</span> of
                  to facilitate the development of applications in a
                  applications in a <span className="text-sky-200	">only</span>{" "}
                  Page.{" "}
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
                Node.js is a cross-platform runtime environment, based on the
                Node.js programming language. programming language
                <span className="text-lime-400">JavaScript,</span> asynchronous,
                with data I/O in a data-oriented architecture.
                <span className="text-lime-400">events</span> and based on the
                Googles V8 engine
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
                PostgreSQL, also called Postgres, is a database management
                system. database management system
                <span className="text-sky-400">relational</span> oriented to
                <span className="text-sky-400"> objects</span> and open source
                published under the PostgreSQL license, similar to the BSD or
                MIT BSD or MIT.
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
                MongoDB is a NoSQL database system, oriented to
                <span className="text-green-400"> documents</span> and open
                source open source. Instead of storing data in tables, as is
                done in relational databases, MongoDB stores data in tables, as
                is done in relational databases. in relational databases,
                MongoDB stores data in data structures
                <span className="text-green-400"> BSON (JSON)</span>
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
                Figma is a vector graphics editor and a tool for the generation
                of generation of
                <span className="text-green-400"> prototypes,</span>
                mainly based on the
                <span className="text-orange-400">web,</span> with additional
                off-line features enabled by desktop desktop applications on
                macOS and Windows.
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
