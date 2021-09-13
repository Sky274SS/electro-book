import React from 'react'
import './infoPage.css'

const InfoPage = (props)=>{
    console.log(props.title)
    return(
        <div className='info_page_container'>
            <div className='info_page_title'>{props.title}</div>
            <div className="info_page_title_description">{props.description}</div>
            <video src={props.video} controls='controls' className='video' />
            <h1 className="info_page_header">Этап и условия полета:</h1>
            <div className="info_page">{props.conditions}</div>
            <h1 className="info_page_header">Обстоятельства и действия экипажа:</h1>
            <div className="info_page">{props.circumstances}</div>
            <h1 className="info_page_header">Причины:</h1>
            {props.reasons.map((element,index)=>{
                return(
                    <div className="info_page">{element}</div>
                )
            })}
            <h1 className="info_page_header">{props.actionName}</h1>
            <div className='info_page'>{props.actions}</div>
            <button className='button' onClick={()=>{props.onGoBack()}}>Назад</button>
        </div>
    )
}

export default InfoPage