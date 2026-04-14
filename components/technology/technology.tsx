import technologyBg from "../../assets/img/technology-bg.png"
import TechCard from "./techCard";
export default function Technology() {
  return (
    <section className="pt-7 md:pt-14 pb-20 md:pb-29.5 bg-[linear-gradient(180deg,#050505_0%,#252525_100%)]">
      <div className="container">
        <div className="text-center max-w-135.75 mx-auto">
          <h2 className="mb-5">Technology Stack</h2>
          <p>Beyond Code systems are built using modern AI and cloud infrastructure.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-5 relative mt-12 md:px-10 xl:px-63">
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 right-0 w-80 sm:w-120 md:w-150 lg:w-215 h-100 sm:h-120 md:h-140 lg:h-170.5 bg-cover bg-top bg-no-repeat"
            style={{ backgroundImage: `url(${technologyBg.src})` }}>
          </div>
          
          <TechCard
            title="AI & Backend"
            items={["Python", "PyTorch", "Django", "Flask"]}
          />
          <TechCard
            title="Data Infrastructure"
            items={["MongoDB", "Elasticsearch", "Vector databases", "Redis"]}
          />
          <TechCard
            title="Cloud & Deployment"
            items={["AWS", "Google Cloud", "Docker", "Kubernetes", "AWS Lambda", "AWS S3"]}
          />
        </div>
      </div>
    </section>
  );
}






