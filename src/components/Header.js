import React from 'react';
import '../styling/HeaderDisplay.css'

const Header=(props)=>{
    return <div>
        <header>
            <h1 className='header'>{props.text  || "I am a header and I can be customized"}</h1>
        </header>
    </div>
}
export default Header;