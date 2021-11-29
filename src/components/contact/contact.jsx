import React from "react";

import { Modal } from "antd";

import emailjs from "emailjs-com";

import "./contact.scss";

const SERVICE_ID = "service_l9g9w4r";
const TEMPLATE_ID = "template_ma99cvh";
const USER_ID = "user_m5Vson4J5gLmUS3dmpu8i";

const ContactModal = ({ visible, modalVisibility }) => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();

    modalVisibility(false);
  };

  const handleClose = () => {
    modalVisibility(false);
  };

  const footer = [
    <button
      className="text-white w-1/8 bg-white-200 py-2  px-6 m-1 focus:outline-none hover:bg-green-600 hover:border-green-600 border-2 border-green-500 rounded text-lg"
      onClick={handleClose}
    >
      Close
    </button>,
  ];

  const width = "30%";

  return (
    <Modal
      visible={visible}
      title="Contact Me"
      onCancel={handleClose}
      footer={footer}
      width={width}
    >
      <form onSubmit={sendEmail} className="w-full max-w-lg">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-name"
            >
              Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-name"
              type="text"
              placeholder="Name"
              name="name"
              required
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-company"
            >
              Company
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-company"
              type="text"
              placeholder="Company"
              name="company"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-email"
            >
              Email
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              type="email"
              placeholder="email@company.com"
              name="email"
              required
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-message"
            >
              Message
            </label>
            <textarea
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-message"
              placeholder="Your message..."
              name="message"
            />
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <button
              class="text-white w-1/2 bg-green-800 border-0 py-2 p-8 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              type="submit"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default ContactModal;
