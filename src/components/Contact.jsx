import React from "react";
import Blur from "./Blur";

const Contact = () => {
  return (
    <div>
      <Blur />
      <div name="contact" className="w-full p-4 text-black h-screen">
        <Blur />
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
          {/* Heading Section */}
          <div className="pb-8 text-center">
            <p className="pt-20  mt-0 mb-2 text-5xl">
              <span className="border-b-2 ">CONTACT</span>
            </p>
            <p className="py-1">
              Want to collaborate or discuss a project idea? Fill out the form
              below, and let’s bring your vision to life!
            </p>
          </div>

          {/* Form Section */}
          <div className="flex justify-center items-center ">
            <form
              action="https://getform.io/f/50805f75-578f-493c-90f2-bfcc9510eb3f"
              method="POST"
              className="flex flex-col w-full md:w-1/4"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter Your Email"
                className="my-1 p-2 bg-transparent border-2 rounded-md focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Enter Your Message"
                rows="8"
                className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
              ></textarea>

              {/* Submit Button */}
              <button
                className="bg-gray-400/20
              px-6 py-3 mt-2 mx-auto flex items-center rounded-md border-2 border-gray/70 hover:scale-110 duration-300 text-black"
              >
                Submit to Talk
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
