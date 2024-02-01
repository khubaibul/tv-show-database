import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetShowsQuery } from "../../../features/shows/showsSlice";
import { SiSemanticrelease } from "react-icons/si";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { MdOutlineFilterDrama } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaHandPointer } from "react-icons/fa6";
import Rating from "react-rating";
import Modal from "../Shared/Modal";
import toast from "react-hot-toast";

const Show = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { id } = useParams();

  const { data: shows } = useGetShowsQuery();
  const showFindById = shows?.find((singleShow) => singleShow?.show?.id == id);

  const handleInput = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const time = new Date();

    const bookingInformation = {
      userInfo: { name, email, phone },
      showInfo: {
        showId: showFindById?.show?.id,
        showName: showFindById?.show?.name,
        showImage: showFindById?.show?.image?.medium,
      },
      bookingTime: time,
    };

    localStorage.setItem(
      "tv-show-database",
      JSON.stringify(bookingInformation)
    );
    toast.success("Your seat has been booked!");
    form.reset();
    setModalOpen(!modalOpen);
  };

  return (
    <div
      style={{ backgroundImage: `url(${showFindById?.show?.image?.original})` }}
      className="bg-cover bg-center bg-no-repeat"
    >
      <div className=" bg-gradient-to-r from-primary to-primary/60 py-20">
        <div className="grid grid-cols-5 w-[80%] mx-auto p-10">
          <img
            src={showFindById?.show?.image?.medium}
            className="col-span-1 rounded w-full hover:scale-105 transition-all duration-300 shadow"
            alt="Show Medium Img"
          />

          <div className="col-span-4 lg:ml-20 md:ml-10 flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
              <div className="flex items-center gap-x-2 font-playFair font-semibold text-4xl tracking-widest">
                <h4>{showFindById?.show?.name}</h4>
                <span>({showFindById?.show?.premiered?.split("-")[0]})</span>
              </div>
              <ul className="flex gap-x-8">
                <li className="flex items-center gap-x-2 font-semibold">
                  <SiSemanticrelease className="text-xl" />
                  {showFindById?.show?.premiered}
                </li>
                <li className="flex items-center gap-x-2 font-semibold">
                  <MdOutlineFilterDrama className="text-xl" />
                  <div>
                    {showFindById?.show?.genres?.[0]}{" "}
                    {showFindById?.show?.genres?.[1]}{" "}
                    {showFindById?.show?.genres?.[2]}
                  </div>
                </li>
                <li className="flex items-center gap-x-2 font-semibold">
                  <MdOutlineAccessTimeFilled className="text-xl" />
                  {showFindById?.show?.averageRuntime} Minutes
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="font-playFair font-semibold text-lg">
                <h4>User Ratings</h4>
                <Rating
                  placeholderRating={showFindById?.show?.rating?.average}
                  readonly
                  stop={10}
                />
              </div>
              <div className="flex items-center gap-x-6 text-2xl">
                <FaListAlt />
                <FaRegHeart />
                <FaRegStar />
                <button className="flex items-center border px-2 rounded gap-x-1 hover:bg-secondary hover:text-primary text-lg transition-all duration-200">
                  <FaPlay />
                  <span>Play Trailer</span>
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-playFair font-semibold text-lg">Summary</h3>
              <p className="">
                {showFindById?.show?.summary.replace(/(<([^>]+)>)/gi, "")}{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={() => setModalOpen(!modalOpen)}
            className="flex items-center gap-x-2 text-lg px-8 py-2 rounded bg-secondary text-primary font-playFair hover:bg-opacity-0 hover:text-secondary hover:outline transition-all duration-300"
          >
            <FaHandPointer className="text-2xl" />
            Book Now
          </button>
        </div>
      </div>
      {modalOpen && (
        <Modal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          showFindById={showFindById}
          handleInput={handleInput}
        />
      )}
    </div>
  );
};

export default Show;
