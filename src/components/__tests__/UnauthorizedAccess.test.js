import UnauthorizedAccess from "../UnauthorizedAccess";
import {render, screen} from "@testing-library/react";

test("should render unauthorized access page", () => {
    //render the component
    render(<UnauthorizedAccess />);

    //query the dom element
    const unauthorizedText = screen.getByText(
        "You are not authorized to view this page. Please login to continue."
    );

    //assertion
    expect(unauthorizedText).toBeInTheDocument();
});
