export interface BabyNames{
    name : string
    id : number;
    sex: string
   
}


export interface SearchBarProp {
    setBabyNameSearch(babyNameSearchId: string): void;
    babyNameSearchId: string
}

