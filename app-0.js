import React from "react";
import ReactDOM from "react-dom/client"

// const heading = React.createElement("h1", {}, "Jai Siya Ram !! Jai Hanuman !!")

const headingJSX = <h1>Training App from JSX!!!</h1>

const HeaderComponent = () => {
    return("This is arrow function component returning simple text.")
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeaderComponent />)