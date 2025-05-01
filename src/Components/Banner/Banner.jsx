import React from "react";
import roboImage from "../../assets/banner-2.png";
import bannerImg from "../../assets/banner-img.png";
import bannerIcon1 from "../../assets/atr.png";
import bannerIcon2 from "../../assets/backup_table.png";

const Banner = () => {
  return (
    <div className="hero lg:flex gap-10">
      <div className=" w-1/2 p-10">
        <div className="mb-10">
          <h2 className="text-7xl mb-10">Your AI-Powered Sales Coach</h2>
          <div className="flex gap-5 items-center">
            <img
              src={roboImage}
              alt=""
              className="bg-white shadow-xl rounded-2xl"
            />
            <p className="text-xl">
              Get real-time coaching, script suggestions, and deal-closing
              strategies powered by advanced AI technology.
            </p>
          </div>
        </div>
        <div className="flex gap-5 justify-around">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-white shadow-xl rounded-xl">
            <img src={bannerIcon1} alt="" />
            </div>
            <div>
              <h2 className="text-5xl">2000+</h2>
              <p className="text-xl">Your Projects</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-white shadow-xl rounded-xl">
            <img src={bannerIcon2} alt="" />
            </div>
            <div>
              <h2 className="text-5xl">1700+</h2>
              <p className="text-xl">Provide Tailored</p>
            </div>
          </div>

          
        </div>
      </div>
      <div className=" w-1/2">
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
