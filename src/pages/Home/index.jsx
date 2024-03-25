import { useQuery } from "@tanstack/react-query";
import { fetchData, getRecentAnimeRecommendations } from "../../services/api";
import SimpleForm from "../../components/ui/Form/SimpleForm";
import { deleteTodoData } from "../../services/api/mutation";
import AnimeList from "../../components/ui/AnimeList";
import Carousel from "../../components/layout/carousel";
import Banner from "../../components/ui/Banner/index.jsx";
import Card from "../../components/layout/Card/index.jsx";
import TopAnime from "../../components/ui/TopAnime/index.jsx";
function HomePage() {
  const topAnime = useQuery({
    queryFn: () => getRecentAnimeRecommendations(),
    queryKey: ["recent anime"],
  });
  // console.log(recentAnimeRecommendations?.data?.data?.data);
  // if (recentAnimeRecommendations.isLoading) return <h1>Loading</h1>;

  return (
    <div>
      <Banner />
      <div className="sm:container mx-auto">
        <h2 className="text-center">Top 10 Anime</h2>
        <TopAnime topAnimes={topAnime?.data?.data} />
      </div>

      {/* <Carousel items={recentAnimeRecommendations?.data} /> */}
      {/* {recentAnimeRecommendations?.data?.data?.data.length !== 0 ? (
        <div class="flex flex-row overflow-y-hidden overflow-x-scroll gap-2 items-stretch">
          {recentAnimeRecommendations.data.data.data.map((recentAnime) => (
            <AnimeList anime={recentAnime} />
          ))}
        </div>
      ) : (
        <>No Recent Recommnedations</>
      )} */}
    </div>
  );
}

export default HomePage;
