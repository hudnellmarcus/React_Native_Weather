import React, {useState} from "react";
import axios from "axios";

import { SearchData } from "../models/SearchData";

export const getSearchResults = async (city: string): Promise<SearchData[]> => {
    const apiKey = '89e9d9cf56fa4af2a1e174847230210'
    const searchUrl = `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${city}`

    const response = await axios.get(searchUrl)
    const data: SearchData[]  = response.data

    //console.log(searchUrl)
    //console.log(data)
    return(data)
}