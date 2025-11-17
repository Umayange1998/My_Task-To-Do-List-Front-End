import React from "react";

const IconButton = (props) => {
  return (
    <button className={props.class} >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        stroke="currentColor"
        className="size-[1.2em]"
      ><path stroke-linecap="round" stroke-linejoin="round" d={props.d} />
      </svg>
    </button>
  );
};

export default IconButton;
