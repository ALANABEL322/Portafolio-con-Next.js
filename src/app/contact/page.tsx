"use client";
import React from "react";
import styles from "./Contact.module.css";
import Footer from "@/components/footer/Footer";
import Image from "next/image";

export default function Contact() {
  return (
    <div>
      <div className="w-screen min-h-screen bg-gradient-to-b from-[#0c0c0e] to-gray-950">
        <h1
          className={`${styles.contact} mt-20 text-slate-50 md:mb-[100px] mb-[80px] text-center text-[100px] sm:text-[80px] md:text-[120px] lg:text-[180px] xl:text-[240px] relative`}
        >
          Contact
        </h1>
        <div className="flex justify-center items-center">
          <Image
            src={
              "https://res.cloudinary.com/dn5ltihzv/image/upload/v1709684426/imagenes/cardContact.svg"
            }
            width={800}
            height={500}
            alt="imageprofile-contact"
            className="object-cover mb-20 mx-10"
          />
        </div>
        <a
          href="/CV-Alan-Abel-Pereyra-.docx"
          download={"CV-Alan-Abel-Pereyra-.docx"}
          className="flex items-center justify-center"
        >
          <button className="text-white rounded-md uppercase border border-double border-sky-500 bg-gray-950	mb-20 p-4 outline-1 shadow-lg shadow-cyan-500/50 ">
            Download CV
          </button>
        </a>
      </div>
      <Footer />
    </div>
  );
}
