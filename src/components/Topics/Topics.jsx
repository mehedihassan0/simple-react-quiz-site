import React from "react";
import card from "../../assets/cardImage.jpg";
import { Link, NavLink } from "react-router-dom";

function Topics() {
  return (
    <div>
      <div className="flex  flex-col  h-screen">
        <div className="flex justify-center items-center  flex-1 gap-5 ">
          <div>
            <img
              src={card}
              alt=""
              className="size-80 border-4 rounded-t-lg shadow-lg bg-white "
            />
            <div className="flex justify-between items-center border-4 bg-white shadow-lg rounded-b-lg">
              <h1 className="text-3xl">React</h1>
              <NavLink
                to="/quizGroup/1"
                className={({ isActive }) =>
                  `bg-blue-400 px-3 py-2 hover:bg-red-400 rounded-md shadow-md ${
                    isActive ? "red" : "blue"
                  }`
                }
              >
                Start Practice
              </NavLink>
            </div>
          </div>
          <div>
            <img
              src={card}
              alt=""
              className="size-80 border-4 rounded-t-lg shadow-lg bg-white "
            />
            <div className="flex justify-between items-center border-4 bg-white shadow-lg rounded-b-lg">
              <h1 className="text-3xl">JavaScript</h1>
              <Link
                to="/quizGroup/2"
                className="bg-blue-400 px-3 py-2 hover:bg-red-400 rounded-md shadow-md"
              >
                Start Practice
              </Link>
            </div>
          </div>
          <div>
            <img
              src={card}
              alt=""
              className="size-80 border-4 rounded-t-lg shadow-lg bg-white "
            />
            <div className="flex justify-between items-center border-4 bg-white shadow-lg rounded-b-lg">
              <h1 className="text-3xl">CSS</h1>
              <Link
                to="/quizGroup/4"
                className="bg-blue-400 px-3 py-2 hover:bg-red-400 rounded-md shadow-md"
              >
                Start Practice
              </Link>
            </div>
          </div>
          <div>
            <img
              src={card}
              alt=""
              className="size-80 border-4 rounded-t-lg shadow-lg bg-white "
            />
            <div className="flex justify-between items-center border-4 bg-white shadow-lg rounded-b-lg">
              <h1 className="text-3xl">Git</h1>
              <Link
                to="/quizGroup/5"
                className="bg-blue-400 px-3 py-2 hover:bg-red-400 rounded-md shadow-md"
              >
                Start Practice
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topics;
