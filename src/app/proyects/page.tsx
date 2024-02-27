// Importa los estilos de tu módulo CSS
"use client";
import Footer from "@/components/footer/Footer";
import styles from "./projects.module.css";
import Image from "next/image";
import {
  RiBootstrapLine,
  RiJavascriptLine,
  RiReactjsFill,
  RiMeteorFill,
  RiCss3Fill,
} from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { BiLogoMongodb } from "react-icons/bi";
export default function Proyectos() {
  return (
    <div className="bg-gradient-to-b from-[#0c0c0e]	 to-[#030712] ">
      <div className="w-screen max-h-full h-screen flex flex-col items-center justify-center ">
        <div className="container ">
          <h1 className="text-slate-50 mb-10 text-center font-semibold text-4xl md:text-6xl lg:text-8xl xl:text-9xl">
            Projects
          </h1>
        </div>

        <div className="flex justify-start items-center w-full">
          <Image
            src={
              "https://res.cloudinary.com/dn5ltihzv/image/upload/v1709058639/imagenes/imagenProyecto.png"
            }
            width={800}
            height={700}
            alt="image-projects"
            className="object-cover w-1/2 max-w-full px-10 pt-5 rounded-md"
          />
          {/* <p className="text-slate-50 text-1xl md:text-1xl lg:text-1xl xl:text-1xl mb-3">oct. 23 - dic. 23</p> */}
          <div className=" right-0 p-5 w-1/2 flex flex-col items-end justify-end pr-10">
            <p
              className={`${styles.featuted}  text-slate-50 text-1xl md:text-1xl lg:text-1xl xl:text-1xl mb-3`}
            >
              featuted project
            </p>
            <p className="text-slate-50 text-3xl md:text-3xl lg:text-3xl xl:text-3xl mb-3">
              ClinicalTechsrl
            </p>
            <div
              className={`${styles.card} text-slate-50 text-3xl md:text-3xl lg:text-3xl xl:text-3xl p-5 border rounded-md border-zinc-400 bg-gray-800`}
            >
              As a developer on the ClinicalTech team, I had the opportunity to
              contribute to both the frontend and backend development of this
              exciting ecommerce platform specializing in medical supplies.
              Collaborating with a dedicated team was an enriching experience,
              and my focus was on ensuring the functionality and usability of
              the application.
            </div>
            <div className=" text-sm	md:text-sm lg:text-sm xl:text-sm flex items-center mt-3">
              <p className="text-slate-50 ">Bootstrap</p>
              <RiBootstrapLine
                className={`${styles.iconBootstrap} text-slate-50 ml-1`}
              />
              <p className="text-slate-50 ml-3">Javascript</p>
              <RiJavascriptLine
                className={`${styles.iconJS} text-slate-50 ml-1 mr-2 `}
              />
              <p className="text-slate-50 ">React.js</p>
              <RiReactjsFill
                className={`${styles.iconReact} text-slate-50 ml-1`}
              />
              <p className="text-slate-50 ml-3">Javascript</p>
              <TbBrandTypescript
                className={`${styles.iconTY} text-slate-50 ml-1 `}
              />
              <p className="text-slate-50 ml-3">Meteor</p>
              <RiMeteorFill
                className={`${styles.iconMeteor} text-slate-50 ml-1 `}
              />
              <p className="text-slate-50 ml-3">mongoDB</p>
              <BiLogoMongodb
                className={`${styles.iconMongo} text-slate-50 ml-1 `}
              />
              <p className="text-slate-50 ml-3">CSS</p>
              <RiCss3Fill className={`${styles.iconCSS} text-slate-50 ml-1 `} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
