import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-white via-[#f9fafb] to-white w-full p-4 text-black   h-screen"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="pt-20 font-float mt-0 mb-4 text-5xl ">
            <span className="border-b-2 font-jazz">Contact </span>
          </p>

          <p className="py-2">
            Want to learn more about my experience and skills as a developer?
            Fill out the form below to get in touch and start the conversation.
          </p>
        </div>
        <div className="flex justify-center items-center">
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
              type="text"
              name="message"
              placeholder="Enter Your Message"
              rows="8"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
            ></textarea>
            <button className="bg-gradient-to-b from-slate-700 to-slate-950 px-6 py-3 mt-2  mx-auto flex items-center rounded-md border-2 border-black hover:scale-110 duration-300 text-white">
              Submit to Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
