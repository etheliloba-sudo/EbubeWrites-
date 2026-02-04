import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from '@tanstack/react-router';
import './index.css';
import { router } from './router';
import { PageLoader } from './Components/PageLoader';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<PageLoader label="Loading page" />}> 
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
);