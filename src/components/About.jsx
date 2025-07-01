import React from "react";
import img from "../assets/about.svg";
import Button from "../layout/Button";
import Heading from "../layout/Heading";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div className=" md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14">
      <div className=" w-full md:w-2/4">
        <img src={img} alt="img" />
      </div>

      <div className="w-full md:w-2/4 text-center space-y-2">
        <Heading title1="About" title2="Us?" />
        <p className=" text-lightText">
          At eStudy, we believe education should be accessible, engaging, and effective for everyone
          We are a dedicated team of educators, developers, and learners working together to create a platform that empowers individuals to grow their knowledge and skills. From academic excellence to personal development, our courses are carefully designed to match real-world needs

          Our mission is to make quality learning affordable and flexible so you can study anytime, anywhere, at your own pace. Whether you are a student, professional, or lifelong learner — eStudy is here to support your journey


        </p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link>
      </div>
    </div>
  );
};

export default About;
