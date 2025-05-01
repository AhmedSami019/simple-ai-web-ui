import React from "react";
import { TfiReload } from "react-icons/tfi";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { IoClipboardOutline } from "react-icons/io5";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { IoDocumentAttach } from "react-icons/io5";
import { BsChatTextFill } from "react-icons/bs";

const LIveAiChat = () => {
  return (
    <div className="bg-blue-800 px-20 py-10">
      <div className="mb-10">
        <p className="text-yellow-300 text-xl mb-5">Live Ai Chat</p>
        <h2 className="text-5xl text-white">Take a Suggestion Coaching </h2>
      </div>
      <div className="flex gap-5 items-center">

        <div className="w-6/12 bg-gray-200 h-80 rounded-2xl">
          <h3 className="text-4xl text-center pt-20">not completed</h3>
        </div>
        
        <div className="space-y-5 flex flex-col justify-center px-3 py-4 rounded-3xl bg-white">
          <TfiReload size={25} />
          <AiOutlineLike size={25} />
          <AiOutlineDislike size={25} />
          <IoClipboardOutline size={25} />
          <HiOutlineSpeakerWave size={25} />
        </div>
        <div className="w-5/12">
          <div className="space-y-4 bg-gray-200 rounded-3xl p-5">
            <h2 className="text-2xl font-medium mb-6">Real-time Analysis</h2>
            <div className="bg-white p-5 rounded-2xl">
              <h3 className="my-auto">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-success rounded-xl text-white mr-3 my-4"
                />
                Confidence Level
              </h3>
              <div className="flex gap-2 items-center ">
                <progress
                  className="progress progress-success  w-full"
                  value="70"
                  max="100"
                ></progress>
                <p>70%</p>
              </div>
            </div>
            <div className="items-center gap-3 bg-white p-5 rounded-2xl">
              <div className="flex gap-3 mb-3">
              <LuChartNoAxesCombined size={20} />
              <h3>Confidence Level</h3>
              </div>
              <p className="text-gray-500">85% improvement in objection handling</p>
            </div>
            <div className="flex justify-between gap-5">
              <div className="p-5 w-1/2 bg-white rounded-2xl">
                <IoDocumentAttach size={30} />
                <p className="text-xl font-medium">Generate Script</p>
              </div>
              <div className="p-5 w-1/2 bg-white rounded-2xl">
                <BsChatTextFill size={30} />
                <p className="text-xl font-medium">Practice Pitch</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default LIveAiChat;
