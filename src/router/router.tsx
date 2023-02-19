import { createBrowserRouter } from 'react-router-dom';
import App from 'src/App';
import { NotFoundPage, AboutPage, DashboardPage } from 'src/pages';

export const router = createBrowserRouter([
    {
        element: <App/>,
        children: [
            {
              path: '',
              element: <DashboardPage/>
            },
            {
                path: 'about',
                element: <AboutPage/>
            },
            {
                path: '*',
                element: <NotFoundPage/>
            }
        ]
    },

])
