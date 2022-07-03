import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./paginate.css";
import Card from "../components/common/Card";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Slider from "../components/home/Slider";

function Pethost() {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);

  const getData = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/photos`);
    const data = res.data;
    const slice = data.slice(offset, offset + perPage);
    const postData = slice.map((pd) => (
      <div key={pd.id}>
        <Card title={pd.title} price={12} />
      </div>
    ));
    setData(postData);
    setPageCount(Math.ceil(data.length / perPage));
  };
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  useEffect(() => {
    getData();
  }, [offset]);

  return (
    <div className="App">
      <Navbar />
      <Slider />

      <div className="my-6 mx-12 mx-auto px-8">
        <div className="flex justify-between mb-9">
          <h1 className="text-2xl text-gray-600 ">Pet Spaces</h1>
          <Link to="/" className="text-white bg-[#ff9a71] px-2 py-1 rounded ">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-8 ">
          {data}
        </div>
      </div>
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
      <Footer />
    </div>
  );
}

export default Pethost;
