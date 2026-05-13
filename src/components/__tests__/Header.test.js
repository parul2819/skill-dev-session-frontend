import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import Header from "../Header";
import {render, screen} from "@testing-library/react";
import appStore from "../../utils/appStore";

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
})
