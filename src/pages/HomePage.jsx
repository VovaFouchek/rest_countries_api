import axios from 'axios';
import { useState, useEffect, useCallback } from "react";

import { List } from "../components/List";
import { Card } from "../components/Card";
import { Controls } from "../components/Controls";
import { ALL_COUNTRIES } from '../config';
import { useNavigate } from 'react-router-dom';

export const HomePage = ({ countries, setCountries }) => {
    const [filtredCountries, setfiltredCountries] = useState(countries);
    let navigate = useNavigate();
    const handleSearch = useCallback((search, region) => {
        let data = [...countries];

        if (region) {
            data = data.filter(c => c.region.includes(region))
        }

        if (search) {
            data = data.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
        }

        setfiltredCountries(data);
    }, [countries])

    useEffect(() => {
        handleSearch();
        // eslint-disable-next-line
        
    }, [countries]);

    useEffect(() => {
        if (!countries.length) axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    }, []);


    return (
        <>
            <Controls onSearch={handleSearch} />
            <List>
                {filtredCountries.map((c) => {
                    const countryInfo = {
                        img: c.flags.png,
                        name: c.name,
                        info: [
                            {
                                title: 'Population',
                                description: c.population.toLocaleString(),
                            },
                            {
                                title: 'Region',
                                description: c.region,
                            },
                            {
                                title: 'Capital',
                                description: c.capital,
                            },
                        ],
                    };
                    return <Card key={c.name} {...countryInfo} onClick={() => navigate(`/country/${c.name}`)} />
                })}

            </List>
        </>
    )
}
