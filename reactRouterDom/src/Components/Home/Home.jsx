import React from "react";
import { Link } from "react-router-dom";
import reactRouterDom from "../../assets/reactrouterdom.jpg";
import reactRouter from "../../assets/reactrouter.jpg";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Download Now
              <span className="hidden sm:block text-2xl">React Router Dom</span>
            </h2>

            <Link
              className="inline-flex text-black items-center px-6 py-3 font-medium bg-orange-100 rounded-lg hover:opacity-75"
              to="https://reactrouter.com/"
              target="_blank"
            >
              <img
                src="https://www.svgrepo.com/show/354262/react-router.svg"
                className="w-5 h-5"
              />
              &nbsp;Read Document
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full">
          <img className="w-96 rounded-md" src={reactRouterDom} alt="image1" />
        </div>
      </aside>

      <div className="grid place-items-center sm:mt-20">
        <img
          className="sm:w-96 w-48 rounded-md"
          src={reactRouter}
          alt="image2"
        />
      </div>

      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
        React Router
      </h1>
    </div>
  );
}
