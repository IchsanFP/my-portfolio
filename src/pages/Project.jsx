import Card from "../components/Card"
import Project1 from "../assets/img/projectCreated/P1.png"
import Project2 from "../assets/img/projectCreated/P2.png"
import Project3 from "../assets/img/projectCreated/P3.png"
import ReactJS from "../assets/icon/react.svg"
import Laravel from "../assets/icon/laravel.svg"
import HTML5 from "../assets/icon/html5.svg"
import PHP from "../assets/icon/php.svg"
import Javascript from "../assets/icon/javascript.svg"
import CSS from "../assets/icon/css.svg"
import TailwindCSS from "../assets/icon/tailwindcss.svg"
import Bootstrap from "../assets/icon/bootstrap.svg"

const cardPortfolio = [
    {
        imgSrc: Project1,
        title: "Todo App",
        description: "'TodoApp' adalah Situs Web berdasarkan React JS dan dibangun dengan html dan Tailwind CSS. Aplikasi ini dirancang untuk mencatat daftar tugas pengguna.",
        tools: [
            { name: "React Js", icon: ReactJS },
            { name: "HTML", icon: HTML5 },
            { name: "CSS", icon: CSS },
            { name: "TailwindCSS", icon: TailwindCSS },
          ],
        detail: "https://github.com/IchsanFP/TodoApp",
        previewProject: "https://ichsanfp.github.io/TodoApp/"
    },
    {
        imgSrc: Project2,
        title: 'Travelgo',
        description: 'TRAVELGO adalah sebuah website yang menawarkan layanan jasa travel trip yang disediakan oleh berbagai travel agent',
        tools: [
            { name: "Laravel", icon: Laravel },
            { name: "PHP", icon: PHP },
            { name: "Javascript", icon: Javascript },
            { name: "HTML", icon: HTML5 },
            { name: "CSS", icon: CSS },
            { name: "Boostrap", icon: Bootstrap },
          ],
        detail: "https://github.com/IchsanFP/travelgo",
        previewProject: "#"
    },
    {
        imgSrc: Project3,
        title: "seqDiagramLearn",
        description: "seqDiagramLearn merupakan sebuah website yang berisi materi mengenai sequence diagram, contoh-contoh sequence diagram berdasarkan studi kasus, kuis, dan latihan membuat sequence diagram.",
        tools: [
            { name: "React Js", icon: ReactJS },
            { name: "TailwindCSS", icon: TailwindCSS },
          ],
        detail: "#",
        previewProject: "#"
    },
    
];

export default function Project() {
    return(
        <section id="project" className="pb-32 pt-36 bg-light-100 dark:bg-dark-400">
            <div className="container">
                <div className="w-full mb-16">
                    <div className="max-w-2xl mx-auto text-center">
                        <h1 data-aos="fade-up" data-aos-duration='1000' data-aos-delay="200" className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl text-light-50">Project I`ve Created</h1>
                        <p data-aos="fade-up" data-aos-duration='1000' data-aos-delay="200" className="text-base font-medium text-light-300 md:text-lg lg:text-xl">I`ve created a few project while i was learning abaout frontend developer</p>
                    </div>
                </div>

                <div className="flex flex-wrap">
                    {cardPortfolio.map((card, index) => (
                        <Card key={index} imgSrc ={card.imgSrc} title={card.title} description={card.description} tools={card.tools} detail={card.detail} previewProject={card.previewProject}/>
                    ))}
                </div>
            </div>
        </section>
    )
}