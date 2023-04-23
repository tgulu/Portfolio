import React from "react";

const Contacts = () => {
  return (
    <div name="contacts" className="bg-gradient-to-b from-black to-gray-800 w-full p-4 text-white md:h-screen">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8" >
        <p className="pt-20 font-float mt-0 mb-4 text-4xl "> <span className="border-b-2 white">Contact </span></p> 
{/*           <p className="text-4xl font-rise inline  border-b-2 border-white">Contact</p> */}
          <p className="py-2">Want to learn more about my experience and skills as a junior developer? Fill out the form below to get in touch and start the conversation.</p>
        </div>
        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/50805f75-578f-493c-90f2-bfcc9510eb3f" method="POST" className="flex flex-col w-full md:w-1/4">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              className="my-2 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            <textarea
            type="text"
              name="message"
              placeholder="Enter Your Message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            >
                 </textarea>
                <button className="text-white bg-gradient-to-b from-cyan-500 to-purple-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Submit to Talk</button>
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
