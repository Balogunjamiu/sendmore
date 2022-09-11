import { lazy } from "react"
import WithLayout from '../components/LandingPage/Main';
//import HomePage from "";
 const Home = lazy(()=> import ('../pages/Home/HomePage'));
const Login = lazy(()=> import ('../pages/Login'));
const Signup = lazy(()=> import('../pages/Signup'));
const Contact = lazy(()=> import ('../pages/ContactUs'))
const About = lazy(()=> import('../pages/About'));


const routes = [
   {
       path:'/',
       component: WithLayout(Home),
       protected:true,
       exact:true 
   },
   {
       path:'/login',
       component: WithLayout(Login),
       protected:true,
       exact:true 
   },
   {
       path:'/signup',
       component: WithLayout(Signup),
       protected:true,
       exact:true 
   },
   {
       path:'/contact',
       component: WithLayout(Contact),
       protected:true,
       exact:true 
   },
   {
       path:'/about',
       component: WithLayout(About),
       protected:true,
       exact:true 
   }
]

export default routes