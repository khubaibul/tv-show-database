import React from "react";
import { FaHandPointer } from "react-icons/fa";
import { MdCancel, MdOutlineAccessTimeFilled } from "react-icons/md";
import { GrSchedule } from "react-icons/gr";
import { FaStar } from "react-icons/fa";

const Modal = ({ setModalOpen, modalOpen, showFindById, handleInput }) => {
  return (
    <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center">
      <div
        onClick={() => setModalOpen(!modalOpen)}
        className="absolute w-full h-full opacity-60 bg-blend-overlay bg-black"
      ></div>
      <div className="modal-container bg-secondary w-11/12 md:max-w-md mx-auto rounded z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left">
          <div className="flex justify-between items-center pb-3 px-6">
            <div className="flex items-center gap-x-2 font-playFair font-semibold text-4xl tracking-widest text-primary">
              <h4>{showFindById?.show?.name}</h4>
            </div>
            <div className="modal-close cursor-pointer z-50">
              <button onClick={() => setModalOpen(!modalOpen)}>
                <MdCancel className="text-3xl text-red/65" />
              </button>
            </div>
          </div>
          <hr className="my-2" />

          <div className="text-primary">
            <h3 className="font-playFair font-semibold text-lg text-center">
              Show Details
            </h3>
            <div className="flex justify-center items-center gap-x-4">
              <h3 className="flex items-center gap-x-1">
                <GrSchedule />
                <span>{showFindById?.show?.schedule?.days[0]}</span>
                <span>{showFindById?.show?.schedule?.time}</span>
              </h3>
              <h3 className="flex items-center gap-x-1">
                <FaStar className="text-xl" />
                {showFindById?.show?.rating?.average}
              </h3>
              <h3 className="flex items-center gap-x-1">
                <MdOutlineAccessTimeFilled className="text-xl" />
                {showFindById?.show?.averageRuntime} Minutes
              </h3>
            </div>
          </div>
          <div className="px-6 py-6">
            <form onSubmit={handleInput} className="flex flex-col gap-y-5">
              <label className="flex justify-center items-center gap-x-2 text-primary text-lg">
                <h5>
                  <span className="">*</span> Name:
                </h5>
                <input
                  className="border px-2"
                  name="name"
                  defaultValue={""}
                  required
                  type="text"
                />
              </label>
              <label className="flex justify-center items-center gap-x-2 text-primary text-lg">
                <h5>
                  <span className="">*</span> Email:
                </h5>
                <input
                  className="border px-2"
                  name="email"
                  defaultValue={""}
                  required
                  type="email"
                />
              </label>
              <label className="flex justify-center items-center gap-x-2 text-primary text-lg">
                <h5>
                  <span className="">*</span> Phone:
                </h5>
                <input
                  className="border px-2"
                  name="phone"
                  defaultValue={""}
                  required
                  type="tel"
                />
              </label>
              <hr className="" />
              <div className="flex justify-center px-6">
                <button
                  type="submit"
                  className="flex items-center gap-x-2 text-lg px-8 py-2 rounded bg-primary text-secondary font-playFair hover:bg-opacity-0 hover:text-primary hover:outline transition-all duration-300"
                >
                  <FaHandPointer className="text-2xl" />
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
