import React, { useState } from "react";

import ContactModal from "../contact/contact";

const Navigation = () => {
  const [showModal, setShowModal] = useState(false);

  const modalVisibility = (vis) => {
    setShowModal(vis);
  };
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          className="title-font font-medium text-white mb-4 md:mb-0"
          href="#landing"
        >
          <p href="#landing" className="ml-3 text-xl">
            Peter Willmott
          </p>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
        </nav>
        <button
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          onClick={() => setShowModal(true)}
        >
          Contact Me
        </button>
        <ContactModal visible={showModal} modalVisibility={modalVisibility} />
      </div>
    </header>
  );
};

export default Navigation;
