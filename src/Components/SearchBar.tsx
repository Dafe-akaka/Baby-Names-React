import React from 'react'
import { SearchBarProp } from '../utils/Interfaces'

export const SearchBar = ({setBabyNameSearch,babyNameSearchId}:SearchBarProp): JSX.Element =>  {
    return (
        <p>
            <input 
             type="text"
             placeholder="Search..."
             value={babyNameSearchId}
             onChange={(event) => { 
               
               setBabyNameSearch(event.target.value)
             }}/>

        </p>
    )
}
