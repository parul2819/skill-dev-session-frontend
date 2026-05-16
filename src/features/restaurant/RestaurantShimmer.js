const RestaurantShimmer = () => {
    const cardCount = Math.ceil(window.innerWidth / 300) * 2;

    return (
        <div className="p-4 flex flex-wrap gap-4">
            {Array(cardCount).fill("").map((_, index) => (
                <div
                    key={index}
                    className="w-[265px] h-[320px] bg-gray-200 animate-pulse rounded-md"
                />
            ))}
        </div>
    );
};

export default RestaurantShimmer;