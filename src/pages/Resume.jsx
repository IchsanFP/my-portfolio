// import React from "react";

export default function Resume() {
  return (
    <section id="resume" className="pb-32 pt-36 bg-dark-500">
      <div className="container">
        <div className="w-full mb-16">
          <div className="max-w-xl mx-auto text-center">
              <h1 data-aos="fade-up" data-aos-duration='1000' className="mb-4 text-3xl font-bold font-poppins sm:text-4xl lg:text-5xl text-light-50">Resume</h1>
              <p data-aos="fade-up" data-aos-duration='1000' data-aos-delay="200" className="text-base font-medium font-poppins text-light-300 md:text-lg lg:text-xl">An overview of my skills, experience, and education:</p>
          </div>
        </div>

        <div className="px-4 mt-16">
          <h3 data-aos="fade-up" data-aos-duration='1000' data-aos-delay="300" className="inline-block pb-2 md:text-[28px] text-2xl lg:text-3xl font-semibold border-b-4 font-poppins text-light-50 border-light-300">
            Summary
          </h3>
          <div data-aos="fade-up" data-aos-duration='1000' data-aos-delay="400" className="mt-6 space-y-8">
            <div className="p-6 transition-shadow duration-300 rounded-lg shadow-lg bg-dark-400 shadow-dark-100">
              <p className="text-sm font-normal md:text-base text-light-200 font-poppins">
              Bachelor of Informatics graduate. I am interested in Software Engineering, 
            especially in Web Development. Familiar with modern Front-end Framework such 
            as React using JavaScript. And I am a hardworking person, and can work both 
            individually or in groups.
              </p>
            </div>
          </div>
        </div>

        <div className="px-4 mt-16">
          <h3 data-aos="fade-up" data-aos-duration='1000' data-aos-delay="300" className="inline-block pb-2 md:text-[28px] text-2xl lg:text-3xl font-semibold border-b-4 font-poppins text-light-50 border-light-300">
            Skill
          </h3>
          <div data-aos="fade-up" data-aos-duration='1000' data-aos-delay="400" className="mt-6 space-y-8">
            <div className="p-6 transition-shadow duration-300 rounded-lg shadow-lg bg-dark-400 shadow-dark-100">
              <ul className="pl-6 mt-2 space-y-2 text-sm font-bold list-disc md:text-base font-poppins text-light-200">
                <li>
                Skillset <span className="text-sm font-normal md:text-base text-light-200 font-poppins">- Web Development, Front-end Development, HTML, CSS, JavaScript, Problem Solving, Critical Thinking, Teamwork Time, and Management Communication.</span>
                </li>
                <li>
                Toolset <span className="text-sm font-normal md:text-base text-light-200 font-poppins">- React JS, Laravel, XAMPP, VS Code, Git/GitHub, Tailwindcss, Figma, Canva, and Microsoft Office</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="px-4 mt-16">
          <h3 data-aos="fade-up" data-aos-duration='1000' data-aos-delay="300" className="inline-block pb-2 md:text-[28px] text-2xl lg:text-3xl font-semibold border-b-4 font-poppins text-light-50 border-light-300">
            Experience
          </h3>
          <div data-aos="fade-up" data-aos-duration='1000' data-aos-delay="400" className="mt-6 space-y-8">
            <div className="p-6 transition-shadow duration-300 rounded-lg shadow-lg bg-dark-400 shadow-dark-100">
              <h4 className="text-2xl font-semibold font-poppins text-light-50">Internship PT. Multipilar Balantika</h4>
              <p className="md:text-[17px] text-base lg:text-lg font-medium text-light-300 font-poppins">
              UI/UX designer and Frontend Developer | July 2023 - September 2023
              </p>
              <ul className="pl-6 mt-2 space-y-2 text-sm font-normal list-disc md:text-base text-light-200 font-poppins">
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
        </div>

        {/* Education */}
        <div className="px-4 mt-16">
          <h3 data-aos="fade-up" data-aos-duration='1000' data-aos-delay="300" className="inline-block pb-2 md:text-[28px] text-2xl lg:text-3xl font-semibold border-b-4 font-poppins text-light-50 border-light-300">
            Education
          </h3>
          <div data-aos="fade-up" data-aos-duration='1000' data-aos-delay="400" className="mt-6 space-y-8">
            <div className="p-6 transition-shadow duration-300 rounded-lg shadow-lg bg-dark-400 shadow-dark-100">
              <h4 className="md:text-[22px] text-xl lg:text-2xl font-semibold font-poppins text-light-50">Telkom University | 2020 - 2024</h4>
              <p className="md:text-[17px] text-base lg:text-lg font-medium text-light-300 font-poppins">
              Bachelor of Informatics - GPA 3.76 out of 4.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
