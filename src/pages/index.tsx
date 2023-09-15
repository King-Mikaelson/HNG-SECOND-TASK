import Image from "next/image";
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import { DM_Sans, Poppins } from "next/font/google";
import { Footer } from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmSans",
  weight: ["400", "500", "700"],
  style: ["normal"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});
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
export default function Home() {
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<any | null>(null);
  const saved =
    typeof window !== "undefined" &&
    window.localStorage &&
    JSON.parse(localStorage.getItem("movies")!);
  const [data, setData] = useState<Movie[] | []>([]);
  const [filteredData, setFilteredData] = useState<Movie[] | []>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  // Save item to local Storage on state  chnage
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("movies", JSON.stringify(data));
    }
  }, [data]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmM5ZGM3M2RhNzVhODJiNTViZGU1N2U1YTRjN2MwNCIsInN1YiI6IjYzOGM0Y2JkNDIwMjI4MDA3YjAyOTQ3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0VZ-2dNG9tL8Wn2-WVGoU2QZvq6kmPmWOzRUJy1Mcc8",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => {
        if (!response.ok) {
          throw Error("Error fetching users data");
        }
        return response.json();
      })
      .then((data) => {
        if (!(saved && saved.length > 0)) {
          setData(data.results);
        } else {
          setData(saved);
        }
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        console.error(err);
        setIsPending(false);
        setError(err.message);
      });
  }, []);

  function filterSearch(): any {
    setLoading(true); // Set loading state to true before filtering
    setTimeout(() => {
      if (search !== "") {
        const filteredData = data.filter((item: Movie) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredData(filteredData);
      }
      setLoading(false); // Set loading state to false after filtering
    }, 1000); // Simulate a delay (1 second) to mimic loading
  }

  useEffect(() => {
    filterSearch();
  }, [search]);


  return (
    <main className={`${dmSans.className} ${poppins.className}`}>
      <Hero search={search} setSearch={setSearch} />
      <Card
        isPending={isPending}
        data={data}
        loading={loading}
        filterSearch={filterSearch}
        filteredData={filteredData}
      />
      <Footer/>
    </main>
  );
}
