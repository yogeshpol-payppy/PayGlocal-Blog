import React from "react";

function Tag({ name, width, bgColor, color, onClick }) {
  return (
    <div
      className={`bg-[#4071DF0D] py-[8px] px-[24px] 
            text-[#4071DF] text-[1rem] leading-[1.375rem] rounded-[20px] md:rounded-[40px]
            text-center cursor-pointer`}
      style={{
        width: "fit-content",
        minWidth: `${width}px`,
        color: `${color}`,
        background: bgColor,
        whiteSpace: "nowrap",
      }}
      onClick={onClick}
    >
      {name}
    </div>
  );
}

export default Tag;
