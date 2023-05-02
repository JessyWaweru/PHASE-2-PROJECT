import React from 'react'
import {Link}from 'react-router-dom'

function Header(){
    return(
        <header>
            
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                </ul>
            </nav>
            <h1>MARTHA'S PET STORE</h1>
        </header>
    )
}

export default Header