
import {request} from '../utils/axios'


export const register = async (values) =>{
    try{
        const res = await request.post('/users', values)
        console.log('i got here', res)
        return res?.data
    }catch(e){
        throw e
    }
}
export const login = async (values) =>{
    try{
        const res = await request.post('/users/login', values)
        return res?.data
    }catch(e){
        throw e
    }
}

export const logout = async()=>{
    try{
        const res = await request.post('/auth/logout')
        return res?.data
    }catch(e){
        throw e
    }
}
export const profile = async ()=>{
    try{
        const res = await request.get('/users/me')
        return res?.data
    }catch(e){
        throw e
    }
}

export const updateProfile = async(values)=>{
    try{
        const res = await request.patch('/auth/me/edit', values)
        return res?.data
    }catch(e){
        throw e
    }
}