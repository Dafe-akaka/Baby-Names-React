import {useState} from "react";
import BabyNames from "../Components/BabyNamesData.json";
import { SearchBarFilter } from "../utils/SearchBarFilter";
import { SortBabyNames } from "../utils/SortBabyNames";
import { SearchBar } from "./SearchBar";
import SingleBabyName from "./SingleBabyName";

export function AllBabyNames(): JSX.Element {
    const [babyNameSearchId, setBabyNaemeSearch] = useState("")

  let ascendingNames = []

  babyNameSearchId === "" ? ascendingNames = SortBabyNames(BabyNames) : ascendingNames= SortBabyNames(SearchBarFilter(babyNameSearchId,BabyNames))

   

  return (
    <>
      <div>
        <SearchBar setBabyNameSearch= {setBabyNaemeSearch} babyNameSearchId= {babyNameSearchId} /> 
        {ascendingNames.map((baby) => (
          <SingleBabyName key={baby.id} id={baby.id} name={baby.name} />
        ))}
      </div>
    </>
  );
}
