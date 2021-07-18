import React from 'react'
import { SingleBabyNameProps } from '../utils/Interfaces'


export default function SingleBabyName({id,name}: SingleBabyNameProps): JSX.Element {
    return (
        <div key = {id} >
            
            <p>{name}</p>  
        </div>
    )
}
