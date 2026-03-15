import { use } from "react";
import Country from "../country/Country";
import './Countries.css'

const Countries = ({ countriesPromise }) => {

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  return (
    <div>
      <h1>Total Countries: {countries.length}</h1>
      <div className="Countries">
         {
              countries.map(country=> <Country country={country}></Country>)
         }
      </div>
    </div>
  )
};

export default Countries;