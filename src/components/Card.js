import React from 'react';

const Card = (props) => {
    const { country } = props; // const country = props.country
    console.log(country)
    return (
        <div>
            <li className="card">
                <img src={country.flag} alt="flag"></img>
                <div className="data-container">
                    <ul>
                        <li>{country.name}</li>
                        <li>{country.capital}</li>
                        <li>{country.region}</li>
                        <li>Pop. {country.population}</li>
                    </ul>
                </div>
            </li>
        </div>
    );
};

export default Card;