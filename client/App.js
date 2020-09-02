import React from "react";
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
    console.log("app load Data");
}

export default {
    component: App,
    loadData
};