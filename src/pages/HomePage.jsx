export default function HomePage() {
    return(
        <section id="home" className="pb-32 pt-[138px] bg-dark-500">
            <div className="container">
                <div className="flex flex-col justify-center items-center">
                    <div data-aos="fade-up" data-aos-duration='1000' className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] overflow-hidden border-4 rounded-full shadow-md border-light-300">
                    {/* <img src={Foto1} alt="Landing Page" className="w-full h-full object-cover" />  */}
                    </div>

                    <div className="flex flex-col my-5 justify-center items-center px-8 md:px-12 lg:px-16">
                        <h1 data-aos="fade-up" data-aos-duration='1000' data-aos-delay="200" className="text-center font-poppins font-bold text-2xl md:text-[28px] lg:text-[32px] text-light-50">Hi, I’m Ichsan Fadhlika Pangestu</h1>
                        <h1 data-aos="fade-up" data-aos-duration='1000' data-aos-delay="300" className="text-center font-poppins font-semibold text-lg md:text-xl lg:text-2xl text-light-200">Frontend Developer</h1>
                    </div>
                    
                    <p data-aos="fade-up" data-aos-duration='1000' data-aos-delay="400" className="px-8 md:px-12 lg:px-16 text-center font-poppins font-medium text-sm md:text-base lg:text-lg text-light-300">I am interested in Software Engineering especially in Web Development. Web development involves designing, building, and maintaining websites, focusing on both user-facing interfaces (front-end) and behind-the-scenes functionality (back-end) to deliver seamless online experiences</p>

                    <button type="button" data-aos="fade-up" data-aos-duration='1000' data-aos-delay="500" className="flex px-4 py-3 mt-16 text-sm font-medium transition ease-in-out rounded-lg md:text-base font-poppins text-light-50 bg-light-500 hover:shadow-lg hover:opacity-80 duration-300s max-w-fit hover:text-dark-500 hover:bg-light-100">
                        <a href="#about">Detail About Me</a>
                    </button>    
                </div>
            </div>
        </section>
    );
}