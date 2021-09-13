import React from "react"
import './startWindow.css'

const StartWindow = ({state, onChange, onAbout}) => {


    return (
        <div>
            <img src="aerodrom.png" alt="aerodrom" className='aerodrom'/>
            <img src="plane.png" alt="plane" title='get start?' className='plane preliminary'
                 onClick={() => onChange(!state)}/>
            <img src="plane.png" alt="plane" title='get start?' className='plane executive'
                 onClick={() => onChange(!state)}/>
            <div className='header' onClick={()=>onAbout(!state)}> Безопасность полетов</div>
        </div>
    )
}

export default StartWindow