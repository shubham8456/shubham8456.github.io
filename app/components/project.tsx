import { projects } from "@/data/projects";

const Project = () => {
  return (
    <section style={{ marginBottom: "64px" }}>
      <h2>Projects</h2>
      {projects.map((project) => (
        <article key={project.title} style={{ marginBottom: "24px" }}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noreferrer">View project</a>
        </article>
      ))}
    </section>
  );
};

export default Project;
