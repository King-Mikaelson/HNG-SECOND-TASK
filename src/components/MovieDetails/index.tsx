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

function formatRuntime(minutes: number) {
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hrs}h ${mins}m`;
}

function MovieDetails({ data, credits }: Props) {
  const imageLink = `http://image.tmdb.org/t/p/original${data?.backdrop_path}`;

  const Writers = credits?.crew?.filter(
    (item: any) => item.department === "Writing"
  );
  console.log(Writers);

  const Directors = credits?.crew?.filter(
    (item: any) => item.job === "Director"
  );

  const Actors = credits?.cast?.filter(
    (item: any) => item.known_for_department === "Acting"
  );
  return (
    <div className="pt-8 px-6">
      <Image
        priority={true}
        src={`http://image.tmdb.org/t/p/original${data?.backdrop_path}`}
        alt="movie poster"
        width={500}
        height={500}
        className="h-[60vh] w-full rounded-[1.25rem]"
      />
      <div className="grid lg:grid-cols-2 xl:grid-cols-[1fr,400px] 2xl:grid-cols-2 grid-cols-1 mt-10 px-2">
        <div>
          <div className="flex gap-8 items-center overflow-scroll">
            <p className="text-[#404040] lg:text-[1.4375rem] text-base font-poppins">
              {data.title}
            </p>
            <ul className="flex gap-10 list-disc items-center">
              <li className="text-[#404040] whitespace-nowrap lg:text-[1.4375rem] text-sm  font-poppins font-normal">
                {data.release_date}
              </li>
              <li className="text-[#404040] whitespace-nowrap lg:text-[1.4375rem] text-sm font-poppins font-normal">
                PG 13
              </li>
              <li className="text-[#404040] whitespace-nowrap lg:text-[1.4375rem] text-sm font-poppins font-normal">
                {formatRuntime(data.runtime)}
              </li>
            </ul>

            <div className="flex gap-4">
              {data.genres?.slice(0, 2).map((item: any) => (
                <p className="rounded-[0.9375rem] text-[#B91C1C] border solid border-[#F8E7EB] py-1 px-2  lg:text-base text-sm font-poppins font-normal">
                  {item.name}
                </p>
              ))}
            </div>
          </div>
          <p className="py-4 text-[#404040] lg:text-xl text-base font-poppins">
            {data.overview}
          </p>

          <div className="flex gap-3  whitespace-nowrap overflow-scroll border solid border-[rgba(232,232,232,0.25)] py-4">
            <h4 className="font-poppins text-xl text-[#333]">Director :</h4>
            {Directors?.map((item: any) => (
              <p className="font-poppins text-xl text-[#BE123C]">{item.name}</p>
            ))}
          </div>

          <div className="flex gap-3 whitespace-nowrap overflow-scroll  border-b solid border-[rgba(232,232,232,0.25)] py-4">
            <h4 className="font-poppins text-xl text-[#333]">Writers :</h4>
            {Writers?.slice(0, 4).map((item: any) => (
              <p className="font-poppins text-xl text-[#BE123C]">{item.name}</p>
            ))}
          </div>

          <div className="flex gap-3 whitespace-nowrap overflow-scroll border-b solid border-[rgba(232,232,232,0.25)] py-4">
            <h4 className="font-poppins text-xl text-[#333]">Stars :</h4>
            {credits?.cast?.slice(0, 4).map((item: any) => (
              <p className="font-poppins text-xl text-[#BE123C]">{item.name}</p>
            ))}
          </div>

          <div className="flex w-full items-center mt-3 rounded-[0.625rem] border ">
            <p className="bg-[#BE123C] lg:w-[40%]  lg:py-3 lg:px-3 text-center border solid border-red-700 rounded-[0.625rem] text-white font-poppins text-xs lg:text-xl font-normal">
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
