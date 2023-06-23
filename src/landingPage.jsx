import React from "react";
import headerimg from "./assets/header-landing-page.jpg";
import secondImage from "./assets/Merged_document.jpg";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";

function LandingPage() {
  return (
    <div>
      <header className="flex justify-between items-center bg-gray-100 px-5">
        <div>
          <h2 className="xs:text-4xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-6xl text-blue-600 font-bold">
            Find Up Your Business With Us
          </h2>
          <p>Are you one of the thousand of owner</p>
          <div className="flex my-3 bg-white w-fit p-2 justify-center items-center space-x-2 cursor-pointer">
            <AiFillPlayCircle className="text-blue-600 text-2xl" />
            <p className="uppercase watch md:font-bold lg:font-bold xl:font-bold">
              watch free video
            </p>
          </div>
        </div>
        <div className=" ">
          <img src={headerimg} />
        </div>
      </header>
      <section className="second-section my-10">
        <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 justify-center items-center">
          <div className="relative">
            <div className="absolute inset-y-0 inset-x-2 our-story p-10">
              <p>OUR STORY</p>
              <h3 className="capitalize text-2xl md:font-bold lg:font-bold xl:font-bold">
                Somtheing know about us
              </h3>
            </div>

            <img src={secondImage} />
          </div>
          <div className="p-20 flex flex-col space-y-4">
            <h2 className="text-4xl">
              The journey of a thousand miles begin with one step
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              ratione fugiat laborum explicabo unde soluta! Praesentium odio,
              ullam sapiente assumenda nesciunt quo vitae iusto tempore
              laboriosam voluptatibus adipisci vel expedita.
            </p>
            <div className="flex my-3 bg-white w-fit p-2 justify-center items-center  cursor-pointer">
              <BsFillPlayFill className="text-blue-600 text-2xl" />
              <p className="uppercase watch md:font-bold lg:font-bold xl:font-bold">
                Learn more
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
