export interface Recipe {
    id:             number;
    name:           string;
    description:    string;
    labels:         string[];
    day?:            string;
    cookingTime?:   unitValue;
    difficult?:     string;
    imgRoute?:      string;
    imgRouteDetalle?:string;
    macros?:        Macro;
    supplies?:      Supplie[];
    originalPortions:number;
    adultPortions:   number;
    childPortions:   number;        
    typemeal?:      string;
    preparation?:   string[];
    flowchartRoute?:string;
    videoRoute?:    string;
}

export interface unitValue {
    unit:       string;
    value:      number;
}

export interface Macro {
    calories:   unitValue;
    fats:       unitValue;
    proteins :  unitValue;
    carbs:      unitValue;      
}

export interface Supplie{
    supplie:    string;
    quantity:  unitValue;
    alternativeQuantity?: unitValue;
}