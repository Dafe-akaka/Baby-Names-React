import React from 'react'
import { BabyNameProps } from '../utils/Interfaces'


export default function SingleBabyName({id,name}: BabyNameProps): JSX.Element {
    return (
        <div key = {id} >
            
            <p>{name}</p>  
        </div>
    )
}
