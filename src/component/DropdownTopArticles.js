import React, { useState, useEffect } from 'react';
import { FormControl, MenuItem, Select, InputLabel, Typography } from '@mui/material';

function DropdownTopArticles() {
    const [category, setCategory] = useState('general');
    const [country, setCountry] = useState('uk');

    let url = 'https://newsapi.org/v2/top-headlines?' +
        `country=${country}&` +
        `category=${category}&` +
        'apiKey=644c0248558246f5929da6bafb4ba056';

    // useEffect(() => {
    //     fetch(url)
    //         .then((response) => {
    //             return response.json()
    //         })
    //         .then((result) => {
    //             setArticles(result.articles)
    //         })

    // }, []);

    const handleChangeCategory = (event) => {
        console.log('changed');
        setCategory(event.target.value);

        console.log(event)
    }

    const handleChangeCountry = (event) => {
        console.log('changed');
        setCountry(event.target.value);

        console.log(event)
    }

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center'
        }}>
           
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="select-category-input-label">News Category</InputLabel>
                <Select
                    labelId="select-category-label"
                    id="select-category"
                    value={category}
                    label="Category"
                    onChange={handleChangeCategory}
                >
                    <MenuItem value='general'>General</MenuItem>
                    <MenuItem value='technology'>Technology</MenuItem>
                    <MenuItem value='business' >Business</MenuItem>
                    <MenuItem value='entertainment'>Entertainment</MenuItem>
                    <MenuItem value='health'>Health</MenuItem>
                    <MenuItem value='sports'>Sports</MenuItem>
                </Select>
            </FormControl>
           
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="select-country-input-label">News Region</InputLabel>
                <Select
                    labelId="select-country-label"
                    id="select-country"
                    value={country}
                    label="country"
                    onChange={handleChangeCountry}
                >
                    <MenuItem value='uk'>United Kingdom</MenuItem>
                    <MenuItem value='pl'>Poland</MenuItem>

                </Select>
            </FormControl>

        </div >
    )
}

export default DropdownTopArticles;
