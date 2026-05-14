import RestaurantContainer from "../RestaurantContainer";
import { render } from "@testing-library/react";
import MockData from "../../utils/mockData";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json:() => {
            return Promise.resolve(<MockData></MockData>);
        }
    })
})

describe("should load Restaurant Container Component", () => {
    it("should load Restaurant Container", () => {
   //render
   render(<RestaurantContainer />)
});
});