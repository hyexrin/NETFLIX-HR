import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navigation = () => {
    const navigate = useNavigate('');
    return (
        <div className='nav'>
            <div className='nav-wrap'>
                <Link to='/'>
                    <div className='nav-logo' />
                </Link>
                <Link to='/'>HOME</Link>
                <Link to='/movies'>MOVIES</Link>
            </div>
        </div>
    )
}

export default Navigation