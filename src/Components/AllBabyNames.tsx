import { useState } from "react";
import BabyNames from "../Components/BabyNamesData.json";
import { SearchBarFilter } from "../utils/SearchBarFilter";
import { SortBabyNames } from "../utils/SortBabyNames";
import { SearchBar } from "./SearchBar";
import SingleBabyName from "./SingleBabyName";

export function AllBabyNames(): JSX.Element {
  const [babyNameSearchId, setBabyNameSearch] = useState("");

  let ascendingNames = [];

  babyNameSearchId === ""
    ? (ascendingNames = SortBabyNames(BabyNames))
    : (ascendingNames = SortBabyNames(
        SearchBarFilter(babyNameSearchId, BabyNames)
      ));

  return (
    <>
      <div>
        <SearchBar
          setBabyNameSearch={setBabyNameSearch}
          babyNameSearchId={babyNameSearchId}
        />
        <div className="container">
        {ascendingNames.map((baby) => (
            
          <SingleBabyName key={baby.id} sex = {baby.sex} id={baby.id} name={baby.name} />
        ))}
        
        </div>
      </div>
    </>
  );
}
