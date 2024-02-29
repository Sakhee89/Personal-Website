export function ProjectCard({ projectData }) {
  return (
    <section className="border w-full max-w-xl mx-auto mt-3 mb-3 pb-3">
      <h2 className="mt-3 mb-3 font-bold text-lg">{projectData.title}</h2>
      <p className="mb-3 text-gray-200">{projectData.description}</p>
      <div className="flex flex-wrap gap-4 justify-center">
        <p>
          <a className="text-lg text-orange-600" href={projectData.gitHub}>
            GitHub Repository
          </a>
        </p>
        <p>
          <a className="text-lg  text-orange-600" href={projectData.hosted}>
            Hosted Version
          </a>
        </p>
      </div>
    </section>
  );
}
