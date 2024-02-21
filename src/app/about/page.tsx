import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="relative flex items-center h-screen flex-col justify-center">
      <div className="container flex-1 pr-8 absolute inset-y-0 left-0 z-50">
        {/* Imagen en el lado izquierdo */}
        <Image
          src={
            "https://res.cloudinary.com/dn5ltihzv/image/upload/v1708470777/imagenes/xukeaadguf1aupoceg75.png"
          }
          alt="image"
          width={800}
          height={800}
          className="justify-between"
        />
      </div>
      <div className="container z-40 ">
        <div className="flex-1 pl-8  ">
          {/* Contenido de texto en el lado derecho */}
          <h1 className="text-4xl font-bold mb-4 text-white items-center	">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="text-lg text-white items-center	">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsum
            quibusdam, rerum accusamus quo illo placeat aut repellendus itaque
            possimus cupiditate fugit eum explicabo est unde! Vel suscipit
            debitis ducimus.
          </p>
        </div>
      </div>
      <div className="hidden md:block absolute inset-y--10 right-0 z-30">
        {/* Imagen de fondo en el lado derecho (visible solo en pantallas medianas y más grandes) */}
        <Image
          src={
            "https://res.cloudinary.com/dn5ltihzv/image/upload/v1708470779/imagenes/x3vlpbdbhzikaykmakfp.png"
          }
          width={1000}
          height={1000}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
