import React, { useState } from 'react';
import { FormControl, MenuItem, Select, InputLabel } from '@mui/material';

function DropdownTopArticles({ url, setUrl, changeTopArticles }) {
    const [category, setCategory] = useState('general');
    const [country, setCountry] = useState('gb');


    const handleChangeCategory = (event) => {
        setCategory(event.target.value);
        let urlCopy = url
        urlCopy.category = `category=${event.target.value}&`
        changeTopArticles(urlCopy)
        setUrl(urlCopy)

    }

    const handleChangeCountry = (event) => {
        setCountry(event.target.value);
        let urlCopy = url;
        urlCopy.country = `country=${event.target.value}&`
        changeTopArticles(urlCopy)
        setUrl(urlCopy)

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
                    <MenuItem value='gb'>Great Britain</MenuItem>
                    <MenuItem value='pl'>Poland</MenuItem>

                </Select>
            </FormControl>

        </div >
    )
}

export default DropdownTopArticles;
