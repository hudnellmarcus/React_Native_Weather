import { Condition } from "./Condition";


export interface ForecastData {
    current: {
        date: string;
        maxtemp_c: number;
        maxtemp_f: number;
        mintemp_c: number;
        mintemp_f: number;
        condition: Condition; 
    };
    forecast: {
        forecastday: ForecastDay[]; 
    };
}

interface ForecastDay {
    date: string;
    day: {
        condition: {
            code: number;
            icon: string;
            text: string
        };
        maxtemp_c: number;
        maxtemp_f: number;
        mintemp_c: number;
        mintemp_f: number;
        avghumidity: number;
    }
}