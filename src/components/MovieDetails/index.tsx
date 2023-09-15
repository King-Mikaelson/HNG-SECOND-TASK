import Image from "next/image";
import React from "react";
import {
  AiFillStar,
  AiOutlineDown,
  AiOutlineUnorderedList,
} from "react-icons/ai";

type Props = {
  data: any;
  credits: any;
};

import {FaPlay} from "react-icons/fa"

function formatRuntime(minutes: number) {
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hrs}h ${mins}m`;
}

function getUtcTime(dateTime:any){
  const date = new Date(dateTime).getUTCMilliseconds()
  console.log(date, dateTime)
  return date
}

function MovieDetails({ data, credits }: Props) {

  const Writers = credits?.crew?.filter(
    (item: any) => item.department === "Writing"
  );

  const Directors = credits?.crew?.filter(
    (item: any) => item.job === "Director"
  );

  const Actors = credits?.cast?.filter(
    (item: any) => item.known_for_department === "Acting"
  );
  return (
    <div className="pt-8 px-4">
      <div className="relative">
      <Image
        priority={true}
        src={`http://image.tmdb.org/t/p/original${data?.backdrop_path}`}
        alt="movie poster"
        width={500}
        height={500}
        className="lg:h-[60vh] h-[30vh] w-full rounded-[1.25rem]"
      />
      <div className="playDiv cursor-pointer">
      <div className="rounded-full play py-8 px-8">
      <FaPlay size={30} className="text-white"/>
      </div>
      <p className="text-[#E8E8E8] text-[1.5625rem] font-poppins font-medium">Watch Trailer</p>
      </div>
      </div>
      <div className="grid lg:grid-cols-2 xl:grid-cols-[1fr,350px] 2xl:grid-cols-2 grid-cols-1 mt-10 px-2">
        <div>
          <div className="flex gap-8 items-center overflow-scroll">
            <p  data-testid="movie-title" className="text-[#404040] whitespace-nowrap md:whitespace-normal  lg:text-[1.4375rem] text-base font-poppins">
              {data.title}
            </p>
            <ul className="flex gap-10 list-disc items-center">
              <li data-testid="movie-release-date" className="text-[#404040] whitespace-nowrap lg:text-[1.4375rem] text-sm  font-poppins font-normal">
                {getUtcTime(data.release_date)}
              </li>
              <li className="text-[#404040] whitespace-nowrap lg:text-[1.4375rem] text-sm font-poppins font-normal">
                PG 13
              </li>
              <li data-testid="movie-runtime" className="text-[#404040] whitespace-nowrap lg:text-[1.4375rem] text-sm font-poppins font-normal">
                {data.runtime}mins
              </li>
            </ul>

            <div className="flex gap-4">
              {data.genres?.slice(0, 2).map((item: any,index:number) => (
                <p key={index} className="rounded-[0.9375rem] text-[#B91C1C] border solid border-[#F8E7EB] py-1 px-2 flex whitespace-nowrap items-center lg:text-base text-sm font-poppins font-normal">
                  {item.name}
                </p>
              ))}
            </div>
          </div>
          <p data-testid="movie-overview" className="py-4 text-[#404040] lg:text-xl text-base font-poppins">
            {data.overview}
          </p>

          <div className="flex gap-3  whitespace-nowrap overflow-scroll border solid border-[rgba(232,232,232,0.25)] py-4">
            <h4 className="font-poppins text-xl text-[#333]">Director :</h4>
            {Directors?.map((item: any,index:number) => (
              <p  key={index} className="font-poppins text-xl text-[#BE123C]">{item.name}</p>
            ))}
          </div>

          <div className="flex gap-3 whitespace-nowrap overflow-scroll  border-b solid border-[rgba(232,232,232,0.25)] py-4">
            <h4 className="font-poppins text-xl text-[#333]">Writers :</h4>
            {Writers?.slice(0, 4).map((item: any, index:number) => (
              <p key={index} className="font-poppins text-xl text-[#BE123C]">{item.name}</p>
            ))}
          </div>

          <div className="flex gap-3 whitespace-nowrap overflow-scroll border-b solid border-[rgba(232,232,232,0.25)] py-4">
            <h4 className="font-poppins text-xl text-[#333]">Stars :</h4>
            {credits?.cast?.slice(0, 4).map((item: any,index:number) => (
              <p  key={index} className="font-poppins text-xl text-[#BE123C]">{item.name}</p>
            ))}
          </div>

          <div className="flex whitespace-nowrap overflow-scroll w-full items-center mt-3 rounded-[0.625rem] border ">
            <p className="bg-[#BE123C] lg:w-[60%] xl:w-[40%]  lg:py-3 lg:px-3 text-center border solid border-red-700 rounded-[0.625rem] text-white font-poppins text-xs lg:text-xl font-normal">
              Top rated movie #65
            </p>
            <div className="lg:py-3 lg:px-6 w-full justify-around items-center">
              <div className="border-[#C7C7C7]  text-[#333] font-poppins text-xl font-normal">
                Awards 9 nominations
              </div>
            </div>
            <AiOutlineDown size={30} className="mr-5" />
          </div>
        </div>

        <div>
          <div className="flex justify-end items-center gap-4">
            <AiFillStar size={30} className="text-yellow-400" />
            <p className="text-[#333] font-poppins text-xl font-medium">
              <span className="text-[#E8E8E8]  text-2xl">8.5 </span>| 350k
            </p>
          </div>

          <div className="bg-[#BE123C] mt-9 mb-3 z-30 py-3 px-3 flex gap-3  justify-center items-center border solid border-red-700 rounded-[0.625rem] text-white font-poppins text-xl font-medium">
            <Image
              width={100}
              height={100}
              src="/ticket.svg"
              alt="movie poster"
              className="w-10"
            />

            <p>See Showtimes</p>
          </div>

          <div className="bg-[rgba(190,18,60,0.10)] mb-3 z-30 py-3 px-3 flex justify-center gap-3 border solid border-red-700 rounded-[0.625rem] text-[#333] font-poppins text-xl font-medium items-center">
            <AiOutlineUnorderedList />
            More watch options
          </div>
          <Image
            width={100}
            height={100}
            src="/movieGroup.svg"
            alt="movie poster"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
