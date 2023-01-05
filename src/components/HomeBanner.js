import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const HomeBanner = ({ movie, video }) => {
    const [modalShow, setModalShow] = useState(false);
    console.log('@Q@#@$@Q#', video)
    return (
        <div
            className="banner"
            style={{
                backgroundImage:
                    "url(" +
                    `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.poster_path}` +
                    ")",
            }}
        >
            <div className="banner-info">
                <h1 className='banner-title'>{movie.title}</h1>
                <p>{movie.tagline}</p>
            </div>
        </div>
    )
}

export default HomeBanner