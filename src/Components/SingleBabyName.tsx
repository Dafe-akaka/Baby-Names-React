
import { BabyNames,  } from '../utils/Interfaces'


export default function SingleBabyName({id,name,sex}: BabyNames): JSX.Element {
    return (
        <div className= {sex === "f" ? "card girl": " card boy"} key = {id} >
            
            <p>{name}</p>  
        </div>
    )
}
