import React from "react";
import styles from "./Contact.module.css";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
export default function contact() {
  return (
    <div>
      <div className="  w-screen min-h-screen">
        <h1
          className={`${styles.contact} text-slate-50 md:mb-[100px] mb-[80px] text-center text-[100px] sm:text-[80px] md:text-[120px] lg:text-[180px] xl:text-[240px] relative`}
        >
          Contact
        </h1>
        <div className="flex items-center justify-center mb-10">
          <div className="items-center w-1/3 h-full justify-center profile-card  rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 bg-white flex flex-col gap-3 transition-all duration-300 group">
            <div className=" w-full pt-5 flex items-center justify-center flex-col gap-1">
              <div className="img_container w-full flex items-center justify-center relative z-40 after:absolute after:h-[6px] after:w-full after:bg-[#58b0e0] after:top-4 after:group-hover:size-[1%] after:delay-300 after:group-hover:delay-0 after:group-hover:transition-all after:group-hover:duration-300 after:transition-all after:duration-300 before:absolute before:h-[6px] before:w-full before:bg-[#58b0e0] before:bottom-4 before:group-hover:size-[1%] before:delay-300 before:group-hover:delay-0 before:group-hover:transition-all before:group-hover:duration-300 before:transition-all before:duration-300">
                <div className="">
                  <Image
                    src={
                      "https://res.cloudinary.com/dn5ltihzv/image/upload/v1708800592/imagenes/perfil2.png"
                    }
                    width={160}
                    height={200}
                    alt="image-profile"
                    className="object-cover avatar z-40"
                  />
                </div>
                <div className="absolute bg-[#22d3ee3d] z-10 size-[60%] w-full group-hover:size-[1%] group-hover:transition-all group-hover:duration-300 transition-all duration-300 delay-700 group-hover:delay-0"></div>
              </div>
            </div>
            <div className="headings *:text-center *:leading-4">
              <p className="text-2xl font-serif font-semibold text-[#434955]">
                ALAN PEREYRA
              </p>
              <p className="text-1xl mt-2 font-semibold text-[#434955]">
                full stack developer
              </p>
            </div>
            <div className="w-full items-center justify-center flex">
              <ul className="flex  flex-col items-start gap-2 has-[:last]:border-b-0 *:inline-flex *:gap-2 *:items-center *:justify-center *:border-b-[1.5px] *:border-b-stone-700 *:border-dotted *:text-xs *:font-semibold *:text-[#434955] pb-3">
                <li className="">
                  <svg
                    id="phone"
                    viewBox="0 0 24 24"
                    className="fill-stone-700 group-hover:fill-[#3e6174]"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                    <path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"></path>
                  </svg>
                  <p className="text-[18px]">+15 113085-5123</p>
                </li>
                <li>
                  <svg
                    className="fill-stone-700 group-hover:fill-[#3e6174]"
                    height="20"
                    width="20"
                    id="mail"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16,14.81,28.78,6.6A3,3,0,0,0,27,6H5a3,3,0,0,0-1.78.6Z"
                      fill="#231f20"
                    ></path>
                    <path
                      d="M16.54,16.84h0l-.17.08-.08,0A1,1,0,0,1,16,17h0a1,1,0,0,1-.25,0l-.08,0-.17-.08h0L2.1,8.26A3,3,0,0,0,2,9V23a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V9a3,3,0,0,0-.1-.74Z"
                      fill="#231f20"
                    ></path>
                  </svg>
                  <p className="text-[18px]">alanabelpereyra322@gmail.com</p>
                </li>
                <li>
                  <svg
                    className="fill-stone-700 group-hover:fill-[#3e6174]"
                    height="20"
                    width="20"
                    id="globe"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g data-name="Layer 2">
                      <path
                        data-name="globe"
                        d="M22 12A10 10 0 0 0 12 2a10 10 0 0 0 0 20 10 10 0 0 0 10-10zm-2.07-1H17a12.91 12.91 0 0 0-2.33-6.54A8 8 0 0 1 19.93 11zM9.08 13H15a11.44 11.44 0 0 1-3 6.61A11 11 0 0 1 9.08 13zm0-2A11.4 11.4 0 0 1 12 4.4a11.19 11.19 0 0 1 3 6.6zm.36-6.57A13.18 13.18 0 0 0 7.07 11h-3a8 8 0 0 1 5.37-6.57zM4.07 13h3a12.86 12.86 0 0 0 2.35 6.56A8 8 0 0 1 4.07 13zm10.55 6.55A13.14 13.14 0 0 0 17 13h2.95a8 8 0 0 1-5.33 6.55z"
                      ></path>
                    </g>
                  </svg>
                  <p className="text-[18px]">alanportfolio-beta.vercel.app</p>
                </li>
                <li>
                  <svg
                    id="map"
                    viewBox="0 0 16 16"
                    className="fill-stone-700 group-hover:fill-[#58b0e0]"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 0C5.2 0 3 2.2 3 5s4 11 5 11 5-8.2 5-11-2.2-5-5-5zm0 8C6.3 8 5 6.7 5 5s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"
                      fill="#444"
                    ></path>
                  </svg>
                  <p className="text-[18px]">Buenos Aires Argentina</p>
                </li>
              </ul>
            </div>
            <hr className="w-full mb-5 group-hover:h-5 h-3 bg-[#22d3ee] group-hover:transition-all group-hover:duration-300 transition-all duration-300" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
