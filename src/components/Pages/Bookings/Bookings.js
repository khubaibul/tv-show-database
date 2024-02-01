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


  return (
    <div className="lg:w-[80%] mx-auto py-10 lg:px-10 md:px-10 px-6">
      <h3 className="font-stylish text-4xl text-blue">Your Bookings</h3>
      <div>
        <div className="bg-gradient-to-l from-primary to-[#1e0f4b] p-8 rounded-lg flex lg:flex-row md:flex-col flex-col lg:gap-x-8 items-center lg:w-[600px]">
          <img
            className="rounded-md"
            src={bookingInfo?.showInfo?.showImage}
            alt=""
          />
          <div className="flex flex-col gap-y-8 justify-center">
            <h1 className="bg-gradient-to-r from-purple-800 via-accent to-purple-400 inline-block text-transparent bg-clip-text text-3xl font-playFair font-bold">
              {bookingInfo?.showInfo?.showName}
            </h1>
            <div>
              <h3 className="text-lg font-playFair font-semibold">
                Booking At - {bookingInfo?.bookingTime?.split("T")[0]}
              </h3>
            </div>
            <div className="flex gap-x-5 text-lg font-montserrat">
              <button className="flex justify-center items-center bg-gradient-to-r px-4 py-0.5 rounded-md font-semibold text-gray">
                Print Ticket
              </button>
              <button className="module-border-wrap px-4 py-0.5 rounded-md text-violet-800 font-semibold border border-secondary hover:bg-secondary hover:text-gray">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
