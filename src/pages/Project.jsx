import Card from "../components/Card"
import { cardPortfolio } from "./cardPortfolio"

export default function Project() {
    return(
        <section id="project" className="pb-32 pt-[138px] bg-dark-400">
            <div className="container">
                <div data-aos="fade-up" data-aos-duration='1000' className="w-full mb-16 flex gap-3 items-center justify-center">
                    <div className="bg-light-50 w-[25px] md:w-[150px] lg:w-[250px] h-1"></div>
                    <div className="font-poppins font-bold text-[28px] md:text-[32px] lg:text-4xl text-light-50">Project I`ve Created</div>
                    <div className="bg-light-50 w-[25px] md:w-[150px] lg:w-[250px] h-1"></div>
                </div>

                <div className="flex flex-wrap">
                    {cardPortfolio.map((card, index) => (
                        <Card key={index} imgSrc ={card.imgSrc} title={card.title} description={card.description} tools={card.tools} previewProject={card.previewProject}/>
                    ))}
                </div>
            </div>
        </section>
    )
}