export default function Resume() {
  return (
    <section id="resume" className="pb-32 pt-36 bg-dark-500">
        <div className="gap-2 px-8 m-auto lg:px-32 md:px-16">
            <div data-aos="fade-up" data-aos-duration='1000' className="flex items-center justify-center w-full gap-3 mb-16">
                <div className="bg-light-50 w-[80px] md:w-[150px] lg:w-[250px] h-1"></div>
                <div className="font-poppins font-bold text-2xl md:text-[28px] text-light-50">Resume</div>
                <div className="bg-light-50 w-[80px] md:w-[150px] lg:w-[250px] h-1"></div>
            </div>

            <div className="">
                <h3 data-aos="fade-up" data-aos-duration='1000' data-aos-delay="300" className="inline-block pb-2 text-xl font-semibold border-b-4 md:text-2xl font-poppins text-light-50 border-light-300">
                    Summary
                </h3>
                <div data-aos="fade-up" data-aos-duration='1000' data-aos-delay="400" className="mt-6 space-y-8">
                    <div className="p-6 transition-shadow duration-300 rounded-lg shadow-xl bg-dark-400 shadow-dark-100">
                        <p className="text-xs font-normal md:text-sm text-light-200 font-poppins">
                            I am a Bachelor of Informatics graduate with a strong interest in Software Engineering, especially Web Development. I am familiar with modern front-end frameworks such as React and Next.js, using both JavaScript and TypeScript. I am a hardworking individual who can work well both independently and in a team.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-16">
                <h3 data-aos="fade-up" data-aos-duration='1000' data-aos-delay="300" className="inline-block pb-2 text-xl font-semibold border-b-4 md:text-2xl font-poppins text-light-50 border-light-300">
                    Skill
                </h3>
                <div data-aos="fade-up" data-aos-duration='1000' data-aos-delay="400" className="mt-6 space-y-8">
                    <div className="p-6 transition-shadow duration-300 rounded-lg shadow-lg bg-dark-400 shadow-dark-100">
                        <ul className="pl-6 mt-2 space-y-2 text-xs font-bold list-disc md:text-sm font-poppins text-light-200">
                            <li>
                                Skillset <span className="text-xs font-normal md:text-sm text-light-200 font-poppins">- Web Development, Front-end Development, HTML, CSS, JavaScript, TypeScript, Problem Solving, Critical Thinking, Teamwork Time, and Management Communication.</span>
                            </li>
                            <li>
                                Toolset <span className="text-xs font-normal md:text-sm text-light-200 font-poppins">- React JS, Next JS, Laravel, XAMPP, VS Code, Git/GitHub, Tailwindcss, Figma, Canva, and Microsoft Office</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Experience */}
            <div className="mt-16">
                <h3 data-aos="fade-up" data-aos-duration='1000' data-aos-delay="300" className="inline-block pb-2 text-xl font-semibold border-b-4 md:text-2xl font-poppins text-light-50 border-light-300">
                    Experience
                </h3>
                <div data-aos="fade-up" data-aos-duration='1000' data-aos-delay="400" className="mt-6 space-y-8">
                    <div className="p-6 transition-shadow duration-300 rounded-lg shadow-lg bg-dark-400 shadow-dark-100">
                        <h4 className="text-lg font-semibold md:text-xl font-poppins text-light-50">Internship PT. Multipilar Balantika</h4>
                        <p className="text-sm font-medium md:text-base text-light-300 font-poppins">
                            UI/UX designer and Frontend Developer | July 2023 - September 2023
                        </p>
                        <ul className="pl-6 mt-2 space-y-2 text-xs font-normal list-disc md:text-sm text-light-200 font-poppins">
                            <li>
                                Create a web design based on an existing mobile app design, then implement it into a website.
                            </li>
                            <li>
                                This website design is made using Figma, then implemented using HTML, CSS, and JavaScript through the Laravel framework.
                            </li>
                            <li>
                                Collaborated with the design team to ensure seamless implementation of UI/UX designs.
                            </li>
                        </ul>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration='1000' data-aos-delay="400" className="mt-6 space-y-8">
                    <div className="p-6 transition-shadow duration-300 rounded-lg shadow-lg bg-dark-400 shadow-dark-100">
                        <h4 className="text-lg font-semibold md:text-xl font-poppins text-light-50">Internship Otoritas Jasa Keuangan - OJK Institute (DPES)</h4>
                        <p className="text-sm font-medium md:text-base text-light-300 font-poppins">
                            Data Processing and Verification | April 2025 - April 2025
                        </p>
                        <ul className="pl-6 mt-2 space-y-2 text-xs font-normal list-disc md:text-sm text-light-200 font-poppins">
                            <li>
                                Processing Lembaga Sertifikasi Profesi (LSP) data to find out the total number of participants who graduated from each LSP each year
                            </li>
                            <li>
                                Processing webinar data to identify the number of financing institutions, the number of participants from those institutions, and the average post-test score of participants from financing institutions. 
                            </li>
                            <li>
                                Preparing meeting minutes.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Education */}
            <div className="mt-16">
                <h3 data-aos="fade-up" data-aos-duration='1000' data-aos-delay="300" className="inline-block pb-2 text-xl font-semibold border-b-4 md:text-2xl font-poppins text-light-50 border-light-300">
                    Education
                </h3>
                <div data-aos="fade-up" data-aos-duration='1000' data-aos-delay="400" className="mt-6 space-y-8">
                    <div className="p-6 transition-shadow duration-300 rounded-lg shadow-lg bg-dark-400 shadow-dark-100">
                        <h4 className="text-lg md:text-[22px] lg:text-xl font-semibold font-poppins text-light-50">Telkom University | 2020 - 2024</h4>
                        <p className="text-sm font-medium md:text-base text-light-300 font-poppins">
                            Bachelor of Informatics - GPA 3.76 out of 4.00
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

