import { BabyNames } from "./Interfaces"

export const SearchBarFilter = (searchTerm : string, BabyNames: BabyNames []): BabyNames[] => {
    return (
        BabyNames.filter((baby) => (baby.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
    )
    )}
