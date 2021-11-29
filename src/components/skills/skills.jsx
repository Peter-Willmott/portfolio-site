import React from "react";

import "antd/dist/antd.css";
import { Progress, Rate } from "antd";

import { BadgeCheckIcon, ChipIcon, LightningBoltIcon, LightBulbIcon } from "@heroicons/react/solid";

import { skills, projectManagment, tools } from "./skillsList";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Languages, frameworks, tools and software I use and continue to learn. These rating are not based off of any offical rating, they are based off my familiarity and comfort level with regards to using them. 
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center pr-10">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill.name}
                </span>
                <Progress
                  strokeColor={{
                    "0%": "#108ee9",
                    "100%": "#87d068",
                  }}
                  className="w-2/3 ml-auto"
                  showInfo={false}
                  percent={skill.score}
                />
              </div>
            </div>
          ))}
        </div>
        <br />
        <br />
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {tools.map((tool) => (
            <div key={tool} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center pr-10">
                <LightBulbIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {tool.name}
                </span>
                <Progress
                  strokeColor={{
                    "0%": "#108ee9",
                    "100%": "#87d068",
                  }}
                  className="w-2/3 ml-auto"
                  showInfo={false}
                  percent={tool.score}
                />
              </div>
            </div>
          ))}
        </div>
        <br />
        <br />

        <div className="text-center mb-20">
          <h3 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
            Project Management Tools
          </h3>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            I enjoy an Agile approach to software development and making use of the software below has reinforced that ideal.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {projectManagment.map((projectManager) => (
            <div key={projectManager} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <LightningBoltIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {projectManager.name}
                </span>
                <Rate
                  className="w-1/2 ml-auto text-green-400"
                  disabled
                  allowHalf={true}
                  defaultValue={projectManager.rate}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
