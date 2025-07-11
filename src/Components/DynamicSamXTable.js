import React from "react";

function DynamicSamXTable ({ title, columns, data }) {
  return (
    <div className="flex flex-col gap-6 min-h-[300px] max-h-[300px] overflow-scroll">
      <h2 className="text-center common-h6-heading custpm-text-grey600 matterfont bg-[#E5EDFF] py-1.5 px-2.5 rounded-lg ">{title}</h2>
     <div className="w-full overflow-scroll">
        <table className="table-auto w-full text-left border-collapse ">
            <thead>
            <tr className="border-b border-custom-grey200">
                {columns.map((column, index) => (
                <th key={index} className="p-3 common-body2-text custom-text-grey600 matterfont whitespace-nowrap ">{column}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data?.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-b border-custom-grey200">
                {columns.map((column, colIndex) => (
                    <td key={colIndex} className="p-3 common-body2-text  matterfont ">{row[column] || "-"}</td>
                ))}
                </tr>
            ))}
            </tbody>
        </table>
     </div>
    </div>
  );
};


export default DynamicSamXTable;
