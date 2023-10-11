import React from "react";
// import "./Modal.css";
import video from "../assets/videoplaybackkk.mp4";

const Modal = ({ open, onClose, title, overview }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black opacity-50 z-40 transition-opacity duration-300 ease-in"
      ></div>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="bg-black p-8 rounded-lg z-50 max-w-[80%] max-h-[80%] flex flex-col items-center shadow-red-950 shadow-2xl"
      >
        <p
          className="absolute top-2 right-2 cursor-pointer text-gray-600 hover:text-gray-800"
          onClick={onClose}
        ></p>
        <div className="content flex-1 w-full h-full flex items-center justify-center">
          <video
            controls
            className="videoPlayer"
            src={video}
          ></video>
        </div>
        <div className="mt-1 max-w-[70%]">
          <h2 className="text-white text-xl md:text-2xl font-bold ">{title}</h2>
        </div>
        <p className="w-full max-w-[100%] text-white whitespace-normal break-words">{overview}</p>
      </div>
    </div>
  );
};

export default Modal;
