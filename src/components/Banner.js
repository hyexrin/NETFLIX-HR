import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import YouTube from 'react-youtube';
import Loading from './Loading';

const Banner = ({ movie, video }) => {
    const [modalShow, setModalShow] = useState(false);
    const {loading} = useSelector(state => state.movie)
    
    let trailer = video.data.results.find(item => item.name.includes("Trailer"))
    let key = '';
    if (trailer) {
        key = trailer.key
    } 
    else {
        key = ''
    }
    return loading ? (
        <Loading />
      ) : (
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
                <Button variant='danger' onClick={() => setModalShow(true)}>
                    Watch Trailer</Button>

                <Modal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    // {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Body>
                        <YouTube
                            videoId={key}
                            opts={{
                                width: "100%",
                                playerVars: {
                                    autoplay: 1, //자동재생 O
                                    rel: 0,
                                    modestbranding: 1,
                                },
                            }}
                            //이벤트 리스너 
                            onEnd={(e) => { e.target.stopVideo(0); }}
                        />
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}

export default Banner