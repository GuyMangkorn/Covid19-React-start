import React from 'react';
import logo from './logo.svg';
import './App.css';
import  CountryList  from './components/CountryList/CountryList';
import SearchBox from './components/SearchBox/SearchBox';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
     countries: [],
     stats:[],
     seacrhField:''
    }
  }
  async componentDidMount(){
     const resp = await fetch('https://api.covid19api.com/countries')
     const countries = await resp.json()
     this.setState({countries})
     this.state.countries.forEach(async country => {
       const resp = await fetch(`https://coronavirus-19-api.herokuapp.com/countries/${country.Country}`)
       const data = await resp.json()
       this.setState(prevState =>(
         {stats:prevState.stats.concat({...data , ISO2 : country.ISO2})}
       ))
     })
  }
  handleChange = (e) =>{
    this.setState({seacrhField:e.target.value})
  }
  render(){ 
    const {stats,seacrhField} = this.state
    const filteredCountries = stats.filter(country =>(
      country.country.toLowerCase().includes(seacrhField.toLowerCase())
    ))
    return (
        <div className="App">
          <h1 style={{color:"black"}}>Covid Stats</h1>
          <SearchBox placeholder="Enter country name ..." handleChange={this.handleChange}/><hr></hr>
          <CountryList  stats = {filteredCountries}  />
        </div>
    )
  }
}

export default App;
