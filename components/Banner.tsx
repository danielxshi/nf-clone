import React, { useEffect, useState } from 'react'
import { Movie } from "../typings"
import Image from 'next/image'
import { baseUrl } from '@/constants/movie'
import { FaPlay } from "react-icons/fa"
import { InformationCircleIcon } from '@heroicons/react/24/solid'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '@/atoms/modalAtom'

interface Props {
    horrorMovies: Movie[]
}

function Banner({ horrorMovies }: Props) {
    const [movie, setMovie] = useState<Movie | null>(null)
    const [showModal, setShowModal] = useRecoilState(modalState)
    const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
    useEffect(() => {
        setMovie(
            horrorMovies[Math.floor(Math.random() * horrorMovies.length)]
        )
    }, [horrorMovies])
    // console.log(movie)
    // const url = `${baseUrl}${movie?.backdrop_path || movie?.poster_path}`;

    // /* Console LOGGING */
    // console.log(`Getting image from ${url}`);
    return (
        <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
            <div className='absolute -z-10 top-0 left-0 h-[95vh] w-full'>
                <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} fill style={{ objectFit: "cover" }} alt={"random movie"} />
            </div>
            <h1 className="text-2xl lg:text-7xl md:text-4xl font-bold">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <p className='text-shadow-md max-w-xs text-xs md:max-w-lg lg:max-w-2xl lg:text-2xl'>{movie?.overview}</p>

            <div className='flex space-x-3'>
                <button className="bannerButton bg-white text-black"><FaPlay className="text-black md:h-7 md:w-7" /> Play</button>
                <button
                    onClick={() => {
                        setCurrentMovie(movie)
                        setShowModal(true)
                    }}
                    className="bannerButton bg-[gray]/70">More Info <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" /></button>
            </div>
        </div>
    )
}

export default Banner