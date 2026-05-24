import RestaurantContainer from "@features/restaurant/RestaurantContainer";
import { render } from "@testing-library/react";


describe("should load Restaurant Container component", () => {
    it("should load Restaurant Container", () => {
        // render
        render(<RestaurantContainer />);

        //assertion
    });
})