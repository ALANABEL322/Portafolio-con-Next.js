// import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col justify-between">
        <div className="">
          <div className="">
            <div className="container hidden lg:block">
              <video className={styles.heroVideo} autoPlay muted loop>
                <source
                  src="https://res.cloudinary.com/dn5ltihzv/video/upload/v1708019463/videosDev/vpfj6edito8mqnzl15aj.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="md:block lg:hidden">
              <video className={styles.heroVideoVertical} autoPlay muted loop>
                <source
                  src="https://res.cloudinary.com/dn5ltihzv/video/upload/v1708019475/videosDev/bfydy3xnhrzd2tmnnxg5.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div
              className={`${styles.contenedor} flex items-center justify-center h-96`}
            >
              <div className={`${styles.herocopy} text-center`}>
                <h1
                  className={`${styles.herocopyh1} text-8xl mb-4 leading-snug`}
                >
                  Alan Abel Pereyra
                </h1>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
