import { lazy } from "react"
import WithLayout from '../layouts/LandingPageLayout';
import WithDashboardLayout from "../layouts/WithDashboardLayout";


 const Home = lazy(()=> import ('../pages/Home/HomePage'));
const Login = lazy(()=> import ('../pages/Login'));
const Signup = lazy(()=> import('../pages/Signup'));
const Contact = lazy(()=> import ('../pages/ContactUs'))
const About = lazy(()=> import('../pages/About'));
const DashboardHome = lazy(()=> import('../pages/DashboardHome'));

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
   },
   {
       path:'/contact',
       component: WithLayout(Contact),
       protected:false,
       exact:true 
   },
   {
       path:'/about',
       component: WithLayout(About),
       protected:false,
       exact:true 
   },
   {
    path:'/dashboard',
    component: WithDashboardLayout(DashboardHome),
    protected:true,
    exact:true 
},
]

export default routes