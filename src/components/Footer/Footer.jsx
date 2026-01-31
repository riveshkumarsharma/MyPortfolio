import React from "react";
import {
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  // smooth scroll
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-purple-500">SHIVAM KAMAL</h2>
        {/* navigation links  */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experiences" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>
        {/* social media icons  */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            {
              icon: <FaWhatsapp />,
              link: "https://wa.me/918957079509?text=Hello%20Rivesh%20Kumar%20Sharma!",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/rivesh-kumar-sharma-b22b00288/",
            },
            { icon: <FaGithub />,
              link: "https://github.com/riveshkumarsharma" },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/rivesh_890?igsh=MnA1cm1pb2duM3pv",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>
        {/* copyright text  */}
        <p className="text-sm text-gray-400 mt-6 ">
          © 2025 Rivesh kumar Sharma. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
