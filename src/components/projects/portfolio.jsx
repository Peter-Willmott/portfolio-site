import React, { useState, useLayoutEffect, useEffect } from "react";

import { projects } from "./projectData";
import { CodeIcon } from "@heroicons/react/solid";

import ContactModal from "../contact/contact";

import johnny from "../../img/johnny.gif";

import ProjectModal from "./projectModals/projectModals";

import "./portfolio.scss";

const Portfolio = () => {
  const [scrollPosition, setPosition] = useState(0);
  const [showJohn, setShowJohn] = useState(false);
  const [showContactButton, setShowContactButton] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedModal, setSelectedShowModal] = useState(0);

  const modalVisibility = (vis) => {
    setShowModal(vis);
  };

  const modalContactVisibility = (vis) => {
    setShowContactModal(vis);
  };

  const handleModal = (project) => {
    setSelectedShowModal(project);
    setShowModal(true);
  };

  useLayoutEffect(() => {
    const updatePosition = () => {
      setPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  useEffect(() => {
    if (scrollPosition >= 800) {
      setShowJohn(true);
    }
  }, [scrollPosition]);

  useEffect(() => {
    if (showJohn) {
      const timer = setTimeout(() => {
        setShowJohn(false);
        setShowContactButton(true);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showJohn]);

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Some Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            A couple of personal and work projects I have enjoyed making. 
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <div className="sm:w-1/2 lg:w-1/3 md:w-1/2 w-100 p-3">
              <div className="flex relative">
                <img
                  alt={project.image}
                  className="absolute inset-0 w-full h-full object-fill object-center"
                  src={project.image}
                />
                <div className="px-2 py-2 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                  <button
                    className="text-white w-1/2 bg-green-800 border-0 py-2 p-2 px-2 m-7 focus:outline-none hover:bg-green-600 rounded text-lg"
                    onClick={() => handleModal(project.modal)}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ProjectModal
          visible={showModal}
          modalVisibility={modalVisibility}
          modalSelect={selectedModal}
        />
        {showJohn && !showContactButton && (
          <div>
            <img alt="Johnny" className="johnny" src={johnny} />
          </div>
        )}
        {showContactButton && (
          <div>
            <button
              className="text-white bg-green-800 border-0 py-2 p-2 px-2 m-7 focus:outline-none hover:bg-green-600 rounded text-lg contact-button"
              onClick={() => setShowContactModal(true)}
            >
              Contact Me
            </button>
            <ContactModal
              visible={showContactModal}
              modalVisibility={modalContactVisibility}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
