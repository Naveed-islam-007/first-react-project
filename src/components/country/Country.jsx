import React, { useState } from 'react';
import './Country.css';
const Country = ({country,handleVisitedCountries}) => {

    
   const [visited,setVisited]=useState(false);

    const handle=()=>{
       if(visited){
        setVisited(false)
        handleVisitedCountries();
       }
       else{
        setVisited(true);
        handleVisitedCountries();
       }
    }


    return (
      <>
      <div className={`country ${visited ? 'country-visited': 'country'}`}>
        <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h1>Name: {country.cca3.cca3}</h1>
      <p >{country.area.area} {country.area.area >3000 ? "Big Country":"Small Country"}</p>
     
     <button onClick={handle}>
        {visited ? 'Visited':'Not Visited'}
     </button>
      </div>
      
      </>
    );
};

export default Country;