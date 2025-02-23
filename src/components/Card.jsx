export default function Card({ imgSrc, title, description, tools, previewProject }) {
    return (
        <div data-aos="fade-up" data-aos-duration='1000' data-aos-delay="300" className="w-full md:w-[326px]">
            <div className="flex flex-col justify-between p-6 overflow-hidden shadow-xl rounded-lg bg-dark-500 shadow-dark-100 h-[530px]">
                <div>
                    <div className="overflow-hidden border-2 rounded-md shadow-md border-light-300 w-full aspect-[16/9] ">
                        <img src={imgSrc} alt="Project" className="object-cover w-full h-full"/>
                    </div>

                    <div className="flex flex-col gap-3 my-3">
                        <h1 className="block text-lg font-bold truncate text-light-50">{title}</h1>
                        <div className="grid w-full grid-cols-2 gap-1">
                            {tools.map((tool, index) => (
                                <div key={index} className="flex items-center justify-center gap-1 p-1 rounded-lg bg-light-300">
                                    <div className="flex items-center justify-center rounded-full size-5 bg-dark-500">
                                        <img src={tool.icon} alt="" className="w-3" />
                                    </div>
                                    <p className="text-xs font-medium font-poppins text-dark-500">{tool.name}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-base font-normal text-justify text-light-50 line-clamp-">{description}</p>
                    </div> 
                </div>

                <div className="flex justify-end gap-2">
                    <button 
                        type="button" 
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-transparent border-2 rounded-lg shadow-lg font-poppins text-light-50 border-light-300 max-w-fit hover:bg-light-300 hover:border-2 hover:border-light-500 hover:text-dark-500 hover:shadow-light-500"
                    >
                        <a href={previewProject} target="_blank">Preview</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24">
                            <g fill="none">
                                <path fill="currentColor" fillOpacity="0.25" fillRule="evenodd" d="M2.455 11.116C3.531 9.234 6.555 5 12 5c5.444 0 8.469 4.234 9.544 6.116c.221.386.331.58.32.868c-.013.288-.143.476-.402.852C20.182 14.694 16.706 19 12 19c-4.706 0-8.182-4.306-9.462-6.164c-.26-.376-.39-.564-.401-.852c-.013-.288.098-.482.318-.868M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6" clipRule="evenodd"/>
                                <path stroke="currentColor" strokeWidth="1.2" d="M12 5c-5.444 0-8.469 4.234-9.544 6.116c-.221.386-.331.58-.32.868c.013.288.143.476.402.852C3.818 14.694 7.294 19 12 19c4.706 0 8.182-4.306 9.462-6.164c.26-.376.39-.564.401-.852c.012-.288-.098-.482-.319-.868C20.47 9.234 17.444 5 12 5Z"/>
                                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                            </g>
                        </svg>
                    </button> 
                </div>
            </div>
        </div>
    );
}