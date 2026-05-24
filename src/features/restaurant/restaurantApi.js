import api from "@utils/api";
import { RESTAURANTS_API_URL } from "@utils/constants"
import {useState} from "react";

const getRestaurantList = (signal) => {
    return api.get(RESTAURANTS_API_URL, { signal });
}

export { getRestaurantList }