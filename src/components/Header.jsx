import { useState, useEffect } from "react";

export default function Header() {
    const [scroll, setScroll] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        // Handle scroll for sticky header and active navbar item
        const handleScroll = () => {
            if (window.scrollY > 5) {
                setScroll(true);
            } else {
                setScroll(false);
            }

            // Get all section elements
            const sections = document.querySelectorAll("section");
            let currentSection = "";

            // Loop through each section to check its position
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop && window.scrollY <= sectionTop + sectionHeight) {
                    currentSection = section.getAttribute("id");
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    let scrollActive = scroll ? "fixed z-[9999] backdrop-blur dark:bg-dark-500 dark:bg-opacity-50" : "";

    return(
        <header className={`fixed top-0 left-0 z-10 flex items-center w-full bg-transparent ${scrollActive} animate__animated animate__fadeInDown animate__delay-3s`}>
            <div className="container">
                <div className="relative flex items-center justify-between">
                    <Logo />
                    <NavBar activeSection={activeSection}/>
                </div>
            </div>
        </header>
    );
}

function Logo(){
    return(
        <div className="px-4">
            <a href="#home" className="block py-6 text-xl font-bold font-poppins text-light-300">IchsanFP.</a>
        </div>
    );
}

function NavBar({ activeSection }){
    const [toggleNavbar, setToggleNavbar] = useState(false);

    const linkClass = (section) => 
        `flex py-2 mx-8 text-base font-medium lg:text-lg font-poppins group-hover:text-light-300 ${
            activeSection === section ? "text-light-300 " : "text-light-50"
        }`;

    return(
        <div className="flex items-center px-4">
            <button name="hamburger" type="button" className="absolute block cursor-pointer right-4 lg:hidden" onClick={() => setToggleNavbar(toggleNavbar ? false : true)}>
                <i className="text-3xl text-light-300 ri-menu-3-line"></i>
            </button>
            
            <nav className={`absolute py-5 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:max-w-full lg:shadow-none lg:rounded-none bg-dark-500 lg:bg-transparent shadow-slate-500 ${toggleNavbar ? "block" : "hidden"}`}>
                <ul className="block lg:flex">
                    <li className="group">
                        <a href="#home" className={linkClass("home")}>Home</a>
                    </li>
                    <li className="group">
                        <a href="#about" className={linkClass("about")}>About</a>
                    </li>
                    <li className="group">
                        <a href="#skill" className={linkClass("skill")}>Skills</a>
                    </li>
                    <li className="group">
                        <a href="#project" className={linkClass("project")}>Projects</a>
                    </li>
                    <li className="group">
                        <a href="#resume" className={linkClass("resume")}>Resume</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
