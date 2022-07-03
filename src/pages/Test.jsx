import * as React from "react";
import { Range } from "react-range";

export default function Test() {
  const [range, setRange] = React.useState([0]);

  return (
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
  );
}
