import React from "react";
import './menuWindow.css'

const MenuWindow = ({state, onChange, onTransportAviation, onLongRangeAviation, onOtherAviation, onCivilAviation}) => {
    return (
        <div className="plane_menu_container">


            <div className="plane_menu">
                <div className="plane_menu_block" onClick={() => onTransportAviation(!state)}>
                    <img src="images/il76.png" alt="plane"  className='plane_img'/>
                    <h1>Военно-транспортная авиация</h1>
                </div>

                <div className="plane_menu_block" onClick={() => onLongRangeAviation(!state)}>
                    <img
                        src="images/typolev.png"
                        alt="plane"
                        className='plane_img'/>
                    <h1 className="h1_left">Дальняя авиация</h1>
                </div>
            </div>

            <img src="aerodrom_menu.png"
                 alt="aerodrom"
                 className='plane_menu_aerodrom'
                 onClick={() => onChange(!state)}/>

            <div className="plane_menu">
                <div className="plane_menu_block" onClick={() => onCivilAviation(!state)}>
                    <img
                        src="images/boeing.png"
                        alt="plane"

                        className='plane_img'/>
                    <h1 className="h1_right">Гражданская авиация</h1>
                </div>
                <div className="plane_menu_block" onClick={() => onOtherAviation(!state)}>
                    <img
                        src="images/be-200.png"
                        alt="plane"
                        className='plane_img'/>
                    <h1 className="h1_right">Другие ведомства</h1>
                </div>


            </div>

        </div>
    )
}

export default MenuWindow