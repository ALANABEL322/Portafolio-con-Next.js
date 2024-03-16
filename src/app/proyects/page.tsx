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
import "animate.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Estas en la sección Proyectos",
};

export default function Proyectos() {
  return (
    <div className="bg-gradient-to-b from-[#0c0c0e] to-[#030712]">
      <div className="w-screen max-h-full flex flex-col items-center justify-center">
        <div className="container">
          <h1
            className={`${styles.projects} text-slate-50 mt-20 md:mb-[200px] mb-[80px] text-center text-8xl sm:text-[80px] md:text-[120px] lg:text-[180px] xl:text-[240px]`}
          >
            Projects
          </h1>
        </div>

        <div className="items-center flex flex-col-reverse lg:flex-row ">
          <div className="container flex flex-col lg:ml-5 w-full lg:w-1/2 order-2 lg:order-1">
            <Image
              src={
                "https://res.cloudinary.com/dn5ltihzv/image/upload/v1709058639/imagenes/imagenProyecto.png"
              }
              width={800}
              height={700}
              alt="image-projects"
              className="object-cover w-full max-w-full rounded-md lg:rounded-r-md md:pr-3"
            />
            <p className="text-slate-50 text-1xl md:text-1xl lg:text-1xl xl:text-1xl mb-3 flex flex-col items-center justify-center">
              <span className="">sep. 23 - mar 24.</span>{" "}
              <span className="ml-3 mb-[40px] xs:text-1xl sm:text-1xl md:text-1xl lg:text-1xl xl:text-1xl">
                Buenos Aires, Argentina
              </span>
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center sm:items-end  order-1 lg:order-2 ml-2 ">
            <p className=" text-[#22d3ee] text-1xl md:text-1xl lg:text-2xl xl:text-2xl mb-3 mr-11">
              featuted project
            </p>
            <p className="text-slate-50 text-3xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl mb-3 mr-10">
              ClinicalTechsrl
            </p>
            <div className="p-5  text-slate-50 xs:text-1xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl mr-5 ml-2 border rounded-md border-zinc-400 bg-gray-900">
              As a developer on the ClinicalTech team, I had the opportunity to
              contribute to both the frontend and backend development of this
              exciting ecommerce platform specializing in medical supplies.
              Collaborating with a dedicated team was an enriching experience,
              and my focus was on ensuring the functionality and usability of
              the application. here the url of the deploy{" "}
              <div className="rounded-md bg-blend-color justify-center items-center flex mt-5 sombra-xl bg-cyan-500 shadow-lg shadow-cyan-500/50">
                <a
                  href="https://clinicaltechsrl.com.ar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="https://res.cloudinary.com/dn5ltihzv/image/upload/v1709242606/imagenes/iconoClinicaltech.png"
                    alt="icon-deploy"
                    width={240}
                    height={100}
                    className="animate__animated animate__fadeInUp mt-2 "
                  />
                </a>
              </div>
            </div>

            <div className=" w-full text-sm mb-3 md:text-sm lg:text-sm xl:text-sm flex items-center justify-center mt-3 ">
              <p className="text-slate-50 hidden sm:inline">Bootstrap</p>
              <RiBootstrapLine
                className={`${styles.iconBootstrap} text-slate-50 ml-1 hidden sm:inline`}
              />
              <p className="text-slate-50 ml-3 hidden sm:inline">Javascript</p>
              <RiJavascriptLine
                className={`${styles.iconJS} text-slate-50 ml-1 mr-2 hidden sm:inline`}
              />
              <p className="text-slate-50 hidden sm:inline">React.js</p>
              <RiReactjsFill
                className={`${styles.iconReact} text-slate-50 ml-1 hidden sm:inline`}
              />
              <p className="text-slate-50 ml-3 hidden sm:inline">Javascript</p>
              <TbBrandTypescript
                className={`${styles.iconTY} text-slate-50 ml-1 hidden sm:inline`}
              />
              <p className="text-slate-50 ml-3 hidden sm:inline">Meteor</p>
              <RiMeteorFill
                className={`${styles.iconMeteor} text-slate-50 ml-1 hidden sm:inline`}
              />
              <p className="text-slate-50 ml-3 hidden sm:inline">mongoDB</p>
              <BiLogoMongodb
                className={`${styles.iconMongo} text-slate-50 ml-1 hidden sm:inline`}
              />
              <p className="text-slate-50 ml-3 hidden sm:inline">CSS</p>
              <RiCss3Fill
                className={`${styles.iconCSS} text-slate-50 ml-1 hidden sm:inline `}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
