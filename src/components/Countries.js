import React, { useState } from 'react';
import axios from "axios";

const Countries = () => {
    const [data, setdata] = useState([])
    axios.get('https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag').then((res) => setdata(res.data));
    return (
        <div>

        </div>
    );
};

export default Countries;