import { useForm } from "react-hook-form"
import { useState } from "react"; 
import { createUser } from "../API/users_api";



export function SignUpForm(){
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [error, setError] = useState("");
    const onSubmit= handleSubmit(async data=>{
        try {
            await createUser(data)
        } catch (error) {
            if(typeof error.response.data[0] == "string"){ 
                setError(error.response.data);
            }
            else if(typeof error.response.data == "object"){
                setError(error.response.data.email)
            }
        }
        })

    return(
        <form onSubmit={onSubmit}>
           <span>{error}</span>
            <input  
                type="text" 
                placeholder="Nombre" 
                {...register('first_name',{required:true})}
                />
            {errors.first_name && <span>El campo Nombre es requerido</span> }
            <input 
                type="text" 
                placeholder="Apellido"
                {...register('last_name',{required:true})}
                />
                {errors.last_name && <span>El campo Apellido es requerido</span> }
            <input 
                type="email" 
                placeholder="Correo"
                {...register('email',{required:true})}
                />
                {errors.email && <span>El campo Correo es requerido</span> }
            <input type="password" 
                placeholder="Contraseña"
                {...register('password',{required:true})}
                />
                {errors.password && <span>El campo Contraseña es requerido</span> }
            <button>Crear</button>
        </form>
    )
}