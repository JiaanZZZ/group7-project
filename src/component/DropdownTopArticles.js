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
            <Typography variant="subtitle1" component="div">
                Top
            </Typography>
            <FormControl sx={{ m: 1, minWidth: 150 }}>
                <InputLabel id="select-category-input-label">category</InputLabel>
                <Select
                    labelId="select-category-label"
                    id="select-category"
                    value={category}
                    label="Category"
                    onChange={handleChangeCategory}
                >
                    <MenuItem value='general'>general</MenuItem>
                    <MenuItem value='technology'>technology</MenuItem>
                    <MenuItem value='business' >business</MenuItem>
                    <MenuItem value='entertainment'>entertainment</MenuItem>
                    <MenuItem value='science' >business</MenuItem>
                    <MenuItem value='health'>health</MenuItem>
                    <MenuItem value='sports'>sports</MenuItem>
                </Select>
            </FormControl>
            <Typography variant="subtitle1" component="div">
                articles from
            </Typography>
            <FormControl sx={{ m: 1, minWidth: 150 }}>
                <InputLabel id="select-country-input-label">category</InputLabel>
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
