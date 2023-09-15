import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingIndicator from "@/components/LoadingIndicator";
import { Dashboard } from "@/components/Dashboard";
import MovieDetails from "@/components/MovieDetails";
type Props = {};

// export const getStaticProps: GetStaticProps = async (context) => {
//     const itemID = context.params?.id;
//     const options = {
//         method: "GET",
//         headers: {
//           accept: "application/json",
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmM5ZGM3M2RhNzVhODJiNTViZGU1N2U1YTRjN2MwNCIsInN1YiI6IjYzOGM0Y2JkNDIwMjI4MDA3YjAyOTQ3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0VZ-2dNG9tL8Wn2-WVGoU2QZvq6kmPmWOzRUJy1Mcc8",
//         },
//       };

//     const data = await axios(`https://api.themoviedb.org/3/movie/${itemID}?language=en-US`, options);
//     // const foundItem = data.stars.find((item: starInterface) => itemID === item.id);

//     if (!foundItem) {
//       return {
//         props: { hasError: true },
//       }
//   }

//   return {
//     props: {
//       specificStarData: foundItem
//     }
//   }
// }

const CardDetails = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<any | null>(null);
  const [data, setData] = useState<any>({});
  const [credits, setCredits] = useState<any>({});


  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmM5ZGM3M2RhNzVhODJiNTViZGU1N2U1YTRjN2MwNCIsInN1YiI6IjYzOGM0Y2JkNDIwMjI4MDA3YjAyOTQ3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0VZ-2dNG9tL8Wn2-WVGoU2QZvq6kmPmWOzRUJy1Mcc8",
      },
    };
    if (id !== undefined) {
      fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
        .then((response) => {
          if (!response.ok) {
            throw Error("Error fetching users data");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          console.error(err);
          setIsPending(false);
          setError(err.message);
        });
    }

    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options)
    .then((response) => {
        if (!response.ok) {
          throw Error("Error fetching users data");
        }
        return response.json();
      })
      .then((data) => {
        setCredits(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        console.error(err);
        setIsPending(false);
        setError(err.message);
      })
  }, [id]);

  {
    if (isPending) return <LoadingIndicator />;
  }
  return (
  <div className="dashboardlayout">
   <div className="left">
    <Dashboard/>
   </div>
   <div className="right">
    <MovieDetails data={data} credits={credits}/>
   </div>
</div>
);
};

export default CardDetails;
