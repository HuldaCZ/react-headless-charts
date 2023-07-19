import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { BarChartPage } from './Pages';

const router = createBrowserRouter([
    {
        path: '/',
        element: <BarChartPage />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
