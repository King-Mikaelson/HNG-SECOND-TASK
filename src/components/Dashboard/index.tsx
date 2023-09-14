import Image from "next/image";
import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import { BiCameraMovie } from "react-icons/bi";
import { TbLogout } from "react-icons/tb";
import { useRouter } from "next/router";

type Props = {};

export const Dashboard = (props: Props) => {

  const[active, setActive] = useState("movies")
  const router = useRouter()
  return (
    <div className="pt-4 flex flex-col justify-bewtween h-full  w-full">
      <div className="px-6">
      <Image
        src="/blackLogo.svg"
        alt="logo image"
        width={300}
        height={300}
        className="lg:w-48 w-32  "
      />
      </div>

      <div className="grid grid-cols-1  gap-12 w-full mt-12 mb-8 ">

      <div className={`${active === "home" ? "flex items-center text-[#BE123C] active__parent  bg-[rgba(190,18,60,0.10)] transition duration-500" : "text-[#666] transition duration-0"}`} onClick={() => {setActive("home"); router.push("/")}}>
      <div className="flex gap-4 items-center px-6">
          <GoHome size={30} color="#666" />
          <p className="font-poppins text-xl font-medium text-[#666]">Home</p>
        </div>
      </div>

        <div onClick={() => setActive("movies")} className={`${active === "movies" ? "flex items-center text-[#BE123C] active__parent  bg-[rgba(190,18,60,0.10)] transition duration-500" : "text-[#666] transition duration-0"}`}>
        <div  className="flex gap-4 items-center  px-6">
          <BiCameraMovie size={30} color="#666" />
          <p className="font-poppins text-xl font-medium ">Movies</p>
        </div>
        </div>

      <div className={`${active === "series" ? "flex items-center text-[#BE123C] active__parent  bg-[rgba(190,18,60,0.10)] transition duration-500" : "text-[#666] transition duration-0"}`} onClick={() => setActive("series")}>
      <div className="flex gap-4 items-center px-6">
          <Image src="/tvShow.svg" alt="tv show" width={300} height={300} className="w-8"/>
          <p className="font-poppins text-xl font-medium  whitespace-nowrap">TV Series</p>
        </div>
      </div>

      <div className={`${active === "upcoming" ? "flex items-center text-[#BE123C] active__parent  bg-[rgba(190,18,60,0.10)] transition duration-500" : "text-[#666] transition duration-0"}`} onClick={() => setActive("upcoming")}>
      <div className="flex gap-4 items-center px-6">
        <Image src="/calendar.svg" alt="tv show" width={300} height={300} className="w-8"/>
          <p className="font-poppins text-xl font-medium ">Upcoming</p>
        </div>
      </div>

      </div>

      <div className="flex flex-col px-3 mx-6 pt-10 pb-4 gap-2   rounded-[1.25rem] border solid border-[rgba(190,18,60,0.70)] bg-[rgba(248,231,235,0.4)]">
        <p className="font-poppins font-semibold text-[0.9375rem] text-[rgba(51,51,51,0.80)]"> Play movie quizes and earn free tickets</p>
        <p  className="font-poppins font-medium text-xs text-[#666]">50k people are playing now</p>

        <button className="font-poppins flex justify-center items-center mx-auto font-medium text-xs text-[rgba(190,18,60,1)] w-fit h-fit py-2 px-4 rounded-[1.875rem] bg-[rgba(190,18,60,0.2)]">Start Playing</button>
      </div>

      <div className="flex gap-6 items-center mt-12 px-6">
        <TbLogout size={30} className="text-[#666]"/>
        <p className="font-poppins font-medium text-xl text-[#666]">Log out</p>
      </div>
    </div>
  );
};
