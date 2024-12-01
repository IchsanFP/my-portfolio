// import Foto from "../assets/img/pp.png"
// import Foto1 from "../assets/img/Foto2.png"

export default function HomePage(){
    return(
        <section id="home" className="pb-32 pt-36 bg-dark-500">  
            <div className="container">
                <div className="flex flex-col items-center justify-center w-full text-center">
                    <div className="flex flex-col items-center px-4 max-w-7xl">
                    <div data-aos="fade-up" data-aos-duration='1000' className="mx-6 mt-6 mb-3 w-[150px] h-[150px] md:w-[200px] md:h-[200px] overflow-hidden border-4 rounded-full shadow-md border-light-300">
                      {/* <img src={Foto1} alt="Landing Page" width="w-full" /> */} 
                    </div>
                        {/* <img src={Foto} alt="FotoProfile" className="w-[200px] mx-auto"/> */}
                        <h1 data-aos="fade-up" data-aos-duration='1000' data-aos-delay="200" className="text-xl font-bold lg:mb-2 lg:mt-5 text-light-50 md:text-2xl lg:text-[32px] font-poppins">Hi, I’m Ichsan Fadhlika Pangestu</h1>
                        <h1 data-aos="fade-up" data-aos-duration='1000' data-aos-delay="300" className="mb-3 text-lg font-semibold font-poppins text-light-200 md:text-xl lg:text-2xl">Frontend Developer</h1>
                        <p data-aos="fade-up" data-aos-duration='1000' data-aos-delay="400" className="mb-10 text-base font-medium leading-relaxed font-poppins text-light-300 max-w-7xl md:text-lg lg:text-xl">I am interested in Software Engineering especially in Web Development. Web development involves designing, building, and maintaining websites, focusing on both user-facing interfaces (front-end) and behind-the-scenes functionality (back-end) to deliver seamless online experiences</p>
                            
                        <div data-aos="fade-up" data-aos-duration='1000' data-aos-delay="500" className="flex px-4 py-3 mt-10 text-sm font-medium transition ease-in-out rounded-lg md:text-base font-poppins text-light-50 bg-light-500 hover:shadow-lg hover:opacity-80 duration-300s max-w-fit hover:text-dark-500 hover:bg-light-100">
                            <a href="#about">Detail About Me</a>
                        </div>       
                    </div>
                </div>
            </div>
        </section>
    );
}