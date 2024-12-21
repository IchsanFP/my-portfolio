import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import AboutMe from "./pages/AboutMe"
import Skills from "./pages/Skills"
import Project from "./pages/Project"
import Footer from "./pages/Footer"
import Resume from "./pages/Resume"
import ScrollToTopButton from "./components/ScrollToTopButton"
// import AOS from 'aos';
// import 'aos/dist/aos.css'; 
// import { useEffect } from "react"

export default function App() {

  // useEffect(() => {
  //   AOS.init();
  // })
  return (
    <>
      <Header />
      <HomePage />
      <AboutMe />
      <Skills />
      <Project />
      <Resume />
      <Footer />
      <ScrollToTopButton />
    </>
  )
}
