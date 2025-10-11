import { createBrowserRouter, RouterContextProvider } from 'react-router';

import { HomeLayoutPage_67, HomePage_67, BlogStaticPage_67, BlogLocalJsonPage_67 } from './pages';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayoutPage_67 />,
        children: [
            {
                index: true,
                element: <HomePage_67 />,
            },
            {
                path: 'static_67',
                element: <BlogStaticPage_67 />,
            },
            {
                path: 'localjson_67',
                element: <BlogLocalJsonPage_67 />,
            },
        ],
    },
]);

const App_67 = () => {
    return <RouterProvider router={router} />;
};

export default App_67
