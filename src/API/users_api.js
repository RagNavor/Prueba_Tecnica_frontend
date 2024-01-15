import axios from 'axios'

const userApi = axios.create({
    baseURL :'http://localhost:8000/users'
})
export const createUser = (user)=> {
    return userApi.post('/',user)
}
export const loginUser = (user)=>{
    return userApi.post('/login',user)
}