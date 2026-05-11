import RestaurantCard from "./RestaurantCard";
import useRestaurantList from "../utils/useRestaurantList";
import {useEffect} from "react";

const RestaurantContainer = () => {

    const { restaurantList, isLoading, error } = useRestaurantList();

     useEffect(() => {
        let count = 0;
        const interval = setInterval(() => {
            count++
            console.log("set interval", count);
    }, 3000)

         const timeoutID = setTimeout(() => {
             console.log("setTimeout after 10 ms")
         }, 10000)
         return () => {
            clearInterval(interval)
             clearTimeout(timeoutID)
         }
    }, []);

    if (isLoading) {
        return <div className="restaurant-container p-4 flex flex-wrap relative top-[80px]">Loading restaurants...</div>;
    }

    if (error) {
        return <div className="restaurant-container p-4 flex flex-wrap relative top-[80px]">Unable to load restaurants: {error}</div>;
    }

  return (
    <div className="restaurant-container p-4 flex flex-wrap relative top-[80px]">
      {
        restaurantList.map((restaurantData) => (
        <RestaurantCard
        key={restaurantData.restaurant_id}
        restaurantData={restaurantData}
        className= "w-12/12 p-2.5 sm:w-6/12 md:w-4/12 lg:w-3/12"
        />
        ))
      }
    </div>
  )
}

export default RestaurantContainer;
