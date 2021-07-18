import { BabyNames } from "./Interfaces"



export const SortBabyNames = ( BabyNamesProp: BabyNames[]) : BabyNames [] => {
    
    return ( BabyNamesProp.sort((a,b) =>  a.name.localeCompare(b.name))
    )
  
    
}
