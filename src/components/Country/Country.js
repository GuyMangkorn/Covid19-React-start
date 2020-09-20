import React from 'react';
import './country.css';
const Country = (props) => {
    return(
        <div className = 'country'>
             <img src={`https://www.countryflags.io/${props.country.ISO2}/flat/64.png`} alt = {props.country.country}></img>
               <h1>{props.country.country}</h1>
               <div className =  'describe'>
                <p>{`Cases : ${props.country.cases}`}</p>  
                <p>{`Active : ${props.country.active}`}</p>  
                <p>{`TodayCases : ${props.country.todayCases}`}</p>    
                <p>{`Death : ${props.country.deaths}`}</p>  
                </div>  
        </div>
    )
}


export default Country;