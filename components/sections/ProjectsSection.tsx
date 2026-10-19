import ArrowIcon from "@/components/ui/ArrowIcon";
import ProjectPreview from "@/components/ui/ProjectPreview";
import { projects, type Project } from "@/data/projects";


function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="project-links">
      {project.liveUrl ? (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Buka demo <ArrowIcon diagonal /><span className="sr-only"> {project.title}, tab baru</span></a>
      ) : project.video ? (
        <a href={project.video.src} target="_blank" rel="noopener noreferrer">Buka video <ArrowIcon diagonal /><span className="sr-only"> {project.title}, tab baru</span></a>
      ) : null}
    </div>
  );
}

export default function ProjectsSection() {
  const featured = projects.find((project) => project.id === "marketlens");
  const supporting = projects.filter((project) => project.id !== "marketlens");
  return (
    <section className="projects-section container-main" id="projects" aria-labelledby="projects-title">
      <div className="section-heading">
        <div><p className="eyebrow">01 / Selected projects</p><h2 id="projects-title">Proyek pilihan.</h2></div>
        <p>{projects.length} proyek di market intelligence, penerjemahan bahasa, dan machine learning.</p>
      </div>
      {featured?.video && (
        <article className="featured-project" aria-labelledby="marketlens-title" data-project-id={featured.id}>
          <div className="featured-heading"><h3 id="marketlens-title">{featured.title}</h3><p>{featured.category}</p><span className="eyebrow">01<span> / Featured project</span></span></div>
          <figure className="featured-video">
            <div className="video-frame">
              <video id="marketlens-video" controls playsInline preload="none" poster={featured.video.poster} width="1920" height="1080"
                aria-label="Demo MarketLens: Profile, Discovery, My Assets, Comparison, serta evidence dan sumber" aria-describedby="marketlens-description">
                <source src={featured.video.src} type="video/mp4" />
                Browser ini belum mendukung video. <a href={featured.video.src}>Buka video MarketLens.</a>
              </video>
            </div>
            <figcaption><span>Demo produk · video asli</span><span>{featured.video.duration} / MarketLens</span></figcaption>
          </figure>
          <div className="featured-description"><p id="marketlens-description">{featured.description}</p><p className="feature-index">Profile / Discovery / My Assets / Comparison</p></div>
        <ProjectLinks project={featured} />
        </article>
      )}
      <div className="supporting-projects">
        {supporting.map((project, index) => (
          <article className="supporting-project" key={project.id} aria-labelledby={`${project.id}-title`} data-project-id={project.id}>
            <p className="project-index">0{index + 2} / {project.category}</p>
            {project.preview !== "marketlens" && <ProjectPreview variant={project.preview} />}
            <div className="project-title-group"><h3 id={`${project.id}-title`}>{project.title}</h3>{project.originalTitle && <p className="original-title">{project.originalTitle}</p>}</div>
            <p className="project-description">{project.description}</p>
            {project.tech.length > 0 && <p className="project-stack"><span className="sr-only">Teknologi: </span>{project.tech.join(" / ")}</p>}
            <ProjectLinks project={project} />
          </article>
        ))}
      </div>
    </section>
  );
}
