
import {request} from '../utils/axios'


export const register = async (values) =>{
    try{
        const res = await request.post('/auth/register', values)
        return res?.data
    }catch(e){
        throw e
    }
}
export const login = async (values) =>{
    try{
        const res = await request.post('/auth/login', values)
        return res?.data
    }catch(e){
        throw e
    }
}

export const logout = async(values)=>{
    try{
        const res = await request.post('/auth/logout', values)
        return res?.data
    }catch(e){
        throw e
    }
}
export const profile = async ()=>{
    try{
        const res = await request.post('/auth/me')
        return res?.data
    }catch(e){
        throw e
    }
}

export const updateProfile = async(values)=>{
    try{
        const res = await request.patch('/auth/me/edit')
        return res?.data
    }catch(e){
        throw e
    }
}