import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { RootStoreContextProvider } from 'src/contexts';
import { router } from 'src/router';
import 'src/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
       <RootStoreContextProvider>
           <RouterProvider router={router}/>
       </RootStoreContextProvider>
    </React.StrictMode>
);

