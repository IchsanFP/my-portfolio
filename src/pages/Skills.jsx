import ReactJS from "../assets/icon/react.svg"
import Laravel from "../assets/icon/laravel.svg"
import HTML5 from "../assets/icon/html5.svg"
// import PHP from "../assets/icon/php.svg"
import Javascript from "../assets/icon/javascript.svg"
import CSS from "../assets/icon/css.svg"
import TailwindCSS from "../assets/icon/tailwindcss.svg"
import Bootstrap from "../assets/icon/bootstrap.svg"
import Figma from "../assets/icon/figma-color.svg"
import Canva from "../assets/icon/canva.svg"
import Git from "../assets/icon/git-color.svg"

const ListSkill = [
    {
        name: "React Js",
        icon: ReactJS
    },
    {
        name: "Laravel",
        icon: Laravel
    },
    {
        name: "HTML",
        icon: HTML5
    },
    {
        name: "CSS",
        icon: CSS
    },
    {
        name: "Javascript",
        icon: Javascript
    },
    {
        name: "Git",
        icon: Git
    },
    {
        name: "TailwindCSS",
        icon: TailwindCSS
    },
    {
        name: "Bootstrap",
        icon: Bootstrap
    },
    {
        name: "Figma",
        icon: Figma
    },
    {
        name: "Canva",
        icon: Canva
    },
]
export default function Skills(){
    return(
        <section id="skill" className="pb-32 pt-36 bg-dark-500">  
            <div className="container">
                <div data-aos="fade-up" data-aos-duration='1000' className="w-full mb-16 flex gap-3 items-center justify-center">
                    <div className="bg-light-50 w-[80px] md:w-[150px] lg:w-[250px] h-1"></div>
                    <div className="font-poppins font-bold text-[28px] md:text-[32px] lg:text-4xl text-light-50">Skill</div>
                    <div className="bg-light-50 w-[80px] md:w-[150px] lg:w-[250px] h-1"></div>
                </div>

                <div className="flex justify-center gap-3 w-full flex-wrap">
                    {ListSkill.map((list, index) => (
                        <div key={index} data-aos="fade-up" data-aos-duration='1000' data-aos-delay="300" className="flex flex-col gap-3 size-36 md:size-48 justify-center items-center border border-light-200 rounded-lg cursor-pointer hover:shadow-lg hover:shadow-light-300">
                            <img src={list.icon} alt="" className="w-16 md:w-24"/>
                        <p className="font-poppins font-semibold text-base md:text-xl text-light-200">{list.name}</p>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}