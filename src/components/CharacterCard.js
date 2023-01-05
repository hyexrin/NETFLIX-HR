import React from 'react'

const CharacterCard = ({ cast }) => {
    return (
        <>
            <div
                className='character-box'
                style={{
                    backgroundImage: "url(" +
                        `https://www.themoviedb.org/t/p/w138_and_h175_face${cast.profile_path}` + ")",
                }}>
                <div className='character-overlay'>
                    <p style={{ color: 'rgb(255, 132, 0)' }}>{cast.character}</p>
                </div>
            </div>

            <div>
                <p style={{marginTop: '10px', fontSize: '12px'}}>{cast.name}</p>
            </div>
        </>
    )
}

export default CharacterCard