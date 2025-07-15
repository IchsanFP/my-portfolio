import Card from "../components/Card";
import { cardPortfolio } from "../constants/data";

export default function Project() {
  return (
    <section id="project" className="pb-32 pt-[138px] bg-dark-400">
      <div className="flex flex-col gap-2 px-8 m-auto lg:px-32 md:px-16">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex items-center justify-center w-full gap-3 mb-16"
        >
          <div className="bg-light-50 w-[25px] md:w-[150px] lg:w-[250px] h-1"></div>
          <div className="font-poppins font-bold text-2xl md:text-[28px] text-light-50">
            Project I`ve Created
          </div>
          <div className="bg-light-50 w-[25px] md:w-[150px] lg:w-[250px] h-1"></div>
        </div>

        <div className="grid grid-cols-1 gap-2 m-auto md:grid-cols-2 lg:grid-cols-3">
          {cardPortfolio.map((card, index) => (
            <Card
              key={index}
              imgSrc={card.imgSrc}
              title={card.title}
              description={card.description}
              tools={card.tools}
              previewProject={card.previewProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
