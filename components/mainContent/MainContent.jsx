import { useState, useEffect } from "react";
import CardItem from "./CardItem";

const MainContent = () => {
    const [videos, setVideos] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const imageBasePath = "https://image.tmdb.org/t/p/w500";

    useEffect(() => {
        fetch(
            "https://api.themoviedb.org/3/movie/top_rated?api_key=a9dace60c274e6c58e72eba4af99e6a8&language=en-US&page=1"
        )
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setVideos(res.results);
                setPage(res.page);
                setTotalPages(res.total_pages);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <ul className="md:ml-20 dark:bg-darkModeMain grid gap-2 grid-cols-auto15rem p-4 overflow-y-scroll h-[calc(100vh-136px)] scrollbar-thin scrollbar-thumb-gray-500">
            {videos.map((video) => (
                <CardItem video={video} key={video.id} />
            ))}
        </ul>
    );
};

export default MainContent;
