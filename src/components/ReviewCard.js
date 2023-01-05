import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const ReviewCard = ({ data }) => {
    let avatar_path = '';
    // console.log(data)

    // const {loading} = useSelector(state => state.movieDetail)

    // useEffect(() => {
    //     if (data !== null) {
    //         console.log('not null')
    //         if (!loading && data.author_details.avatar_path.includes('https')) {
    //             console.log('it has https')
    //         }
    //     }
    // })

    return (
        <div className='review-card'>
            {/* {data !== null
            ? (data.author_details.avatar_path !== null
                ? (data.author_details.avatar_path.includes("https")
                    ? avatar_path = data.author_details.avatar_path.slice(32)
                    : avatar_path = data.author_details.avatar_path)
                : avatar_path = '/blEC280vq31MVaDcsWBXuGOsYnB.jpg'
              )
                : ''
            } */}
            <div className='review-card-top'>
                <div className='review-card-top-wrap'>
                    <div className='review-top-sub'>
                        <div className='review-author-img'>
                            <FontAwesomeIcon icon={faUser} style={{ width: '100%', height: '100%', color: 'darkgray', paddingTop: '10px' }} />
                        </div>
                        <div className='review-author-name'>{data.author}</div>

                    </div>
                    <div className='review-rating'>{data.author_details.rating} {'/'} 10</div>
                </div>

                <div className='review-date'>{data.updated_at.slice(0, 10)}</div>
            </div>
            <div className='review-content'>{data.content}</div>
        </div>
    )
}

export default ReviewCard