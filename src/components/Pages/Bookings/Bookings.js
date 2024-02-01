import React, { useEffect, useState } from "react";

const Bookings = () => {
  const [bookingInfo, setBookingInfo] = useState({});
  useEffect(() => {
    const getFromLs = localStorage.getItem("tv-show-database");
    const getFromLsParse = JSON.parse(getFromLs);
    if (getFromLs) {
      setBookingInfo(getFromLsParse);
    }
  }, []);

  console.log(bookingInfo);

  return (
    <div className="lg:w-[80%] mx-auto h-screen py-10">
      <h3 className="font-stylish text-4xl text-blue">Your Bookings</h3>
      <div>
        <div className="bg-gradient-to-r from-purple-800 via-accent to-purple-400 p-[3px] rounded">
          <div className="bg-gradient-to-l from-primary to-[#1e0f4b] p-8 rounded-lg flex lg:flex-row md:flex-col flex-col lg:gap-x-8 items-center">
            <img
              className=" rounded-md"
              src={bookingInfo?.showInfo?.showImage}
              alt=""
            />
            <div className="flex flex-col gap-y-8 justify-center">
              <h1 className="bg-gradient-to-r from-purple-800 via-accent to-purple-400 inline-block text-transparent bg-clip-text text-2xl font-montserrat font-bold">
                {bookingInfo?.showInfo?.showName}
              </h1>
              <div class="p-1 text-center text-sm font-montserrat font-medium leading-none text-primary-100 w-full bg-gradient-to-r from-purple-800 via-accent to-purple-400 rounded-full text-white">
                100%
              </div>
              <div className="flex gap-x-5 text-lg font-montserrat">
                <button className="flex justify-center items-center bg-gradient-to-r from-purple-600 hover:from-purple-700 to-violet-500 hover:to-violet-600 px-4 py-0.5 rounded-md font-semibold text-slate-900">
                  Print Ticket
                </button>
                <button className="module-border-wrap px-4 py-0.5 rounded-md text-violet-800 font-semibold">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
