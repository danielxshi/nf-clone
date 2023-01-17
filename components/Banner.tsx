import React, { useEffect, useState } from 'react'
import { Movie } from '@/typings'
import Image from 'next/image'
import { baseUrl } from '@/constants/movie'

interface Props {
    netflixOriginals: Movie[]
}

function Banner({ netflixOriginals }: Props) {
    const [movie, setMovie] = useState<Movie | null>(null)
    useEffect(() => {
        setMovie(
            netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
        )
    }, [netflixOriginals])
    console.log(movie)
    return (
        <div>
            <div className='absolute top-0 left-0 h-[95vh] w-screen'>
                <Image object-fit='cover' alt={"random movie" + movie} fill src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} />
            </div>
        </div>
    )
}

export default Banner