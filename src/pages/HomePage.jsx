import Foto from "../assets/img/Foto1.jpg";
export default function HomePage() {
  return (
    <section id="home" className="pb-32 pt-[108px] bg-dark-500">
      <div className="flex justify-center gap-2 px-8 m-auto lg:px-32 md:px-16">
        <div className="flex flex-col items-center justify-center">
          <img
            data-aos="fade-up"
            data-aos-duration="1000"
            src={Foto}
            alt="Landing Page"
            className="object-cover w-[150px] h-[150px] border-2 rounded-full shadow-lg hover:shadow-light-300 border-light-300"
          />

          <div className="flex flex-col items-center justify-center gap-1 my-5">
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="text-xl font-bold text-center font-poppins md:text-2xl text-light-50"
            >
              Hi, I’m Ichsan Fadhlika Pangestu
            </h1>
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              className="text-base font-semibold text-center font-poppins md:text-lg text-light-200"
            >
              Frontend Developer
            </h1>
          </div>

          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="text-sm font-medium text-center font-poppins md:text-base text-light-300"
          >
            I am interested in Software Engineering, especially in Web
            Development. Other than that, I am also interested in UI/UX design
            and mobile development. I love to learn new things and am always
            open to new opportunities.
          </p>

          <div className="flex justify-center gap-2">
            <button
              type="button"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
              className="flex px-4 py-3 mt-12 text-sm font-medium rounded-lg font-poppins text-light-50 bg-light-500 border-2 border-light-500 max-w-fit hover:bg-[#2c4160] shadow-lg hover:shadow-light-500"
            >
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1k3UU_haOuhqqQv3dNhDuz86xcLkM6jHH/view?usp=sharing"
              >
                Download CV
              </a>
            </button>
            <button
              type="button"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
              className="flex px-4 py-3 mt-12 text-sm font-medium rounded-lg font-poppins text-light-50 bg-transparent border-2 border-light-500 max-w-fit hover:bg-[#2c4160] hover:border-2 hover:border-light-500 shadow-lg hover:shadow-light-500"
            >
              <a href="#about">Detail About Me</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
