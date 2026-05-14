import { useState, useEffect } from "react";
import api from "../../utils/api"
import { RESTAURANT_API_URL } from "../../utils/api";

const useRestaurantList = () => {

    const [restaurantList, setRestaurantList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
    const controller = new AbortController();

    controller.signal.addEventListener("abort", () => {
        console.log(controller.signal.reason);
    });

    fetchRestaurantData(controller.signal);

    return () => controller.abort("Restaurant list request aborted");
}, []);

    const fetchRestaurantData = async (signal) => {
        try {
            const response = await api.get(RESTAURANT_API_URL, { signal });

            // setRestaurantList(response.data.slice(0, 20));
            setRestaurantList(Array.isArray(response.data) ? response.data.slice(0, 20) : response.data.results || []);
        } catch (err) {
            if (err.name === "CanceledError" || err.name === "AbortError") {
            return;
        }
            setError( err.message )
        } finally {
            if (!signal?.aborted) {
                setIsLoading(false);
            }
        }
    }

    console.log("Restaurant List: ", restaurantList);

    return { restaurantList, isLoading, error };
};

export default useRestaurantList;
