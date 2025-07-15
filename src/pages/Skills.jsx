import { ListSkill } from "../constants/data";

export default function Skills(){
    return(
        <section id="skill" className="pb-32 pt-36 bg-dark-500">  
            <div className="gap-2 px-8 m-auto lg:px-32 md:px-16">
                <div data-aos="fade-up" data-aos-duration='1000' className="flex items-center justify-center w-full gap-3 mb-16">
                    <div className="bg-light-50 w-[80px] md:w-[150px] lg:w-[250px] h-1"></div>
                    <div className="font-poppins font-bold text-2xl md:text-[28px] text-light-50">Skill</div>
                    <div className="bg-light-50 w-[80px] md:w-[150px] lg:w-[250px] h-1"></div>
                </div>

                <div className="flex flex-wrap justify-center w-full gap-3">
                    {ListSkill.map((list, index) => (
                        <div 
                            key={index} 
                            data-aos="fade-up" data-aos-duration='1000' data-aos-delay="300" 
                            className="flex flex-col items-center justify-center gap-3 p-3 border rounded-lg cursor-pointer size-32 border-light-200 hover:shadow-lg hover:shadow-light-300"
                        >
                            <img src={list.icon} alt="" className="w-12 "/>
                        <p className="text-base font-semibold font-poppins text-light-200">{list.name}</p>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}