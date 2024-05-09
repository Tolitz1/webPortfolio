import React, { useEffect, useState } from 'react';
import { BsFillArrowUpSquareFill } from "react-icons/bs";
const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false); 
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className='App'>
      {backToTopButton && (
        <button  className="rounded-full fixed bottom-5 right-5 text-4xl bg-gray-500 text-white hover:bg-gray-700 hover:text-gray-100" onClick={scrollUp} ><BsFillArrowUpSquareFill /></button>
      )}
    </div>
  );
};

export default BackToTopButton;
