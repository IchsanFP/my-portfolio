import Card from "../components/Card"
import { cardPortfolio } from "../lib/data"

export default function Project() {
    return(
        <section id="project" className="pb-32 pt-[138px] bg-dark-400">
            <div className="gap-2 px-8 m-auto lg:px-32 md:px-16">
                <div data-aos="fade-up" data-aos-duration='1000' className="flex items-center justify-center w-full gap-3 mb-16">
                    <div className="bg-light-50 w-[25px] md:w-[150px] lg:w-[250px] h-1"></div>
                    <div className="font-poppins font-bold text-2xl md:text-[28px] text-light-50">Project I`ve Created</div>
                    <div className="bg-light-50 w-[25px] md:w-[150px] lg:w-[250px] h-1"></div>
                </div>

                <div className="flex flex-wrap justify-start w-full gap-2 m-auto">
                    {cardPortfolio.map((card, index) => (
                        <Card key={index} imgSrc ={card.imgSrc} title={card.title} description={card.description} tools={card.tools} previewProject={card.previewProject}/>
                    ))}
                </div>
            </div>
        </section>
    )
}