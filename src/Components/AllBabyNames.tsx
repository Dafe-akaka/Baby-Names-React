import React from "react"
import BabyNames from "../Components/BabyNamesData.json"
import { SortBabyNames } from "../utils/SortBabyNames"
import SingleBabyName from "./SingleBabyName"

export function AllBabyNames(): JSX.Element {
    let ascendingNames = SortBabyNames(BabyNames)
    return (
        <> 
        <div>
            {ascendingNames.map((baby) => (
           
           <SingleBabyName key = {baby.id} id= {baby.id} name= {baby.name} />
   ))}
   </div>
        

        </>



    )
}