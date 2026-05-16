const WithRestaurantCard = (Component) => {
    console.log("WithRestaurantCard Rendered")
    return ({ restaurantData }) => {
        return (
            <>
                {restaurantData?.aggregatedDiscountInfo?.header}
                <Component restaurantData={restaurantData} />
            </>
        );
    };
}

export default WithRestaurantCard;