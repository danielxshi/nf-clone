import { Movie } from '@/typings'
import Image from 'next/image'

interface Props {
    // When using Firebase
    // movie: Movie | DocumentData
    movie: Movie
}

function Thumbnail({ movie }: Props) {
    console.log(movie)
    const url = `https://image.tmdb.org/t/p/w500/${movie?.backdrop_path || movie?.poster_path}`;

    /* Console LOGGING */
    console.log(`Getting thumbnail image from ${url}`);
    return (
        <div className='relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105'>
            <Image alt="" src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path || movie?.poster_path}`} className="rounded-sm object-cover md:rounded" fill />
        </div>
    )
}

export default Thumbnail