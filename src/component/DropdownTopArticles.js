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

                    <MenuItem value='ar'>Argentina</MenuItem>
                    <MenuItem value='at'>Austria</MenuItem>
                    <MenuItem value='au'>Australia</MenuItem>
                    <MenuItem value='be'>Belgium</MenuItem>
                    <MenuItem value='bg'>Bulgaria</MenuItem>
                    <MenuItem value='br'>Brazil</MenuItem>
                    <MenuItem value='ca'>Canada</MenuItem>
                    <MenuItem value='ch'>Switzerland</MenuItem>
                    <MenuItem value='co'>Colombia</MenuItem>
                    <MenuItem value='cu'>Cuba</MenuItem>
                    <MenuItem value='cz'>Czechia</MenuItem>

                    <MenuItem value='de'>Germany</MenuItem>
                    <MenuItem value='eg'>Egypt</MenuItem>
                    <MenuItem value='fr'>France</MenuItem>
                    <MenuItem value='gr'>Greece</MenuItem>
                    <MenuItem value='hk'>Hong Kong</MenuItem>
                    <MenuItem value='hu'>Hungary</MenuItem>
                    <MenuItem value='id'>Indonesia</MenuItem>
                    <MenuItem value='ie'>Ireland</MenuItem>
                    <MenuItem value='il'>Israel</MenuItem>
                    <MenuItem value='in'>India</MenuItem>
                    <MenuItem value='it'>Italy</MenuItem>
                    <MenuItem value='jp'>Japan</MenuItem>
                    <MenuItem value='kr'>South Korea</MenuItem>
                    <MenuItem value='lt'>Lithuania</MenuItem>
                    <MenuItem value='lv'>Latvia</MenuItem>
                    <MenuItem value='ma'>Morocco</MenuItem>
  
                    <MenuItem value='mx'>Mexico</MenuItem>
                    <MenuItem value='my'>Malaysia</MenuItem>
                    <MenuItem value='ng'>Nigeria</MenuItem>
                    <MenuItem value='nl'>Netherlands</MenuItem>
                    <MenuItem value='no'>Norway</MenuItem>
                    <MenuItem value='nz'>New Zealand</MenuItem>
                    <MenuItem value='ph'>Philippines</MenuItem>
                    <MenuItem value='pt'>Portugal</MenuItem>
                    <MenuItem value='ro'>Romania</MenuItem>
                    <MenuItem value='rs'>Serbia</MenuItem>

                    <MenuItem value='se'>Sweden</MenuItem>
                    <MenuItem value='sg'>Singapore</MenuItem>
                    <MenuItem value='si'>Slovenia</MenuItem>
                    <MenuItem value='sk'>Slovakia</MenuItem>
                    <MenuItem value='th'>Thailand</MenuItem>

                    <MenuItem value='tr'>Türkiye</MenuItem>
                    <MenuItem value='tw'>Taiwan</MenuItem>
                    <MenuItem value='ua'>Ukraine</MenuItem>
                    <MenuItem value='us'>United States</MenuItem>
                    <MenuItem value='ve'>Venezuela</MenuItem>
                    <MenuItem value='za'>South Africa</MenuItem>

                </Select>
            </FormControl>
            
        </div >
    )
}
export default DropdownTopArticles;
