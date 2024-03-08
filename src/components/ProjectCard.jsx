export function ProjectCard({ projectData }) {
  return (
    <section className="text-center border border-yellow-600 rounded-xl w-full max-w-xl mx-auto p-3 bg-orange-500">
      <h2 className="mt-3 mb-3 font-bold text-lg text-neutral-950">
        {projectData.title}
      </h2>
      <p className="pb-5 text-neutral-950">{projectData.description}</p>

      <div className="flex flex-wrap gap-3 justify-center pb-3 mb-3">
        {projectData.techStacks.map((techStack, index) => {
          return (
            <div
              key={index}
              className="rounded-2xl border-2 border-gray-600 p-3 custom-text-size font-bold  text-gray-600 bg-blue-200"
            >
              {techStack}
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-5 justify-center pb-2">
        <a
          className="border border-black text-md text-black font-bold bg-[#d0da19] hover:bg-[#bdc70e] p-4 rounded-lg"
          href={projectData.gitHub}
        >
          GitHub Repository
        </a>
        <a
          className="text-md border border-black text-black font-bold bg-[#d0da19] hover:bg-[#bdc70e] p-4 rounded-lg"
          href={projectData.hosted}
        >
          Hosted Version
        </a>
      </div>
    </section>
  );
}
