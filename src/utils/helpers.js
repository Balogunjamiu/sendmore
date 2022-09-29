

export const getToken =()=>
localStorage.getItem('sendmore:user:token')

export const setAccessToken =(token)=>{
    localStorage.setItem('sendmore:user:token',token)
}

export const clearToken = ()=>{
    localStorage.removeItem('sendmore:user:token')
}
export const setLocationHistory = (location) => {
    sessionStorage.setItem("cway:user:redirect:location", JSON.stringify(location));
};