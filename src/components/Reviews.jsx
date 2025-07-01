import React from "react";
import Heading from "../layout/Heading";
import ReviewCard from "../layout/ReviewCard";
import img1 from "../assets/images/pic1.png";
import img2 from "../assets/images/pic2.png";
import img3 from "../assets/images/pic3.png";

const Reviews = () => {
  const review = [
    {
      review: "This platform helped me learn at my own pace with easy-to-understand lessons and practical content. I now feel more confident in my skills.",
    },
    {
      review: "I found the courses very informative and well structured. The instructors are knowledgeable and always ready to support. Highly recommended.",
      
    },
    {
    
      review: "A great platform with lots of useful content. I enjoyed the interactive learning approach. It made studying much more interesting and fun.",
      
    }
  ];

  return (
    <div className=" min-h-[80vh] flex flex-col items-center justify-center md:px-32 px-5">
      <Heading title1="Our" title2="Reviews" />

      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img={img1} review={review[0]}/>
        <ReviewCard img={img2} review={review[1]}/>
        <ReviewCard img={img3} review={review[2]}/>
      </div>
    </div>
  );
};

export default Reviews;
