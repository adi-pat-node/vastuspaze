import { PORTFOLIO_PROJECTS } from "../constants";
const Portfolio = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2" id="portfolio">
      <div className="mb-20">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mt-20 mb-12">
          Portfolio
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_PROJECTS.map((project) => (
            <div
              className="group relative overflow-hidden rounded-3xl mx-4"
              key={project.id}
            >
              <img
                src={project.image}
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <h3 className="mb-2 text-xl font-medium">{project.name}</h3>
                <p className="mb-12 p4">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
