import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, price }) => {
  return (
    <Link to="/select">
      <div className="card w-64  bg-base-100 text-[#ff9a71] shadow-xl">
        <figure className="px-2">
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div className="text-[#ff9a71]">
            <h5 className=" text-xl font-medium ">{title}</h5>
          </div>
          <h6 className=" text-md text-gray-800 ">$ {price}/Hr </h6>

          <div className="flex justify-between mx-1">
            <div class="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-400"
              />
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
