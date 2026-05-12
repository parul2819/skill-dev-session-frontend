import { useState, useEffect } from "react";
import { RESTAURANT_API_URL } from "./api";

const useRestaurantList = () => {

    const [restaurantList, setRestaurantList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchRestaurantData();
    }, []);

    const fetchRestaurantData = async () => {
        try {
            const data = await fetch(RESTAURANT_API_URL);
            const jsonData = await data.json();

            setRestaurantList(jsonData.slice(0, 20));
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    console.log("Restaurant List: ", restaurantList);

    return { restaurantList, isLoading, error };
};

export default useRestaurantList;