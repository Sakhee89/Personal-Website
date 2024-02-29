export function ProjectCard({ projectData }) {
  return (
    <section className="border w-full max-w-xl mx-auto mt-3 mb-3 pb-3">
      <h2 className="mt-3 mb-3">{projectData.title}</h2>
      <p className="mb-3">{projectData.description}</p>
      <p>
        <a href={projectData.gitHub}>GitHub Repository</a>
      </p>
      <p>
        <a href={projectData.hosted}>Hosted Version</a>
      </p>
    </section>
  );
}
