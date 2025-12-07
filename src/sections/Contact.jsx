import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode } = useDarkMode();

  return (
    <div
      className={`${darkMode ? "dark bg-black" : "light bg-transparent"} pb-20`}
    >
      <section
        id="contact"
        className={`${
          darkMode ? "dark bg-gray-800" : "light bg-red-100"
        } max-w-[95%] w-full h-fit mx-auto rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-16 px-6 py-16 gap-12`}
      >
        {/* Left Form */}
        <div
          data-aos="zoom-in"
          className="bg-white dark:bg-black p-8 flex flex-col gap-5 rounded-xl shadow-lg"
        >
          <h1 className="text-2xl text-black font-semibold dark:text-white">
            Send us a message today
          </h1>

          <input
            type="text"
            placeholder="Enter your full name here"
            className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 bg-transparent text-black dark:text-white"
          />
          <input
            type="email"
            placeholder="Enter your valid email"
            className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 bg-transparent text-black dark:text-white"
          />
          <input
            type="number"
            placeholder="Enter your valid mobile number"
            className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 bg-transparent text-black dark:text-white"
          />

          <textarea
            rows="5"
            placeholder="Enter your message here..."
            className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 bg-transparent text-black dark:text-white"
          ></textarea>

          <button className="bg-red-600 w-full text-md px-6 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 transition cursor-pointer">
            SEND EMAIL
          </button>
        </div>

        {/* Right Info */}
        <div className="flex flex-col justify-center items-start gap-6 lg:p-12 p-6">
          <h1
            data-aos="zoom-in"
            data-aos-delay="200"
            className="text-red-500 dark:text-white font-semibold"
          >
            REACH US
          </h1>

          <h1
            data-aos="zoom-in"
            data-aos-delay="400"
            className="text-black text-3xl lg:text-4xl font-semibold leading-tight dark:text-white"
          >
            Contact our expert real estate team today for property inquiries,
            site visits, investments, or selling your home.
          </h1>

          <p
            data-aos="zoom-in"
            data-aos-delay="600"
            className="text-xl text-gray-600 text-justify dark:text-white"
          >
            Your property journey deserves more than just listings. Reach out to
            us for personalized guidance, honest advice, and seamless assistance.
            From first visits to final deals, we’re committed to making real
            estate simple.
          </p>

          <button className="bg-red-600 text-md px-6 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 transition cursor-pointer">
            READ MORE
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
