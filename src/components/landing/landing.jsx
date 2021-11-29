import React, { useState, useEffect } from "react";

import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { ChevronDoubleUpIcon } from "@heroicons/react/solid";

import CV from "../../img/CV.pdf";

import Eyes from "./eyes";

import "./landing.scss";

const Landing = () => {
  const [spin, setSpin] = useState(true);

  const stopSpin = () => {
    setSpin(false);
  };

  const startSpin = () => {
    setSpin(true);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openNotification = () => {
    notification.info({
      message: "Hello!",
      description:
        "I enjoyed making this and just had fun with the design. This is just a disclaimer that although this is informal, I understand the professionalism and optimisation needed within the work environment. Have a great day! ",
      placement: "bottomLeft",
      icon: <SmileOutlined className="text-green-600" />,
      duration: 10,
      className: "w-1/2",
    });
  };

  useEffect(() => {
    openNotification();
  }, []);

  return (
    <section id="landing">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center z-0">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Peter
            <br />
            <br className="hidden lg:inline-block" />a passionate Software
            Engineer!
          </h1>
          <p className="mb-8 leading-relaxed">
            With a background in data science and a passion for programming I am
            always looking to improve my skills.
          </p>
          <div className="flex justify-center">
            <a
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              View my CV
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className={spin ? "rotate" : "noRotate"}>
            <div className={spin ? "coin__front" : "coin__static"}></div>
            <div className="coin__edge"></div>
            <div className="coin__back"></div>
            {!spin && (
              <div>
                <Eyes />
              </div>
            )}
          </div>
          {spin && (
            <button
              onClick={stopSpin}
              className="text-white w-1/2 bg-green-800 border-0 py-2 p-8 px-6 m-7 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Stop this 🤢
            </button>
          )}
          {!spin && (
            <button
              onClick={startSpin}
              className="text-white w-1/2 bg-green-800 border-0 py-2 p-8 px-6 m-7 focus:outline-none hover:bg-green-600 rounded text-lg is-worse"
            >
              👀 ... This is worse
            </button>
          )}
        </div>
      </div>
      <div>
        <button
          className="text-white bg-green-800 border-0 py-2 focus:outline-none hover:bg-green-600 rounded text-lg back-to-top-button"
          onClick={scrollToTop}
        >
          <ChevronDoubleUpIcon className="mx-auto inline-block w-10 mb-4" />
        </button>
      </div>
    </section>
  );
};

export default Landing;
