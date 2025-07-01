import React from "react";

const ReviewCard = (props) => {
  return (
    <div className=" w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
      <div className=" flex flex-row justify-center items-end mb-4 gap-4">
        <img className=" rounded-full w-1/4 align-end" src={props.img} alt="img" />
      </div>
      <div>
        <p className=" text-lightText">
          {props.review.review}
        </p>
      </div>

      
    </div>
  );
};

export default ReviewCard;
