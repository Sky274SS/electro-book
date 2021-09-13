import StartWindow from "./pages/StartWindow";
import MenuWindow from "./pages/MenuWindow";
import AboutUs from "./pages/AboutUs";
import './App.css';
import React, {useState} from "react";
import List from "./pages/List";
import config from  "./pages/dataBase.json"

function App() {
    const [state, setState] = useState({
        isStartWindow: true,
        isMenuWindow: false,
        isAboutUsWindow:false,
        isTransportAviation:false,
        isLongRangeAviation:false,
        isOtherAviation:false,
        isCivilAviation:false,
        isInfoPage:false,
    })

    return (
        <div className="App">
            {state.isStartWindow && <StartWindow
                state={state.isStartWindow}
                onChange={(value) => setState({...state, isStartWindow: value,isMenuWindow:!value})}
                onAbout={(value) => setState({...state, isStartWindow: value,isAboutUsWindow:!value})}
            />}
            {state.isMenuWindow && <MenuWindow
                state={state.isMenuWindow}
                onChange={(value) => setState({...state, isMenuWindow: value,isStartWindow:!value})}
                onTransportAviation={(value)=>setState({...state,isMenuWindow:value,isTransportAviation:!value})}
                onLongRangeAviation={(value)=>setState({...state,isMenuWindow:value,isLongRangeAviation:!value})}
                onOtherAviation={(value)=>setState({...state,isMenuWindow:value,isOtherAviation:!value})}
                onCivilAviation={(value)=>setState({...state,isMenuWindow:value,isCivilAviation:!value})}

            />}
            {state.isAboutUsWindow && <AboutUs
                state={state.isAboutUsWindow}
                onChange={(value) => setState({...state, isAboutUsWindow: value,isStartWindow:!value})}
            />}
            {state.isTransportAviation&&<List
                data={config[0]}
                state={state.isTransportAviation}
                onGoBack={(value) => setState({...state, isTransportAviation: value,isMenuWindow:!value})}
            />}
            {state.isLongRangeAviation&&<List
                data={config[1]}
                state={state.isLongRangeAviation}
                onGoBack={(value) => setState({...state, isLongRangeAviation: value,isMenuWindow:!value})}
            />}
            {state.isOtherAviation&&<List
                data={config[2]}
                state={state.isOtherAviation}
                onGoBack={(value) => setState({...state, isOtherAviation: value,isMenuWindow:!value})}
            />}
            {state.isCivilAviation&&<List
                data={config[3]}
                state={state.isCivilAviation}
                onGoBack={(value) => setState({...state, isCivilAviation: value,isMenuWindow:!value})}
            />}


        </div>
    );
}

export default App;
