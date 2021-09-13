import React from 'react'
import './aboutUs.css'

const AboutUs = ({state, onChange}) => {
    return (
        <div className="about_us" onClick={() => onChange(!state)}>
            About Us
        </div>
    )
}

export default AboutUs