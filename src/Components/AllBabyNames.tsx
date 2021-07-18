import React from "react"
import BabyNames from "../Components/BabyNamesData.json"
import SingleBabyName from "./SingleBabyName"

export function AllBabyNames(): JSX.Element {
    return (
        <> 
        <div>
            {BabyNames.map((baby) => (
           
           <SingleBabyName key = {baby.id} id= {baby.id} name= {baby.name} />
   ))}
   </div>
        

        </>



    )
}