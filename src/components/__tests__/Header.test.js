import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import Header from "@shared/Header";
import { render, screen } from "@testing-library/react";
import appStore from "@utils/appStore";

it("should render Header Component with logo", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // query the dom element
    const logo = screen.getByRole("img", { name: "app logo" });

    //assestion
    expect(logo).toBeInTheDocument();
});

it("should render Header component with menu items", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const menuItem = screen.getByText("Home");

    // assertion
    expect(menuItem.toBeInTheDocument)
})
