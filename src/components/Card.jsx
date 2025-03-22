import React from "react";
import card1 from "../assets/Card1.png";

function Card({title,content,img,bgcolour}) {
  return (
    <div>
      <div className={`flex flex-col gap-6 rounded-[8px] ${bgcolour} p-6`}>
        <img src={img} alt="" className="h-12.5 w-12.5" />
        <h1 className="font-Manrope font-medium text-2xl text-[#232325] leading-[24px]">
          {title}
        </h1>
        <p className="font-Manrope text-base text-[#6F6F6F]">{content}</p>
      </div>
    </div>
  );
}

export default Card;
