import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { socialImgs } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      textRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center bg-black section-padding"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT — TEXT */}
        <div ref={textRef}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-white/60">Me</span>
          </h2>

          <p className="text-white/70 text-lg leading-relaxed mb-6">
            I’m <span className="font-semibold text-white">Phyo Thu Kha</span>,
            a second-year Computer Science student passionate about building
            real-world products using modern web technologies.
          </p>

          <p className="text-white/60 leading-relaxed mb-8">
            I enjoy working across the full stack, from designing intuitive user
            interfaces to developing efficient backend systems. My interests
            include software engineering, system optimization, and applied
            machine learning, and I enjoy working on projects that involve
            performance, security, and real-time data. I’m always eager to
            collaborate, learn new technologies, and turn ideas into practical,
            impactful applications.
          </p>
        </div>

        {/* RIGHT — VISUAL BLOCK (clean & minimal like your friend) */}
        <div className="hidden md:flex justify-center">
          <div className="w-[320px] h-[420px] rounded-2xl bg-gradient-to-br from-[#1e1e1e] to-[#0f0f0f] border border-white/10">
            <img src="../public/images/ptkavatar.png" alt="" />
          </div>
        </div>

        <div className="socials flex justify-center gap-8">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <a
                href={socialImg.url}
                key={index}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={socialImg.imgPath}
                  alt="social icon"
                  className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 opacity-70 hover:opacity-100 hover:scale-110"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
