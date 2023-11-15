import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return(
        <>
        <header style={{height:'7vh',borderBottom: '1px solid green', backgroundColor: 'rgba(85, 168, 33, 0.8)',display: 'flex', flexDirection: 'row', alignItems: 'center',justifyContent: 'center', gap: '1rem'}}>
            <h1 style={{fontFamily: 'mountain',fontSize: '2rem', color: 'white'}}>Home'N'Jungle</h1>
            <FontAwesomeIcon icon={faSeedling} style={{color: "white",width: '3rem', height:' 2rem'}} />
        </header>
        </>
    )
}
export default Header;