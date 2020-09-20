import React from 'react';
import Country from '../Country/Country'
import './countrylist.css';
function CountryList (props){
    return(
        <div className = 'countrylist'>   
               { props.stats.map(stats => <Country  country={stats}/>) }
        </div>
    );
}
export default CountryList;