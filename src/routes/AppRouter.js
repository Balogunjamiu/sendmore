import React, { Suspense } from 'react'
import {Route,Routes, BrowserRouter as Router} from 'react-router-dom'
import routes from './routes'
import Loading from '../components/LandingPage/container/loading/Loading'
export default function AppRouter() {

  return (
    <Suspense fallback={<Loading />}>
        <Router>
            <Routes>
            {
                routes.map((item, i) => item?.protected ?
                <Route 
                key={i}
                // render a protected route here
                element={<item.component />}
                path={item.path}
                exact={item?.exact}
                />
                :
                <Route 
                key={i}
                element={<item.component />}
                path={item.path}
                exact={item.exact}
                />
                )
            }
            </Routes>
        </Router>
    </Suspense>
  )
}
