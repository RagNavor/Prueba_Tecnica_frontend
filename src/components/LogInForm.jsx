import { useForm } from "react-hook-form";
import {loginUser} from "../API/users_api";


export function LogInForm(){
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = handleSubmit(async (data)=>{
        try {
            await loginUser(data).then(response => {
                const token  = response.data;
                localStorage.setItem('token', token);
            })
            
            window.location.href = '/dashboard'
            
        } catch (error) {
        }
    }
        )
    return(
        <form onSubmit={onSubmit}>
            <input type="text" 
            placeholder="Username" 
            {...register('username',{required:true})}
            />
            <input type="password" 
            placeholder="Password" 
            {...register('password',{required:true})}
            />

            <button>LogIn</button>
        </form>
    )
}