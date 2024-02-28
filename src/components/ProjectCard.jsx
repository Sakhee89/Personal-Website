export function ProjectCard({ projectData }) {
  return (
    <section className="border">
      <h2>{projectData.title}</h2>
      <p>{projectData.description}</p>
      <p>Link to Project: {projectData.gitHub}</p>
      <p>Hosted on: {projectData.hosted}</p>
    </section>
  );
}
