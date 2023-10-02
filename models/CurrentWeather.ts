import { Condition } from "./Condition";

export interface CurrentWeather {
    temp_c: number;
    temp_f: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    condition: Condition; 
};