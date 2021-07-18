import { BabyNamesProp } from "./Interfaces"



export const SortBabyNames = ( BabyNamesProp: BabyNamesProp[]) : BabyNamesProp [] => {
    
    return ( BabyNamesProp.sort((a,b) =>  a.name.localeCompare(b.name))
    )
  
    
}
