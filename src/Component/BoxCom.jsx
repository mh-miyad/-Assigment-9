import React from "react";


const BoxCom = ({logo,title,jobs}) => {
  return (
    <div>
      <div className=" text-gray-700 ">
        <div className="bg-gradient-to-br from-slate-100 to-gray-200 p-5">
            <img src={logo} alt="" className=" w-10 bg-slate-200 p-2 rounded" />
            <p className="text-sm font-bold mt-5 mb-2">{title}</p>
            <p className="text-[12px] ">{jobs}</p>
        </div>
      </div>
    </div>
  );
};

export default BoxCom;
