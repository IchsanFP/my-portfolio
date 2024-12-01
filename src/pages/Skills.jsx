export default function Skills(){
    return(
        <section id="skill" className="pb-32 pt-36 bg-dark-500">  
            <div className="container">
                <div className="w-full mb-16">
                    <div className="max-w-xl mx-auto text-center">
                        <h1 data-aos="fade-up" data-aos-duration='1000' className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl text-light-50">Skills</h1>
                        <p data-aos="fade-up" data-aos-duration='1000' data-aos-delay="200" className="text-base font-medium text-light-300 md:text-lg lg:text-xl">My Skills in Programming</p>
                    </div>
                </div>

                <div className="flex flex-col items-center px-4 gap-7">
                    <div data-aos="fade-up" data-aos-duration='1000' data-aos-delay="300" className="flex flex-col items-center gap-6 px-[30px] py-10 bg-dark-400 p-6 shadow-lg shadow-dark-100 rounded-xl">
                        <h3 className="items-center text-base font-bold md:text-lg font-poppins text-light-50">Front-end Developer</h3>
                        <div className="flex flex-wrap justify-center gap-2">
                            <div className="px-4 py-1 text-base font-medium rounded-full md:text-lg bg-light-300 font-poppins">HTML</div>
                            <div className="px-4 py-1 text-base font-medium rounded-full md:text-lg bg-light-300 font-poppins">CSS</div>
                            <div className="px-4 py-1 text-base font-medium rounded-full md:text-lg bg-light-300 font-poppins">Javascript</div>
                            <div className="px-4 py-1 text-base font-medium rounded-full md:text-lg bg-light-300 font-poppins">Tailwind</div>
                            <div className="px-4 py-1 text-base font-medium rounded-full md:text-lg bg-light-300 font-poppins">React Js</div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration='1000' data-aos-delay="400" className="flex flex-col items-center gap-6 px-[30px] py-10 bg-dark-400 p-6 shadow-lg shadow-dark-100 rounded-xl">
                        <h3 className="items-center text-base font-bold md:text-lg font-poppins text-light-50">UI/UX Design</h3>
                        <div className="flex flex-wrap justify-center gap-2">
                            <div className="px-4 py-1 text-base font-medium rounded-full md:text-lg bg-light-300 font-poppins">Figma</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}