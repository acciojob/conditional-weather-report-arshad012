
import React from "react";
import './../styles/App.css';

function WeatherDisplay(props) {
    const {temperature, conditions} = props;

    return temperature ? <div style={{color: temperature > 20 ? 'red' : 'blue'}}>
        <p>Temperature is {temperature}</p>
        <p>Condition is {conditions}</p>
    </div> : <></>
}

const App = () => {
  const [weatherState, setWeatherState] = useState({ temperature: 25, conditions: "Sunny" });
    
    useEffect(() => {
        WeatherDisplay(weatherState);
    }, [])
    

    return <>
        <WeatherDisplay temperature={weatherState.temperature} conditions={weatherState.conditions} />
    </>
}

export default App
