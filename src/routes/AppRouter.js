import React, { Suspense } from 'react'
import {Route,Routes, BrowserRouter as Router} from 'react-router-dom'
import routes from './routes'
import Loading from '../components/LandingPage/container/loading/Loading'
import ProtectedRoute from './ProtectedRoute';
import { Toaster } from 'react-hot-toast';
export default function AppRouter() {

  return (
    <Suspense fallback={<Loading />}>
        <Router>
            <Routes>
            {
                routes.map((item, i) => item?.protected ?(
                <Route 
                key={i}
                // render a protected route here
                element={<ProtectedRoute Children={item?.component} />}
                path={item.path}
                exact={item?.exact}
                />
                ):(
                <Route 
                key={i}
                element={<item.component />}
                path={item.path}
                exact={item.exact}
                />
                )
                )}
            </Routes>
            <Toaster
          position="top-center"
          toastOptions={{
            className: '',
            style: {
              margin: '30px',
              minWidth: '370px',
              maxHeight: '40px',
              display: 'inline-flex',
              fontSize: '18px',
              zIndex: 999999,
            },
            duration: 4000,
            error: {
              style: {
                background: '#F55A5A',
                color: 'white',
              },
              iconTheme: {
                primary: 'white',
                secondary: '#F55A5A',              
              },
            },
            success: {
              style: {
                background: 'green',
                color: 'white',
              },
              iconTheme: {
                primary: 'white',
                secondary: 'green',
              }
            }
          }}
        />
        </Router>
    </Suspense>
  )
}
