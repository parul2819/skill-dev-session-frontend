import ReactDOM from "react-dom/client"
import {Provider} from "react-redux";
import {RouterProvider} from "react-router";
import "./index.css";
import appStore from "./utils/appStore";
import appRouter from "./routes/AppRouter";


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <Provider store={appStore}>
        <RouterProvider router={appRouter} />
    </Provider>
);
