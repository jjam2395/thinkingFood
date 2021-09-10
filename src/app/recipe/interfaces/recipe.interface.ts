export interface Recipe {
    id:             number;
    name:           string;
    description:    string;
    labels:         string[];
    cookingTime?:   unitValue;
    difficult?:     string;
    imgRoute?:      string;
    macros?:        Macro;
    supplies?:      Supplie[];
    portions?:      number;        

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
    quantity:  unitValue;
    supplie:    string;
}