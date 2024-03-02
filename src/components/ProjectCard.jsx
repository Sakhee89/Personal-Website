export function ProjectCard({ projectData }) {
  return (
    <section className="border rounded-xl w-full max-w-xl mx-auto p-3">
      <h2 className="mt-3 mb-3 font-bold text-lg">{projectData.title}</h2>
      <p className="pb-5 text-gray-200">{projectData.description}</p>
      <div className="flex flex-wrap gap-5 justify-center pb-3">
        <a
          className="text-md text-black font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-4 rounded-lg"
          href={projectData.gitHub}
        >
          GitHub Repository
        </a>
        <a
          className="text-md  text-black font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-4 rounded-lg"
          href={projectData.hosted}
        >
          Hosted Version
        </a>
      </div>
    </section>
  );
}
