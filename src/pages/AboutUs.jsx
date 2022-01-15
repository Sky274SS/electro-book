import React from 'react'
import './aboutUs.css'

const AboutUs = ({state, onChange}) => {
    return (
        <div className="about_us">
            <h1>Информация о проекте</h1>
            <img className="about_title_image" src="images/react_electron.png" alt=""/>
            <div className='about_info'> Данное приложение разработано с помощью React-js (библиотека JavaScript
                для создания пользовательских интерфейсов) и Electron (библиотека для создания кроссплатформенных настольных приложений)</div>
            <h1>До встречи в эфире!</h1>
            <button className='about_button' onClick={() => onChange(!state)}>Назад</button>
            {/*export BROWSER=none &&*/}
<div></div>
        </div>
    )
}

export default AboutUs