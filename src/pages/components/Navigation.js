import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navigation = () => {
    const navigate = useNavigate('');
    return (
        <div className='nav'>
            <div className='nav-wrap'>
                <Link to='/'>
                    <img
                        className='nav-logo'
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
                        onClick={() => navigate('/')} />
                </Link>
                <Link to='/'>HOME</Link>
                <Link to='/movies'>MOVIES</Link>
            </div>
        </div>
    )
}

export default Navigation