import React, { useEffect } from "react";
import { renderRoutes } from 'react-router-config';
const App = props => {
    const { route } = props;

    return (
        <div>
            <h1>App Component</h1>
            {renderRoutes(route.routes)}
        </div>
    );
}

const loadData = () => {
    return new Promise((resolve, reject) => {
        resolve(1);
    })
}

export default {
    component: App,
    loadData
};