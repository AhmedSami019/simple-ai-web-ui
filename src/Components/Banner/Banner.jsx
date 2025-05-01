import React from "react";
import roboImage from "../../assets/banner-2.png";
import bannerImg from "../../assets/banner-img.png";
import bannerIcon1 from "../../assets/atr.png";
import bannerIcon2 from "../../assets/backup_table.png";

const Banner = () => {
  return (
    <div className="flex gap-10 mx-10 justify-center relative">
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
      <div className=" w-1/2  ">
        <div className="">
          <img src={bannerImg} alt="" />
        </div>
        <div className="card lg:max-w-2/8 bg-base-100 card-lg shadow-2xl lg:absolute lg:-bottom-20 lg:right-3/10 ">
          <div className="card-body">
            <div className="flex justify-around ga-5  mb-8">
            <h2 className="text-5xl font-medium">71+</h2>
            <h2 className="text-5xl font-medium">1000+</h2>            
            </div>
            <p className="text-2xl font-medium mb-5">Growth is our priority.</p>
            <p className="text-gray-500">
            As a full-service business agency, we specialize in helping companies of all sizes optimize their operations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
