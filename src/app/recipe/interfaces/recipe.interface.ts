export interface Recipe {
    id:             number;
    name:           string;
    description:    string;
    labels:         string[];
    cookingTime?:   string;
    difficult?:     string;
    imgRoute?:      string;
}