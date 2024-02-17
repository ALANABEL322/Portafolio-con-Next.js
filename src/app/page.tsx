import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  const reverseWords = (str: string) => {
    return str.split(" ").reverse().join(" ");
  };

  return (
    <div>
    <Navbar/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="homeap-container">
          <div className=" ">
            <div className="site-content md:block lg:hidden">
              <video
                className="img-fluid"
                autoPlay
                muted
                loop
                id="heroVideoVertical"
              >
                <source src="https://res.cloudinary.com/dn5ltihzv/video/upload/v1708019475/videosDev/bfydy3xnhrzd2tmnnxg5.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="container site-content hidden lg:block">
              <video className="img-fluid" autoPlay muted loop id="heroVideo">
                <source src="https://res.cloudinary.com/dn5ltihzv/video/upload/v1708019463/videosDev/vpfj6edito8mqnzl15aj.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="contenedor vh-100 ">
              <div className="hero-copy vh-100 flex flex-col justify-center items-center">
                <h1 className="text-gray-50	 text-center break-all text-8xl mb-4 leading-snug">
                  Alan Abel Pereyra
                </h1>
                <h4 className="text-gray-50	 text-3xl break-all text-center leading-snug">
                  La imperfección es una perfección virtual
                </h4>
                <h4 className="text-gray-50	 text-3xl break-all text-center mirrored-text opacity-50 leading-snug">
                  {reverseWords("La imperfección es una perfección virtual")}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
