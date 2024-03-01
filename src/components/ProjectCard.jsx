export function ProjectCard({ projectData }) {
  return (
    <section className="border rounded-xl w-full max-w-xl mx-auto p-3">
      <h2 className="mt-3 mb-3 font-bold text-lg">{projectData.title}</h2>
      <p className="mb-3 text-gray-200">{projectData.description}</p>
      <div className="flex flex-wrap gap-4 justify-center">
        <a
          className="text-md font-bold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-4 rounded-lg"
          href={projectData.gitHub}
        >
          GitHub Repository
        </a>
        <a
          className="text-md font-bold  bg-orange-600 p-4 rounded-lg"
          href={projectData.hosted}
        >
          Hosted Version
        </a>
      </div>
    </section>
  );
}
