import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
export default function Card({ topanime }) {
  const [rating, setRating] = useState(0);
  return (
    <li>
      <div className=" flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-3xl group cursor-pointer transform duration-500 ">
        <img
          className="w-full max-h-[200px] object-cover2 max-w-[150px] object-cover"
          src={topanime?.images.jpg.large_image_url}
          alt=""
        />
        <div className="">
          <div className="p-5 pb-10">
            <h1 className="text-2xl font-semibold text-gray-800 mt-4">
              {topanime?.title}
            </h1>
            <div className="flex items-center">
              <ReactStars
                count={5}
                value={topanime?.score / 2}
                size={24}
                isHalf={true}
                activeColor="#ffd700"
                edit={false}
              />
              <span>{topanime?.score} out of 10 </span>
            </div>
            {/* <p className="text-xl text-gray-400 mt-2 leading-relaxed">
              Located in Rajshahi Division, Bogra is one of the oldest and most
              fascinating towns in Bangladesh
            </p> */}
            <div>
              <ul className="flex">
                {topanime?.genres.map((genre) => (
                  <li>{genre.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <Link
                to={"/test"}
                className="border-cyan-500 text-cyan-500 px-4  border-solid border-2"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
