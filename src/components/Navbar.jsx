import { useState, useEffect } from "react";
import menu from "../assets/icon/menu-3-fill.svg";
import close from "../assets/icon/close-large-fill.svg";

export default function Navbar() {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navMenu = [
        { title: 'Home', id:'home'},
        { title: 'About', id:'about'},
        { title: 'Skill', id:'skill'},
        { title: 'Project', id:'project'},
        { title: 'Resume', id:'resume'},
    ]

    // nav active
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 5); 

            const sections = document.querySelectorAll("section");
            let currentSection = "";
    
            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 120; // Sesuaikan offset agar lebih akurat
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute("id");
                }
            });
    
            setActive(currentSection);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <nav
            className={`w-full items-center fixed top-0 z-20 lg:px-32 md:px-16 px-8 py-7 transition-all duration-300 ${
                isScrolled ? "backdrop-blur bg-dark-500/40" : "bg-transparent"
            }`}
        >
            <div className="flex items-center justify-between w-full mx-auto">
                <a href="#home" className="text-xl font-bold text-light-300 font-poppins">IchsanFadhlika.</a>

                {/* Menu Desktop */}
                <ul className="hidden lg:flex gap-9">
                    {navMenu.map((navM, index) => (
                        <li key={index}>
                            <a 
                                href={`#${navM.id}`}
                                className={`text-base font-medium cursor-pointer font-poppins ${
                                    active === navM.id ? "text-light-300 p-[2px]" : "text-light-50 p-[2px]"
                                } hover:text-light-300`}
                            >
                                {navM.title}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Menu Mobile */}
                <div className="lg:hidden">
                    <img 
                        src={toggle ? close : menu} 
                        className="cursor-pointer size-7"
                        onClick={() => setToggle(!toggle)} 
                    />
                    {toggle && (
                        <div className="absolute max-w-[250px] w-full top-16 md:right-16 right-8 p-5 shadow-lg bg-dark-500 shadow-light-300 rounded-lg">
                            <ul className="flex flex-col gap-4">
                                {navMenu.map((navM, index) => (
                                    <li key={index}>
                                        <a
                                            href={`#${navM.id}`}
                                            className={`block text-base font-poppins font-medium cursor-pointer ${
                                                active === navM.id ? "text-light-300 p-[2px]" : "text-light-50 p-[2px]"
                                            } hover:text-light-300`}
                                            onClick={() => setToggle(false)}
                                        >
                                            {navM.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
