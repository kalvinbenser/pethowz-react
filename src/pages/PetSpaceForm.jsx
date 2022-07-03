import React, { useState } from "react";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Dropdown from "../components/common/Dropdown";
import { Range } from "react-range";

const PetSpaceForm = () => {
  // state showing if dropdown is open or closed
  const [dropdown, setDropdown] = useState(false);
  // managing dropdown items (list of dropdown items)
  const [items, setItems] = useState(["john", "milos", "steph", "kathreine"]);
  // contains selected items
  const [selectedItems, setSelected] = useState([]);
  //range
  const [range, setRange] = React.useState([0]);

  const toogleDropdown = () => {
    setDropdown(!dropdown);
  };
  // adds new item to multiselect
  const addTag = (item) => {
    setSelected(selectedItems.concat(item));
    setDropdown(false);
  };
  // removes item from multiselect
  const removeTag = (item) => {
    const filtered = selectedItems.filter((e) => e !== item);
    setSelected(filtered);
  };
  return (
    <>
      <Navbar />

      <div className=" container mx-auto ">
        <div className="text-2xl py-4 text-gray-600">Pet Spaces</div>
        {/* first row */}
        <div className="flex flex-col md:flex-row  md:gap-8 mb-8 ">
          <div className=" w-full  md:w-1/4 px-6 mx-auto">
            <label htmlFor="venue" className="text-sm  text-gray-600">
              {" "}
              Venue Name
            </label>
            <input
              type="text"
              id="venue"
              className="p-1.5 w-full border-2 border-gray-300 outline-none focus:border-[#ff9a71]"
            />
          </div>

          <div className="w-full  md:w-1/4 px-6 mx-auto ">
            <label htmlFor="venue" className="text-sm  text-gray-600">
              {" "}
              Select Venue Category
            </label>
            <input
              type="text"
              id="venue"
              className="p-1.5 w-full border-2 border-gray-300 outline-none focus:border-[#ff9a71]"
            />
          </div>

          <div className="w-full  md:w-1/4 px-6 mx-auto ">
            <label htmlFor="venue" className="text-sm  text-gray-600">
              {" "}
              Select the option which are applicable
            </label>
            <input
              type="text"
              id="venue"
              className="p-1.5 w-full border-2 border-gray-300 outline-none focus:border-[#ff9a71]"
            />
          </div>

          <div className="w-full  md:w-1/4 px-6 mx-auto">
            <label htmlFor="venue" className="text-sm  text-gray-600">
              {" "}
              Amenities
            </label>
            <input
              type="text"
              id="venue"
              className="p-1.5 w-full border-2 border-gray-300 outline-none focus:border-[#ff9a71]"
            />
          </div>
        </div>

        {/* second row */}

        <div className="flex flex-col md:flex-row  md:gap-8 mb-8">
          <div className="w-full  md:w-1/4 px-6 mx-auto ">
            {/* start multiple select*/}
            <label htmlFor="venue" className="text-sm  text-gray-600">
              {" "}
              Select Service
            </label>
            <div className="flex flex-col items-center relative">
              <div className="w-full ">
                <div className="my-2 p-1 flex border border-gray-200 bg-white rounded ">
                  <div className="flex flex-auto flex-wrap">
                    {selectedItems.map((tag, index) => {
                      return (
                        <div
                          key={index}
                          className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-orange-700 bg-white border border-[#ff9a71] "
                        >
                          <div className="text-xs font-normal leading-none max-w-full flex-initial">
                            {tag}
                          </div>
                          <div className="flex flex-auto flex-row-reverse">
                            <div onClick={() => removeTag(tag)}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                height="100%"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-x cursor-pointer hover:text-[#ff9a71]  rounded-full w-4 h-4 ml-2"
                              >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    <div className="flex-1">
                      <input
                        placeholder=""
                        className="bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800"
                      />
                    </div>
                  </div>
                  <div
                    className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200"
                    onClick={toogleDropdown}
                  >
                    <button className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-chevron-up w-4 h-4"
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {dropdown ? (
              <Dropdown list={items} addItem={addTag}></Dropdown>
            ) : null}

            {/* end */}
          </div>

          <div className="w-full  md:w-1/4 px-6 mx-auto">
            <label htmlFor="venue" className="text-sm  text-gray-600">
              {" "}
              Service Details
            </label>
            <input
              type="text"
              id="venue"
              className="p-1.5 w-full border-2 border-gray-300 outline-none focus:border-[#ff9a71]"
            />
          </div>

          <div className="w-full  md:w-1/4 px-6 mx-auto ">
            <label htmlFor="venue" className="text-sm  text-gray-600">
              {" "}
              Choose Location
            </label>
            <input
              type="text"
              id="venue"
              className="p-1.5 w-full border-2 border-gray-300 outline-none focus:border-[#ff9a71]"
            />
          </div>

          <div className="w-full  md:w-1/4 px-6 mx-auto mt-6">
            <label class=" flex flex-col    bg-[#ff9a71] text-white rounded-lg shadow-lg tracking-wide   cursor-pointer  hover:text-white">
              <div class="flex px-4 mx-auto ">
                <span class="mt-1 text-base leading-normal ">Upload Image</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 ml-2 mt-2 mb-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </div>
              <input type="file" class="hidden" />
            </label>
          </div>
        </div>

        {/* third row */}
        <div className="flex flex-col justify-start mb-4 px-6 mx-auto">
          <label htmlFor="" className="text-sm  text-gray-600">
            Cost Per Hour
          </label>
          <Range
            step={100}
            min={0}
            max={1000}
            values={range}
            onChange={(values) => {
              setRange(values);
            }}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                className="w-1/4 h-3 pr-2 my-4 bg-gray-200 rounded-md"
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                className="w-5 h-5 transform translate-x-10 bg-[#ff9a71] rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff9a71]"
              />
            )}
          />
          <span className="text-sm text-gray-600">RS {range[0]}</span>
        </div>

        {/* fourth row */}

        <div className="flex justify-end mb-12">
          <div className="p-2 px-4 bg-[#ff9a71] text-white font-bold rounded cursor-pointer">
            Submit
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PetSpaceForm;
