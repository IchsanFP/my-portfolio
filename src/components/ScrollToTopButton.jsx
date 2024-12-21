import { useState, useEffect } from "react";

function ScrollToTopButton() {
  const [toTop, setToTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setToTop(false); 
      } else {
        setToTop(true); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      href="#home"
      className={`${
        toTop ? "hidden" : "flex"
      } flex size-14 bg-light-500 shadow-xl rounded-full fixed z-[9999] bottom-4 right-4 p-4 justify-center items-center hover:animate-pulse text-light-50`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 8.36853L20.9679 13.1162L20.0321 14.8838L12 10.6315L3.96789 14.8838L3.03211 13.1162L12 8.36853Z"></path>
      </svg>
    </a>
  );
}

export default ScrollToTopButton;
