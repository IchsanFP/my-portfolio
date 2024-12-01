

export default function AboutMe(){
  return(
      <section id="about" className="pb-32 pt-36 bg-dark-400">  
          <div className="container mx-auto px-4"> 
              <div className="w-full mb-16">
                  <div className="max-w-xl mx-auto text-center">
                      <h1 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl text-light-50">About Me</h1>
                      <p className="text-base font-medium text-light-300 md:text-lg lg:text-xl">This page contains a brief introduction.</p>
                  </div>
              </div>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-between">
                  {/* Image Section */}
                  <div className="w-full px-4 lg:w-1/2 lg:order-1 order-2 mt-10 lg:mt-0">
                      <div className="relative lg:m-9">
                          <img src={Foto} alt="Ichsan Fadhlika" className="relative z-10 mx-auto w-full max-w-sm rounded-lg shadow-lg"/>
                      </div>
                  </div>

                  {/* Text Section */}
                  <div className="w-full px-4 lg:w-1/2 lg:order-2 order-1">
                      <h1 className="text-base font-semibold font-poppins text-light-300 md:text-xl">
                          Hi There! 👋, I`m <span className="block mt-1 text-4xl font-bold lg:mb-3 lg:text-5xl text-light-50">Ichsan Fadhlika Pangestu</span>
                      </h1>
                      <h2 className="mb-5 text-lg font-medium font-poppins lg:text-xl text-light-200">Frontend Developer</h2>
                      <p className="mb-5 text-base font-medium leading-relaxed font-poppins text-light-300">
                          I am interested in Software Engineering especially in Web Development. I already make several projects and I still learn and want to make more projects in the future. And I am a hardworking person, and can work both individual or group.
                      </p>

                      {/* Social Links */}
                      <div className="flex flex-wrap justify-center lg:justify-start items-center mb-5">
                          {/* LinkedIn */}
                          <a href="https://www.linkedin.com/in/ichsanfadhlika/" target="_blank" className="flex items-center justify-center mr-3 mb-3 lg:mb-0 border rounded-full w-9 h-9 border-light-50 text-light-50 hover:border-light-300 hover:bg-light-100 hover:text-dark-500">
                              <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                          </a>

                          {/* Github */}
                          <a href="https://github.com/IchsanFP" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center mr-3 mb-3 lg:mb-0 border rounded-full w-9 h-9 border-light-50 text-light-50 hover:border-light-300 hover:bg-light-100 hover:text-dark-500">
                              <svg role="img" viewBox="0 0 24 24" className="fill-current" width="20" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                          </a>

                          {/* YouTube */}
                          <a href="https://www.youtube.com/@ichsanfp7577" target="_blank" className="flex items-center justify-center mr-3 mb-3 lg:mb-0 border rounded-full w-9 h-9 border-light-50 text-light-50 hover:border-light-300 hover:bg-light-100 hover:text-dark-500">
                              <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                          </a>

                          {/* Instagram */}
                          <a href="https://www.instagram.com/ichsanfadhlika/" target="_blank" className="flex items-center justify-center mr-3 mb-3 lg:mb-0 border rounded-full w-9 h-9 border-light-50 text-light-50 hover:border-light-300 hover:bg-light-100 hover:text-dark-500">
                              <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.735 0 8.332.014 7.053.072 5.775.13 4.598.384 3.533 1.449 2.467 2.515 2.213 3.692 2.155 4.97 2.097 6.249 2.083 6.652 2.083 12c0 5.348.014 5.751.072 7.03.058 1.278.312 2.455 1.378 3.521 1.065 1.065 2.242 1.32 3.521 1.378 1.278.058 1.681.072 7.03.072 5.348 0 5.751-.014 7.03-.072 1.278-.058 2.455-.312 3.521-1.378 1.065-1.065 1.32-2.242 1.378-3.521.058-1.278.072-1.681.072-7.03 0-5.348-.014-5.751-.072-7.03-.058-1.278-.312-2.455-1.378-3.521C19.402.384 18.225.13 16.947.072 15.668.014 15.265 0 12 0z"/><path d="M12 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A4 4 0 1 1 12 7.838a4 4 0 0 1 0 8.324zM18.406 4.594a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}
