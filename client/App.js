import React, { useEffect } from "react";
import { renderRoutes } from 'react-router-config';
const App = props => {
    const { route } = props;

    return (
        <>
            {renderRoutes(route.routes)}
        </>
    );
}

App.loadData = () => {
    return new Promise((resolve, reject) => {
        resolve(1);
    })
}

export default App;