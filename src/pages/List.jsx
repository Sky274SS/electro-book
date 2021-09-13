import React,{useState} from 'react'
import InfoPage from "./InfoPage";
import './list.css'

const List = ({data,state,onGoBack}) => {

    const [isInfoPage, setIsInfoPage] = useState(false)
    const [currentElement,setCurrentElement]=useState(0)
    console.log(data)
    return (

        <div className='list'>
            {!isInfoPage&&<div><div className="title">{data.titleName}</div>
                <div className='container'>
            {data.image.map((element, index) => {
                return (
                <div key={index}>
                <img src={element} alt="backgroundImage" className="list_image"
                     onClick={()=>{
                         setIsInfoPage(true)
                         setCurrentElement(index)
                     }}/>
                <h1 className='list_image_info'>{data.info[index]}</h1>
                </div>
                )
            })}
                </div>
                <button className="button" onClick={() => onGoBack(!state)}>Назад</button>
            </div>}
            {isInfoPage&&<InfoPage
                title={data.content[currentElement].title}
                description={data.content[currentElement].description}
                conditions={data.content[currentElement].conditions}
                circumstances={data.content[currentElement].circumstances}
                reasons={data.content[currentElement].reasons}
                onGoBack={() => setIsInfoPage(false)}
                video={data.content[currentElement].video}
                image={data.image[currentElement]}
                actionName={data.content[currentElement].actionName}
                actions={data.content[currentElement].actions}
            />

            }



        </div>
    )
}

export default List