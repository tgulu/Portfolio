import React from "react";

const Contact = () => {
  return (
    <div
      name="CONTACT"
      className="h-full md:h-[92vh] w-full flex flex-col items-center justify-center px-1 py-3 "
    >
      <div className="w-full text-black ">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg gap-y-10 mx-auto h-full">
          {/* Heading Section */}
          <div className="pb-0 md:px-28 text-center">
            <h1 className="pt-10 md:pt-0 mt-0 mb-2 text-lg md:text-xl lg:text-4xl">
              <span className="">CONTACT</span>
            </h1>
            <p className=" text-base xl:text-lg pt-4">
              Want to collaborate or discuss a project idea? Fill out the form
              below, and let’s bring your vision to life!
            </p>
          </div>

          {/* Form Section */}
          <div className="flex justify-center items-center">
            <form
              action="https://getform.io/f/50805f75-578f-493c-90f2-bfcc9510eb3f"
              method="POST"
              className="flex flex-col w-full md:w-[400px] xl:w-[800px] placeholder-black "
            >
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="p-2 bg-transparent border-2 hover:border-gray-600/20 border-black placeholder-black rounded-md focus:outline-none"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter Your Email"
                className="xl:my-8 my-2 p-2 bg-transparent border-2 hover:border-gray-600/20 border-black rounded-md placeholder-black focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Enter Your Message"
                rows="8"
                className="p-2 bg-transparent border-2 hover:border-gray-600/20 border-black rounded-md focus:outline-none placeholder-black"
              ></textarea>

              {/* Submit Button */}
              <button
                className="bg-gray-200/10
              px-6 py-2 mt-2 mx-auto flex items-center rounded-md border-2 hover:border-gray-600/20  border-black hover:scale-110 duration-300 text-black"
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
