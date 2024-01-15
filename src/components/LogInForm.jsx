import { useForm } from "react-hook-form";
import {loginUser} from "../API/users_api";


export function LogInForm({
}){
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = handleSubmit(async (data)=>{
        try {
            
            await loginUser(data).then(response => {
                console.log(response.data)
                const token  = response.data.token;
                console.log(token)
                localStorage.setItem('token', token);
                
            
            })
                if(localStorage.getItem('token')){
                window.location.href = '/Dashboard';
                console.log(localStorage.getItem('token'));
                }
            
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

            <button>Ingresar</button>
        </form>
    )
}