"use client";
import React, { useRef, useEffect, useState } from "react";
import styles from "./Home.module.css";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = container.querySelectorAll(".highlight-word");

    words.forEach((word) => {
      word.addEventListener("mouseover", () => handleMouseOver(word));
      word.addEventListener("mouseout", () => handleMouseOut(word));
    });

    const scrambleText = "building amazing thing .";

    // Animación de texto de GSAP
    const tl = gsap.timeline({
      defaults: { duration: 2, ease: "none" },
    });

    tl.to(`.${styles.scramble}`, {
      text: scrambleText,
      ease: "none",
      onUpdate: () => {
        const scrambleElement = container.querySelector(
          `.${styles.scramble}`
        ) as HTMLElement;
        if (scrambleElement) {
          scrambleElement.style.color = "#22d3ee";
          scrambleElement.classList.add(styles["brightness-200"]);
          scrambleElement.style.fontSize = "2vw";
        }
      },
    });

    return () => {
      words.forEach((word) => {
        word.removeEventListener("mouseover", () => handleMouseOver(word));
        word.removeEventListener("mouseout", () => handleMouseOut(word));
      });
    };
  }, []);

  const handleMouseOver = (word: EventTarget | null) => {
    if (word instanceof HTMLElement) {
      word.classList.add(styles.hoveredWord);
      setIsHovered(true);
    }
  };

  const handleMouseOut = (word: EventTarget | null) => {
    if (word instanceof HTMLElement) {
      word.classList.remove(styles.hoveredWord);
      setIsHovered(false);
    }
  };

  return (
    <div>
      <main className="flex flex-col justify-between">
        <div className="mt-6">
          <div className="mt-6">
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
              ref={containerRef}
              className={`${styles.contenedor} ${
                isHovered ? styles.myTheme : ""
              } flex items-center justify-center h-96 flex-col`}
            >
              <div className={`${styles.herocopy} text-center`}>
                <h1
                  className={`${styles.herocopyh1} text-8xl mb-4 leading-snug`}
                >
                  <span className={`highlight-word ${styles.word}`}>Alan</span>{" "}
                  <span className={`highlight-word ${styles.word}`}>Abel</span>{" "}
                  <span className={`highlight-word ${styles.word}`}>
                    Pereyra
                  </span>
                </h1>
              </div>
              <h2
                className={`text-gray-300 text-center font-bold opacity-50  sm:text-4xl md:text-6xl lg:text-6xl shadow-lg shadow-cyan-500/20${
                  isHovered ? styles.flipText : ""
                }`}
              >
                Full Stack Developer
              </h2>
              <div className={`container mt-6 ${styles.demoContainer}`}>
                <div
                  className={`demo  flex-col  flex items-center justify-center mt-6${styles.textBlock}`}
                >
                  <div className={`${styles.scramble} sm:text-4xl`}></div>
                  <span className={`${styles.charsCustom}`}></span>
                  <span className={`${styles.charsNumbers}`}></span>
                  <br />
                  <span className={`${styles.charsUppercase}`}></span>
                  <span className={`${styles.charsLowercase}`}></span>
                  <div className={`${styles.newClass}`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
