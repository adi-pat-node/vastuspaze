import aboutImage from "../assets/about.webp";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2 mt-20" id="about">
      <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mx-4 mb-12">
        About
      </h2>
      <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20">
        <div className="mb-8 lg:mb-0">
          <img src={aboutImage} alt="" className="w-full h-auto" />
        </div>
        <p className="text-lg  lg:text-3xl font-light text-center lg:text-left m-auto mt-8 max-w-5xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, cumque
          exercitationem? Omnis illo quisquam pariatur velit provident
          cupiditate amet aliquam! Nam, ex quisquam! Tempore aliquam illo vero
          architecto illum error ab dolores sapiente veritatis fugiat iusto
          dicta ratione officiis ipsam amet vitae consequuntur, incidunt,
          eligendi voluptatibus temporibus quam cumque quasi.
        </p>
      </div>
    </section>
  );
};

export default About;
