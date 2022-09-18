import Main from "../components/LandingPage/Main"

const WithLayout = (Component) =>{
    return(props)=>{
  
      return (
      <Main>
        <Component {...props} />
        </Main>
        )
    }
  }

export default WithLayout