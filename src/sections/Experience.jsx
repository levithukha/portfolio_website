import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    // Loop through each timeline card and animate them in
    // as the user scrolls to each card
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      // Animate the card coming in from the left
      // and fade in
      gsap.from(card, {
        // Move the card in from the left
        xPercent: -100,
        // Make the card invisible at the start
        opacity: 0,
        // Set the origin of the animation to the left side of the card
        transformOrigin: "left left",
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: "power2.inOut",
        // Trigger the animation when the card is 80% of the way down the screen
        scrollTrigger: {
          // The card is the trigger element
          trigger: card,
          // Trigger the animation when the card is 80% down the screen
          start: "top 80%",
        },
      });
    });

    // Animate the timeline height as the user scrolls
    // from the top of the timeline to 70% down the screen
    // The timeline height should scale down from 1 to 0
    // as the user scrolls up the screen
    gsap.to(".timeline", {
      // Set the origin of the animation to the bottom of the timeline
      transformOrigin: "bottom bottom",
      // Animate the timeline height over 1 second
      ease: "power1.inOut",
      // Trigger the animation when the timeline is at the top of the screen
      // and end it when the timeline is at 70% down the screen
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        // Update the animation as the user scrolls
        onUpdate: (self) => {
          // Scale the timeline height as the user scrolls
          // from 1 to 0 as the user scrolls up the screen
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    // Loop through each expText element and animate them in
    // as the user scrolls to each text element
    gsap.utils.toArray(".expText").forEach((text) => {
      // Animate the text opacity from 0 to 1
      // and move it from the left to its final position
      // over 1 second with a power2 ease-in-out curve
      gsap.from(text, {
        // Set the opacity of the text to 0
        opacity: 0,
        // Move the text from the left to its final position
        // (xPercent: 0 means the text is at its final position)
        xPercent: 0,
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: "power2.inOut",
        // Trigger the animation when the text is 60% down the screen
        scrollTrigger: {
          // The text is the trigger element
          trigger: text,
          // Trigger the animation when the text is 60% down the screen
          start: "top 60%",
        },
      });
    }, "<"); // position parameter - insert at the start of the animation
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="Work Experience" sub="" />

        {/* This is the container that holds ONE shared timeline */}
        <div className="mt-32 relative timeline-container">
          <div className="absolute left-0 top-0 h-full flex justify-center">
            {/* optional: faint base line behind gradient */}
            <div className="timeline-line w-1 h-full">
              <div className="gradient-line w-1 h-full" />
            </div>
          </div>

          {/* Cards wrapper, pushed RIGHT to make space for the line */}
          <div className="relative z-50 xl:space-y-32 space-y-14 pl-10 md:pl-14">
            {expCards.map((card) => (
              <div key={card.title} className="timeline-card">
                <div className="flex items-start gap-6 md:gap-10">
                  {/* Logo beside the line */}
                  <div className="timeline-logo shrink-0 rounded-2xl">
                    <img src={card.logoPath} alt="logo" />
                  </div>

                  {/* Text */}
                  <div className="expText">
                    <h1 className="font-semibold text-3xl">{card.title}</h1>
                    <p className="my-5 text-white-50">🗓️&nbsp;{card.date}</p>

                    <p className="text-[#839CB5] italic">{card.company}</p>

                    <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                      {card.responsibilities.map((r, i) => (
                        <li key={i} className="text-lg">
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* end timeline container */}
      </div>
    </section>
  );
};

export default Experience;
