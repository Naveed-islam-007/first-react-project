import { use, useState } from "react";
import Country from "../country/Country";
import './Countries.css'

const Countries = ({ countriesPromise }) => {

  const [visitedcountries,setVisitedCountries]= useState([])

  const handleVisitedCountries =(country)=>{
    const newVisitedCountries=[...visitedcountries,country];
    setVisitedCountries(newVisitedCountries);
  }

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  return (
    <div>
      <h1>Total Countries: {countries.length}</h1>
      <h3>Countries Visited: {visitedcountries.length}</h3>
      <div className="Countries">
         {
              countries.map(country=> <Country country={country}
              handleVisitedCountries={handleVisitedCountries}></Country>)
         }
      </div>
    </div>
  )
};

export default Countries;