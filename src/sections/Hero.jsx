// src/sections/Hero.jsx
import React from "react";
import { words } from "../constants";
import Button from "../components/Button";
import HeroExperience from "../components/models/hero_models/HeroExperience";

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden h-screen">
      {/* Background (behind everything) */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/bg.png"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Layout: left text + right 3D */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-screen">
        {/* LEFT: hero content */}
        <header className="flex flex-col justify-center px-5 md:px-20">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping{" "}
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, i) => (
                      <span
                        key={`${word.text}-${i}`}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="size-7 md:size-10 xl:size-12 p-1 rounded-full bg-white/50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>

              <h1>Into real projects</h1>
              <h1>That deliver results</h1>
            </div>

            <p className="text-sm md:text-base text-white/80 max-w-xl">
              Hello, I am Phyo, a second year CS student planning to transfer to
              a four year university.
            </p>

            {/* Button wrapper controls button size */}
            <div className="w-fit">
              <div className="w-60 h-12 md:w-80 md:h-16">
                <Button id="button" text="See my work" />
              </div>
            </div>
          </div>
        </header>

        {/* RIGHT: 3D model panel */}
        <div className="w-full h-full md:border-l md:border-white/10 flex items-center justify-center">
          <div className="w-full max-w-[720px] h-[520px] lg:h-[620px] rounded-3xl overflow-hidden">
            <HeroExperience />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
