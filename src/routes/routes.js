 import { lazy } from "react"
 import WithLayout from '../components/LandingPage/Main';
 //import HomePage from "";
  const Home = lazy(()=> import ('../pages/Home/HomePage'));
 const Login = lazy(()=> import ('../pages/Login/index'));
 const Signup = lazy(()=> import('../pages/Signup/index'));

 
const routes = [
    {
        path:'/',
        component: WithLayout(Home),
        protected:false,
        exact:true 
    },
    {
        path:'/login',
        component: WithLayout(Login),
        protected:false,
        exact:true 
    },
    {
        path:'/signup',
        component: WithLayout(Signup),
        protected:false,
        exact:true 
    }
]

export default routes