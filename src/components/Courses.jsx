import React from "react";
import Heading from "../layout/Heading";
import CoursesCard from "../layout/CoursesCard";
import webImg from "../assets/web-dev.svg";
import appImg from "../assets/App-dev.svg";
import graphicImg from "../assets/graphic.svg";
import digitalImg from "../assets/digital.svg";

const Courses = () => {
  let courses = [
    {
      content:"Master the art of building modern websites using HTML, CSS, JavaScript, and powerful frameworks. Learn to create responsive, user-friendly web applications from scratch and deploy them professionally",
      title: "Web Development"
    },
    {
      content:"Learn to build mobile applications for Android and iOS using tools like Flutter and React Native. Understand the app lifecycle, UI/UX basics, and how to publish apps on the Play Store or App Store",
      title: "App Development",
    },
    {
      content:"Unlock your creativity with design principles, typography, color theory, and tools like Photoshop, Illustrator, and Figma. Build a strong design portfolio and create stunning visuals for real-world projects",
      title: "Graphic Designer",
    },
    {
      content:"Master SEO, social media marketing, email campaigns, content strategy, and Google Ads. Gain the skills to grow brands online and analyze data to optimize your digital marketing strategies",
      title: "Digital Marketing",
    },  ]
  return (
    <div className=" min-h-screen flex flex-col items-center md:px-32 px-5 my-10">
      <Heading title1="Our" title2="Courses" />

      <div className=" flex flex-wrap justify-center gap-6 mt-6">
        <CoursesCard img={webImg}  courses={courses[0]}/>
        <CoursesCard img={appImg}  courses={courses[1]}/>
        <CoursesCard img={graphicImg}  courses={courses[2]}/>
        <CoursesCard img={digitalImg} courses={courses[3]} />
      </div>
    </div>
  );
};

export default Courses;
