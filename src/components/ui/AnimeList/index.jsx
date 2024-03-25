import React from "react";

export default function AnimeList({ anime }) {
  return (
    <div className="">
      <div className="   bg-white  w-48  mx-auto">
        <div
          className=" overflow-hidden rounded-xl relative transform  transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white movie-card"
          data-movie-id="438631"
        >
          <div className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent"></div>
          <div
            className="relative cursor-pointer group z-10 space-y-6 movie_info"
            data-lity=""
            href="https://www.youtube.com/embed/aSHs224Dge0"
          >
            <div className="poster__info align-self-end w-full">
              <div className="h-32"></div>
              <div className="space-y-6 detail_info">
                <div className="flex flex-col space-y-2 inner">
                  <a
                    className="relative flex items-center w-min flex-shrink-0 p-1 text-center text-white bg-red-500 rounded-full group-hover:bg-red-700"
                    data-unsp-sanitized="clean"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9.555 7.168A1 1 0 0 0 8 8v4a1 1 0 0 0 1.555.832l3-2a1 1 0 0 0 0-1.664l-3-2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <div className="absolute transition opacity-0 duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-x-16 text-xl font-bold text-white group-hover:pr-2">
                      Trailer
                    </div>
                  </a>
                  <h3
                    className="w-40  truncate font-bold text-white"
                    data-unsp-sanitized="clean"
                  >
                    {anime.title}
                  </h3>
                </div>
                <div className="flex justify-center ">
                  <div>
                    {" "}
                    <svg
                      class="h-8 w-8 text-red-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <div>
                    <span>{anime.score}</span>
                  </div>
                </div>
                <div className="px-4 h-24">
                  <p>{anime.synopsis}</p>
                </div>

                {/* <div className="h-20">
                  <ul className="flex flex-wrap">
                    {" "}
                    {anime.genres.slice(0, 3).map((genre) => (
                      <li
                        className="py-0.5 px-2 mx-0.5 my-0.5 bg-white text-cyan-500 rounded-full"
                        key={genre.mal_id}
                      >
                        {genre.name}
                      </li>
                    ))}
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
          <img
            className="absolute inset-0 transform w-full -translate-y-4"
            src={anime.images.jpg.large_image_url}
            style={{ filter: "grayscale(0)" }}
          />
          {/* <div className="poster__footer flex flex-row relative pb-10 space-x-4 z-10">
            <a
              className="flex items-center py-2 px-4 rounded-full mx-auto text-white bg-red-500 hover:bg-red-700"
              href="http://www.google.com/calendar/event?action=TEMPLATE&amp;dates=20210915T010000Z%2F20210915T010000Z&amp;text=Dune%20%2D%20Movie%20Premiere&amp;location=http%3A%2F%2Fmoviedates.info&amp;details=This%20reminder%20was%20created%20through%20http%3A%2F%2Fmoviedates.info"
              target="_blank"
              data-unsp-sanitized="clean"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <div className="text-sm text-white ml-2">Set reminder</div>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}
