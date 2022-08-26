type BaseType = {
    un: undefined;
    nullProp: null;
    nullUnProp: null | undefined;
    
    nev: never;
    num: number;
    str: string;
    unStr: string | undefined;
}


type FilterByType<Target extends object, FilterType> = {
    [Key in keyof Target]: 
        Target[Key] extends undefined | null | never ? never // escape properties of undefined or null or never
        : Target[Key] extends FilterType | undefined | null ? Key // check if current property include the FilterType
        : never
}[keyof Target];


type test = FilterByType<BaseType, string>
// type test = "str" | "unStr"
