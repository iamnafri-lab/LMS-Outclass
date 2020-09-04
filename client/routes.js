import loadable from '@loadable/component'

import App from "./App";

const Home = loadable(() => import("./pages/Home"), { ssr: true })
const About = loadable(() => import("./pages/About"), { ssr: true })
const NotFound = loadable(() => import("./pages/NotFound"), { ssr: true })


export default [
    {
        component: App,
        routes: [
            {
                path: '/about',
                component: About,
            },
            {
                path: '/',
                exact: true,
                component: Home
            },
            {
                component: NotFound
            }
        ]
    }
];

