import React from "react";
import { Link } from "react-router-dom";
import Card from "../common/Card";

const Exclusive = () => {
  const items = [
    {
      title: "pet1",
      price: 1,
    },
    {
      title: "pet2",
      price: 2,
    },
    {
      title: "pet3",
      price: 3,
    },
    {
      title: "pet4",
      price: 4,
    },
    {
      title: "pet5",
      price: 5,
    },
  ];
  return (
    <div className="my-6 mx-12 mx-auto px-8">
      <div className="flex justify-between mb-9 ">
        <h1 className="text-2xl text-gray-600 ">Exclusive Pet Spaces</h1>
        <Link to="/" className="text-white bg-[#ff9a71] px-2 py-1 rounded ">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-8 ">
        {items.map((val, index) => (
          <Card title={val.title} price={val.price} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Exclusive;
