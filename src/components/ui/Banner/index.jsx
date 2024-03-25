import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getRandomAnime } from "../../../services/api";
import reactLogo from "../../../assets/star.svg";
import { ArrowUndo, StarRating } from "../../../assets/icons/icons";
import { Link } from "react-router-dom";
export default function Banner() {
  const queryClient = useQueryClient();
  const Banner = queryClient.getQueryData(["recent anime"]);
  const [bannerData, setBannerData] = useState(Banner?.data.slice(0, 1));

  // console.log(Banner);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = queryClient.getQueryData(["recent anime"]);
  //       setProduct(data);
  //     } catch (error) {
  //       console.error("Error fetching product data:", error);
  //     }
  //   };

  //   fetchData();
  // }, [queryClient]);
  // console.log(bannerData);
  // Banner[0][1]?.data !== undefined &&
  //   setBannerData(Banner[0][1]?.data.slice(0, 1));
  // console.log(bannerData);
  // const { data: Banner } = useQuery({
  //   queryFn: () => getRandomAnime(),
  //   queryKey: ["random anime"],
  // });
  useEffect(() => {
    setBannerData(Banner?.data.slice(0, 1)[0]);
  }, [Banner]);

  return (
    <section
      className="bg-no-repeat bg-cover py-12"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(49, 42,43, 0.8) 0%, rgba(6, 84, 147, 0) 100%), url( ${bannerData?.trailer?.images?.maximum_image_url})`,
      }}
    >
      <div className="container mx-auto px-12  h-80">
        <div className="py-2 text-white font-semibold text-3xl">
          <h2>{bannerData?.title}</h2>
        </div>
        <div className="flex pb-2 text-white ">
          <StarRating />
          <span>{bannerData?.score}</span>
        </div>
        <div className="pb-2">
          <ul className="flex">
            {bannerData?.genres.map((genre) => (
              <li className="bg-gradient-to-r  from-blue-900 to-gray-600 px-3 py-0.5 mx-1 rounded-full text-white font-semibold">
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="h-32 w-2/5 text-ellipsis overflow-hidden whitespace-break-spaces pb-2 text-white">
          <p>{bannerData?.synopsis}</p>
        </div>
        <div>
          <Link
            to={"/test"}
            className="border-cyan-500 text-cyan-500 px-4 py-2 border-solid border-2"
          >
            View more
          </Link>
        </div>
      </div>
    </section>
  );
}
