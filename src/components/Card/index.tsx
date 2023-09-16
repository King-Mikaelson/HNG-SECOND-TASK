import React, {useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import LoadingIndicator from "../LoadingIndicator";
import Image from "next/image";
import { MdFavorite,} from "react-icons/md";
import { useRouter } from "next/navigation";

type Props = {
  data: Movie[];
  isPending: boolean;
  filterSearch: any;
  filteredData: Movie[] | [];
  loading: boolean;
};

type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
const Card = ({
  data,
  isPending,
  filterSearch,
  filteredData,
  loading,
}: Props) => {
  return (
    <main className=" px-6 xl:px-24  py-20" >
      <div>
        <div className="flex justify-between items-center">
          <h2 className="font-DMsans lg:text-4xl text-lg font-bold text-[#000]">
            Featured Movie
          </h2>
          <div className="flex lg:gap-4 gap-2 items-center">
            <p className="text-[#BE123C] font-DMSans lg:text-lg text-base">See more</p>
            <MdArrowForwardIos size={20} color="#BE123C" />
          </div>
        </div>
      </div>

      {isPending || loading ? (
        <LoadingIndicator />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-12 mt-10 gap-y-23">
          {((filteredData.length > 0 && filteredData) || data)
            ?.slice(0, 10)
            ?.map((item: Movie, index: number) => (
              <CardDetails item={item} key={index}/>
            ))}
        </div>
      )}
    </main>
  );
};

export default Card;

type PropsChild = {
  item: any;
};

const CardDetails = ({ item,}: PropsChild) => {
  const router = useRouter();

  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  const genre = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ];

  const result = (arr: any) => {
    let result = genre.filter((item) =>
      arr.find((num: any) => num === item.id)
    );
    const result1 = result.map((item) => item.name);
    return result1.map((item, index) =>
      result1[result1.length - 1] === item ? (
        <p className=" font-DMSans text-xs text-[#9CA3AF] font-bold break-words">{`${item}`}</p>
      ) : (
        <p className=" font-DMSans text-xs text-[#9CA3AF] font-bold break-words">{`${item},`}</p>
      )
    );
  };

  const handleFavourite = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setIsFavourite((prevValue) => !prevValue);
  };

  return (
    <div key={item.id} data-testid="movie-card">
      <div
        className="relative w-full"
        onClick={() => router.push(`/movie/${item.id}`)}
      >
        <Image
          src={`http://image.tmdb.org/t/p/original${item?.poster_path}`}
          alt="movie poster"
          width={500}
          height={500}
          className="w-full cursor-pointer"
          data-testid="movie-poster"
        />
        <div
          onClick={(e) => handleFavourite(e)}
          className="bg-[rgba(243,244,246,0.5)] py-1 px-1 rounded-full absolute top-5 right-6"
        >
          {isFavourite ? (
            <MdFavorite size={20} className=" text-red-700 cursor-pointer" />
          ) : (
            <MdFavorite size={20} className=" text-[#D1D5DB] cursor-pointer" />
          )}
        </div>
      </div>

      <p
        data-testid="movie-release-date"
        className="py-3 font-DMSans text-xs text-[#9CA3AF] font-bold"
      >
        {item.release_date}
      </p>

      <div className="flex gap-4 flex-col">
        <p
          onClick={() => router.push(`/movie/${item.id}`)}
          data-testid="movie-title"
          className="font-DMSans text-lg text-[#111827] font-bold cursor-pointer"
        >
          {item.title}
        </p>
        <div className="flex  justify-between">
          <div className="flex flex-row items-center  gap-2">
            <Image
              src="imdb.svg"
              alt="imdb logo"
              width={100}
              height={100}
              className="w-10"
            />
            <p className=" font-normal font-DMSans text-xs text-[#111827]">
              86.0 / 100
            </p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image
              src="tomato.svg"
              alt="tomato"
              width={100}
              height={100}
              className="w-5"
            />
            <p className=" font-normal font-DMSans text-xs text-[#111827] ">
              97%
            </p>
          </div>
        </div>
        <div className="flex lg:gap-2 ">{result(item?.genre_ids)}</div>
      </div>
    </div>
  );
};
