import Image from "next/image";
import { useState } from "react";
import { IoMdOpen } from "react-icons/io";
import {AiFillStar} from 'react-icons/ai'


const imageBasePath = "https://image.tmdb.org/t/p/w300";
const CardItem = ({ video }) => {
    const [inHover, setInHover] = useState(false);
    if (!video) return <p>Loading...</p>;
    const {
        backdrop_path,
        id,
        original_title,
        poster_path,
        popularity,
        vote_average,
        vote_count,
    } = video;
    return (
        <li className=" h-[400px] ">
            <div
                className="w-full h-[280px] overflow-hidden bg-blue-600 "
                onMouseOver={() => setInHover(true)}
                onMouseOut={() => setInHover(false)}
            >
                <div className="relative">  
                    <Image
                        src={imageBasePath + poster_path}
                        alt="PosterImage"
                        width={300}
                        height={300}
                        layout="responsive"
                        className=""
                    />
                {inHover && (
                    <div className="flex justify-between w-full h-full bg-WithOpacity z-50 top-0  cursor-pointer absolute p-4">
                        <IoMdOpen size={24} className='text-white'/>
                        <div className="flex text-white font-bold">
                            <AiFillStar color="yellow" size={24}/>
                            {vote_average}
                        </div>
                    </div>
                )}
                </div>
            </div>
            <div>
                <div className="flex gap-2 mt-3 ml-4">
                    <div className="w-10 h-10 bg-red-800 rounded-full overflow-hidden">
                        <Image width={100} height={100} alt='backdrop' src={imageBasePath + backdrop_path}/>
                    </div>
                    <div className=" px-2 font-semibold max-w-[20ch] max-h-[50px] overflow-hidden">{original_title}</div>
                </div>
                <p className="px-2 text-gray-800">
                    
                </p>
                
            </div>
        </li>
    );
};

export default CardItem;
