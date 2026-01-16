import { projects } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  return (
    <section id="projects" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="Projects" sub="🚀 AI & Full-Stack Work" />

        {/* Responsive grid */}
        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <GlowCard card={project} key={index} index={index}>
              <div className="space-y-4">
                {/* Project image */}
                <div className="rounded-2xl overflow-hidden bg-white/5"></div>

                {/* Title */}
                <h3 className="text-2xl font-semibold">{project.title}</h3>

                {/* Description */}
                <p className="text-white/70">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-2 relative z-20">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl border border-white/30 hover:bg-white hover:text-black transition"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
