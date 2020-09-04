import React, { useEffect } from "react";
import { renderRoutes } from 'react-router-config';

import NavBar from "./components/NavBar";

const App = props => {
    const { route } = props;

    return (
        <>
            <NavBar />
            {renderRoutes(route.routes)}
        </>
    );
}

// App.loadData = () => {
//     return new Promise((resolve, reject) => {
//         resolve(1);
//     })
// }

export default App;