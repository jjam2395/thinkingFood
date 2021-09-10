export interface Recipe {
    id:             number;
    name:           string;
    description:    string;
    labels:         string[];
    cookingTime?:   number;
    difficult?:     string;
    imgRoute?:      string;
    macros?:        Macro;
    supplies?:      Supplie[];
    portions?:      number;        

}

export interface Macro {
    calories:   number;
    fats:       number;
    proteins :  number;
    carbs:      number;      
}

export interface Supplie{
    quantity:   number;
    supplie:    string;
    unit?:       string;
}