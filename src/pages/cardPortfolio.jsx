import Project1 from "../assets/img/projectCreated/P1.png"
import Project2 from "../assets/img/projectCreated/P2.png"
import Project3 from "../assets/img/projectCreated/P3.png"
import Project4 from "../assets/img/projectCreated/P4.png"
import ReactJS from "../assets/icon/react.svg"
import Laravel from "../assets/icon/laravel.svg"
import HTML5 from "../assets/icon/html5.svg"
import PHP from "../assets/icon/php.svg"
import Javascript from "../assets/icon/javascript.svg"
import CSS from "../assets/icon/css.svg"
import TailwindCSS from "../assets/icon/tailwindcss.svg"
import Bootstrap from "../assets/icon/bootstrap.svg"

export const cardPortfolio = [
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
        title: 'Quiz',
        description: 'Quiz adalah sebuah website yang dibangun menggunakan React Js dan tailwindcss. Website ini dibuat untuk menguji pengetahuan mengenai HTML dan CSS',
        tools: [
            { name: "React Js", icon: ReactJS },
            { name: "TailwindCSS", icon: TailwindCSS },
          ],
        detail: "#",
        previewProject: "https://quiz-iota-gold.vercel.app/"
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
        previewProject: "https://sq-diagram-learn.vercel.app/"
    },
    {
        imgSrc: Project4,
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
];