import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling, faUser } from '@fortawesome/free-solid-svg-icons'

const Header = ({openModal}) => {
    return(
        <>
        <header style={{height:'7vh',borderBottom: '1px solid green', backgroundColor: 'rgba(85, 168, 33, 0.8)', display: 'flex'}}>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',justifyContent: 'end', gap: '1rem', width: '62vw'}}>
            <h1 style={{textShadow: '-2px -1px 10px rgba(0,0,0,0.68)',fontFamily: 'mountain',fontSize: '2rem', color: 'white'}}>Home'N'Jungle</h1>
            <FontAwesomeIcon icon={faSeedling} style={{filter: 'drop-shadow(-2px -1px 10px rgba(0,0,0,0.68))',color: "white",width: '3rem', height:' 2rem'}} />
            </div>
            <div style={{width: '38vw', display: 'flex', justifyContent:' end',alignItems: 'center'}}>
                <button onClick={openModal} style={{marginRight: '2rem', border: '1px solid white', padding: '0.5rem', borderRadius: '0.5rem', backgroundColor: 'white', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'}}><FontAwesomeIcon style={{color: 'rgba(85, 168, 33, 0.8)'}} icon={faUser} /></button>
            </div>
        </header>
        </>
    )
}
export default Header;